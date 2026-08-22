export interface CarInstallmentInput {
  carPrice: number;
  downPaymentType: 'percent' | 'amount';
  downPaymentValue: number;
  interestRate: number; // Flat rate % per year
  loanTermMonths: number; // 12 to 84 months
  vatIncluded?: boolean;
}

export interface AmortizationScheduleItem {
  month: number;
  principalPaid: number;
  interestPaid: number;
  vatPaid: number;
  totalMonthly: number;
  remainingBalance: number;
}

export interface DownPaymentScenarioItem {
  percent: number;
  downAmount: number;
  loanPrincipal: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  monthlySavingsVsPrev: number;
  extraDownVsPrev: number;
}

export interface LoanTermScenarioItem {
  termMonths: number;
  termYears: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  monthlyDiffVsLongest: number; // Diff vs 84 months
  extraInterestVsShortest: number; // Diff vs 48 months
}

export interface ReverseBudgetInput {
  monthlyBudget: number; // e.g. 10000 THB/mo
  downPaymentAmount: number; // e.g. 100000 THB
  interestRate: number; // Flat rate % e.g. 2.59%
  loanTermMonths: number; // e.g. 60 or 72 months
}

export interface ReverseBudgetResult {
  monthlyBudget: number;
  downPaymentAmount: number;
  estimatedCarPriceMin: number;
  estimatedCarPriceMax: number;
  estimatedCarPriceMid: number;
  loanPrincipal: number;
  totalInterest: number;
  totalPayment: number;
  downPercent: number;
  carTierRecommendation: string;
}

export interface CarInstallmentResult {
  carPrice: number;
  downPaymentAmount: number;
  downPaymentPercent: number;
  loanPrincipal: number;
  totalInterest: number;
  totalLoanWithInterest: number;
  monthlyPreVat: number;
  monthlyVat: number;
  monthlyPayment: number;
  totalPayment: number;
  effectiveInterestRate: number;
  schedule: AmortizationScheduleItem[];
  downPaymentScenarios: DownPaymentScenarioItem[];
  loanTermScenarios: LoanTermScenarioItem[];
}

export function calculateCarInstallment(input: CarInstallmentInput): CarInstallmentResult {
  const { carPrice, downPaymentType, downPaymentValue, interestRate, loanTermMonths } = input;
  
  const downPaymentAmount = downPaymentType === 'percent' 
    ? (carPrice * downPaymentValue) / 100 
    : downPaymentValue;
  
  const downPaymentPercent = carPrice > 0 ? (downPaymentAmount / carPrice) * 100 : 0;
  const loanPrincipal = Math.max(0, carPrice - downPaymentAmount);
  
  const years = loanTermMonths / 12;
  const totalInterest = loanPrincipal * (interestRate / 100) * years;
  const totalLoanWithInterest = loanPrincipal + totalInterest;
  
  const monthlyPreVat = loanTermMonths > 0 ? totalLoanWithInterest / loanTermMonths : 0;
  const monthlyVat = monthlyPreVat * 0.07;
  const monthlyPayment = monthlyPreVat + monthlyVat;
  const totalPayment = (monthlyPayment * loanTermMonths) + downPaymentAmount;
  
  // Approximate APR / Effective rate for Thai car flat-rate loans
  const effectiveInterestRate = loanTermMonths > 0 
    ? interestRate * ((2 * loanTermMonths) / (loanTermMonths + 1)) * 1.05
    : 0;

  const schedule: AmortizationScheduleItem[] = [];
  let remaining = loanPrincipal;
  const monthlyPrincipalPortion = loanTermMonths > 0 ? loanPrincipal / loanTermMonths : 0;
  const monthlyInterestPortion = loanTermMonths > 0 ? totalInterest / loanTermMonths : 0;

  for (let i = 1; i <= loanTermMonths; i++) {
    remaining = Math.max(0, remaining - monthlyPrincipalPortion);
    schedule.push({
      month: i,
      principalPaid: monthlyPrincipalPortion,
      interestPaid: monthlyInterestPortion,
      vatPaid: monthlyVat,
      totalMonthly: monthlyPayment,
      remainingBalance: remaining,
    });
  }

  // 1. Compare Down Payment Scenarios: 10, 15, 20, 25, 30, 35%
  const downPcts = [10, 15, 20, 25, 30, 35];
  const downPaymentScenarios: DownPaymentScenarioItem[] = [];
  let prevDownAmount = 0;
  let prevMonthly = 0;

  downPcts.forEach((pct, idx) => {
    const curDown = (carPrice * pct) / 100;
    const curPrincipal = carPrice - curDown;
    const curInterest = curPrincipal * (interestRate / 100) * years;
    const curMonthlyPreVat = loanTermMonths > 0 ? (curPrincipal + curInterest) / loanTermMonths : 0;
    const curMonthly = curMonthlyPreVat * 1.07;
    const curTotal = (curMonthly * loanTermMonths) + curDown;

    downPaymentScenarios.push({
      percent: pct,
      downAmount: curDown,
      loanPrincipal: curPrincipal,
      monthlyPayment: curMonthly,
      totalInterest: curInterest,
      totalPayment: curTotal,
      monthlySavingsVsPrev: idx > 0 ? prevMonthly - curMonthly : 0,
      extraDownVsPrev: idx > 0 ? curDown - prevDownAmount : 0,
    });

    prevDownAmount = curDown;
    prevMonthly = curMonthly;
  });

  // 2. Compare Loan Terms Scenarios: 36, 48, 60, 72, 84
  const terms = [36, 48, 60, 72, 84];
  const loanTermScenarios: LoanTermScenarioItem[] = [];
  
  // Calculate baseline shortest (36/48) and longest (84)
  const baseShortestInterest = loanPrincipal * (interestRate / 100) * (48 / 12);
  const baseLongestMonthly = ((loanPrincipal + (loanPrincipal * (interestRate / 100) * (84 / 12))) / 84) * 1.07;

  terms.forEach((t) => {
    const tYears = t / 12;
    const tInterest = loanPrincipal * (interestRate / 100) * tYears;
    const tMonthlyPre = (loanPrincipal + tInterest) / t;
    const tMonthly = tMonthlyPre * 1.07;
    const tTotal = (tMonthly * t) + downPaymentAmount;

    loanTermScenarios.push({
      termMonths: t,
      termYears: tYears,
      monthlyPayment: tMonthly,
      totalInterest: tInterest,
      totalPayment: tTotal,
      monthlyDiffVsLongest: tMonthly - baseLongestMonthly,
      extraInterestVsShortest: Math.max(0, tInterest - baseShortestInterest),
    });
  });

  return {
    carPrice,
    downPaymentAmount,
    downPaymentPercent,
    loanPrincipal,
    totalInterest,
    totalLoanWithInterest,
    monthlyPreVat,
    monthlyVat,
    monthlyPayment,
    totalPayment,
    effectiveInterestRate,
    schedule,
    downPaymentScenarios,
    loanTermScenarios,
  };
}

