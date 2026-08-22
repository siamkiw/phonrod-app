import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { CarEquityCalc } from '@/components/calculators/CarEquityCalc';
import { Coins } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์ (Car Equity Calculator)',
  description: 'เช็คมูลค่าสุทธิราคารถยนต์เทียบยอดหนี้ไฟแนนซ์คงเหลือ ประเมินว่าขายดาวน์ได้เงินสดกลับมา หรือต้องยกให้ผ่อนต่อฟรี',
  alternates: { canonical: 'https://car-finance.in.th/car-equity-calculator' },
  keywords: ['คำนวณขายดาวน์รถ', 'ขายรถติดไฟแนนซ์', 'หนี้ท่วมรถ'],
  openGraph: {
    title: 'คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์',
    description: 'เช็คมูลค่าสุทธิ (Equity) ราคารถเทียบหนี้คงค้าง ประเมินเงินสดขายดาวน์',
    url: 'https://car-finance.in.th/car-equity-calculator',
  },
};

const faqs = [
  {
    question: 'การขายดาวน์แบบเปลี่ยนสัญญา ต้องเตรียมค่าใช้จ่ายอะไรบ้าง?',
    answer: 'ผู้ซื้อและผู้ขายต้องเตรียมค่าธรรมเนียมเปลี่ยนสัญญา (ประมาณ 3,000 - 5,000 บาท) และค่างวดล่วงหน้า 1-2 งวดตามเกณฑ์ไฟแนนซ์',
  },
];

export default function CarEquityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณขายดาวน์ & มูลค่าหนี้คงเหลือไฟแนนซ์', url: '/car-equity-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์',
          description: 'ประเมินมูลค่าสุทธิ Equity หนี้คงค้างไฟแนนซ์ และเงินสดขายดาวน์',
          url: 'https://car-finance.in.th/car-equity-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'คำนวณขายดาวน์ & หนี้คงเหลือ', url: '/car-equity-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
          <Coins className="w-3.5 h-3.5" />
          <span>วิเคราะห์มูลค่าสุทธิของรถยนต์</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          วิเคราะห์มูลค่ารถยนต์เปรียบเทียบกับภาระหนี้คงค้างไฟแนนซ์ (Car Equity) ประเมินเงินสดขายดาวน์ หรือภาวะหนี้ท่วมรถ
        </p>
      </div>
      <CarEquityCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="ข้อกำหนดการโอนสิทธิเรียกร้องตามสัญญาเช่าซื้อ ประมวลกฎหมายแพ่งและพาณิชย์" />
      <RelatedTools currentSlug="car-equity-calculator" category="ownership" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
