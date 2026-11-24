'use client';

import React, { useState, useMemo } from 'react';
import { Wallet, ShieldCheck, AlertTriangle, CheckCircle2, DollarSign, HelpCircle, Car } from 'lucide-react';
import { calculateSalaryAffordability } from '@/lib/formulas/salary-affordability';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const SalaryAffordabilityCalc: React.FC = () => {
  const [monthlySalary, setMonthlySalary] = useState<number>(35000);
  const [existingDebt, setExistingDebt] = useState<number>(5000);
  const [dsrPercentage, setDsrPercentage] = useState<number>(45); // 45% DSR
  const [downPercent, setDownPercent] = useState<number>(20); // 20%
  const [interestRate, setInterestRate] = useState<number>(2.79);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);

  const result = useMemo(() => {
    return calculateSalaryAffordability({
      monthlySalary,
      existingDebt,
      dsrPercentage,
      downPaymentPercent: downPercent,
      interestRate,
      loanTermMonths,
    });
  }, [monthlySalary, existingDebt, dsrPercentage, downPercent, interestRate, loanTermMonths]);

  const summaryText = `📊 สรุปผลวิเคราะห์เงินเดือนกับวงเงินซื้อรถยนต์:
- เงินเดือนสุทธิ: ${formatCurrency(result.monthlySalary)}
- ภาระหนี้เดิม: ${formatCurrency(existingDebt)}/เดือน
- ค่างวดรถสูงสุดที่กู้ผ่าน: ${formatCurrency(result.maxCarInstallment)}/เดือน
- วงเงินกู้สูงสุด: ${formatCurrency(result.maxLoanAmount)}
- ราคารถสูงสุดที่แนะนำ (ดาวน์ ${downPercent}%): ${formatCurrency(result.maxCarPrice)}
- สถานะความปลอดภัย: ${result.safetyLabel}
- คำแนะนำ: ${result.recommendation}
คำนวณฟรีที่: https://phonrod.com/salary-car-affordability`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กรอกข้อมูลรายได้และภาระหนี้</h2>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
              เกณฑ์ DSR ไฟแนนซ์
            </span>
          </div>

          {/* Salary */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800">
              ฐานเงินเดือนสุทธิ / รายได้ต่อเดือน (บาท)
            </label>
            <div className="relative">
              <input
                type="number"
                min={0}
                step={5000}
                value={monthlySalary || ''}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 font-bold text-lg"
                placeholder="เช่น 35000"
              />
              <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {[20000, 35000, 50000, 80000, 120000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setMonthlySalary(preset)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                    monthlySalary === preset
                      ? 'bg-brand-600 text-white font-medium'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {formatCurrency(preset)}
                </button>
              ))}
            </div>
          </div>

          {/* Existing Debt */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">ภาระหนี้เดิมต่อเดือน (บาท)</label>
              <span className="text-xs text-slate-500">บัตรเครดิต, ผ่อนบ้าน, สินเชื่อส่วนบุคคล</span>
            </div>
            <div className="relative">
              <input
                type="number"
                min={0}
                step={1000}
                value={existingDebt || ''}
                onChange={(e) => setExistingDebt(Number(e.target.value))}
                className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 font-bold text-lg"
                placeholder="เช่น 5000 (ถ้าไม่มีใส่ 0)"
              />
              <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท</span>
            </div>
          </div>

          {/* DSR Percentage */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">
                สัดส่วนภาระหนี้สูงสุด (DSR %)
              </label>
              <span className="text-xs text-slate-500">ไฟแนนซ์ส่วนใหญ่กำหนด 40 - 50%</span>
            </div>
            <div className="flex gap-2">
              {[35, 40, 45, 50, 60].map((dsr) => (
                <button
                  key={dsr}
                  type="button"
                  onClick={() => setDsrPercentage(dsr)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    dsrPercentage === dsr
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dsr}%
                </button>
              ))}
            </div>
          </div>

          {/* Down & Loan Term */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">วางแผนดาวน์ (%)</label>
              <select
                value={downPercent}
                onChange={(e) => setDownPercent(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800"
              >
                <option value={10}>10% (ต้องมีคนค้ำ)</option>
                <option value={15}>15% (อาจต้องมีคนค้ำ)</option>
                <option value={20}>20% (มาตรฐาน ไม่ต้องค้ำ)</option>
                <option value={25}>25% (ผ่านง่าย ดอกเบี้ยถูก)</option>
                <option value={30}>30% (ดาวน์สูง ดอกถูกสุด)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">ระยะเวลาผ่อน (ปี)</label>
              <select
                value={loanTermMonths}
                onChange={(e) => setLoanTermMonths(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800"
              >
                <option value={48}>4 ปี (48 งวด)</option>
                <option value={60}>5 ปี (60 งวด)</option>
                <option value={72}>6 ปี (72 งวด)</option>
                <option value={84}>7 ปี (84 งวด)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            {/* Safety status badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                ผลประเมินศักยภาพการกู้ซื้อรถ
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold inline-flex items-center ${
                  result.safetyTier === 'green'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : result.safetyTier === 'yellow'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}
              >
                {result.safetyTier === 'green' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 mr-1" />
                )}
                {result.safetyLabel}
              </span>
            </div>

            {/* Max Car Price Display */}
            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">ราคารถยนต์สูงสุดที่สามารถซื้อได้</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.maxCarPrice)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                (เมื่อวางเงินดาวน์ {downPercent}% = {formatCurrency(result.requiredDownPayment)})
              </p>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ค่างวดรถสูงสุดที่กู้ผ่าน</span>
                <div className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5">
                  {formatCurrency(result.maxCarInstallment)}
                  <span className="text-xs font-normal text-slate-400">/เดือน</span>
                </div>
                <span className="text-[10px] text-slate-400">หลังหักหนี้เดิมแล้ว</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">วงเงินกู้ไฟแนนซ์สูงสุด</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.maxLoanAmount)}
                </div>
                <span className="text-[10px] text-indigo-300">ระยะเวลา {loanTermMonths/12} ปี</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ภาระหนี้รวมต่อเดือน (DSR)</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.maxTotalDebtAllowed)}
                </div>
                <span className="text-[10px] text-slate-400">คิดเป็น {dsrPercentage}% ของเงินเดือน</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">เงินเดือนคงเหลือใช้จ่าย</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.netRemainingIncome)}
                </div>
                <span className="text-[10px] text-slate-400">กิน อยู่ ท่องเที่ยว ออม</span>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white block mb-1">💡 คำแนะนำจากผู้เชี่ยวชาญการเงิน:</span>
              {result.recommendation}
            </div>

            <div className="mt-6 flex items-center justify-end">
              <ShareResultModal
                title="ผลวิเคราะห์เงินเดือนกับวงเงินกู้ซื้อรถยนต์"
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