export function calculateReverseCarBudget(input: ReverseBudgetInput): ReverseBudgetResult {
  const { monthlyBudget, downPaymentAmount, interestRate, loanTermMonths } = input;

  const years = loanTermMonths / 12;
  const interestMultiplier = 1 + (interestRate / 100) * years;
  
  // Monthly (inc VAT) = (Principal * interestMultiplier) / months * 1.07
  // Principal = (Monthly / 1.07 * months) / interestMultiplier
  const loanPrincipal = monthlyBudget > 0
    ? ((monthlyBudget / 1.07) * loanTermMonths) / interestMultiplier
    : 0;

  const estimatedCarPriceMid = loanPrincipal + downPaymentAmount;
  const estimatedCarPriceMin = Math.round(estimatedCarPriceMid * 0.95 / 10000) * 10000;
  const estimatedCarPriceMax = Math.round(estimatedCarPriceMid * 1.05 / 10000) * 10000;

  const totalInterest = loanPrincipal * (interestRate / 100) * years;
  const totalPayment = (monthlyBudget * loanTermMonths) + downPaymentAmount;
  const downPercent = estimatedCarPriceMid > 0 ? (downPaymentAmount / estimatedCarPriceMid) * 100 : 0;

  let carTierRecommendation = 'รถยนต์กลุ่ม Eco Car หรือรถมือสองสภาพดี (งบ 400k - 600k)';
  if (estimatedCarPriceMid >= 1500000) {
    carTierRecommendation = 'รถยนต์ D-Segment, Premium SUV หรือ Premium EV (เช่น Camry, CR-V, Model Y)';
  } else if (estimatedCarPriceMid >= 950000) {
    carTierRecommendation = 'รถยนต์ C-SUV, กระบะ 4 ประตูยกสูง หรือ EV ยอดนิยม (เช่น HR-V, Corolla Cross, Atto 3)';
  } else if (estimatedCarPriceMid >= 650000) {
    carTierRecommendation = 'รถยนต์ B-Segment, City Car e:HEV หรือ Compact EV (เช่น City, Yaris Cross, Dolphin)';
  }

  return {
    monthlyBudget,
    downPaymentAmount,
    estimatedCarPriceMin,
    estimatedCarPriceMax,
    estimatedCarPriceMid,
    loanPrincipal,
    totalInterest,
    totalPayment,
    downPercent,
    carTierRecommendation,
  };
}
