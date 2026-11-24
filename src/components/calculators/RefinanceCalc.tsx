'use client';

import React, { useState, useMemo } from 'react';
import { RefreshCw, DollarSign, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { calculateRefinance } from '@/lib/formulas/refinance';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const RefinanceCalc: React.FC = () => {
  const [currentDebt, setCurrentDebt] = useState<number>(380000);
  const [currentMonthly, setCurrentMonthly] = useState<number>(11200);
  const [currentMonths, setCurrentMonths] = useState<number>(36);
  const [newLoanAmount, setNewLoanAmount] = useState<number>(450000); // Want 70k cashback
  const [newRate, setNewRate] = useState<number>(3.5); // 3.5% flat
  const [newMonths, setNewMonths] = useState<number>(60); // extend to 60 months

  const result = useMemo(() => {
    return calculateRefinance({
      currentDebtBalance: currentDebt,
      currentMonthlyPayment: currentMonthly,
      currentRemainingMonths: currentMonths,
      newLoanAmount,
      newInterestRate: newRate,
      newLoanTermMonths: newMonths,
    });
  }, [currentDebt, currentMonthly, currentMonths, newLoanAmount, newRate, newMonths]);

  const summaryText = `🔄 สรุปผลคำนวณรีไฟแนนซ์รถยนต์:
- สัญญาเดิม: ค่างวด ${formatCurrency(result.currentMonthlyPayment)}/เดือน (เหลือ ${currentMonths} งวด ยอดรวม ${formatCurrency(result.currentTotalRemainingPayment)})
- สัญญาใหม่: ค่างวดใหม่ ${formatCurrency(result.newMonthlyPayment)}/เดือน (${newMonths} งวด)
- ผ่อนเบาลง: ${result.monthlySavings > 0 ? `${formatCurrency(result.monthlySavings)}/เดือน` : 'ไม่ลดลง'}
- เงินสดก้อนเหลือเข้ากระเป๋า (Cashback): ${formatCurrency(result.cashbackAmount)}
- บทวิเคราะห์: ${result.verdict}
คำนวณฟรีที่: https://phonrod.com/car-refinance-calculator`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">เปรียบเทียบสัญญาเดิม vs สัญญาใหม่</h2>
            </div>
          </div>

          {/* Current Contract */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              1. ข้อมูลสัญญาเดิม (ที่ผ่อนอยู่ปัจจุบัน)
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">ยอดปิดหนี้เดิม (บาท)</label>
                <input
                  type="number"
                  value={currentDebt || ''}
                  onChange={(e) => setCurrentDebt(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="เช่น 380000"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">ค่างวดเดิม/เดือน (บาท)</label>
                <input
                  type="number"
                  value={currentMonthly || ''}
                  onChange={(e) => setCurrentMonthly(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="เช่น 11200"
                />
              </div>
              <div className="col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">จำนวนงวดเดิมที่เหลือ (งวด)</label>
                <input
                  type="number"
                  value={currentMonths || ''}
                  onChange={(e) => setCurrentMonths(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="เช่น 36"
                />
              </div>
            </div>
          </div>

          {/* New Contract */}
          <div className="p-4 rounded-2xl bg-brand-50/50 border border-brand-200/60 space-y-3">
            <span className="text-xs font-bold text-brand-900 uppercase tracking-wider block">
              2. ข้อเสนอรีไฟแนนซ์ใหม่
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">วงเงินกู้ใหม่ที่ต้องการ (บาท)</label>
                <input
                  type="number"
                  value={newLoanAmount || ''}
                  onChange={(e) => setNewLoanAmount(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-brand-700"
                  placeholder="เช่น 450000"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">ดอกเบี้ยใหม่ (% ต่อปี)</label>
                <input
                  type="number"
                  step={0.1}
                  value={newRate || ''}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="เช่น 3.5"
                />
              </div>
              <div className="col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">ขยายระยะเวลาผ่อนใหม่ (งวด)</label>
                <div className="grid grid-cols-4 gap-2">
                  {[48, 60, 72, 84].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setNewMonths(term)}
                      className={`py-2 rounded-xl text-xs font-semibold ${
                        newMonths === term ? 'bg-brand-600 text-white' : 'bg-white border text-slate-700'
                      }`}
                    >
                      {term} งวด ({term / 12} ปี)
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                สรุปผลประโยชน์การรีไฟแนนซ์
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Refinance Simulation
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">ค่างวดใหม่ต่อเดือน</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.newMonthlyPayment)}
                <span className="text-sm sm:text-lg font-normal text-slate-400 ml-2">/ งวด</span>
              </div>
              {result.monthlySavings > 0 && (
                <p className="text-xs text-emerald-400 mt-1 font-medium">
                  (ผ่อนสบายขึ้น ลดลงเดือนละ {formatCurrency(result.monthlySavings)})
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">เงินสดคงเหลือ (Cashback)</span>
                <div className="text-base sm:text-lg font-bold text-amber-300 mt-0.5">
                  {formatCurrency(result.cashbackAmount)}
                </div>
                <span className="text-[10px] text-slate-400">รับเงินโอนเข้าบัญชี</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ค่างวดเดิม</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.currentMonthlyPayment)}
                </div>
                <span className="text-[10px] text-slate-400">เหลือ {currentMonths} งวด</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-200 leading-relaxed my-4">
              {result.verdict}
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลคำนวณรีไฟแนนซ์รถยนต์"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="refinance" />
    </div>
  );
};
