export interface SalaryAffordabilityInput {
  monthlySalary: number;
  existingDebt: number;
  dsrPercentage: number; // e.g. 40, 50, 60%
  downPaymentPercent: number; // e.g. 15, 20, 25%
  interestRate: number; // Flat rate % e.g. 2.79%
  loanTermMonths: number; // e.g. 60, 72 months
}

export interface SalaryAffordabilityResult {
  monthlySalary: number;
  maxTotalDebtAllowed: number;
  maxCarInstallment: number;
  maxLoanAmount: number;
  maxCarPrice: number;
  requiredDownPayment: number;
  netRemainingIncome: number;
  safetyTier: 'green' | 'yellow' | 'red';
  safetyLabel: string;
  recommendation: string;
}

export function calculateSalaryAffordability(input: SalaryAffordabilityInput): SalaryAffordabilityResult {
  const { monthlySalary, existingDebt, dsrPercentage, downPaymentPercent, interestRate, loanTermMonths } = input;
  
  const maxTotalDebtAllowed = (monthlySalary * dsrPercentage) / 100;
  const maxCarInstallment = Math.max(0, maxTotalDebtAllowed - existingDebt);
  
  // Reverse calculate loan amount from installment:
  // Installment (inc VAT 7%) = (Loan * (1 + (rate% * years))) / months * 1.07
  // Loan = (Installment / 1.07 * months) / (1 + (rate% * years))
  const years = loanTermMonths / 12;
  const interestMultiplier = 1 + (interestRate / 100) * years;
  const maxLoanAmount = maxCarInstallment > 0 
    ? ((maxCarInstallment / 1.07) * loanTermMonths) / interestMultiplier
    : 0;
  
  // Loan = CarPrice * (1 - downPaymentPercent/100)
  // CarPrice = Loan / (1 - downPaymentPercent/100)
  const downRatio = Math.max(0.01, 1 - (downPaymentPercent / 100));
  const maxCarPrice = maxLoanAmount / downRatio;
  const requiredDownPayment = maxCarPrice - maxLoanAmount;
  const netRemainingIncome = Math.max(0, monthlySalary - existingDebt - maxCarInstallment);

  let safetyTier: 'green' | 'yellow' | 'red' = 'green';
  let safetyLabel = 'ระดับปลอดภัยสูง (DSR ต่ำกว่า 35%)';
  let recommendation = 'ยอดผ่อนอยู่ในเกณฑ์ดีเยี่ยม มีเงินเหลือเก็บและไม่ตึงตัว สามารถกู้ผ่านฉลุยแบบไม่ต้องมีคนค้ำประกัน';

  const totalDsrActual = monthlySalary > 0 ? ((existingDebt + maxCarInstallment) / monthlySalary) * 100 : 0;

  if (totalDsrActual > 50) {
    safetyTier = 'red';
    safetyLabel = 'ระดับความเสี่ยงสูง (DSR เกิน 50%)';
    recommendation = 'ไฟแนนซ์อาจขอคนค้ำประกัน หรือให้เพิ่มเงินดาวน์เป็น 25-30% เพื่อลดความเสี่ยงหนี้เสีย';
  } else if (totalDsrActual > 35) {
    safetyTier = 'yellow';
    safetyLabel = 'ระดับปานกลาง (DSR 35% - 50%)';
    recommendation = 'อยู่ในเกณฑ์อนุมัติทั่วไปของสถาบันการเงิน แนะนำเตรียมเงินสำรองฉุกเฉินค่าน้ำมันและค่าบำรุงรักษาเพิ่ม';
  }

  return {
    monthlySalary,
    maxTotalDebtAllowed,
    maxCarInstallment,
    maxLoanAmount,
    maxCarPrice,
    requiredDownPayment,
    netRemainingIncome,
    safetyTier,
    safetyLabel,
    recommendation,
  };
}
