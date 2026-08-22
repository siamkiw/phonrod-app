export interface CarEquityInput {
  targetSellingPrice: number; // ราคาที่ต้องการขาย
  monthlyInstallment: number; // ค่างวดต่อเดือน
  remainingMonths: number; // งวดที่เหลือ
  contractTransferFee?: number; // ค่าเปลี่ยนสัญญา (ปกติ 3,000 - 5,000)
  advanceInstallmentMonths?: number; // งวดล่วงหน้า (ปกติ 1-2 งวด)
}

export interface CarEquityResult {
  targetSellingPrice: number;
  remainingFinanceDebt: number;
  netEquity: number;
  isPositiveEquity: boolean;
  contractTransferFee: number;
  advanceInstallmentAmount: number;
  totalBuyerDownPaymentRequired: number;
  sellerCashOutcome: number;
  outcomeType: 'cash_in' | 'cash_out' | 'break_even';
  analysisNote: string;
}

export function calculateCarEquity(input: CarEquityInput): CarEquityResult {
  const {
    targetSellingPrice,
    monthlyInstallment,
    remainingMonths,
    contractTransferFee = 4000,
    advanceInstallmentMonths = 2,
  } = input;

  const remainingFinanceDebt = monthlyInstallment * remainingMonths;
  const netEquity = targetSellingPrice - remainingFinanceDebt;
  const isPositiveEquity = netEquity > 0;
  const advanceInstallmentAmount = monthlyInstallment * advanceInstallmentMonths;

  let outcomeType: 'cash_in' | 'cash_out' | 'break_even' = 'break_even';
  let analysisNote = '';

  if (netEquity > 0) {
    outcomeType = 'cash_in';
    analysisNote = `คุณสามารถ "ขายดาวน์" ได้เงินสดกลับมาประมาณ ${netEquity.toLocaleString()} บาท เนื่องจากราคารถสูงกว่ายอดหนี้ไฟแนนซ์คงเหลือ`;
  } else if (netEquity < 0) {
    outcomeType = 'cash_out';
    analysisNote = `ติดลบ (หนี้ท่วมรถ) หากต้องการปิดหนี้หรือเปลี่ยนสัญญา อาจต้อง "ยกให้ผ่อนต่อฟรี" หรือควักเงินช่วยผู้ซื้อ ${Math.abs(netEquity).toLocaleString()} บาท`;
  } else {
    outcomeType = 'break_even';
    analysisNote = 'ยอดหนี้เท่ากับราคาขายพอดี สามารถเปลี่ยนสัญญาให้ผู้ซื้อไปผ่อนต่อได้แบบเสมอตัว';
  }

  const totalBuyerDownPaymentRequired = Math.max(0, netEquity) + contractTransferFee + advanceInstallmentAmount;
  const sellerCashOutcome = netEquity;

  return {
    targetSellingPrice,
    remainingFinanceDebt,
    netEquity,
    isPositiveEquity,
    contractTransferFee,
    advanceInstallmentAmount,
    totalBuyerDownPaymentRequired,
    sellerCashOutcome,
    outcomeType,
    analysisNote,
  };
}
