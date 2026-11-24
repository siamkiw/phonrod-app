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
  alternates: { canonical: 'https://phonrod.com/trip-fuel-cost' },
  keywords: ['คำนวณค่าน้ำมัน', 'หารค่าน้ำมัน', 'ค่าน้ำมันไปต่างจังหวัด', 'ค่าน้ำมันต่อกิโลเมตร', 'หารค่าทริป'],
  openGraph: {
    title: 'คำนวณค่าน้ำมันเดินทาง & หารค่าทริปท่องเที่ยว',
    description: 'คำนวณค่าน้ำมัน ค่าทางด่วน ลิตรที่ใช้ และหารเฉลี่ยค่าทริปต่อคน',
    url: 'https://phonrod.com/trip-fuel-cost',
  },
};

const faqs = [
  {
    question: 'สูตรการคำนวณค่าน้ำมันในการเดินทางคิดอย่างไร?',
    answer: 'สูตรคือ: (ระยะทางรวมทั้งหมด / อัตราสิ้นเปลืองเฉลี่ยของรถ กม./ลิตร) x ราคาน้ำมันต่อลิตร จากนั้นบวกค่าทางด่วนและค่าจอดรถ แล้วหารด้วยจำนวนผู้ร่วมเดินทางทั้งหมด',
  },
  {
    question: 'ควรเผื่ออัตราสิ้นเปลืองน้ำมันจากสเปกโรงงาน (Eco Sticker) กี่เปอร์เซ็นต์?',
    answer: 'ตัวเลขบน Eco Sticker มักวัดในห้องทดสอบที่ความเร็วคงที่ ในการใช้งานจริงที่มีรถติด เปิดแอร์ และบรรทุกผู้โดยสารเต็มคัน แนะนำให้ลดตัวเลขอัตราสิ้นเปลืองลงประมาณ 15% - 20% เพื่อให้ได้งบค่าน้ำมันที่ใกล้เคียงความจริงมากที่สุด',
  },
  {
    question: 'ขับรถความเร็วเท่าไหร่ถึงประหยัดน้ำมันที่สุดเวลาวิ่งทางไกล?',
    answer: 'สำหรับรถยนต์นั่งส่วนบุคคลทั่วไป ช่วงความเร็วที่ประหยัดน้ำมันที่สุดคือ 80 - 100 กม./ชม. หากขับเร็วเกิน 120 กม./ชม. แรงต้านอากาศจะเพิ่มขึ้นแบบทวีคูณ ทำให้อัตราสิ้นเปลืองน้ำมันเพิ่มขึ้นถึง 15% - 25%',
  },
  {
    question: 'การหารค่าน้ำมันกับเพื่อน ควรรวมค่าเสื่อมรถหรือค่าทางด่วนด้วยไหม?',
    answer: 'โดยทั่วไปทริปเพื่อนมักหาร "ค่าน้ำมันจริง + ค่าทางด่วน + ค่าที่จอดรถ" เท่าๆ กันทุกคน (หรือบางกลุ่มยกเว้นไม่ให้เจ้าของรถ/คนขับต้องจ่ายค่าน้ำมันเพื่อช่วยเฉลี่ยค่าสึกหรอและค่าเหนื่อยขับรถ) แนะนำให้ตกลงกติกากันก่อนออกเดินทางจะสบายใจที่สุด',
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
          url: 'https://phonrod.com/trip-fuel-cost',
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
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="มาตรฐานการคำนวณอัตราสิ้นเปลืองเชื้อเพลิงและก๊าซเรือนกระจก (Eco Sticker ประเทศไทย)" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            อัตราสิ้นเปลืองรถแต่ละประเภท และเทคนิควางแผนงบค่าน้ำมันไปต่างจังหวัด
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            ใช้ตัวเลขอัตราสิ้นเปลืองจริงตามประเภทรถ เพื่อประเมินงบเดินทางก่อนล้อหมุน
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            ก่อนขับรถเที่ยวต่างจังหวัดกับครอบครัวหรือแก๊งเพื่อน การคำนวณค่าน้ำมันและค่าทางด่วนล่วงหน้าช่วยให้ตั้งงบกองกลางได้แม่นยำ และช่วยเปรียบเทียบได้ด้วยว่าการขับรถไปเองกับนั่งเครื่องบินหรือรถไฟแบบไหนคุ้มกว่ากันสำหรับจำนวนคนในทริป
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. ตารางอ้างอิงอัตราสิ้นเปลืองจริงของรถยอดนิยมในไทย (วิ่งทางไกลนอกเมือง)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">ประเภทรถยนต์</th>
                  <th className="px-4 py-3">ในเมือง (รถติด)</th>
                  <th className="px-4 py-3">ทางไกล (90-110 กม./ชม.)</th>
                  <th className="px-4 py-3">เหมาะสำหรับกรอกในเครื่องคำนวณ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">รถไฮบริด (HEV / e:HEV)</td>
                  <td className="px-4 py-3">20 - 25 กม./ลิตร</td>
                  <td className="px-4 py-3">20 - 24 กม./ลิตร</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">21 - 22 กม./ลิตร</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Eco Car / B-Segment 1.2-1.5</td>
                  <td className="px-4 py-3">12 - 15 กม./ลิตร</td>
                  <td className="px-4 py-3">17 - 20 กม./ลิตร</td>
                  <td className="px-4 py-3 font-bold">16 - 17 กม./ลิตร</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">C-Segment / B-SUV เบนซิน</td>
                  <td className="px-4 py-3">9 - 12 กม./ลิตร</td>
                  <td className="px-4 py-3">14 - 16 กม./ลิตร</td>
                  <td className="px-4 py-3 font-bold">13 - 14 กม./ลิตร</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">รถกระบะ / PPV ดีเซล</td>
                  <td className="px-4 py-3">10 - 12 กม./ลิตร</td>
                  <td className="px-4 py-3">13 - 16 กม./ลิตร</td>
                  <td className="px-4 py-3 font-bold">12 - 14 กม./ลิตร</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. เช็ค 3 จุดก่อนออกทริป ช่วยประหยัดน้ำมันได้ทันที 10%
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>เติมลมยางให้ตรงสเปกเมื่อบรรทุกเต็มคัน:</strong> ยางอ่อนกว่ามาตรฐานเพียง 5 PSI ทำให้กินน้ำมันเพิ่มขึ้น 3-5% และเสี่ยงยางระเบิดเมื่อวิ่งความเร็วสูง</li>
            <li><strong>เช็คเส้นทางขึ้นเขาหรือทางโค้ง:</strong> หากทริปมีการขึ้นดอย (เช่น เชียงใหม่ น่าน เขาค้อ) ควรเผื่องบค่าน้ำมันเพิ่มอีก 15-20% จากเส้นทางราบปกติ</li>
            <li><strong>เติมน้ำมันเต็มถังก่อนเริ่มทริปและเติมกลับให้เต็มตอนจบทริป:</strong> เป็นวิธีหารค่าน้ำมันจริงที่ยุติธรรมและแม่นยำที่สุดโดยไม่ต้องกะเกณฑ์จากเข็มน้ำมัน</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="trip-fuel-cost" category="trip" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
