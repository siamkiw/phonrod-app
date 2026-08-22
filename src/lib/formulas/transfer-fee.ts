export interface TransferFeeInput {
  appraisalPrice: number; // ราคาประเมินกรมขนส่ง หรือราคาซื้อขาย
  includePlateFee?: boolean; // ค่าเปลี่ยนป้ายทะเบียน 200 บ.
  includeBookFee?: boolean; // ค่าสมุดเล่มทะเบียนชำรุด 100 บ.
}

export interface TransferFeeResult {
  appraisalPrice: number;
  stampDuty: number; // 0.5% (500 บาท ต่อ 100,000)
  applicationFee: number; // 5 บาท
  transferFee: number; // 100 บาท
  inspectionFee: number; // 50 บาท
  optionalPlateFee: number; // 200 บาท
  optionalBookFee: number; // 100 บาท
  totalRequired: number;
  totalWithOptional: number;
}

export function calculateTransferFee(input: TransferFeeInput): TransferFeeResult {
  const { appraisalPrice, includePlateFee = false, includeBookFee = false } = input;
  
  // อากรแสตมป์ 0.5% (ร้อยละ 50 สตางค์ ต่อทุก 100 บาท)
  const stampDuty = Math.ceil(appraisalPrice * 0.005);
  const applicationFee = 5;
  const transferFee = 100;
  const inspectionFee = 50;
  const optionalPlateFee = includePlateFee ? 200 : 0;
  const optionalBookFee = includeBookFee ? 100 : 0;

  const totalRequired = stampDuty + applicationFee + transferFee + inspectionFee;
  const totalWithOptional = totalRequired + optionalPlateFee + optionalBookFee;

  return {
    appraisalPrice,
    stampDuty,
    applicationFee,
    transferFee,
    inspectionFee,
    optionalPlateFee,
    optionalBookFee,
    totalRequired,
    totalWithOptional,
  };
}
