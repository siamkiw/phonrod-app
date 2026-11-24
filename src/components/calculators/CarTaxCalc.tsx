'use client';

import React, { useState, useMemo } from 'react';
import { ShieldAlert, Car, Truck, Bus, Zap, Info, CheckCircle2 } from 'lucide-react';
import { calculateCarTax, VehicleTaxType } from '@/lib/formulas/car-tax';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const CarTaxCalc: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<VehicleTaxType>('sedan');
  const [engineCc, setEngineCc] = useState<number>(1498);
  const [curbWeight, setCurbWeight] = useState<number>(1500);
  const [vehicleAge, setVehicleAge] = useState<number>(7);

  const result = useMemo(() => {
    return calculateCarTax({
      vehicleType,
      engineCc,
      curbWeightKg: curbWeight,
      vehicleAgeYears: vehicleAge,
    });
  }, [vehicleType, engineCc, curbWeight, vehicleAge]);

  const summaryText = `📋 สรุปผลคำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ตรวจ ตรอ.:
- ประเภทรถ: ${vehicleType === 'sedan' ? `รถเก๋ง (${engineCc} ซีซี)` : vehicleType === 'pickup' ? 'รถกระบะบรรทุก' : vehicleType === 'van' ? 'รถตู้' : 'รถยนต์ไฟฟ้า EV'}
- อายุการใช้งาน: ${vehicleAge} ปี (ส่วนลดภาษี ${result.discountPercent}%)
- ภาษีประจำปีสุทธิ: ${formatCurrency(result.netAnnualTax)}
- ค่า พ.ร.บ. บังคับ: ${formatCurrency(result.actFee, 2)}
- ค่าตรวจสภาพ ตรอ.: ${formatCurrency(result.inspectionFee)} (ตรวจเมื่ออายุเกิน 7 ปี)
- ยอดรวมสุทธิที่ต้องชำระ: ${formatCurrency(result.totalPayable, 2)}
คำนวณฟรีที่: https://phonrod.com/car-tax-calculator`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">เลือกประเภทและข้อมูลรถ</h2>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
              อัตรากรมการขนส่งทางบก
            </span>
          </div>

          {/* Vehicle Type selector */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">ประเภทรถยนต์ตามกฎหมาย</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setVehicleType('sedan')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center space-y-1.5 ${
                  vehicleType === 'sedan'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 font-bold ring-2 ring-brand-500/20'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Car className="w-5 h-5" />
                <span className="text-xs">รถเก๋ง / SUV (รย.1)</span>
              </button>

              <button
                type="button"
                onClick={() => setVehicleType('pickup')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center space-y-1.5 ${
                  vehicleType === 'pickup'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 font-bold ring-2 ring-brand-500/20'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span className="text-xs">กระบะบรรทุก (รย.3)</span>
              </button>

              <button
                type="button"
                onClick={() => setVehicleType('van')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center space-y-1.5 ${
                  vehicleType === 'van'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 font-bold ring-2 ring-brand-500/20'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Bus className="w-5 h-5" />
                <span className="text-xs">รถตู้ส่วนบุคคล (รย.2)</span>
              </button>

              <button
                type="button"
                onClick={() => setVehicleType('ev')}
                className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center space-y-1.5 ${
                  vehicleType === 'ev'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 font-bold ring-2 ring-brand-500/20'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Zap className="w-5 h-5" />
                <span className="text-xs">รถไฟฟ้า (EV)</span>
              </button>
            </div>
          </div>

          {/* Engine CC for Sedan */}
          {vehicleType === 'sedan' && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-semibold text-slate-800">ขนาดเครื่องยนต์ (ซีซี / CC)</label>
                <span className="text-xs text-slate-500">คิดภาษีแบบขั้นบันได</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min={500}
                  max={6000}
                  step={50}
                  value={engineCc || ''}
                  onChange={(e) => setEngineCc(Number(e.target.value))}
                  className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 text-slate-900 font-bold text-lg"
                  placeholder="เช่น 1498"
                />
                <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">CC</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[1197, 1498, 1798, 1987, 2494, 2998].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setEngineCc(preset)}
                    className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                      engineCc === preset
                        ? 'bg-brand-600 text-white font-medium'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {preset} cc
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Weight for Pickup / Van / EV */}
          {(vehicleType === 'pickup' || vehicleType === 'van' || vehicleType === 'ev') && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800">น้ำหนักตัวรถ (กิโลกรัม / kg)</label>
              <input
                type="number"
                min={500}
                max={4000}
                step={50}
                value={curbWeight || ''}
                onChange={(e) => setCurbWeight(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                placeholder="เช่น 1500"
              />
            </div>
          )}

          {/* Vehicle Age Selector */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-slate-800">อายุการใช้งานรถยนต์ (ปีที่)</label>
              <span className="text-xs text-brand-600 font-medium">
                {vehicleAge >= 6 ? `ได้รับส่วนลด ${result.discountPercent}%` : 'ยังไม่ได้รับส่วนลด'}
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[1, 3, 5, 6, 7, 8, 9, 10, 12, 15].map((age) => (
                <button
                  key={age}
                  type="button"
                  onClick={() => setVehicleAge(age)}
                  className={`py-2 rounded-xl text-xs font-semibold transition-colors ${
                    vehicleAge === age
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {age >= 10 ? '10+ ปี' : `ปีที่ ${age}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                สรุปยอดต่อภาษี + พ.ร.บ. ประจำปี
              </span>
              {result.requiresInspection && (
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                  ต้องตรวจ ตรอ. (รถเกิน 7 ปี)
                </span>
              )}
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">ยอดเงินสุทธิที่ต้องเตรียมชำระ</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.totalPayable, 2)}
              </div>
            </div>

            <div className="space-y-2.5 my-6">
              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-slate-300 block">1. ภาษีรถยนต์ประจำปี</span>
                  {result.discountPercent > 0 && (
                    <span className="text-[11px] text-emerald-400">
                      (ฐาน {formatCurrency(result.baseTax)} ลดหย่อน {result.discountPercent}% = -{formatCurrency(result.discountAmount)})
                    </span>
                  )}
                </div>
                <span className="font-bold text-amber-300">{formatCurrency(result.netAnnualTax)}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-slate-300 block">2. ค่า พ.ร.บ. คุ้มครองผู้ประสบภัยจากรถ</span>
                  <span className="text-[11px] text-slate-400">รวม VAT และอากรแสตมป์</span>
                </div>
                <span className="font-bold text-white">{formatCurrency(result.actFee, 2)}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-slate-300 block">3. ค่าตรวจสภาพรถ ตรอ.</span>
                  <span className="text-[11px] text-slate-400">
                    {result.requiresInspection ? 'อายุเกิน 7 ปี บังคับตรวจ' : 'อายุไม่เกิน 7 ปี ไม่ต้องตรวจ'}
                  </span>
                </div>
                <span className="font-bold text-white">{formatCurrency(result.inspectionFee)}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลคำนวณภาษีรถยนต์ประจำปี + พ.ร.บ."
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="insurance" customTitle="ต่อ พ.ร.บ. แล้ว ซื้อประกันรถยนต์ภาคสมัครใจชั้น 1, 2+, 3+ ผ่อน 0%" />
    </div>
  );
};
