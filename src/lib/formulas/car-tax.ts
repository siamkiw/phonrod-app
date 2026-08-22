export type VehicleTaxType = 'sedan' | 'pickup' | 'van' | 'ev';

export interface CarTaxInput {
  vehicleType: VehicleTaxType;
  engineCc?: number; // for sedan
  curbWeightKg?: number; // for pickup/van
  vehicleAgeYears: number; // 1 to 15+
}

export interface CarTaxResult {
  vehicleType: VehicleTaxType;
  vehicleAgeYears: number;
  baseTax: number;
  discountPercent: number;
  discountAmount: number;
  netAnnualTax: number;
  actFee: number; // พ.ร.บ.
  inspectionFee: number; // ตรอ.
  totalPayable: number;
  requiresInspection: boolean;
}

export function calculateCarTax(input: CarTaxInput): CarTaxResult {
  const { vehicleType, engineCc = 1500, curbWeightKg = 1500, vehicleAgeYears } = input;
  
  let baseTax = 0;
  let actFee = 645.21; // พ.ร.บ. เก๋งเริ่มต้น

  if (vehicleType === 'sedan') {
    actFee = 645.21;
    // Step 1: 1-600 cc @ 0.50
    const tier1 = Math.min(engineCc, 600) * 0.50;
    // Step 2: 601-1800 cc @ 1.50
    const tier2 = engineCc > 600 ? Math.min(engineCc - 600, 1200) * 1.50 : 0;
    // Step 3: > 1800 cc @ 4.00
    const tier3 = engineCc > 1800 ? (engineCc - 1800) * 4.00 : 0;
    baseTax = tier1 + tier2 + tier3;
  } else if (vehicleType === 'pickup') {
    actFee = 967.28;
    // คิดตามน้ำหนัก
    if (curbWeightKg <= 500) baseTax = 300;
    else if (curbWeightKg <= 750) baseTax = 450;
    else if (curbWeightKg <= 1000) baseTax = 600;
    else if (curbWeightKg <= 1250) baseTax = 750;
    else if (curbWeightKg <= 1500) baseTax = 900;
    else if (curbWeightKg <= 1750) baseTax = 1050;
    else if (curbWeightKg <= 2000) baseTax = 1350;
    else baseTax = 1650;
  } else if (vehicleType === 'van') {
    actFee = 1182.35;
    if (curbWeightKg <= 1800) baseTax = 800;
    else baseTax = 1600;
  } else if (vehicleType === 'ev') {
    actFee = 645.21;
    // รถไฟฟ้าคิดตามน้ำหนัก (เช่น เก๋งไฟฟ้า 1500-1800กก. ฐาน ~1,600 บาท)
    if (curbWeightKg <= 1800) baseTax = 800;
    else baseTax = 1600;
  }

  // ส่วนลดอายุการใช้งาน (รถยนต์ส่วนบุคคลนั่งไม่เกิน 7 คน / บรรทุก)
  let discountPercent = 0;
  if (vehicleAgeYears === 6) discountPercent = 10;
  else if (vehicleAgeYears === 7) discountPercent = 20;
  else if (vehicleAgeYears === 8) discountPercent = 30;
  else if (vehicleAgeYears === 9) discountPercent = 40;
  else if (vehicleAgeYears >= 10) discountPercent = 50;

  const discountAmount = (baseTax * discountPercent) / 100;
  const netAnnualTax = Math.max(0, baseTax - discountAmount);

  // ตรวจสภาพ ตรอ. สำหรับรถยนต์อายุเกิน 7 ปีขึ้นไป (ปีที่ 8 เป็นต้นไป)
  const requiresInspection = vehicleAgeYears >= 7;
  const inspectionFee = requiresInspection ? 200 : 0;

  const totalPayable = netAnnualTax + actFee + inspectionFee;

  return {
    vehicleType,
    vehicleAgeYears,
    baseTax,
    discountPercent,
    discountAmount,
    netAnnualTax,
    actFee,
    inspectionFee,
    totalPayable,
    requiresInspection,
  };
}
