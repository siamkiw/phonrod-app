export interface RefinanceInput {
  currentDebtBalance: number; // ยอดปิดหนี้เดิม
  currentMonthlyPayment: number; // ค่างวดเดิม
  currentRemainingMonths: number; // งวดเดิมที่เหลือ
  newLoanAmount: number; // วงเงินกู้ใหม่ (อาจเท่ากับหนี้เดิม หรือกู้เพิ่ม)
  newInterestRate: number; // ดอกเบี้ยใหม่ Flat Rate % ต่อปี
  newLoanTermMonths: number; // งวดใหม่ (เช่น 48, 60, 72, 84)
  refinanceFees?: number; // ค่าธรรมเนียมจัดการ/โอน/ประเมิน
}

export interface RefinanceResult {
  currentMonthlyPayment: number;
  currentTotalRemainingPayment: number;
  newMonthlyPayment: number;
  newTotalPayment: number;
  monthlySavings: number; // ผ่อนเบาลงต่อเดือน
  cashbackAmount: number; // เงินสดส่วนต่างรับเข้ากระเป๋า
  totalInterestOld: number;
  totalInterestNew: number;
  netFinancialGain: number;
  verdict: string;
}

export function calculateRefinance(input: RefinanceInput): RefinanceResult {
  const {
    currentDebtBalance,
    currentMonthlyPayment,
    currentRemainingMonths,
    newLoanAmount,
    newInterestRate,
    newLoanTermMonths,
    refinanceFees = 3000,
  } = input;

  const currentTotalRemainingPayment = currentMonthlyPayment * currentRemainingMonths;

  const newYears = newLoanTermMonths / 12;
  const newInterestTotal = newLoanAmount * (newInterestRate / 100) * newYears;
  const newPrincipalWithInterest = newLoanAmount + newInterestTotal;
  
  // New Monthly with VAT 7%
  const newMonthlyPreVat = newLoanTermMonths > 0 ? newPrincipalWithInterest / newLoanTermMonths : 0;
  const newMonthlyPayment = newMonthlyPreVat * 1.07;
  const newTotalPayment = (newMonthlyPayment * newLoanTermMonths) + refinanceFees;

  const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
  const cashbackAmount = Math.max(0, newLoanAmount - currentDebtBalance - refinanceFees);

  let verdict = '';
  if (monthlySavings > 0 && cashbackAmount > 0) {
    verdict = `ได้ประโยชน์ 2 ต่อ: ค่างวดลดลง ฿${Math.round(monthlySavings).toLocaleString()}/เดือน และได้รับเงินสดก้อน ฿${Math.round(cashbackAmount).toLocaleString()} ไปหมุนเวียน`;
  } else if (monthlySavings > 0) {
    verdict = `ลดภาระรายเดือนได้ ฿${Math.round(monthlySavings).toLocaleString()}/เดือน ช่วยเพิ่มสภาพคล่องในชีวิตประจำวันอย่างมาก`;
  } else if (cashbackAmount > 0) {
    verdict = `ได้รับเงินสดก้อน ฿${Math.round(cashbackAmount).toLocaleString()} สำหรับใช้จ่ายฉุกเฉินหรือต่อยอดธุรกิจ แม้ค่างวดจะใกล้เคียงเดิม`;
  } else {
    verdict = `ยอดผ่อนอาจไม่ได้ลดลงอย่างมีนัยสำคัญ ควรพิจารณาเปรียบเทียบดอกเบี้ยรวมก่อนตัดสินใจ`;
  }

  const netFinancialGain = cashbackAmount + (monthlySavings * Math.min(currentRemainingMonths, newLoanTermMonths));

  return {
    currentMonthlyPayment,
    currentTotalRemainingPayment,
    newMonthlyPayment,
    newTotalPayment,
    monthlySavings,
    cashbackAmount,
    totalInterestOld: currentTotalRemainingPayment - currentDebtBalance,
    totalInterestNew: newInterestTotal,
    netFinancialGain,
    verdict,
  };
}
