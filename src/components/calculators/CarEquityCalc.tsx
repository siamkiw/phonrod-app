'use client';

import React, { useState, useMemo } from 'react';
import { Coins, AlertTriangle, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';
import { calculateCarEquity } from '@/lib/formulas/car-equity';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const CarEquityCalc: React.FC = () => {
  const [sellingPrice, setSellingPrice] = useState<number>(520000);
  const [monthlyInstallment, setMonthlyInstallment] = useState<number>(10500);
  const [remainingMonths, setRemainingMonths] = useState<number>(36);
  const [transferFee, setTransferFee] = useState<number>(4000);

  const result = useMemo(() => {
    return calculateCarEquity({
      targetSellingPrice: sellingPrice,
      monthlyInstallment,
      remainingMonths,
      contractTransferFee: transferFee,
    });
  }, [sellingPrice, monthlyInstallment, remainingMonths, transferFee]);

  const summaryText = `💰 สรุปผลคำนวณขายดาวน์ & หนี้คงเหลือรถยนต์:
- ราคาตั้งขาย: ${formatCurrency(result.targetSellingPrice)}
- หนี้ไฟแนนซ์คงเหลือ (${remainingMonths} งวด x ${formatCurrency(monthlyInstallment)}): ${formatCurrency(result.remainingFinanceDebt)}
- มูลค่าสุทธิ (Equity): ${formatCurrency(result.netEquity)}
- ผลลัพธ์: ${result.analysisNote}
- เงินที่ผู้ซื้อต้องเตรียม (ดาวน์ + ค่าเปลี่ยนสัญญา + ค่างวดล่วงหน้า): ${formatCurrency(result.totalBuyerDownPaymentRequired)}
คำนวณฟรีที่: https://phonrod.com/car-equity-calculator`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กรอกข้อมูลราคาขายและค่างวด</h2>
            </div>
            <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">
              ประเมิน Equity สุทธิ
            </span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">ราคาที่ต้องการขาย / ราคาตลาด (บาท)</label>
            <input
              type="number"
              min={0}
              step={10000}
              value={sellingPrice || ''}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 520000"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">ค่างวดเดิมต่อเดือน (บาท)</label>
            <input
              type="number"
              min={0}
              step={500}
              value={monthlyInstallment || ''}
              onChange={(e) => setMonthlyInstallment(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 10500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-800">จำนวนงวดที่เหลือ (งวด)</label>
            <input
              type="number"
              min={1}
              max={84}
              value={remainingMonths || ''}
              onChange={(e) => setRemainingMonths(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 36"
            />
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex justify-between">
              <label className="text-xs font-semibold text-slate-800">ค่าธรรมเนียมเปลี่ยนสัญญาไฟแนนซ์ (บาท)</label>
              <span className="text-[11px] text-slate-500">ปกติ 3,000 - 5,000 บาท</span>
            </div>
            <input
              type="number"
              min={0}
              step={500}
              value={transferFee || ''}
              onChange={(e) => setTransferFee(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-brand-500"
              placeholder="เช่น 4000"
            />
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                สถานะมูลค่าสุทธิ (Car Equity)
              </span>
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold inline-flex items-center ${
                  result.outcomeType === 'cash_in'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}
              >
                {result.outcomeType === 'cash_in' ? 'ขายดาวน์ได้เงินสด' : 'หนี้ท่วมมูลค่ารถ'}
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">มูลค่าสุทธิหลังหักหนี้ไฟแนนซ์ (Net Equity)</div>
              <div className={`text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 ${
                result.netEquity >= 0 ? 'text-emerald-300' : 'text-rose-400'
              }`}>
                {result.netEquity >= 0 ? `+${formatCurrency(result.netEquity)}` : formatCurrency(result.netEquity)}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed my-5">
              {result.analysisNote}
            </div>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">หนี้ไฟแนนซ์คงค้าง</span>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {formatCurrency(result.remainingFinanceDebt)}
                </div>
                <span className="text-[10px] text-slate-400">{remainingMonths} งวด</span>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                <span className="text-[11px] text-slate-400">เงินที่ผู้ซื้อต้องเตรียมทั้งหมด</span>
                <div className="text-base sm:text-lg font-bold text-amber-300 mt-0.5">
                  {formatCurrency(result.totalBuyerDownPaymentRequired)}
                </div>
                <span className="text-[10px] text-slate-400">(รวมค่างวดล่วงหน้า 2 งวด)</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลคำนวณขายดาวน์ & หนี้คงเหลือรถยนต์"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="refinance" customTitle="ไม่อยากขายดาวน์? ลองพิจารณารีไฟแนนซ์เพื่อลดค่างวด" />
    </div>
  );
};
