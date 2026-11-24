import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { CarTaxCalc } from '@/components/calculators/CarTaxCalc';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ. (อัปเดตอัตราภาษี 2567-2568)',
  description: 'คำนวณภาษีรถยนต์ประจำปีตาม ซีซี และน้ำหนัก ส่วนลดอายุรถปีที่ 6-10+ พร้อมคิดค่า พ.ร.บ. บังคับ และตรวจสภาพ ตรอ.',
  alternates: { canonical: 'https://phonrod.com/car-tax-calculator' },
  keywords: ['คำนวณภาษีรถยนต์', 'ต่อภาษีรถยนต์กี่บาท', 'ภาษีรถยนต์ตาม cc', 'ค่าพรบรถยนต์'],
  openGraph: {
    title: 'คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ.',
    description: 'คิดภาษีรถยนต์ตามขนาด ซีซี / น้ำหนัก ส่วนลดอายุรถปีที่ 6-10+ พร้อม พ.ร.บ. และ ตรอ.',
    url: 'https://phonrod.com/car-tax-calculator',
  },
};

const faqs = [
  {
    question: 'รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (รถเก๋ง) มีอัตราการคิดภาษีประจำปีอย่างไร?',
    answer: 'คิดภาษีตามขนาด ซีซี แบบขั้นบันได: 1-600cc = 0.50 บ., 601-1800cc = 1.50 บ., เกิน 1800cc = 4.00 บ.',
  },
];

export default function CarTaxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ตรวจ ตรอ.', url: '/car-tax-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ.',
          description: 'คำนวณภาษีรถตามขนาด ซีซี น้ำหนัก ส่วนลดอายุรถ 6-10+ พ.ร.บ. และ ตรอ.',
          url: 'https://phonrod.com/car-tax-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'ภาษีรถ & พ.ร.บ.', url: '/car-tax-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>อัตรา พ.ร.บ. รถยนต์ พ.ศ. 2522</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          คำนวณค่าภาษีรถยนต์ประจำปีตามขนาด ซีซี เครื่องยนต์ หรือคิดตามน้ำหนัก พร้อมคำนวณส่วนลดอายุการใช้งานปีที่ 6-10+ ค่า พ.ร.บ. และค่าตรวจสภาพ ตรอ.
        </p>
      </div>
      <CarTaxCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="พระราชบัญญัติรถยนต์ พ.ศ. 2522 กรมการขนส่งทางบก" />
      <RelatedTools currentSlug="car-tax-calculator" category="cost" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
