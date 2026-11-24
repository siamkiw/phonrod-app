'use client';

import React, { useState, useMemo } from 'react';
import { BadgePercent, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';
import { calculateEarlyPayoff } from '@/lib/formulas/early-payoff';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const EarlyPayoffCalc: React.FC = () => {
  const [totalLoan, setTotalLoan] = useState<number>(600000); // ยอดจัด
  const [flatRate, setFlatRate] = useState<number>(2.79); // 2.79%
  const [totalMonths, setTotalMonths] = useState<number>(60); // 5 years
  const [paidMonths, setPaidMonths] = useState<number>(36); // Paid 36 months (60% done)

  const result = useMemo(() => {
    return calculateEarlyPayoff({
      totalLoanAmount: totalLoan,
      flatInterestRate: flatRate,
      totalContractMonths: totalMonths,
      paidMonths,
    });
  }, [totalLoan, flatRate, totalMonths, paidMonths]);

  const summaryText = `📑 สรุปผลคำนวณปิดยอดรถก่อนกำหนด (เกณฑ์ สคบ. ใหม่):
- ยอดจัดเริ่มต้น: ${formatCurrency(result.totalLoanAmount)} (ดอกเบี้ย ${flatRate}% / ${totalMonths} งวด)
- ผ่อนไปแล้ว: ${paidMonths} งวด (เหลือ ${result.remainingMonths} งวด คิดเป็น ${result.paidRatioPercent.toFixed(1)}% ของสัญญา)
- เกณฑ์ส่วนลด สคบ.: ได้รับส่วนลดดอกเบี้ยคงเหลือ ${result.ocpbDiscountPercent}% (${result.ocpbDiscountTier})
- ดอกเบี้ยที่ได้รับการยกเว้น: ${formatCurrency(result.interestDiscountAmount)}
- ยอดเงินสุทธิที่ต้องจ่ายปิดบัญชีจริง: ${formatCurrency(result.totalPayoffAmount)}
- เงินที่ประหยัดได้เทียบกับผ่อนต่อ: ${formatCurrency(result.savingsFromPayoff)}
คำนวณฟรีที่: https://phonrod.com/car-loan-early-payoff`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <BadgePercent className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กรอกข้อมูลสัญญาเช่าซื้อเดิม</h2>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold">
              กฎหมาย สคบ. ใหม่
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">
              ยอดจัดไฟแนนซ์เริ่มต้น (เงินต้นกู้ ไม่รวมดาวน์)
            </label>
            <div className="relative">
              <input
                type="number"
                min={0}
                step={10000}
                value={totalLoan || ''}
                onChange={(e) => setTotalLoan(Number(e.target.value))}
                className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 font-bold text-slate-900 text-lg"
                placeholder="เช่น 600000"
              />
              <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800">ดอกเบี้ยตามสัญญา (% Flat Rate)</label>
              <input
                type="number"
                step={0.05}
                value={flatRate || ''}
                onChange={(e) => setFlatRate(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                placeholder="เช่น 2.79"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800">จำนวนงวดทั้งหมดตามสัญญา</label>
              <select
                value={totalMonths}
                onChange={(e) => setTotalMonths(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-300 font-semibold"
              >
                {[24, 36, 48, 60, 72, 84].map((m) => (
                  <option key={m} value={m}>
                    {m} งวด ({m / 12} ปี)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Paid Months Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-800">
                จำนวนงวดที่ผ่อนชำระไปแล้ว: <span className="text-brand-600 font-bold">{paidMonths} งวด</span>
              </label>
              <span className="text-xs text-slate-500">
                (เหลือ {result.remainingMonths} งวด)
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={totalMonths - 1}
              value={paidMonths}
              onChange={(e) => setPaidMonths(Number(e.target.value))}
              className="w-full accent-brand-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />

            {/* OCPB Tier highlight indicator */}
            <div className="p-3.5 rounded-2xl bg-brand-50/70 border border-brand-200/60 text-xs text-brand-900 space-y-1">
              <div className="font-bold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>ขั้นบันไดส่วนลด สคบ. ของคุณ:</span>
              </div>
              <p className="text-[11px] text-brand-800">{result.ocpbDiscountTier}</p>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                ยอดเงินสุทธิที่ต้องจ่ายปิดบัญชีจริง
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 font-bold">
                ลดดอกเบี้ย {result.ocpbDiscountPercent}%
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">ยอดชำระปิดยอดไฟแนนซ์สุทธิ (รวม VAT 7%)</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.totalPayoffAmount)}
              </div>
              <p className="text-xs text-emerald-300 mt-1 font-semibold">
                (ประหยัดเงินได้ทันที {formatCurrency(result.savingsFromPayoff)} เทียบกับผ่อนต่อจนจบ)
              </p>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">เงินต้นคงค้างแท้จริง</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.outstandingPrincipal)}
                </div>
                <span className="text-[10px] text-slate-400">เหลือ {result.remainingMonths} งวด</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-emerald-400">ส่วนลดดอกเบี้ยที่ได้ลด</span>
                <div className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5">
                  -{formatCurrency(result.interestDiscountAmount)}
                </div>
                <span className="text-[10px] text-slate-400">ตามกฎหมาย สคบ.</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ดอกเบี้ยคงเหลือทั้งหมด</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.unearnedInterestTotal)}
                </div>
                <span className="text-[10px] text-slate-400">Rule of 78</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">ยอดเดิมถ้าผ่อนต่อ</span>
                <div className="text-base sm:text-lg font-bold text-slate-400 mt-0.5 line-through">
                  {formatCurrency(result.scheduledRemainingPayment)}
                </div>
                <span className="text-[10px] text-slate-400">ผ่อนตามตาราง</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลคำนวณปิดยอดรถก่อนกำหนด (สคบ.)"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="refinance" customTitle="เงินก้อนยังไม่พอปิดยอด? รีไฟแนนซ์ช่วยลดดอกเบี้ยและยืดเวลาผ่อนได้" />
    </div>
  );
};
