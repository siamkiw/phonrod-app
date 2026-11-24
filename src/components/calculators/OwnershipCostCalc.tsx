'use client';

import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign, PieChart, AlertCircle, Fuel, Shield, Wrench, ParkingCircle } from 'lucide-react';
import { calculateOwnershipCost } from '@/lib/formulas/ownership-cost';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const OwnershipCostCalc: React.FC = () => {
  const [monthlyInstallment, setMonthlyInstallment] = useState<number>(11500);
  const [monthlyFuel, setMonthlyFuel] = useState<number>(3500);
  const [annualInsurance, setAnnualInsurance] = useState<number>(18000);
  const [annualMaintenance, setAnnualMaintenance] = useState<number>(12000);
  const [annualTaxAndAct, setAnnualTaxAndAct] = useState<number>(2500);
  const [monthlyParkingAndTolls, setMonthlyParkingAndTolls] = useState<number>(1200);
  const [monthlySalary, setMonthlySalary] = useState<number>(45000);

  const result = useMemo(() => {
    return calculateOwnershipCost({
      monthlyInstallment,
      monthlyFuelOrCharging: monthlyFuel,
      annualInsurance,
      annualMaintenance,
      annualTaxAndAct,
      monthlyParkingAndTolls,
      monthlySalary,
    });
  }, [monthlyInstallment, monthlyFuel, annualInsurance, annualMaintenance, annualTaxAndAct, monthlyParkingAndTolls, monthlySalary]);

  const summaryText = `🚗 สรุปผลคำนวณต้นทุนการมีรถจริง (Total Cost of Ownership - TCO):
- รวมค่าใช้จ่ายรถยนต์ต่อเดือน: ${formatCurrency(result.monthlyTotal)} / เดือน
- รวมค่าใช้จ่ายรถยนต์ต่อปี: ${formatCurrency(result.annualTotal)} / ปี
- รวมค่าใช้จ่าย 5 ปี: ${formatCurrency(result.fiveYearTotal)}
- ต้นทุนเฉลี่ยต่อวัน: ${formatCurrency(result.dailyCost, 0)} / วัน
- สัดส่วนเทียบกับเงินเดือน: ${result.salaryRatioPercent.toFixed(1)}% (${result.salaryVerdict})
คำนวณฟรีที่: https://phonrod.com/car-ownership-cost`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กรอกรายการค่าใช้จ่ายรถยนต์</h2>
            </div>
            <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">
              ต้นทุนจริงรวมทุกด้าน
            </span>
          </div>

          {/* 1. Monthly Installment */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">1. ค่างวดผ่อนรถต่อเดือน (บาท)</label>
            <input
              type="number"
              min={0}
              step={500}
              value={monthlyInstallment || ''}
              onChange={(e) => setMonthlyInstallment(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 11500 (ถ้าผ่อนหมดแล้วใส่ 0)"
            />
          </div>

          {/* 2. Fuel / Electric */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">2. ค่าน้ำมัน หรือ ค่าชาร์จไฟ ต่อเดือน (บาท)</label>
            <input
              type="number"
              min={0}
              step={500}
              value={monthlyFuel || ''}
              onChange={(e) => setMonthlyFuel(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 3500"
            />
          </div>

          {/* 3. Insurance (Annual) */}
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <label className="text-xs font-semibold text-slate-800">3. ค่าเบี้ยประกันภัย ต่อปี (บาท)</label>
              <span className="text-[11px] text-slate-500">ชั้น 1 เฉลี่ย 14,000 - 22,000</span>
            </div>
            <input
              type="number"
              min={0}
              step={1000}
              value={annualInsurance || ''}
              onChange={(e) => setAnnualInsurance(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 18000"
            />
          </div>

          {/* 4. Maintenance (Annual) */}
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <label className="text-xs font-semibold text-slate-800">4. ค่าบำรุงรักษา / เปลี่ยนยาง / เช็คระยะ ต่อปี (บาท)</label>
              <span className="text-[11px] text-slate-500">เฉลี่ย 8,000 - 15,000</span>
            </div>
            <input
              type="number"
              min={0}
              step={1000}
              value={annualMaintenance || ''}
              onChange={(e) => setAnnualMaintenance(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 12000"
            />
          </div>

          {/* 5. Tax & Act (Annual) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">5. ค่าภาษีประจำปี + พ.ร.บ. ต่อปี (บาท)</label>
            <input
              type="number"
              min={0}
              step={500}
              value={annualTaxAndAct || ''}
              onChange={(e) => setAnnualTaxAndAct(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 2500"
            />
          </div>

          {/* 6. Parking & Tolls */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">6. ค่าที่จอดรถ + ทางด่วน + ล้างรถ ต่อเดือน (บาท)</label>
            <input
              type="number"
              min={0}
              step={200}
              value={monthlyParkingAndTolls || ''}
              onChange={(e) => setMonthlyParkingAndTolls(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 1200"
            />
          </div>

          {/* 7. Monthly Salary */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <label className="text-xs font-semibold text-slate-800">เงินเดือนของคุณ (เพื่อเปรียบเทียบสัดส่วน %)</label>
            <input
              type="number"
              min={0}
              step={5000}
              value={monthlySalary || ''}
              onChange={(e) => setMonthlySalary(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 45000"
            />
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                สรุปต้นทุนการเป็นเจ้าของรถยนต์จริง
              </span>
              <span className="text-xs bg-brand-500/20 text-brand-300 px-2.5 py-1 rounded-full border border-brand-400/30">
                TCO Analysis
              </span>
            </div>

            {/* Monthly Total Display */}
            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">ต้นทุนแท้จริงที่ต้องจ่ายต่อเดือน</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.monthlyTotal)}
                <span className="text-sm sm:text-lg font-normal text-slate-400 ml-2">/ เดือน</span>
              </div>
              <div className="text-xs text-slate-300 mt-2 flex items-center space-x-2">
                <span>เฉลี่ยวันละ <strong>{formatCurrency(result.dailyCost, 0)}</strong> บาท</span>
                <span>•</span>
                <span>ปีละ <strong>{formatCurrency(result.annualTotal)}</strong> บาท</span>
              </div>
            </div>

            {/* Salary ratio bar */}
            {monthlySalary > 0 && (
              <div className="my-5 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">สัดส่วนค่าใช้จ่ายต่อเงินเดือน:</span>
                  <span className="font-bold text-amber-300">{result.salaryRatioPercent.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      result.salaryRatioPercent <= 30
                        ? 'bg-emerald-400'
                        : result.salaryRatioPercent <= 50
                        ? 'bg-amber-400'
                        : 'bg-rose-400'
                    }`}
                    style={{ width: `${Math.min(100, result.salaryRatioPercent)}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400">{result.salaryVerdict}</p>
              </div>
            )}

            {/* Expense Breakdown List */}
            <div className="space-y-2 my-6">
              <div className="text-xs font-bold text-slate-300 mb-2">สัดส่วนค่าใช้จ่ายรายเดือนแยกหมวด:</div>
              
              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5">
                <span className="text-slate-300">ค่างวดผ่อนรถ</span>
                <span className="font-bold text-white">
                  {formatCurrency(result.breakdown.installmentMonthly)} ({result.percentages.installment.toFixed(1)}%)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5">
                <span className="text-slate-300">ค่าน้ำมัน / ชาร์จไฟ</span>
                <span className="font-bold text-white">
                  {formatCurrency(result.breakdown.fuelMonthly)} ({result.percentages.fuel.toFixed(1)}%)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5">
                <span className="text-slate-300">ประกันภัยเฉลี่ยต่อเดือน</span>
                <span className="font-bold text-white">
                  {formatCurrency(result.breakdown.insuranceMonthly)} ({result.percentages.insurance.toFixed(1)}%)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5">
                <span className="text-slate-300">ค่าบำรุงรักษา + เช็คระยะเฉลี่ย</span>
                <span className="font-bold text-white">
                  {formatCurrency(result.breakdown.maintenanceMonthly)} ({result.percentages.maintenance.toFixed(1)}%)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5">
                <span className="text-slate-300">ภาษี + พรบ + ที่จอด/ทางด่วน</span>
                <span className="font-bold text-white">
                  {formatCurrency(result.breakdown.taxAndActMonthly + result.breakdown.parkingTollsMonthly)}
                </span>
              </div>
            </div>

            {/* 5-Year TCO Horizon */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-300">รวมค่าใช้จ่ายถือครองรถ 5 ปีเต็ม:</span>
              <span className="font-extrabold text-amber-300 text-base">{formatCurrency(result.fiveYearTotal)}</span>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลวิเคราะห์ต้นทุนการมีรถจริงต่อปี (TCO)"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="insurance" />
    </div>
  );
};
