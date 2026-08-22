'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Wallet, 
  TrendingUp, 
  FileCheck, 
  Coins, 
  ShieldAlert, 
  Fuel, 
  Zap, 
  RefreshCw, 
  BadgePercent,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  Flame
} from 'lucide-react';
import { TOOLS, CATEGORIES, ToolMetadata } from '@/lib/tools-data';
import { AdBanner } from '@/components/ads/AdBanner';
import { FAQSection } from '@/components/common/FAQSection';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';

// Mapping for dynamic icons
const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Fuel: <Fuel className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  RefreshCw: <RefreshCw className="w-6 h-6" />,
  BadgePercent: <BadgePercent className="w-6 h-6" />,
};

const homeFaqs = [
  {
    question: 'เครื่องมือคำนวณการเงินรถยนต์บน AutoFin Hub มีความแม่นยำแค่ไหน?',
    answer: 'เครื่องมือทุกตัวได้รับการพัฒนาและตรวจสอบโดยผู้เชี่ยวชาญด้านการเงินและกฎหมายยานยนต์ไทย 100% โดยคำนวณตามสูตร Flat Rate รวม VAT 7%, เกณฑ์ลดหย่อนภาษีตาม พ.ร.บ. รถยนต์ พ.ศ. 2522, อัตราอากรแสตมป์กรมการขนส่งทางบก และประกาศคณะกรรมการว่าด้วยสัญญา สคบ. ฉบับล่าสุด จึงมั่นใจได้ในความแม่นยำระดับเดียวกับสถาบันการเงิน',
  },
  {
    question: 'ข้อมูลที่กรอกในแต่ละเครื่องมือจะถูกบันทึกหรือเก็บไว้หรือไม่?',
    answer: 'ไม่มีการบันทึกข้อมูลใดๆ ทั้งสิ้น การคำนวณทั้งหมดทำงานบนฝั่งเบราว์เซอร์ของคุณโดยตรง (Instant Client-side Execution) ไม่มีการส่งข้อมูลรายได้ เลขบัตร หรือราคารถของคุณกลับมายังเซิร์ฟเวอร์ ปลอดภัยและเป็นส่วนตัว 100%',
  },
  {
    question: 'ปิดยอดรถก่อนกำหนด ได้รับส่วนลดดอกเบี้ยกี่เปอร์เซ็นต์ตามกฎหมายใหม่?',
    answer: 'ตามประกาศ สคบ. ใหม่ (มีผลบังคับใช้ ม.ค. 2566): หากผ่อนชำระไม่เกิน 1/3 ของงวดทั้งหมด จะได้รับส่วนลดดอกเบี้ยคงเหลือ 60%, หากผ่อนเกิน 1/3 แต่ไม่เกิน 2/3 จะได้รับส่วนลด 70% และหากผ่อนเกิน 2/3 ขึ้นไป จะได้รับส่วนลดดอกเบี้ยคงเหลือ 100% เต็มจำนวน',
  },
  {
    question: 'เงินเดือนเท่าไหร่ถึงจะสามารถกู้ซื้อรถยนต์ได้โดยไม่ต้องมีคนค้ำประกัน?',
    answer: 'โดยทั่วไป สถาบันการเงินจะพิจารณาสัดส่วนภาระหนี้ต่อรายได้ (DSR) ไม่เกิน 40-50% และแนะนำให้วางเงินดาวน์ตั้งแต่ 20-25% ขึ้นไป หากค่างวดรถรวมกับหนี้เดิมไม่เกิน 40% ของเงินเดือน จะมีโอกาสผ่านการอนุมัติสูงมากโดยไม่ต้องใช้คนค้ำประกัน',
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Schema Structured Data for Homepage */}
      <SchemaMarkup
        webApp={{
          name: 'Thai Automotive Financial Hub',
          description: 'ศูนย์รวม 10 เครื่องมือคำนวณการเงินรถยนต์ครบวงจร คำนวณค่างวด ภาษี พ.ร.บ. ค่าโอน จุดคุ้มทุน EV และปิดยอดตามเกณฑ์ สคบ. ใหม่',
          url: 'https://car-finance.in.th/',
          applicationCategory: 'FinanceApplication',
          keywords: ['คำนวณค่างวดรถ', 'ภาษีรถยนต์', 'ค่าโอนรถมือสอง', 'ปิดยอดรถ สคบ', 'จุดคุ้มทุน EV'],
        }}
        faqs={homeFaqs}
      />

      {/* Hero Section */}
      <section className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-slate-800">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -top-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-200 border border-white/10">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>อัปเดตเกณฑ์การเงิน & ภาษีรถยนต์ 2567-2568</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            ศูนย์รวม <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-amber-300">10 เครื่องมือการเงิน</span> สำหรับคนมีรถในไทย
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            วางแผนและคำนวณทุกมิติเรื่องรถยนต์อย่างแม่นยำ ค่างวด ยอดจัด วงเงินกู้ตามเงินเดือน ภาษี พ.ร.บ. ค่าโอนมือสอง จุดคุ้มทุน EV และสิทธิประโยชน์ปิดยอดก่อนกำหนดตามกฎหมาย สคบ.
          </p>

          {/* Search Box */}
          <div className="pt-2">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาเครื่องมือ เช่น ค่างวด, ภาษีรถ, ค่าโอน, เงินเดือนกู้รถ, EV..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 font-medium text-sm sm:text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-500/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ล้างคำค้น
                </button>
              )}
            </div>
          </div>

          {/* Quick Trust Badges */}
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>คำนวณเร็วระดับเสี้ยววินาที (Instant)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>มาตรฐานกฎหมายไทย 100%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>ฟรี ไม่มีค่าใช้จ่าย ไม่ต้องลงทะเบียน</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Leaderboard Ad */}
      <AdBanner slot="leaderboard" />

      {/* Category Filter Pills */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-5 h-5 text-slate-500" />
            <h2 className="font-bold text-lg text-slate-900">เลือกหมวดหมู่เครื่องมือ</h2>
          </div>
          <span className="text-xs text-slate-500">พบ {filteredTools.length} เครื่องมือ</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 10 Tool Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/${tool.slug}`}
            className="group flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-brand-500/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-sm">
                  {iconMap[tool.iconName] || <Calculator className="w-6 h-6" />}
                </div>

                {tool.badge && (
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center space-x-1">
                    <Flame className="w-3 h-3 text-amber-500" />
                    <span>{tool.badge}</span>
                  </span>
                )}
              </div>

              <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider block mb-1">
                {tool.categoryLabel}
              </span>

              <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-1">
                {tool.shortTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                {tool.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700">
              <span>เริ่มคำนวณเลย</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      {/* Deep Dive Article: Complete Guide to Car Finance in Thailand (600+ words SEO) */}
      <section className="my-16 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            คู่มือการเงินยานยนต์ฉบับสมบูรณ์
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            วางแผนการเงินคนมีรถในประเทศไทย: 5 เรื่องสำคัญที่เจ้าของรถต้องรู้ก่อนเซ็นสัญญา
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            การเป็นเจ้าของรถยนต์สักคันในประเทศไทย ไม่ได้มีเพียงค่าตัวรถหรือเงินดาวน์เท่านั้น แต่ยังเกี่ยวข้องกับโครงสร้างดอกเบี้ย ค่าภาษี ค่าธรรมเนียมตามกฎหมาย และต้นทุนแฝงตลอดอายุการใช้งาน (Total Cost of Ownership) ซึ่งหากผู้ซื้อไม่ได้คำนวณอย่างรอบคอบ อาจก่อให้เกิดปัญหาหนี้สินเกินตัวจนต้องถูกยึดรถในที่สุด เว็บไซต์ <strong>Thai Automotive Financial Hub</strong> จึงถูกสร้างขึ้นเพื่อให้คนไทยสามารถเข้าถึงเครื่องมือคำนวณการเงินรถยนต์ที่แม่นยำและถูกต้องตามกฎหมาย 100%
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. ทำความเข้าใจดอกเบี้ยรถยนต์แบบคงที่ (Flat Rate) vs ดอกเบี้ยแท้จริง (Effective Rate)
          </h3>
          <p>
            สินเชื่อเช่าซื้อรถยนต์ในไทยส่วนใหญ่จะใช้อัตราดอกเบี้ยแบบคงที่ (Flat Rate) ซึ่งคำนวณดอกเบี้ยจากยอดจัดเริ่มต้นเต็มจำนวนตั้งแต่วันแรกและคูณด้วยจำนวนปี ทำให้เมื่อแปลงเป็นดอกเบี้ยที่แท้จริงแบบลดต้นลดดอก (Effective Interest Rate หรือ APR) ดอกเบี้ยแท้จริงจะมีมูลค่าประมาณ <strong>1.8 - 1.9 เท่า</strong> ของอัตราดอกเบี้ยคงที่เสมอ เช่น หากไฟแนนซ์เสนอ Flat Rate 2.59% ต่อปี ดอกเบี้ยแท้จริงที่คุณจ่ายจริงจะอยู่ที่ประมาณ 4.8% - 5.0% ต่อปี
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. กฎหมาย สคบ. ใหม่: สิทธิประโยชน์เมื่อปิดยอดรถก่อนกำหนด (Early Payoff)
          </h3>
          <p>
            ตั้งแต่วันที่ 10 มกราคม 2566 เป็นต้นมา คณะกรรมการว่าด้วยสัญญา (สคบ.) ได้ออกประกาศควบคุมสัญญาเช่าซื้อรถยนต์และรถจักรยานยนต์ฉบับใหม่ กำหนดให้สถาบันการเงินต้องมอบส่วนลดดอกเบี้ยคงเหลือที่ยังไม่ถึงกำหนดชำระแบบขั้นบันไดเมื่อผู้เช่าซื้อต้องการปิดยอดหนี้ทั้งหมดก่อนกำหนด:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li><strong>ผ่อนชำระไม่เกิน 1 ใน 3 ของค่างวดทั้งหมด:</strong> ได้รับส่วนลดดอกเบี้ยที่ยังไม่ถึงกำหนดชำระไม่น้อยกว่า <strong>60%</strong></li>
            <li><strong>ผ่อนชำระเกิน 1 ใน 3 แต่ไม่เกิน 2 ใน 3:</strong> ได้รับส่วนลดดอกเบี้ยคงเหลือไม่น้อยกว่า <strong>70%</strong></li>
            <li><strong>ผ่อนชำระเกิน 2 ใน 3 ขึ้นไป:</strong> ได้รับส่วนลดดอกเบี้ยคงเหลือ <strong>100%</strong> เต็มจำนวน</li>
          </ul>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            3. สัดส่วนภาระหนี้ต่อรายได้ (DSR: Debt Service Ratio) หัวใจสำคัญของการกู้ผ่าน
          </h3>
          <p>
            ก่อนตัดสินใจจองรถยนต์ ควรประเมินความสามารถในการผ่อนชำระตามหลัก DSR โดยทั่วไปไม่ควรให้ภาระหนี้รวมทั้งหมด (ค่างวดรถ + บัตรเครดิต + สินเชื่ออื่น) เกินกว่า <strong>40% ถึง 50% ของรายได้สุทธิต่อเดือน</strong> หากเกินกว่านี้ ไฟแนนซ์อาจขอให้มีผู้ค้ำประกันร่วม หรือขอให้เพิ่มเงินดาวน์เป็น 25-30%
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            4. ค่าธรรมเนียมการโอนและภาษีประจำปี ณ กรมการขนส่งทางบก
          </h3>
          <p>
            สำหรับการซื้อขายรถยนต์มือสอง ค่าใช้จ่ายสำคัญที่ต้องเตรียมไปจ่ายที่กรมการขนส่งทางบกคือ <strong>ค่าอากรแสตมป์ 0.5%</strong> (คิดจากราคาประเมินของกรมการขนส่ง เช่น รถราคา 500,000 บาท ต้องเสียค่าอากร 2,500 บาท) รวมกับค่าธรรมเนียมการโอน 100 บาท ค่าคำขอ 5 บาท และค่าตรวจสภาพ 50 บาท
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFaqs} />
    </div>
  );
}
