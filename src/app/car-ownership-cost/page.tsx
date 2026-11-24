import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { OwnershipCostCalc } from '@/components/calculators/OwnershipCostCalc';
import { TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณต้นทุนการมีรถจริงต่อปี (Total Cost of Ownership - TCO) เผยค่าใช้จ่ายแฝง',
  description: 'คำนวณค่าใช้จ่ายแท้จริงของการมีรถยนต์ 1 คัน รวมค่างวด ค่าน้ำมัน ประกันภัย เช็คระยะ ภาษี และที่จอดรถ เผยต้นทุนเฉลี่ยต่อวันและต่อปี',
  alternates: { canonical: 'https://phonrod.com/car-ownership-cost' },
  keywords: ['ต้นทุนการมีรถยนต์', 'ค่าใช้จ่ายรถยนต์ต่อเดือน', 'TCO รถยนต์', 'มีรถ 1 คันจ่ายปีละเท่าไหร่'],
  openGraph: {
    title: 'คำนวณต้นทุนการมีรถจริงต่อปี (Total Cost of Ownership)',
    description: 'คำนวณค่าใช้จ่ายแฝง ค่างวด น้ำมัน ประกันภัย เช็คระยะ เผยต้นทุนแท้จริงต่อวัน/ต่อปี',
    url: 'https://phonrod.com/car-ownership-cost',
  },
};

const faqs = [
  {
    question: 'มีรถยนต์ 1 คัน ต้องจ่ายค่าใช้จ่ายแฝงเฉลี่ยปีละเท่าไหร่?',
    answer: 'นอกจากค่างวดผ่อนรถแล้ว ค่าใช้จ่ายแฝง (ประกันภัยชั้น 1 + ภาษี พ.ร.บ. + เช็คระยะเปลี่ยนถ่ายน้ำมันเครื่อง + เปลี่ยนยาง + ค่าที่จอดรถและทางด่วน) สำหรับรถยนต์ทั่วไปเฉลี่ยอยู่ที่ประมาณ 40,000 - 80,000 บาทต่อปี',
  },
];

export default function CarOwnershipCostPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณต้นทุนการมีรถจริงต่อปี (TCO)', url: '/car-ownership-cost' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณต้นทุนการมีรถจริงต่อปี (Total Cost of Ownership)',
          description: 'วิเคราะห์ค่าใช้จ่ายรถยนต์ ค่างวด น้ำมัน ประกัน เช็คระยะ ภาษี และต้นทุน 5 ปี',
          url: 'https://phonrod.com/car-ownership-cost',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'ต้นทุนการมีรถต่อปี', url: '/car-ownership-cost' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>วิเคราะห์ค่าใช้จ่ายแฝงรอบด้าน</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณต้นทุนการมีรถจริงต่อปี (Total Cost of Ownership - TCO)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          รู้ต้นทุนแท้จริงของการเป็นเจ้าของรถยนต์ 1 คัน รวมค่างวด ค่าน้ำมันหรือค่าชาร์จไฟ ค่าประกันภัยชั้น 1 ค่าเช็คระยะบำรุงรักษา ค่าภาษี พ.ร.บ. และค่าที่จอดรถทางด่วน สรุปยอดเฉลี่ยต่อวันและระยะยาว 5 ปี
        </p>
      </div>
      <OwnershipCostCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="มาตรฐานวิเคราะห์ต้นทุนการถือครองสินทรัพย์ยานยนต์แห่งประเทศไทย" />
      <RelatedTools currentSlug="car-ownership-cost" category="cost" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
