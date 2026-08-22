export interface OwnershipCostInput {
  monthlyInstallment: number;
  monthlyFuelOrCharging: number;
  annualInsurance: number;
  annualMaintenance: number;
  annualTaxAndAct: number;
  monthlyParkingAndTolls: number;
  monthlySalary?: number;
}

export interface OwnershipCostResult {
  monthlyTotal: number;
  annualTotal: number;
  fiveYearTotal: number;
  dailyCost: number;
  breakdown: {
    installmentMonthly: number;
    fuelMonthly: number;
    insuranceMonthly: number;
    maintenanceMonthly: number;
    taxAndActMonthly: number;
    parkingTollsMonthly: number;
  };
  percentages: {
    installment: number;
    fuel: number;
    insurance: number;
    maintenance: number;
    taxAndAct: number;
    parkingTolls: number;
  };
  salaryRatioPercent: number;
  salaryVerdict: string;
}

export function calculateOwnershipCost(input: OwnershipCostInput): OwnershipCostResult {
  const {
    monthlyInstallment,
    monthlyFuelOrCharging,
    annualInsurance,
    annualMaintenance,
    annualTaxAndAct,
    monthlyParkingAndTolls,
    monthlySalary = 0,
  } = input;

  const insuranceMonthly = annualInsurance / 12;
  const maintenanceMonthly = annualMaintenance / 12;
  const taxAndActMonthly = annualTaxAndAct / 12;

  const monthlyTotal =
    monthlyInstallment +
    monthlyFuelOrCharging +
    insuranceMonthly +
    maintenanceMonthly +
    taxAndActMonthly +
    monthlyParkingAndTolls;

  const annualTotal = monthlyTotal * 12;
  const fiveYearTotal = annualTotal * 5;
  const dailyCost = monthlyTotal / 30;

  const percentages = {
    installment: monthlyTotal > 0 ? (monthlyInstallment / monthlyTotal) * 100 : 0,
    fuel: monthlyTotal > 0 ? (monthlyFuelOrCharging / monthlyTotal) * 100 : 0,
    insurance: monthlyTotal > 0 ? (insuranceMonthly / monthlyTotal) * 100 : 0,
    maintenance: monthlyTotal > 0 ? (maintenanceMonthly / monthlyTotal) * 100 : 0,
    taxAndAct: monthlyTotal > 0 ? (taxAndActMonthly / monthlyTotal) * 100 : 0,
    parkingTolls: monthlyTotal > 0 ? (monthlyParkingAndTolls / monthlyTotal) * 100 : 0,
  };

  const salaryRatioPercent = monthlySalary > 0 ? (monthlyTotal / monthlySalary) * 100 : 0;

  let salaryVerdict = 'ไม่มีข้อมูลเงินเดือน';
  if (monthlySalary > 0) {
    if (salaryRatioPercent <= 30) {
      salaryVerdict = 'สัดส่วนเหมาะสมมาก (ต่ำกว่า 30% ของเงินเดือน) ไม่กระทบสภาพคล่อง';
    } else if (salaryRatioPercent <= 50) {
      salaryVerdict = 'สัดส่วนปานกลาง (30% - 50% ของเงินเดือน) ควรควบคุมค่าใช้จ่ายอื่นให้รัดกุม';
    } else {
      salaryVerdict = 'สัดส่วนตึงตัวสูง (เกิน 50% ของเงินเดือน) ค่าใช้จ่ายรถยนต์กินรายได้ส่วนใหญ่';
    }
  }

  return {
    monthlyTotal,
    annualTotal,
    fiveYearTotal,
    dailyCost,
    breakdown: {
      installmentMonthly: monthlyInstallment,
      fuelMonthly: monthlyFuelOrCharging,
      insuranceMonthly,
      maintenanceMonthly,
      taxAndActMonthly,
      parkingTollsMonthly: monthlyParkingAndTolls,
    },
    percentages,
    salaryRatioPercent,
    salaryVerdict,
  };
}
