'use client';

import React, { useState, useMemo } from 'react';
import { FileCheck, DollarSign, CheckSquare, Square, Info } from 'lucide-react';
import { calculateTransferFee } from '@/lib/formulas/transfer-fee';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const TransferFeeCalc: React.FC = () => {
  const [appraisalPrice, setAppraisalPrice] = useState<number>(450000);
  const [includePlate, setIncludePlate] = useState<boolean>(false);
  const [includeBook, setIncludeBook] = useState<boolean>(false);

  const result = useMemo(() => {
    return calculateTransferFee({
      appraisalPrice,
      includePlateFee: includePlate,
      includeBookFee: includeBook,
    });
  }, [appraisalPrice, includePlate, includeBook]);

  const summaryText = `📝 สรุปค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก:
- ราคาประเมินรถยนต์: ${formatCurrency(result.appraisalPrice)}
- ค่าอากรแสตมป์ (0.5% หรือ 500 บาทต่อแสน): ${formatCurrency(result.stampDuty)}
- ค่าธรรมเนียมการโอน: ${formatCurrency(result.transferFee)}
- ค่าคำขอ: ${formatCurrency(result.applicationFee)}
- ค่าตรวจสภาพรถ: ${formatCurrency(result.inspectionFee)}
- ยอดรวมที่ต้องเตรียมไปจ่ายที่ขนส่ง: ${formatCurrency(result.totalWithOptional)}
คำนวณฟรีที่: https://car-finance.in.th/car-transfer-fee-calculator`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">กรอกราคาประเมินรถยนต์</h2>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
              อัตรากรมการขนส่งทางบก
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">
                ราคาประเมินของกรมการขนส่ง (หรือราคาซื้อขายจริง)
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                min={0}
                step={10000}
                value={appraisalPrice || ''}
                onChange={(e) => setAppraisalPrice(Number(e.target.value))}
                className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 font-bold text-lg"
                placeholder="เช่น 450000"
              />
              <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {[250000, 450000, 650000, 900000, 1500000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAppraisalPrice(preset)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                    appraisalPrice === preset
                      ? 'bg-brand-600 text-white font-medium'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {formatCurrency(preset)}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Checkboxes */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              ค่าธรรมเนียมเพิ่มเติม (กรณีพิเศษ)
            </span>

            <button
              type="button"
              onClick={() => setIncludePlate(!includePlate)}
              className="flex items-center space-x-3 w-full p-3 rounded-2xl border border-slate-200 text-left hover:bg-slate-50 transition-colors"
            >
              {includePlate ? (
                <CheckSquare className="w-5 h-5 text-brand-600 flex-shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-slate-400 flex-shrink-0" />
              )}
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-slate-800 block">ขอเปลี่ยนป้ายทะเบียนใหม่ (+200 บาท)</span>
                <span className="text-slate-500 text-[11px]">กรณีป้ายชำรุด หรือย้ายจังหวัดปลายทาง</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIncludeBook(!includeBook)}
              className="flex items-center space-x-3 w-full p-3 rounded-2xl border border-slate-200 text-left hover:bg-slate-50 transition-colors"
            >
              {includeBook ? (
                <CheckSquare className="w-5 h-5 text-brand-600 flex-shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-slate-400 flex-shrink-0" />
              )}
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-slate-800 block">ออกใบคู่มือจดทะเบียนใหม่ (+100 บาท)</span>
                <span className="text-slate-500 text-[11px]">กรณีเล่มทะเบียนเดิมชำรุดหรือสูญหาย</span>
              </div>
            </button>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                สรุปค่าธรรมเนียมที่ต้องชำระ
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                จ่าย ณ กรมการขนส่ง
              </span>
            </div>

            <div className="my-4">
              <div className="text-xs sm:text-sm text-slate-300">ยอดเงินรวมที่ต้องเตรียมไปจ่าย</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-amber-300 tracking-tight mt-1">
                {formatCurrency(result.totalWithOptional)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                (คิดจากราคาประเมิน {formatCurrency(result.appraisalPrice)})
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2.5 my-6">
              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-slate-300">1. ค่าอากรแสตมป์ (0.5% หรือ 500 บ./แสน)</span>
                <span className="font-bold text-amber-300">{formatCurrency(result.stampDuty)}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-slate-300">2. ค่าธรรมเนียมการโอนกรรมสิทธิ์</span>
                <span className="font-bold text-white">{formatCurrency(result.transferFee)}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-slate-300">3. ค่าตรวจสภาพรถยนต์</span>
                <span className="font-bold text-white">{formatCurrency(result.inspectionFee)}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-slate-300">4. ค่าคำขอ</span>
                <span className="font-bold text-white">{formatCurrency(result.applicationFee)}</span>
              </div>

              {includePlate && (
                <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-brand-500/10 border border-brand-400/20">
                  <span className="text-brand-200">+ ค่าเปลี่ยนป้ายทะเบียน</span>
                  <span className="font-bold text-brand-300">{formatCurrency(result.optionalPlateFee)}</span>
                </div>
              )}

              {includeBook && (
                <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-2xl bg-brand-500/10 border border-brand-400/20">
                  <span className="text-brand-200">+ ค่าออกเล่มสมุดคู่มือใหม่</span>
                  <span className="font-bold text-brand-300">{formatCurrency(result.optionalBookFee)}</span>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <ShareResultModal
                title="ผลคำนวณค่าโอนรถยนต์มือสอง กรมการขนส่ง"
                summaryText={summaryText}
              />
            </div>
          </div>

          <AdBanner slot="in-article" />
        </div>
      </div>

      <AffiliateCard type="insurance" customTitle="โอนรถแล้ว อย่าลืมทำประกันภัยรถยนต์ต่อเนื่อง" />
    </div>
  );
};
