import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { RefinanceCalc } from '@/components/calculators/RefinanceCalc';
import { RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ ลดค่างวด รับเงินสดก้อนโต',
  description: 'คำนวณรีไฟแนนซ์รถยนต์ที่ยังผ่อนไม่หมด เปรียบเทียบดอกเบี้ยใหม่ ขยายงวดเพื่อลดภาระค่างวดต่อเดือน หรือประเมินเงินสดคงเหลือ Cashback',
  alternates: { canonical: 'https://car-finance.in.th/car-refinance-calculator' },
  keywords: ['รีไฟแนนซ์รถยนต์', 'สินเชื่อจำนำทะเบียน', 'ลดค่างวดรถ'],
  openGraph: {
    title: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ',
    description: 'คำนวณรีไฟแนนซ์ ลดค่างวด ขยายงวด และประเมินเงินสดคงเหลือ Cashback',
    url: 'https://car-finance.in.th/car-refinance-calculator',
  },
};

const faqs = [
  {
    question: 'การรีไฟแนนซ์รถยนต์คืออะไร และเหมาะกับใคร?',
    answer: 'การรีไฟแนนซ์คือการปิดสัญญาเดิมเพื่อทำสัญญาใหม่ที่มีค่างวดถูกลงจากการขยายงวด หรือต้องการขอกู้เงินสดส่วนต่าง (Cashback) มาหมุนเวียน',
  },
];

export default function CarRefinancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียน', url: '/car-refinance-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียน',
          description: 'เปรียบเทียบสัญญาเดิมและสัญญาใหม่ ลดค่างวด และคำนวณเงินสด Cashback',
          url: 'https://car-finance.in.th/car-refinance-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'คำนวณรีไฟแนนซ์รถ', url: '/car-refinance-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>ปรับโครงสร้างหนี้ & เสริมสภาพคล่อง</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          จำลองการรีไฟแนนซ์รถยนต์ที่ยังผ่อนไม่หมด เปรียบเทียบผลประโยชน์ระหว่างค่างวดเดิมกับค่างวดใหม่ ขยายงวดเพื่อลดภาระรายเดือน และคำนวณเงินสดก้อน Cashback
        </p>
      </div>
      <RefinanceCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="หลักเกณฑ์การกำกับดูแลธุรกิจสินเชื่อที่มีทะเบียนรถเป็นประกัน ธนาคารแห่งประเทศไทย" />
      <RelatedTools currentSlug="car-refinance-calculator" category="loan" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
