import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { TripFuelCalc } from '@/components/calculators/TripFuelCalc';
import { Fuel } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณค่าน้ำมันเดินทาง & หารค่าทริปท่องเที่ยว เฉลี่ยต่อคนอย่างแม่นยำ',
  description: 'โปรแกรมคำนวณค่าน้ำมันรถยนต์ วางแผนทริปท่องเที่ยวทางไกล คำนวณลิตรที่ใช้ ค่าทางด่วน และหารค่าใช้จ่ายเฉลี่ยต่อคน',
  alternates: { canonical: 'https://car-finance.in.th/trip-fuel-cost' },
  keywords: ['คำนวณค่าน้ำมัน', 'หารค่าน้ำมัน', 'ค่าน้ำมันไปต่างจังหวัด'],
  openGraph: {
    title: 'คำนวณค่าน้ำมันเดินทาง & หารค่าทริปท่องเที่ยว',
    description: 'คำนวณค่าน้ำมัน ค่าทางด่วน ลิตรที่ใช้ และหารเฉลี่ยค่าทริปต่อคน',
    url: 'https://car-finance.in.th/trip-fuel-cost',
  },
};

const faqs = [
  {
    question: 'สูตรการคำนวณค่าน้ำมันในการเดินทางคิดอย่างไร?',
    answer: 'สูตรคือ: (ระยะทางรวม / อัตราสิ้นเปลืองเฉลี่ย) x ราคาน้ำมันต่อลิตร + ค่าทางด่วน แล้วนำมาหารด้วยจำนวนผู้ร่วมทริป',
  },
];

export default function TripFuelCostPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณค่าน้ำมันเดินทาง & หารค่าทริป', url: '/trip-fuel-cost' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณค่าน้ำมันเดินทาง & หารค่าทริปท่องเที่ยว',
          description: 'คำนวณค่าน้ำมัน ค่าทางด่วน ลิตรที่ใช้ และหารเฉลี่ยค่าทริปต่อคน',
          url: 'https://car-finance.in.th/trip-fuel-cost',
          applicationCategory: 'TravelApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'คำนวณค่าน้ำมัน & หารทริป', url: '/trip-fuel-cost' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">
          <Fuel className="w-3.5 h-3.5" />
          <span>วางแผนทริป & ท่องเที่ยว</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณค่าน้ำมันเดินทาง & หารค่าทริปท่องเที่ยว
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          วางแผนงบประมาณค่าน้ำมันและค่าทางด่วนสำหรับการเดินทางไปต่างจังหวัด คำนวณจำนวนลิตรเชื้อเพลิง พร้อมหารเฉลี่ยค่าเดินทางต่อคนอย่างแม่นยำ
        </p>
      </div>
      <TripFuelCalc />
      <AuthorBox reviewedDate="สิงหาคม 2567" sourceLaw="มาตรฐานการคำนวณอัตราสิ้นเปลืองเชื้อเพลิงและก๊าซเรือนกระจก (Eco Sticker ประเทศไทย)" />
      <RelatedTools currentSlug="trip-fuel-cost" category="trip" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
