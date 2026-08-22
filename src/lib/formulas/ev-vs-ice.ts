export interface EvVsIceInput {
  annualDistanceKm: number;
  iceCarPrice: number;
  iceFuelConsumption: number; // km/liter e.g. 14
  fuelPricePerLiter: number; // THB e.g. 38
  iceAnnualMaintenance: number; // THB e.g. 12000
  evCarPrice: number;
  evEnergyConsumption: number; // km/kWh e.g. 6.5 (or kWh/100km)
  electricityRatePerKwh: number; // THB e.g. 3.5 (TOU Off-peak)
  evAnnualMaintenance: number; // THB e.g. 5000
}

export interface EvVsIceResult {
  annualDistanceKm: number;
  iceFuelCostPerKm: number;
  evEnergyCostPerKm: number;
  iceAnnualFuelCost: number;
  evAnnualEnergyCost: number;
  iceAnnualTotalRunningCost: number;
  evAnnualTotalRunningCost: number;
  annualCostSavings: number;
  monthlyCostSavings: number;
  carPriceDifference: number; // EV price - ICE price
  paybackYears: number | null;
  fiveYearSavings: number;
  tenYearSavings: number;
  co2ReductionKgPerYear: number;
}

export function calculateEvVsIce(input: EvVsIceInput): EvVsIceResult {
  const {
    annualDistanceKm,
    iceCarPrice,
    iceFuelConsumption,
    fuelPricePerLiter,
    iceAnnualMaintenance,
    evCarPrice,
    evEnergyConsumption,
    electricityRatePerKwh,
    evAnnualMaintenance,
  } = input;

  const safeIceConsumption = Math.max(0.1, iceFuelConsumption);
  const safeEvConsumption = Math.max(0.1, evEnergyConsumption);

  const iceFuelCostPerKm = fuelPricePerLiter / safeIceConsumption;
  const evEnergyCostPerKm = electricityRatePerKwh / safeEvConsumption;

  const iceAnnualFuelCost = annualDistanceKm * iceFuelCostPerKm;
  const evAnnualEnergyCost = annualDistanceKm * evEnergyCostPerKm;

  const iceAnnualTotalRunningCost = iceAnnualFuelCost + iceAnnualMaintenance;
  const evAnnualTotalRunningCost = evAnnualEnergyCost + evAnnualMaintenance;

  const annualCostSavings = iceAnnualTotalRunningCost - evAnnualTotalRunningCost;
  const monthlyCostSavings = annualCostSavings / 12;

  const carPriceDifference = evCarPrice - iceCarPrice;
  const paybackYears =
    annualCostSavings > 0 && carPriceDifference > 0
      ? carPriceDifference / annualCostSavings
      : carPriceDifference <= 0
      ? 0
      : null;

  const fiveYearSavings = annualCostSavings * 5 - carPriceDifference;
  const tenYearSavings = annualCostSavings * 10 - carPriceDifference;

  // Approx CO2: ICE ~ 150g/km, EV ~ 50g/km (grid avg) -> 100g/km saved
  const co2ReductionKgPerYear = (annualDistanceKm * 0.1);

  return {
    annualDistanceKm,
    iceFuelCostPerKm,
    evEnergyCostPerKm,
    iceAnnualFuelCost,
    evAnnualEnergyCost,
    iceAnnualTotalRunningCost,
    evAnnualTotalRunningCost,
    annualCostSavings,
    monthlyCostSavings,
    carPriceDifference,
    paybackYears,
    fiveYearSavings,
    tenYearSavings,
    co2ReductionKgPerYear,
  };
}
