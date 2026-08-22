import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { SalaryAffordabilityCalc } from '@/components/calculators/SalaryAffordabilityCalc';
import { Wallet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR ไฟแนนซ์) ซื้อรถได้สูงสุดกี่บาท',
  description: 'เช็ควงเงินกู้ซื้อรถสูงสุดตามฐานเงินเดือน ประเมินสัดส่วนภาระหนี้ DSR กู้ผ่านง่ายโดยไม่ต้องมีคนค้ำประกัน รู้ราคารถที่เหมาะสมกับรายได้ทันที',
  alternates: {
    canonical: 'https://car-finance.in.th/salary-car-affordability',
  },
  keywords: ['เงินเดือนซื้อรถ', 'คำนวณวงเงินกู้รถ', 'DSR ไฟแนนซ์', 'เงินเดือน 20000 ซื้อรถอะไรได้', 'เงินเดือน 30000 กู้รถได้เท่าไหร่'],
  openGraph: {
    title: 'คำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR ไฟแนนซ์)',
    description: 'วิเคราะห์วงเงินกู้ซื้อรถสูงสุดตามฐานเงินเดือน ประเมินสัดส่วนภาระหนี้ DSR',
    url: 'https://car-finance.in.th/salary-car-affordability',
  },
};

const faqs = [
  {
    question: 'เกณฑ์ DSR (Debt Service Ratio) ของไฟแนนซ์รถยนต์คืออะไร?',
    answer: 'DSR คือ สัดส่วนภาระหนี้สินรวมต่อรายได้สุทธิต่อเดือน เช่น หากคุณมีเงินเดือน 30,000 บาท และไฟแนนซ์กำหนดเกณฑ์ DSR สูงสุด 50% หมายความว่า ภาระหนี้ทั้งหมดของคุณ (ค่างวดรถใหม่ + บัตรเครดิต + สินเชื่อเดิม) จะต้องไม่เกิน 15,000 บาทต่อเดือน',
  },
  {
    question: 'เงินเดือน 20,000 บาท ซื้อรถยนต์รุ่นไหน ราคาเท่าไหร่ได้บ้าง?',
    answer: 'สำหรับเงินเดือน 20,000 บาท (ไม่มีหนี้เดิม) ค่างวดที่ปลอดภัยจะอยู่ที่ประมาณ 6,000 - 8,000 บาท/เดือน เมื่อดาวน์ 20% ผ่อน 5-6 ปี จะสามารถซื้อรถยนต์กลุ่ม Eco Car หรือรถยนต์ไฟฟ้าระดับเริ่มต้นราคาประมาณ 500,000 - 650,000 บาท เช่น Toyota Yaris, Honda City หรือ Neta V-II ได้อย่างสบาย',
  },
  {
    question: 'หากมีภาระหนี้บัตรเครดิตหรือผ่อนคอนโดอยู่ จะกู้ซื้อรถผ่านไหม?',
    answer: 'กู้ผ่านได้ หากสัดส่วนหนี้เดิมเมื่อรวมกับค่างวดรถใหม่ยังไม่เกิน 50-60% ของรายได้ แต่หากสัดส่วนเกิน ไฟแนนซ์จะแนะนำให้: (1) ปิดหนี้บัตรเครดิตบางส่วนก่อนยื่นกู้, (2) เพิ่มเงินดาวน์เป็น 25-30%, หรือ (3) นำคนในครอบครัวมากู้ร่วมเพื่อรวมฐานรายได้',
  },
];

export default function SalaryAffordabilityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[{ name: 'คำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR)', url: '/salary-car-affordability' }]}
      />

      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR ไฟแนนซ์)',
          description: 'ประเมินวงเงินกู้ซื้อรถสูงสุดตามฐานเงินเดือนและภาระหนี้เดิม DSR',
          url: 'https://car-finance.in.th/salary-car-affordability',
          applicationCategory: 'FinanceApplication',
          keywords: ['เงินเดือนซื้อรถ', 'DSR ไฟแนนซ์', 'คำนวณวงเงินกู้รถยนต์'],
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'เงินเดือนซื้อรถได้เท่าไหร่', url: '/salary-car-affordability' }]}
      />

      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
          <Wallet className="w-3.5 h-3.5" />
          <span>วิเคราะห์โอกาสกู้ผ่านไฟแนนซ์</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR ไฟแนนซ์)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          ประเมินศักยภาพการกู้ซื้อรถยนต์ตามฐานเงินเดือนสุทธิและภาระหนี้เดิม คำนวณค่างวดสูงสุดที่สถาบันการเงินอนุมัติ และค้นหาราคารถที่เหมาะสมเพื่อการผ่อนที่สบายใจ ไม่ต้องใช้คนค้ำประกัน
        </p>
      </div>

      <SalaryAffordabilityCalc />

      <AuthorBox
        reviewedDate="สิงหาคม 2567"
        sourceLaw="แนวปฏิบัติการให้สินเชื่ออย่างรับผิดชอบ (Responsible Lending) ธนาคารแห่งประเทศไทย"
      />

      <RelatedTools currentSlug="salary-car-affordability" category="loan" />

      <FAQSection faqs={faqs} />
    </div>
  );
}
