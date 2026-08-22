export interface TripFuelInput {
  distanceKm: number;
  fuelConsumptionKmPerLiter: number; // e.g. 15 km/l
  fuelPricePerLiter: number; // e.g. 38.50 THB
  tollFee?: number; // e.g. 150 THB
  passengerCount: number; // e.g. 4
  roundTrip?: boolean;
}

export interface TripFuelResult {
  totalDistanceKm: number;
  totalLitersUsed: number;
  totalFuelCost: number;
  totalTollFee: number;
  totalTripExpense: number;
  costPerPerson: number;
  costPerKm: number;
  litersPerPerson: number;
}

export function calculateTripFuel(input: TripFuelInput): TripFuelResult {
  const {
    distanceKm,
    fuelConsumptionKmPerLiter,
    fuelPricePerLiter,
    tollFee = 0,
    passengerCount = 1,
    roundTrip = false,
  } = input;

  const totalDistanceKm = roundTrip ? distanceKm * 2 : distanceKm;
  const safeConsumption = Math.max(0.1, fuelConsumptionKmPerLiter);
  const totalLitersUsed = totalDistanceKm / safeConsumption;
  const totalFuelCost = totalLitersUsed * fuelPricePerLiter;
  const totalTollFee = roundTrip ? tollFee * 2 : tollFee;
  const totalTripExpense = totalFuelCost + totalTollFee;

  const safePassengers = Math.max(1, passengerCount);
  const costPerPerson = totalTripExpense / safePassengers;
  const costPerKm = totalDistanceKm > 0 ? totalTripExpense / totalDistanceKm : 0;
  const litersPerPerson = totalLitersUsed / safePassengers;

  return {
    totalDistanceKm,
    totalLitersUsed,
    totalFuelCost,
    totalTollFee,
    totalTripExpense,
    costPerPerson,
    costPerKm,
    litersPerPerson,
  };
}
