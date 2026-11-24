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
  title: 'คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ. (อัปเดตอัตราภาษี 2569)',
  description: 'คำนวณภาษีรถยนต์ประจำปีตาม ซีซี และน้ำหนัก ส่วนลดอายุรถปีที่ 6-10+ พร้อมคิดค่า พ.ร.บ. บังคับ และตรวจสภาพ ตรอ.',
  alternates: { canonical: 'https://phonrod.com/car-tax-calculator' },
  keywords: ['คำนวณภาษีรถยนต์', 'ต่อภาษีรถยนต์กี่บาท', 'ภาษีรถยนต์ตาม cc', 'ค่าพรบรถยนต์', 'ภาษีรถกระบะ', 'ภาษีรถ EV'],
  openGraph: {
    title: 'คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ.',
    description: 'คิดภาษีรถยนต์ตามขนาด ซีซี / น้ำหนัก ส่วนลดอายุรถปีที่ 6-10+ พร้อม พ.ร.บ. และ ตรอ.',
    url: 'https://phonrod.com/car-tax-calculator',
  },
};

const faqs = [
  {
    question: 'รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (รถเก๋ง) มีอัตราการคิดภาษีประจำปีอย่างไร?',
    answer: 'คิดภาษีตามขนาดความจุกระบอกสูบ (ซีซี) แบบขั้นบันได: 1-600 ซีซี แรกคิด ซีซี ละ 0.50 บาท, 601-1,800 ซีซี คิด ซีซี ละ 1.50 บาท และส่วนที่เกิน 1,800 ซีซี คิด ซีซี ละ 4.00 บาท',
  },
  {
    question: 'รถยนต์อายุเกินกี่ปีถึงจะได้ส่วนลดภาษี และต้องตรวจสภาพ ตรอ.?',
    answer: 'รถเก๋งส่วนบุคคลไม่เกิน 7 ที่นั่งจะเริ่มได้ส่วนลดภาษีตั้งแต่ปีที่ 6 ลดปีละ 10% ไปจนถึงปีที่ 10 ขึ้นไปลดสูงสุด 50% ส่วนการตรวจสภาพ ตรอ. บังคับสำหรับรถยนต์ที่มีอายุการใช้งานเกิน 7 ปีขึ้นไป (ค่าตรวจ 200 บาท)',
  },
  {
    question: 'ต่อภาษีรถยนต์ล่าช้าโดนค่าปรับเท่าไหร่ และขาดเกิน 3 ปีจะเป็นอย่างไร?',
    answer: 'หากต่อภาษีล่าช้าจะเสียเงินเพิ่มร้อยละ 1 ต่อเดือนของค่าภาษีประจำปี เศษของเดือนนับเป็น 1 เดือน และหากขาดต่อภาษีติดต่อกันเกิน 3 ปี ทะเบียนรถจะถูกระงับทันที ต้องนำรถไปตรวจสภาพและจดทะเบียนใหม่ที่กรมการขนส่งทางบก',
  },
  {
    question: 'รถกระบะ 4 ประตู กับรถกระบะ 2 ประตู (แค็บ) เสียภาษีต่างกันอย่างไร?',
    answer: 'รถกระบะ 4 ประตูจดทะเบียนเป็นรถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (ป้ายขาวตัวอักษรดำ) จึงเสียภาษีตาม ซีซี เครื่องยนต์ซึ่งแพงกว่ามาก ส่วนรถกระบะ 2 ประตูหรือตอนเดียวจดทะเบียนเป็นรถยนต์บรรทุกส่วนบุคคล (ป้ายขาวตัวอักษรเขียว) เสียภาษีตามน้ำหนักรถเริ่มต้นราว 900 - 1,350 บาทต่อปี',
  },
  {
    question: 'ต่อภาษีรถยนต์ล่วงหน้าได้กี่วัน และต้องใช้เอกสารอะไรบ้าง?',
    answer: 'สามารถต่อภาษีล่วงหน้าได้ไม่เกิน 90 วันก่อนวันหมดอายุ โดยเตรียมเล่มทะเบียนรถ (หรือสำเนา), หาง พ.ร.บ. คุ้มครองผู้ประสบภัยจากรถที่ยังไม่หมดอายุ และใบรับรองการตรวจสภาพ ตรอ. (กรณีรถอายุเกิน 7 ปี)',
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
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="พระราชบัญญัติรถยนต์ พ.ศ. 2522 กรมการขนส่งทางบก" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            สรุปวิธีคิดภาษีรถยนต์ประจำปี พ.ร.บ. และส่วนลดตามอายุรถ (อัปเดตล่าสุด)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เช็คยอดค่าใช้จ่ายทั้งหมดก่อนไปต่อภาษีที่กรมขนส่ง หรือต่อภาษีออนไลน์ผ่านระบบ DLT e-Service
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            เจ้าของรถยนต์ทุกคนมีหน้าที่ต้องต่อภาษีประจำปี (ป้ายวงกลม) และซื้อ พ.ร.บ. คุ้มครองผู้ประสบภัยจากรถทุกปี ค่าใช้จ่ายจะแตกต่างกันชัดเจนตามประเภทรถ ขนาดเครื่องยนต์ (ซีซี) น้ำหนักรถ และอายุการใช้งานของรถ
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. ตัวอย่างการคำนวณภาษีรถเก๋ง (รย.1) ตามขนาด ซีซี ยอดนิยม
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">ขนาดเครื่องยนต์</th>
                  <th className="px-4 py-3">วิธีคิดตามขั้นบันได</th>
                  <th className="px-4 py-3">ภาษีปีที่ 1-5</th>
                  <th className="px-4 py-3">ภาษีปีที่ 10+ (ลด 50%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">1,200 cc (Eco Car)</td>
                  <td className="px-4 py-3">(600 x 0.5) + (600 x 1.5)</td>
                  <td className="px-4 py-3 font-bold">1,200 บาท</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">600 บาท</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">1,500 cc (City / Yaris)</td>
                  <td className="px-4 py-3">(600 x 0.5) + (900 x 1.5)</td>
                  <td className="px-4 py-3 font-bold">1,650 บาท</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">825 บาท</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">1,800 cc (Altis / HRV)</td>
                  <td className="px-4 py-3">(600 x 0.5) + (1,200 x 1.5)</td>
                  <td className="px-4 py-3 font-bold">2,100 บาท</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">1,050 บาท</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">2,000 cc (Civic / SUV)</td>
                  <td className="px-4 py-3">2,100 + (200 x 4.0)</td>
                  <td className="px-4 py-3 font-bold">2,900 บาท</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">1,450 บาท</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">2,400 cc (กระบะ 4 ประตู)</td>
                  <td className="px-4 py-3">2,100 + (600 x 4.0)</td>
                  <td className="px-4 py-3 font-bold">4,500 บาท</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">2,250 บาท</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">3,000 cc (กระบะ 4 ประตู / PPV)</td>
                  <td className="px-4 py-3">2,100 + (1,200 x 4.0)</td>
                  <td className="px-4 py-3 font-bold">6,900 บาท</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">3,450 บาท</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. ค่าใช้จ่ายประกอบที่ต้องจ่ายพร้อมกันทุกปี
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>พ.ร.บ. รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (รถเก๋ง / กระบะ 4 ประตู):</strong> 645.21 บาทต่อปี (รวมภาษีและอากรแล้ว)</li>
            <li><strong>พ.ร.บ. รถกระบะบรรทุก (2 ประตู / ตอนเดียว):</strong> 967.28 บาทต่อปี</li>
            <li><strong>ค่าตรวจสภาพรถ ตรอ. (เฉพาะรถอายุเกิน 7 ปี):</strong> 200 บาท สำหรับรถยนต์น้ำหนักไม่เกิน 2,000 กก.</li>
            <li><strong>รถยนต์ไฟฟ้า EV (รย.1):</strong> คิดภาษีตามน้ำหนักรถและได้รับสิทธิลดภาษี 80% ในปีแรกของการจดทะเบียน (ตามเงื่อนไขมาตรการส่งเสริม EV ของกรมขนส่ง)</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="car-tax-calculator" category="cost" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
