import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { EarlyPayoffCalc } from '@/components/calculators/EarlyPayoffCalc';
import { BadgePercent, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณปิดยอดรถก่อนกำหนด รับส่วนลดดอกเบี้ย 60% 70% 100% ตามเกณฑ์ สคบ. ใหม่',
  description: 'คำนวณส่วนลดดอกเบี้ยคงเหลือเมื่อโปะปิดค่างวดรถยนต์ก่อนกำหนด ตามประกาศคณะกรรมการว่าด้วยสัญญา สคบ. ฉบับใหม่ รู้ยอดจ่ายสุทธิและเงินที่ประหยัดได้ทันที',
  alternates: {
    canonical: 'https://phonrod.com/car-loan-early-payoff',
  },
  keywords: ['ปิดยอดรถก่อนกำหนด', 'ส่วนลดดอกเบี้ย สคบ', 'โปะค่างวดรถ', 'ปิดไฟแนนซ์ก่อนกำหนด', 'ส่วนลดดอกเบี้ยรถ 100%'],
  openGraph: {
    title: 'คำนวณปิดยอดรถก่อนกำหนด รับส่วนลดดอกเบี้ยตามเกณฑ์ สคบ. ใหม่',
    description: 'คำนวณส่วนลดดอกเบี้ยคงเหลือ 60% 70% และ 100% ตามกฎหมาย สคบ. ฉบับล่าสุด',
    url: 'https://phonrod.com/car-loan-early-payoff',
  },
};

const faqs = [
  {
    question: 'กฎหมาย สคบ. ใหม่เรื่องส่วนลดดอกเบี้ยปิดยอดรถมีผลบังคับใช้เมื่อไหร่ และคุ้มครองสัญญาใดบ้าง?',
    answer: 'ประกาศคณะกรรมการว่าด้วยสัญญา สคบ. ฉบับใหม่มีผลบังคับใช้ตั้งแต่วันที่ 10 มกราคม 2566 เป็นต้นไป โดยคุ้มครองสัญญาเช่าซื้อรถยนต์และรถจักรยานยนต์ส่วนบุคคลทุกฉบับที่ทำตั้งแต่วันที่กฎหมายมีผลบังคับใช้',
  },
  {
    question: 'เกณฑ์ส่วนลดดอกเบี้ยคงเหลือ 3 ขั้นบันไดของ สคบ. แบ่งอย่างไร?',
    answer: 'แบ่งออกเป็น 3 ขั้นตามจำนวนงวดที่ชำระไปแล้ว: (1) ผ่อนชำระไม่เกิน 1 ใน 3 ของงวดทั้งหมด -> ได้รับส่วนลดดอกเบี้ยคงเหลือไม่น้อยกว่า 60%, (2) ผ่อนชำระเกิน 1 ใน 3 แต่ไม่เกิน 2 ใน 3 ของงวดทั้งหมด -> ได้รับส่วนลดดอกเบี้ยคงเหลือไม่น้อยกว่า 70%, (3) ผ่อนชำระเกิน 2 ใน 3 ขึ้นไป -> ได้รับส่วนลดดอกเบี้ยคงเหลือ 100% เต็มจำนวน',
  },
];

export default function EarlyPayoffPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[{ name: 'คำนวณปิดยอดรถก่อนกำหนด (เกณฑ์ สคบ. ใหม่)', url: '/car-loan-early-payoff' }]}
      />

      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณปิดยอดรถก่อนกำหนด รับส่วนลดดอกเบี้ยตามเกณฑ์ สคบ. ใหม่',
          description: 'คำนวณส่วนลดดอกเบี้ยคงเหลือ 60% 70% 100% และยอดเงินสุทธิปิดบัญชีไฟแนนซ์',
          url: 'https://phonrod.com/car-loan-early-payoff',
          applicationCategory: 'FinanceApplication',
          keywords: ['ปิดยอดรถก่อนกำหนด', 'ส่วนลดดอกเบี้ย สคบ', 'โปะปิดค่างวดรถ'],
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'ปิดยอดรถ สคบ.', url: '/car-loan-early-payoff' }]}
      />

      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>สิทธิประโยชน์ตามประกาศ สคบ. ใหม่ล่าสุด</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณปิดยอดรถก่อนกำหนด รับส่วนลดดอกเบี้ยตามเกณฑ์ สคบ. ใหม่
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          คำนวณส่วนลดดอกเบี้ยเช่าซื้อรถยนต์คงเหลือ 60%, 70% และสูงสุด 100% ตามประกาศคณะกรรมการว่าด้วยสัญญา เรื่องให้ธุรกิจให้เช่าซื้อรถยนต์และรถจักรยานยนต์เป็นธุรกิจที่ควบคุมสัญญา พ.ศ. 2565
        </p>
      </div>

      <EarlyPayoffCalc />

      <AuthorBox
        reviewedDate="สิงหาคม 2567"
        sourceLaw="ประกาศคณะกรรมการว่าด้วยสัญญา สคบ. พ.ศ. 2565 เรื่องควบคุมสัญญาเช่าซื้อรถยนต์และรถจักรยานยนต์"
      />

      <RelatedTools currentSlug="car-loan-early-payoff" category="loan" />

      <FAQSection faqs={faqs} />
    </div>
  );
}
