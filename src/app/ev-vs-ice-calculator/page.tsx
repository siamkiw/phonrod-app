import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { EvVsIceCalc } from '@/components/calculators/EvVsIceCalc';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE วิ่งปีละเท่าไหร่ถึงคุ้ม?',
  description: 'เปรียบเทียบต้นทุนต่อกิโลเมตร ค่าไฟ TOU Off-peak ค่าบำรุงรักษา และระยะเวลาคืนทุนจากส่วนต่างราคารถยนต์ไฟฟ้า',
  alternates: { canonical: 'https://phonrod.com/ev-vs-ice-calculator' },
  keywords: ['จุดคุ้มทุน EV', 'EV vs รถน้ำมัน', 'เปรียบเทียบค่าใช้จ่ายรถไฟฟ้า'],
  openGraph: {
    title: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE',
    description: 'วิเคราะห์ต้นทุนต่อ กม. ค่าไฟ TOU ค่าบำรุงรักษา และระยะเวลาคืนทุน',
    url: 'https://phonrod.com/ev-vs-ice-calculator',
  },
};

const faqs = [
  {
    question: 'รถยนต์ไฟฟ้า EV ประหยัดกว่ารถน้ำมันกี่เท่า?',
    answer: 'หากชาร์จไฟบ้านช่วง Off-peak (หน่วยละ ~2.6-3.8 บาท) รถ EV จะมีต้นทุนเพียงประมาณ 0.40 - 0.70 บาท/กม. ประหยัดกว่ารถน้ำมันที่กิน 2.20 - 3.50 บาท/กม. ประมาณ 4-6 เท่า',
  },
];

export default function EvVsIcePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน', url: '/ev-vs-ice-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE',
          description: 'เปรียบเทียบต้นทุนพลังงาน ค่าชาร์จ TOU ค่าบำรุงรักษา และระยะเวลาคืนทุน',
          url: 'https://phonrod.com/ev-vs-ice-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'เทียบ EV vs น้ำมัน', url: '/ev-vs-ice-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold">
          <Zap className="w-3.5 h-3.5" />
          <span>วิเคราะห์ความคุ้มค่าพลังงานสะอาด</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          เปรียบเทียบต้นทุนการใช้งานจริงระหว่างรถยนต์ไฟฟ้า 100% และรถยนต์น้ำมัน วิเคราะห์ค่าเชื้อเพลิงต่อกิโลเมตร ค่าไฟบ้าน TOU และระยะเวลาคืนทุน
        </p>
      </div>
      <EvVsIceCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="อัตราค่าไฟฟ้า TOU การไฟฟ้านครหลวงและการไฟฟ้าส่วนภูมิภาค และนโยบายส่งเสริมยานยนต์ไฟฟ้า EV 3.5" />
      <RelatedTools currentSlug="ev-vs-ice-calculator" category="trip" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
