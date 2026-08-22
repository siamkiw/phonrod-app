'use client';

import React, { useState, useMemo } from 'react';
import { Zap, Fuel, TrendingDown, DollarSign, Leaf, CheckCircle2 } from 'lucide-react';
import { calculateEvVsIce } from '@/lib/formulas/ev-vs-ice';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const EvVsIceCalc: React.FC = () => {
  const [annualKm, setAnnualKm] = useState<number>(25000); // 25,000 km/year
  const [icePrice, setIcePrice] = useState<number>(850000);
  const [iceKmPerL, setIceKmPerL] = useState<number>(14); // 14 km/l
  const [fuelPrice, setFuelPrice] = useState<number>(38); // 38 THB/l
  const [iceMaint, setIceMaint] = useState<number>(12000);

  const [evPrice, setEvPrice] = useState<number>(999000);
  const [evKmPerKwh, setEvKmPerKwh] = useState<number>(6.5); // 6.5 km/kWh
  const [elecRate, setElecRate] = useState<number>(3.2); // 3.2 THB (TOU Off-peak)
  const [evMaint, setEvMaint] = useState<number>(4500);

  const result = useMemo(() => {
    return calculateEvVsIce({
      annualDistanceKm: annualKm,
      iceCarPrice: icePrice,
      iceFuelConsumption: iceKmPerL,
      fuelPricePerLiter: fuelPrice,
      iceAnnualMaintenance: iceMaint,
      evCarPrice: evPrice,
      evEnergyConsumption: evKmPerKwh,
      electricityRatePerKwh: elecRate,
      evAnnualMaintenance: evMaint,
    });
  }, [annualKm, icePrice, iceKmPerL, fuelPrice, iceMaint, evPrice, evKmPerKwh, elecRate, evMaint]);

  const summaryText = `⚡ สรุปผลวิเคราะห์จุดคุ้มทุน EV vs รถยนต์น้ำมัน:
- วิ่งปีละ: ${formatNumber(annualKm)} กม.
- ต้นทุนพลังงานต่อ กม.: รถน้ำมัน ${formatCurrency(result.iceFuelCostPerKm, 2)}/กม. vs รถ EV ${formatCurrency(result.evEnergyCostPerKm, 2)}/กม.
- ค่าใช้จ่ายรวมรายปี: รถน้ำมัน ${formatCurrency(result.iceAnnualTotalRunningCost)} vs รถ EV ${formatCurrency(result.evAnnualTotalRunningCost)}
- รถ EV ประหยัดได้ปีละ: ${formatCurrency(result.annualCostSavings)}
- ส่วนต่างราคารถ (EV - น้ำมัน): ${formatCurrency(result.carPriceDifference)}
- ระยะเวลาคืนทุน: ${result.paybackYears !== null ? `${result.paybackYears.toFixed(1)} ปี` : 'ทันที'}
- เงินประหยัดสะสมสุทธิใน 5 ปี: ${formatCurrency(result.fiveYearSavings)}
คำนวณฟรีที่: https://car-finance.in.th/ev-vs-ice-calculator`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กำหนดตัวแปรเปรียบเทียบ</h2>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
              เปรียบเทียบ 2 ระบบ
            </span>
          </div>

          {/* Annual Distance */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">ระยะทางขับขี่ต่อปี (กิโลเมตร)</label>
            <input
              type="number"
              min={5000}
              step={2000}
              value={annualKm || ''}
              onChange={(e) => setAnnualKm(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 25000"
            />
            <div className="flex gap-2 pt-1">
              {[15000, 20000, 25000, 35000, 50000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAnnualKm(preset)}
                  className={`flex-1 text-xs py-1 rounded-lg transition-colors ${
                    annualKm === preset
                      ? 'bg-brand-600 text-white font-medium'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {preset / 1000}k
                </button>
              ))}
            </div>
          </div>

          {/* ICE Box */}
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-900 uppercase">
              <Fuel className="w-4 h-4 text-amber-600" />
              <span>ข้อมูลรถยนต์น้ำมัน (ICE)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-medium text-slate-700 block mb-1">ราคารถ (บาท)</label>
                <input
                  type="number"
                  value={icePrice || ''}
                  onChange={(e) => setIcePrice(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
              <div>
                <label className="font-medium text-slate-700 block mb-1">กินน้ำมัน (กม./ลิตร)</label>
                <input
                  type="number"
                  value={iceKmPerL || ''}
                  onChange={(e) => setIceKmPerL(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
              <div>
                <label className="font-medium text-slate-700 block mb-1">ราคาน้ำมัน (บาท/ลิตร)</label>
                <input
                  type="number"
                  value={fuelPrice || ''}
                  onChange={(e) => setFuelPrice(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
              <div>
                <label className="font-medium text-slate-700 block mb-1">ค่าเช็คระยะ/ปี (บาท)</label>
                <input
                  type="number"
                  value={iceMaint || ''}
                  onChange={(e) => setIceMaint(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
            </div>
          </div>

          {/* EV Box */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-900 uppercase">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>ข้อมูลรถยนต์ไฟฟ้า (EV)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-medium text-slate-700 block mb-1">ราคารถ (บาท)</label>
                <input
                  type="number"
                  value={evPrice || ''}
                  onChange={(e) => setEvPrice(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
              <div>
                <label className="font-medium text-slate-700 block mb-1">กินไฟ (กม./หน่วย kWh)</label>
                <input
                  type="number"
                  step={0.1}
                  value={evKmPerKwh || ''}
                  onChange={(e) => setEvKmPerKwh(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
              <div>
                <label className="font-medium text-slate-700 block mb-1">ค่าไฟต่อหน่วย (TOU)</label>
                <input
                  type="number"
                  step={0.1}
                  value={elecRate || ''}
                  onChange={(e) => setElecRate(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
              <div>
                <label className="font-medium text-slate-700 block mb-1">ค่าเช็คระยะ/ปี (บาท)</label>
                <input
                  type="number"
                  value={evMaint || ''}
                  onChange={(e) => setEvMaint(Number(e.target.value))}
                  className="w-full p-2 rounded-lg border border-slate-300 font-semibold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                ผลการวิเคราะห์ความประหยัด
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                ลด CO2 ~{result.co2ReductionKgPerYear.toFixed(0)} กก./ปี
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">รถ EV ช่วยคุณประหยัดเงินได้ปีละ</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.annualCostSavings)}
                <span className="text-sm sm:text-lg font-normal text-slate-400 ml-2">/ ปี</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                (ประหยัดเฉลี่ยเดือนละ {formatCurrency(result.monthlyCostSavings)})
              </p>
            </div>

            {/* Payback badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 my-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">ระยะเวลาคืนทุนจากส่วนต่างราคารถ:</span>
                <span className="text-lg font-bold text-amber-300">
                  {result.paybackYears !== null && result.paybackYears > 0
                    ? `~${result.paybackYears.toFixed(1)} ปี`
                    : 'คุ้มทุนทันทีตั้งแต่วันแรก'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">ส่วนต่างราคารถ:</span>
                <span className="text-sm font-bold text-white">
                  {result.carPriceDifference > 0 ? `+${formatCurrency(result.carPriceDifference)}` : 'EV ถูกกว่า'}
                </span>
              </div>
            </div>

            {/* Compare stats */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-amber-400">รถน้ำมัน (ICE)</span>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {formatCurrency(result.iceFuelCostPerKm, 2)} / กม.
                </div>
                <span className="text-[10px] text-slate-400">ปีละ {formatCurrency(result.iceAnnualTotalRunningCost)}</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-emerald-400">รถยนต์ไฟฟ้า (EV)</span>
                <div className="text-sm sm:text-base font-bold text-emerald-300 mt-0.5">
                  {formatCurrency(result.evEnergyCostPerKm, 2)} / กม.
                </div>
                <span className="text-[10px] text-slate-400">ปีละ {formatCurrency(result.evAnnualTotalRunningCost)}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-300">ประหยัดสะสมสุทธิหลังหักราคารถ 5 ปี:</span>
              <span className="font-extrabold text-emerald-300 text-base">{formatCurrency(result.fiveYearSavings)}</span>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลวิเคราะห์จุดคุ้มทุน EV vs รถน้ำมัน"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="ev-charger" />
    </div>
  );
};
