export interface EarlyPayoffInput {
  totalLoanAmount: number; // ยอดจัดเริ่มต้น
  flatInterestRate: number; // ดอกเบี้ยตามสัญญา % ต่อปี
  totalContractMonths: number; // จำนวนงวดทั้งหมดตามสัญญา (เช่น 48, 60, 72)
  paidMonths: number; // จำนวนงวดที่ผ่อนไปแล้ว
}

export interface EarlyPayoffResult {
  totalLoanAmount: number;
  totalContractInterest: number;
  monthlyPayment: number;
  paidMonths: number;
  remainingMonths: number;
  paidRatioPercent: number;
  ocpbDiscountTier: string;
  ocpbDiscountPercent: number; // 60, 70, or 100%
  unearnedInterestTotal: number; // ดอกเบี้ยคงเหลือแท้จริง
  interestDiscountAmount: number; // ส่วนลดดอกเบี้ยที่ได้รับการยกเว้น
  outstandingPrincipal: number; // เงินต้นคงเหลือ
  totalPayoffAmount: number; // ยอดเงินสุทธิที่ต้องจ่ายปิดบัญชี
  scheduledRemainingPayment: number; // ยอดถ้าผ่อนต่อจนครบ
  savingsFromPayoff: number; // เงินที่ประหยัดได้
}

export function calculateEarlyPayoff(input: EarlyPayoffInput): EarlyPayoffResult {
  const { totalLoanAmount, flatInterestRate, totalContractMonths, paidMonths } = input;

  const totalYears = totalContractMonths / 12;
  const totalContractInterest = totalLoanAmount * (flatInterestRate / 100) * totalYears;
  const totalContractWithInterest = totalLoanAmount + totalContractInterest;
  
  const monthlyPaymentPreVat = totalContractMonths > 0 ? totalContractWithInterest / totalContractMonths : 0;
  const monthlyPayment = monthlyPaymentPreVat * 1.07; // Inc VAT

  const safePaidMonths = Math.min(paidMonths, totalContractMonths);
  const remainingMonths = Math.max(0, totalContractMonths - safePaidMonths);
  const paidRatio = totalContractMonths > 0 ? safePaidMonths / totalContractMonths : 0;
  const paidRatioPercent = paidRatio * 100;

  // กฎหมาย สคบ. ใหม่ (มีผล ม.ค. 2566):
  // ดอกเบี้ยคงเหลือคิดแบบลดต้นลดดอก (Rule of 78 / Effective interest method)
  // Sum of digits for remaining months:
  const n = totalContractMonths;
  const k = remainingMonths;
  const sumTotalDigits = (n * (n + 1)) / 2;
  const sumRemainingDigits = (k * (k + 1)) / 2;
  
  // Unearned interest using Rule of 78
  const unearnedInterestTotal = sumTotalDigits > 0 
    ? (sumRemainingDigits / sumTotalDigits) * totalContractInterest
    : 0;

  let ocpbDiscountPercent = 60;
  let ocpbDiscountTier = 'ผ่อนไม่เกิน 1/3 ของสัญญา (ส่วนลดดอกเบี้ยคงเหลือ 60%)';

  if (paidRatio > 2 / 3) {
    ocpbDiscountPercent = 100;
    ocpbDiscountTier = 'ผ่อนเกิน 2/3 ของสัญญา (ส่วนลดดอกเบี้ยคงเหลือ 100% เต็มจำนวน)';
  } else if (paidRatio > 1 / 3) {
    ocpbDiscountPercent = 70;
    ocpbDiscountTier = 'ผ่อนเกิน 1/3 แต่ไม่เกิน 2/3 ของสัญญา (ส่วนลดดอกเบี้ยคงเหลือ 70%)';
  }

  const interestDiscountAmount = (unearnedInterestTotal * ocpbDiscountPercent) / 100;
  
  // เงินต้นคงเหลือ = ยอดจัด - เงินต้นที่จ่ายไปแล้ว
  const monthlyPrincipal = totalContractMonths > 0 ? totalLoanAmount / totalContractMonths : 0;
  const outstandingPrincipal = monthlyPrincipal * remainingMonths;

  // ดอกเบี้ยคงเหลือที่ยังต้องจ่าย (หลังหักส่วนลด)
  const interestToPay = unearnedInterestTotal - interestDiscountAmount;
  
  // ยอดปิดบัญชีรวม VAT = (เงินต้นคงเหลือ + ดอกเบี้ยที่ต้องจ่าย) * 1.07
  const totalPayoffAmount = (outstandingPrincipal + interestToPay) * 1.07;
  
  // ยอดถ้าผ่อนต่อตามสัญญาปกติ
  const scheduledRemainingPayment = monthlyPayment * remainingMonths;
  
  // เงินที่ประหยัดได้
  const savingsFromPayoff = Math.max(0, scheduledRemainingPayment - totalPayoffAmount);

  return {
    totalLoanAmount,
    totalContractInterest,
    monthlyPayment,
    paidMonths: safePaidMonths,
    remainingMonths,
    paidRatioPercent,
    ocpbDiscountTier,
    ocpbDiscountPercent,
    unearnedInterestTotal,
    interestDiscountAmount,
    outstandingPrincipal,
    totalPayoffAmount,
    scheduledRemainingPayment,
    savingsFromPayoff,
  };
}
