'use client';

import React, { useState, useMemo } from 'react';
import { Fuel, Users, Navigation, DollarSign, CheckSquare, Square } from 'lucide-react';
import { calculateTripFuel } from '@/lib/formulas/trip-fuel';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const TripFuelCalc: React.FC = () => {
  const [distanceKm, setDistanceKm] = useState<number>(350); // Bangkok to Hua Hin / Rayong round trip
  const [consumption, setConsumption] = useState<number>(14.5); // 14.5 km/l
  const [fuelPrice, setFuelPrice] = useState<number>(37.8); // Gasohol 95 ~ 37.8 THB
  const [tollFee, setTollFee] = useState<number>(160);
  const [passengers, setPassengers] = useState<number>(4);
  const [roundTrip, setRoundTrip] = useState<boolean>(true);

  const result = useMemo(() => {
    return calculateTripFuel({
      distanceKm,
      fuelConsumptionKmPerLiter: consumption,
      fuelPricePerLiter: fuelPrice,
      tollFee,
      passengerCount: passengers,
      roundTrip,
    });
  }, [distanceKm, consumption, fuelPrice, tollFee, passengers, roundTrip]);

  const summaryText = `🚗 สรุปผลคำนวณค่าน้ำมัน & หารค่าทริปท่องเที่ยว:
- ระยะทางรวม: ${formatNumber(result.totalDistanceKm)} กม. (${roundTrip ? 'ไป-กลับ' : 'เที่ยวเดียว'})
- อัตราสิ้นเปลือง: ${consumption} กม./ลิตร (ใช้น้ำมันรวม ${result.totalLitersUsed.toFixed(1)} ลิตร)
- ค่าน้ำมันรวม: ${formatCurrency(result.totalFuelCost)}
- ค่าทางด่วนรวม: ${formatCurrency(result.totalTollFee)}
- รวมค่าใช้จ่ายการเดินทางทั้งทริป: ${formatCurrency(result.totalTripExpense)}
- เฉลี่ยจ่ายคนละ: ${formatCurrency(result.costPerPerson, 0)} บาท (${passengers} คน)
คำนวณฟรีที่: https://car-finance.in.th/trip-fuel-cost`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Fuel className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กรอกข้อมูลทริปเดินทาง</h2>
            </div>
            <button
              type="button"
              onClick={() => setRoundTrip(!roundTrip)}
              className="flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100"
            >
              {roundTrip ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
              <span>คิดแบบไป-กลับ (x2)</span>
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">
              ระยะทาง {roundTrip ? 'ขาเดียว' : 'ทั้งหมด'} (กิโลเมตร)
            </label>
            <input
              type="number"
              min={1}
              step={10}
              value={distanceKm || ''}
              onChange={(e) => setDistanceKm(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 350"
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {[150, 200, 350, 500, 700].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setDistanceKm(preset)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                    distanceKm === preset
                      ? 'bg-brand-600 text-white font-medium'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {preset} กม.
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800">อัตราสิ้นเปลือง (กม./ลิตร)</label>
              <input
                type="number"
                min={1}
                step={0.5}
                value={consumption || ''}
                onChange={(e) => setConsumption(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                placeholder="เช่น 14.5"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800">ราคาน้ำมัน (บาท/ลิตร)</label>
              <input
                type="number"
                min={1}
                step={0.1}
                value={fuelPrice || ''}
                onChange={(e) => setFuelPrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                placeholder="เช่น 37.8"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800">ค่าทางด่วน {roundTrip ? '(ขาเดียว)' : ''} (บาท)</label>
              <input
                type="number"
                min={0}
                step={10}
                value={tollFee || ''}
                onChange={(e) => setTollFee(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                placeholder="เช่น 160"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800">จำนวนคนร่วมทริป (คน)</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPassengers(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${
                      passengers === num
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                สรุปค่าใช้จ่ายเดินทางเฉลี่ยต่อคน
              </span>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                หาร {passengers} คน
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">จ่ายคนละประมาณ</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.costPerPerson, 0)}
                <span className="text-sm sm:text-lg font-normal text-slate-400 ml-2">/ คน</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                รวมระยะทางทั้งหมด {formatNumber(result.totalDistanceKm)} กม.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ค่าน้ำมันรวม</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.totalFuelCost)}
                </div>
                <span className="text-[10px] text-amber-300">{result.totalLitersUsed.toFixed(1)} ลิตร</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ค่าทางด่วนรวม</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.totalTollFee)}
                </div>
                <span className="text-[10px] text-slate-400">{roundTrip ? 'ไป-กลับ' : 'เที่ยวเดียว'}</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ค่าเดินทางรวมทั้งทริป</span>
                <div className="text-base sm:text-lg font-bold text-amber-300 mt-0.5">
                  {formatCurrency(result.totalTripExpense)}
                </div>
                <span className="text-[10px] text-slate-400">น้ำมัน + ทางด่วน</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ต้นทุนเฉลี่ยต่อ กม.</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.costPerKm, 2)}
                </div>
                <span className="text-[10px] text-slate-400">บาท / กิโลเมตร</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลคำนวณค่าน้ำมัน & หารค่าทริปท่องเที่ยว"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="insurance" customTitle="ขับรถเที่ยวทางไกล เช็คความคุ้มครองประกันภัยก่อนออกเดินทาง" />
    </div>
  );
};
