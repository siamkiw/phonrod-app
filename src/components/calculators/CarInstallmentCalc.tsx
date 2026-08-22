'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calculator, 
  Percent, 
  Calendar, 
  DollarSign, 
  HelpCircle, 
  Sparkles, 
  FileText, 
  ArrowRight,
  TrendingDown,
  Info,
  Layers,
  ArrowLeftRight,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Clock
} from 'lucide-react';
import { 
  calculateCarInstallment, 
  calculateReverseCarBudget,
  CarInstallmentInput 
} from '@/lib/formulas/car-installment';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { AdBanner } from '@/components/ads/AdBanner';
import { AffiliateCard } from '@/components/affiliate/AffiliateCard';
import { ShareResultModal } from '@/components/common/ShareResultModal';

export const CarInstallmentCalc: React.FC = () => {
  // Mode selection: 'forward' (จากราคารถ) vs 'reverse' (จากงบผ่อน)
  const [calcMode, setCalcMode] = useState<'forward' | 'reverse'>('forward');

  // Forward inputs
  const [carPrice, setCarPrice] = useState<number>(850000);
  const [downType, setDownType] = useState<'percent' | 'amount'>('percent');
  const [downValue, setDownValue] = useState<number>(20); // 20%
  const [interestRate, setInterestRate] = useState<number>(2.59); // 2.59% flat
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60); // 5 years
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  // Reverse inputs
  const [monthlyBudget, setMonthlyBudget] = useState<number>(10000);
  const [reverseDownAmount, setReverseDownAmount] = useState<number>(100000);
  const [reverseRate, setReverseRate] = useState<number>(2.59);
  const [reverseTerm, setReverseTerm] = useState<number>(60);

  // URL state synchronization on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlPrice = params.get('price');
      const urlDown = params.get('down');
      const urlRate = params.get('rate');
      const urlTerm = params.get('term');
      const urlMode = params.get('mode');

      if (urlPrice) setCarPrice(Number(urlPrice));
      if (urlDown) setDownValue(Number(urlDown));
      if (urlRate) setInterestRate(Number(urlRate));
      if (urlTerm) setLoanTermMonths(Number(urlTerm));
      if (urlMode === 'reverse') setCalcMode('reverse');
    }
  }, []);

  // Calculate Forward Result
  const forwardResult = useMemo(() => {
    return calculateCarInstallment({
      carPrice,
      downPaymentType: downType,
      downPaymentValue: downValue,
      interestRate,
      loanTermMonths,
    });
  }, [carPrice, downType, downValue, interestRate, loanTermMonths]);

  // Calculate Reverse Result
  const reverseResult = useMemo(() => {
    return calculateReverseCarBudget({
      monthlyBudget,
      downPaymentAmount: reverseDownAmount,
      interestRate: reverseRate,
      loanTermMonths: reverseTerm,
    });
  }, [monthlyBudget, reverseDownAmount, reverseRate, reverseTerm]);

  // Generate deep-link shareable URL
  const shareableUrl = typeof window !== 'undefined' 
    ? calcMode === 'forward'
      ? `${window.location.origin}/car-installment-calculator?price=${carPrice}&down=${downValue}&rate=${interestRate}&term=${loanTermMonths}`
      : `${window.location.origin}/car-installment-calculator?mode=reverse&budget=${monthlyBudget}&down=${reverseDownAmount}&term=${reverseTerm}`
    : 'https://car-finance.in.th/car-installment-calculator';

  const forwardSummaryText = `🚗 สรุปผลคำนวณค่างวดรถยนต์:
- ราคารถ: ${formatCurrency(forwardResult.carPrice)}
- เงินดาวน์: ${formatCurrency(forwardResult.downPaymentAmount)} (${forwardResult.downPaymentPercent.toFixed(1)}%)
- ยอดจัดไฟแนนซ์: ${formatCurrency(forwardResult.loanPrincipal)}
- ดอกเบี้ยคงที่: ${interestRate}% ต่อปี (ระยะเวลา ${loanTermMonths} งวด)
- ค่างวดสุทธิ (รวม VAT 7%): ${formatCurrency(forwardResult.monthlyPayment)} / เดือน
- ดอกเบี้ยรวมตลอดสัญญา: ${formatCurrency(forwardResult.totalInterest)}
- ลิงก์ผลการคำนวณของคุณ: ${shareableUrl}`;

  const reverseSummaryText = `🎯 สรุปผลคำนวณงบผ่อนย้อนกลับ:
- งบผ่อนต่อเดือน: ${formatCurrency(monthlyBudget)} / เดือน
- เงินดาวน์ที่มี: ${formatCurrency(reverseDownAmount)}
- ช่วงราคารถที่ซื้อได้: ${formatCurrency(reverseResult.estimatedCarPriceMin)} - ${formatCurrency(reverseResult.estimatedCarPriceMax)} (ประมาณ ${formatCurrency(reverseResult.estimatedCarPriceMid)})
- กลุ่มรถยนต์แนะนำ: ${reverseResult.carTierRecommendation}
- ลิงก์ผลการคำนวณของคุณ: ${shareableUrl}`;

  return (
    <div className="space-y-10">
      {/* Mode Switcher Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-200/90 p-1.5 sm:p-2 rounded-2xl flex max-w-xl w-full border border-slate-300/80 shadow-sm">
          <button
            type="button"
            onClick={() => setCalcMode('forward')}
            className={`flex-1 py-3 sm:py-3.5 px-3 rounded-xl text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center space-x-2 transition-all ${
              calcMode === 'forward'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-600'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            <Calculator className={`w-4 h-4 sm:w-5 sm:h-5 ${calcMode === 'forward' ? 'text-white' : 'text-slate-500'}`} />
            <span>คำนวณจากราคารถ</span>
          </button>

          <button
            type="button"
            onClick={() => setCalcMode('reverse')}
            className={`flex-1 py-3 sm:py-3.5 px-3 rounded-xl text-xs sm:text-sm md:text-base font-extrabold flex items-center justify-center space-x-2 transition-all ${
              calcMode === 'reverse'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-600'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            <ArrowLeftRight className={`w-4 h-4 sm:w-5 sm:h-5 ${calcMode === 'reverse' ? 'text-white' : 'text-slate-500'}`} />
            <span>คำนวณจากงบผ่อนต่อเดือน</span>
          </button>
        </div>
      </div>

      {/* ================= MODE 1: FORWARD CALCULATOR ================= */}
      {calcMode === 'forward' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">กรอกข้อมูลการผ่อนรถ</h2>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                  คำนวณ Real-time
                </span>
              </div>

              {/* Input 1: Car Price */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-800">
                  ราคารถยนต์ (บาท)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    step={10000}
                    value={carPrice || ''}
                    onChange={(e) => setCarPrice(Number(e.target.value))}
                    className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 font-bold text-lg"
                    placeholder="เช่น 850000"
                  />
                  <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[550000, 750000, 850000, 1200000, 1800000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setCarPrice(preset)}
                      className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                        carPrice === preset
                          ? 'bg-brand-600 text-white font-medium'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Down Payment */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-800">เงินดาวน์</label>
                  <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => {
                        if (downType !== 'percent') {
                          setDownType('percent');
                          setDownValue(20);
                        }
                      }}
                      className={`px-3 py-1 rounded-md transition-all ${
                        downType === 'percent' ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      คิดเป็น %
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (downType !== 'amount') {
                          setDownType('amount');
                          setDownValue((carPrice * 20) / 100);
                        }
                      }}
                      className={`px-3 py-1 rounded-md transition-all ${
                        downType === 'amount' ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      คิดเป็น บาท
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    max={downType === 'percent' ? 100 : carPrice}
                    step={downType === 'percent' ? 5 : 10000}
                    value={downValue || ''}
                    onChange={(e) => setDownValue(Number(e.target.value))}
                    className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-900 font-bold text-lg"
                    placeholder={downType === 'percent' ? 'เช่น 20' : 'เช่น 170000'}
                  />
                  <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">
                    {downType === 'percent' ? '%' : 'บาท'}
                  </span>
                </div>

                {downType === 'percent' && (
                  <div className="flex gap-2 pt-1">
                    {[10, 15, 20, 25, 30].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setDownValue(pct)}
                        className={`flex-1 text-xs py-1 rounded-lg transition-colors ${
                          downValue === pct
                            ? 'bg-brand-600 text-white font-medium'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input 3: Interest Rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-800">
                    อัตราดอกเบี้ยต่อปี (Flat Rate %)
                  </label>
                  <span className="text-xs text-slate-500">ป้ายแดงเฉลี่ย 2.19 - 3.20%</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    max={20}
                    step={0.05}
                    value={interestRate || ''}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 text-slate-900 font-bold text-lg"
                    placeholder="เช่น 2.59"
                  />
                  <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">%</span>
                </div>
                <div className="flex gap-2 pt-1">
                  {[1.99, 2.49, 2.79, 3.19, 4.50].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setInterestRate(rate)}
                      className={`flex-1 text-xs py-1 rounded-lg transition-colors ${
                        interestRate === rate
                          ? 'bg-brand-600 text-white font-medium'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 4: Loan Term */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-800">
                  ระยะเวลาผ่อนชำระ (จำนวนงวด)
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {[12, 24, 36, 48, 60, 72, 84].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTermMonths(term)}
                      className={`py-2.5 rounded-xl text-xs font-semibold flex flex-col items-center transition-all ${
                        loanTermMonths === term
                          ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 ring-2 ring-brand-600'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span>{term} งวด</span>
                      <span className={`text-[10px] ${loanTermMonths === term ? 'text-brand-100' : 'text-slate-400'}`}>
                        ({term / 12} ปี)
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                    ผลการคำนวณค่างวดสุทธิ
                  </span>
                  <span className="text-xs bg-brand-500/20 text-brand-300 px-2.5 py-1 rounded-full border border-brand-400/30">
                    รวม VAT 7% แล้ว
                  </span>
                </div>

                <div className="my-3">
                  <div className="text-xs sm:text-sm text-slate-300">ค่างวดที่ต้องผ่อนต่อเดือน</div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-amber-300 tracking-tight mt-1">
                    {formatCurrency(forwardResult.monthlyPayment)}
                    <span className="text-sm sm:text-lg font-normal text-slate-400 ml-2">/ งวด</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    (ก่อน VAT: {formatCurrency(forwardResult.monthlyPreVat)} + VAT 7%: {formatCurrency(forwardResult.monthlyVat)})
                  </p>
                </div>

                {/* Breakdown Cards */}
                <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                    <span className="text-[11px] text-slate-400">เงินดาวน์</span>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {formatCurrency(forwardResult.downPaymentAmount)}
                    </div>
                    <span className="text-[10px] text-brand-300">({forwardResult.downPaymentPercent.toFixed(1)}% ของราคารถ)</span>
                  </div>

                  <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                    <span className="text-[11px] text-slate-400">ยอดจัดไฟแนนซ์</span>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {formatCurrency(forwardResult.loanPrincipal)}
                    </div>
                    <span className="text-[10px] text-slate-400">เงินต้นที่กู้</span>
                  </div>

                  <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                    <span className="text-[11px] text-slate-400">ดอกเบี้ยรวมตลอดสัญญา</span>
                    <div className="text-base sm:text-lg font-bold text-amber-300 mt-0.5">
                      {formatCurrency(forwardResult.totalInterest)}
                    </div>
                    <span className="text-[10px] text-slate-400">Flat Rate {interestRate}%</span>
                  </div>

                  <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                    <span className="text-[11px] text-slate-400">ดอกเบี้ยแท้จริง (Effective)</span>
                    <div className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5">
                      ~{forwardResult.effectiveInterestRate.toFixed(2)}%
                    </div>
                    <span className="text-[10px] text-slate-400">ลดต้นลดดอกเทียบเท่า</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300">ยอดจ่ายรวมตลอดสัญญา (ดาวน์ + ค่างวด):</span>
                  <span className="font-bold text-white text-base">{formatCurrency(forwardResult.totalPayment)}</span>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSchedule(!showSchedule)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-1.5" />
                    <span>{showSchedule ? 'ซ่อนตารางผ่อน' : 'ดูตารางผ่อนทุกงวด'}</span>
                  </button>

                  <ShareResultModal
                    title="ผลคำนวณค่างวดรถยนต์ (Car Installment)"
                    summaryText={forwardSummaryText}
                  />
                </div>
              </div>

              <AdBanner slot="in-article" />
            </div>
          </div>

          {/* ================= DECISION MATRIX 1: COMPARE DOWN PAYMENT ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                  Decision Tool #1: เปรียบเทียบผลลัพธ์ตามเงินดาวน์
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                  ตารางเปรียบเทียบเงินดาวน์ 10% ถึง 35% (ราคารถ {formatCurrency(carPrice)})
                </h3>
              </div>
              <span className="text-xs bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
                ผ่อน {loanTermMonths} งวด @ {interestRate}%
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              วิเคราะห์ความคุ้มค่าของการเพิ่มเงินดาวน์ ดูว่าเงินดาวน์แต่ละขั้นช่วยลดค่างวดและดอกเบี้ยรวมได้เท่าไร
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">สัดส่วนเงินดาวน์</th>
                    <th className="py-3 px-4">เงินดาวน์ที่ต้องจ่าย</th>
                    <th className="py-3 px-4">ยอดจัดไฟแนนซ์</th>
                    <th className="py-3 px-4">ค่างวดสุทธิ/เดือน</th>
                    <th className="py-3 px-4">ดอกเบี้ยรวม</th>
                    <th className="py-3 px-4">ส่วนต่างค่างวดที่ลดลง</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {forwardResult.downPaymentScenarios.map((scenario) => {
                    const isSelected = downType === 'percent' && downValue === scenario.percent;
                    return (
                      <tr
                        key={scenario.percent}
                        className={`transition-colors ${
                          isSelected ? 'bg-brand-50/80 font-bold text-brand-900' : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1.5">
                            <span>ดาวน์ {scenario.percent}%</span>
                            {isSelected && (
                              <span className="text-[10px] bg-brand-600 text-white px-2 py-0.5 rounded-full">
                                ที่คุณเลือก
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          {formatCurrency(scenario.downAmount)}
                        </td>
                        <td className="py-3 px-4">{formatCurrency(scenario.loanPrincipal)}</td>
                        <td className="py-3 px-4 font-extrabold text-brand-700">
                          {formatCurrency(scenario.monthlyPayment)}
                        </td>
                        <td className="py-3 px-4 text-amber-700">{formatCurrency(scenario.totalInterest)}</td>
                        <td className="py-3 px-4">
                          {scenario.monthlySavingsVsPrev > 0 ? (
                            <span className="text-emerald-600 font-semibold">
                              ลดลง {formatCurrency(scenario.monthlySavingsVsPrev)}/ด.
                            </span>
                          ) : (
                            <span className="text-slate-400">ฐานเริ่มต้น</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Smart Insight Callout for Down Payment */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">💡 คำแนะนำการวางเงินดาวน์:</span>
                การเพิ่มเงินดาวน์จาก <strong>15% เป็น 25%</strong> (ใช้เงินเพิ่ม {formatCurrency((carPrice * 0.10))}) จะช่วยลดค่างวดลงได้ถึงประมาณ <strong>{formatCurrency(forwardResult.downPaymentScenarios[3]?.monthlyPayment ? forwardResult.downPaymentScenarios[1].monthlyPayment - forwardResult.downPaymentScenarios[3].monthlyPayment : 1450)} บาท/เดือน</strong> และประหยัดดอกเบี้ยรวมได้หลายหมื่นบาท
              </div>
            </div>
          </div>

          {/* ================= DECISION MATRIX 2: COMPARE LOAN TERMS ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Decision Tool #2: เปรียบเทียบระยะเวลาผ่อน (36 ถึง 84 งวด)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                  ตารางเปรียบเทียบจำนวนงวด vs ดอกเบี้ยที่ต้องจ่ายจริง
                </h3>
              </div>
              <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
                ยอดจัด {formatCurrency(forwardResult.loanPrincipal)}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              ไฟแนนซ์มักเชียร์ให้ผ่อน 72-84 งวดเพราะยอดต่อเดือนดูต่ำ แต่ดอกเบี้ยรวมจะสูงขึ้นอย่างมาก ตารางนี้ช่วยคุณเปรียบเทียบว่าระยะเวลาไหนคุ้มที่สุด
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">ระยะเวลาผ่อน</th>
                    <th className="py-3 px-4">ค่างวดต่อเดือน</th>
                    <th className="py-3 px-4">ดอกเบี้ยรวมตลอดสัญญา</th>
                    <th className="py-3 px-4">ยอดเงินที่จ่ายทั้งหมด</th>
                    <th className="py-3 px-4">ส่วนต่างดอกเบี้ยเทียบ 48 งวด</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {forwardResult.loanTermScenarios.map((termScenario) => {
                    const isSelected = loanTermMonths === termScenario.termMonths;
                    return (
                      <tr
                        key={termScenario.termMonths}
                        className={`transition-colors ${
                          isSelected ? 'bg-indigo-50/80 font-bold text-indigo-950' : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1.5">
                            <span>{termScenario.termMonths} งวด ({termScenario.termYears} ปี)</span>
                            {isSelected && (
                              <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                                ที่คุณเลือก
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-extrabold text-slate-900">
                          {formatCurrency(termScenario.monthlyPayment)}
                        </td>
                        <td className="py-3 px-4 text-amber-700 font-semibold">
                          {formatCurrency(termScenario.totalInterest)}
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          {formatCurrency(termScenario.totalPayment)}
                        </td>
                        <td className="py-3 px-4">
                          {termScenario.extraInterestVsShortest > 0 ? (
                            <span className="text-rose-600 font-semibold">
                              +{formatCurrency(termScenario.extraInterestVsShortest)}
                            </span>
                          ) : (
                            <span className="text-emerald-600 font-semibold">ฐานดอกเบี้ยต่ำสุด</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Warning Callout for Long Terms */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">⚠️ ข้อควรระวังในการผ่อน 72 - 84 งวด:</span>
                การขยายระยะเวลาจาก <strong>60 งวด เป็น 84 งวด</strong> แม้ค่างวดจะลดลง แต่คุณต้องจ่ายดอกเบี้ยเพิ่มทิ้งฟรีอีกกว่า <strong>{formatCurrency(forwardResult.loanTermScenarios[4].totalInterest - forwardResult.loanTermScenarios[2].totalInterest)} บาท</strong> หากสภาพคล่องพอไหว แนะนำเลือกผ่อน 48 หรือ 60 งวดจะคุ้มค่าที่สุด
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODE 2: REVERSE BUDGET CALCULATOR ================= */}
      {calcMode === 'reverse' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in">
          {/* Reverse Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">กำหนดงบผ่อนต่อเดือนของคุณ</h2>
              </div>
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-bold">
                Reverse Calculation
              </span>
            </div>

            {/* Budget Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                คุณสามารถจ่ายค่างวดได้เดือนละเท่าไหร่? (บาท)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={3000}
                  step={500}
                  value={monthlyBudget || ''}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 text-slate-900 font-bold text-lg"
                  placeholder="เช่น 10000"
                />
                <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท/ด.</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[6000, 8500, 10000, 15000, 20000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setMonthlyBudget(preset)}
                    className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                      monthlyBudget === preset
                        ? 'bg-brand-600 text-white font-medium'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {formatCurrency(preset)}/ด.
                  </button>
                ))}
              </div>
            </div>

            {/* Down Payment Available */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-800">
                มีเงินก้อนสำหรับวางดาวน์เท่าไหร่? (บาท)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  step={10000}
                  value={reverseDownAmount || ''}
                  onChange={(e) => setReverseDownAmount(Number(e.target.value))}
                  className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 text-slate-900 font-bold text-lg"
                  placeholder="เช่น 100000"
                />
                <span className="absolute right-4 top-3.5 text-sm font-medium text-slate-400">บาท</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[50000, 100000, 150000, 250000, 400000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setReverseDownAmount(preset)}
                    className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                      reverseDownAmount === preset
                        ? 'bg-brand-600 text-white font-medium'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {formatCurrency(preset)}
                  </button>
                ))}
              </div>
            </div>

            {/* Term & Rate */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">ดอกเบี้ยโดยประมาณ (%)</label>
                <input
                  type="number"
                  step={0.05}
                  value={reverseRate || ''}
                  onChange={(e) => setReverseRate(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">ระยะเวลาผ่อน (ปี)</label>
                <select
                  value={reverseTerm}
                  onChange={(e) => setReverseTerm(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-semibold text-sm"
                >
                  <option value={48}>4 ปี (48 งวด)</option>
                  <option value={60}>5 ปี (60 งวด)</option>
                  <option value={72}>6 ปี (72 งวด)</option>
                  <option value={84}>7 ปี (84 งวด)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reverse Results */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  ราคารถที่คุณสามารถซื้อได้
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 font-bold">
                  งบ {formatCurrency(monthlyBudget)}/ด.
                </span>
              </div>

              <div className="my-4">
                <div className="text-xs sm:text-sm text-slate-300">ช่วงราคารถยนต์ที่แนะนำ</div>
                <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-amber-300 tracking-tight mt-1">
                  {formatCurrency(reverseResult.estimatedCarPriceMid)}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  (ช่วงราคาปลอดภัย: {formatCurrency(reverseResult.estimatedCarPriceMin)} - {formatCurrency(reverseResult.estimatedCarPriceMax)})
                </p>
              </div>

              {/* Recommendation Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 my-5 space-y-2">
                <span className="text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                  <Flame className="w-4 h-4" />
                  <span>กลุ่มรถยนต์ที่ตรงกับงบของคุณ:</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {reverseResult.carTierRecommendation}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                  <span className="text-[11px] text-slate-400">วงเงินกู้ไฟแนนซ์</span>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {formatCurrency(reverseResult.loanPrincipal)}
                  </div>
                  <span className="text-[10px] text-slate-400">{reverseTerm} งวด</span>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-2xl p-3.5 border border-white/10">
                  <span className="text-[11px] text-slate-400">เงินดาวน์คิดเป็น</span>
                  <div className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5">
                    {reverseResult.downPercent.toFixed(1)}%
                  </div>
                  <span className="text-[10px] text-slate-400">{formatCurrency(reverseDownAmount)}</span>
                </div>
              </div>

              {/* Insight callout on adding down */}
              <div className="p-3.5 rounded-2xl bg-brand-500/10 border border-brand-400/20 text-xs text-brand-200">
                💡 <strong>เคล็ดลับ:</strong> ถ้าคุณเก็บเงินดาวน์เพิ่มอีก <strong>50,000 บาท</strong> คุณจะสามารถขยับไปซื้อรถในงบประมาณ <strong>{formatCurrency(reverseResult.estimatedCarPriceMid + 50000)}</strong> ได้โดยที่ค่างวดยังคงเดิมที่ {formatCurrency(monthlyBudget)}/เดือน
              </div>

              <div className="mt-6 flex justify-end">
                <ShareResultModal
                  title="ผลคำนวณงบผ่อนย้อนกลับ (Reverse Budget)"
                  summaryText={reverseSummaryText}
                />
              </div>
            </div>

            <AdBanner slot="in-article" />
          </div>
        </div>
      )}

      {/* Amortization Schedule Drawer */}
      {showSchedule && calcMode === 'forward' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-in fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                ตารางแจกแจงค่างวดรายเดือน ({loanTermMonths} งวด)
              </h3>
              <p className="text-xs text-slate-500">แสดงการกระจายเงินต้น ดอกเบี้ย และภาษีมูลค่าเพิ่มในแต่ละงวด</p>
            </div>
            <button
              onClick={() => setShowSchedule(false)}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-semibold"
            >
              ปิดตาราง
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto rounded-2xl border border-slate-200">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold sticky top-0 border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">งวดที่</th>
                  <th className="py-3 px-4">เงินต้น</th>
                  <th className="py-3 px-4">ดอกเบี้ย</th>
                  <th className="py-3 px-4">VAT 7%</th>
                  <th className="py-3 px-4">ค่างวดรวม</th>
                  <th className="py-3 px-4">เงินต้นคงเหลือ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {forwardResult.schedule.map((item) => (
                  <tr key={item.month} className="hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-semibold text-slate-900">{item.month}</td>
                    <td className="py-2.5 px-4">{formatCurrency(item.principalPaid)}</td>
                    <td className="py-2.5 px-4 text-amber-700">{formatCurrency(item.interestPaid)}</td>
                    <td className="py-2.5 px-4 text-slate-500">{formatCurrency(item.vatPaid)}</td>
                    <td className="py-2.5 px-4 font-bold text-brand-700">{formatCurrency(item.totalMonthly)}</td>
                    <td className="py-2.5 px-4 text-slate-500">{formatCurrency(item.remainingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Affiliate Recommendation Card */}
      <AffiliateCard type="insurance" />
    </div>
  );
};
