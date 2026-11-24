import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { TransferFeeCalc } from '@/components/calculators/TransferFeeCalc';
import { FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก อากรแสตมป์ 0.5% ถูกต้องแม่นยำ',
  description: 'คำนวณค่าธรรมเนียมโอนกรรมสิทธิ์รถยนต์มือสอง อากรแสตมป์ 0.5% (500 บาทต่อแสน) ค่าคำขอ ค่าตรวจสภาพ สรุปยอดเงินและเอกสารที่ต้องใช้ที่กรมขนส่ง',
  alternates: { canonical: 'https://phonrod.com/car-transfer-fee-calculator' },
  keywords: ['ค่าโอนรถยนต์มือสอง', 'อากรแสตมป์โอนรถ', 'ค่าธรรมเนียมกรมการขนส่ง'],
  openGraph: {
    title: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก',
    description: 'คำนวณค่าอากรแสตมป์ 0.5% ค่าธรรมเนียมการโอน ค่าคำขอ และค่าตรวจสภาพรถ',
    url: 'https://phonrod.com/car-transfer-fee-calculator',
  },
};

const faqs = [
  {
    question: 'ค่าโอนรถยนต์มือสองคิดจากราคาซื้อขายจริง หรือราคาประเมินของกรมการขนส่ง?',
    answer: 'เจ้าหน้าที่กรมการขนส่งทางบกจะคิดค่าอากรแสตมป์ 0.5% จากราคาที่ "สูงกว่า" เสมอ ระหว่างราคาซื้อขายจริงกับราคาประเมินกลางของกรมการขนส่งทางบก',
  },
];

export default function CarTransferFeePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก', url: '/car-transfer-fee-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก',
          description: 'คำนวณค่าธรรมเนียมโอนรถ อากรแสตมป์ 0.5% ค่าคำขอ และค่าตรวจสภาพรถ',
          url: 'https://phonrod.com/car-transfer-fee-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'ค่าโอนรถมือสอง', url: '/car-transfer-fee-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <FileCheck className="w-3.5 h-3.5" />
          <span>อัตราค่าธรรมเนียมกรมการขนส่งทางบก</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          คำนวณค่าธรรมเนียมการโอนกรรมสิทธิ์รถยนต์มือสอง ค่าอากรแสตมป์ 0.5% ค่าคำขอ และค่าตรวจสภาพรถ
        </p>
      </div>
      <TransferFeeCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="ระเบียบกรมการขนส่งทางบกว่าด้วยการดำเนินการเกี่ยวกับทะเบียนและภาษีรถ" />
      <RelatedTools currentSlug="car-transfer-fee-calculator" category="ownership" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
