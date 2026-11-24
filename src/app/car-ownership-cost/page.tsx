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
  keywords: ['ต้นทุนการมีรถยนต์', 'ค่าใช้จ่ายรถยนต์ต่อเดือน', 'TCO รถยนต์', 'มีรถ 1 คันจ่ายปีละเท่าไหร่', 'ค่าบำรุงรักษารถยนต์'],
  openGraph: {
    title: 'คำนวณต้นทุนการมีรถจริงต่อปี (Total Cost of Ownership)',
    description: 'คำนวณค่าใช้จ่ายแฝง ค่างวด น้ำมัน ประกันภัย เช็คระยะ เผยต้นทุนแท้จริงต่อวัน/ต่อปี',
    url: 'https://phonrod.com/car-ownership-cost',
  },
};

const faqs = [
  {
    question: 'มีรถยนต์ 1 คัน ต้องจ่ายค่าใช้จ่ายแฝงเฉลี่ยปีละเท่าไหร่?',
    answer: 'นอกจากค่างวดผ่อนรถแล้ว ค่าใช้จ่ายแฝง (ประกันภัยชั้น 1 + ภาษี พ.ร.บ. + เช็คระยะเปลี่ยนถ่ายน้ำมันเครื่อง + เปลี่ยนยางและแบตเตอรี่เฉลี่ยรายปี + ค่าที่จอดรถและทางด่วน) สำหรับรถยนต์ทั่วไปเฉลี่ยอยู่ที่ประมาณ 45,000 - 85,000 บาทต่อปี หรือราว 3,750 - 7,000 บาทต่อเดือน',
  },
  {
    question: 'ค่าเสื่อมราคารถยนต์ (Depreciation) คิดยังไง และสำคัญแค่ไหน?',
    answer: 'โดยทั่วไปรถยนต์ป้ายแดงจะมีมูลค่าลดลงประมาณ 15-25% ในปีแรก และลดลงปีละประมาณ 10% ในปีถัดๆ ไป ทำให้ผ่านไป 5 ปี ราคารถจะเหลือราว 45-55% ของราคาป้ายแดง แม้จะไม่ได้จ่ายออกเป็นเงินสดทุกเดือน แต่ถือเป็นต้นทุนแฝงก้อนใหญ่ที่สุดของการมีรถ',
  },
  {
    question: 'ถ้าขับรถน้อยกว่าวันละ 20 กม. ซื้อรถเองหรือนั่งรถไฟฟ้า/เรียกรถคุ้มกว่า?',
    answer: 'หากนับเฉพาะตัวเงิน การขับรถน้อยกว่าวันละ 20 กม. ต้นทุนคงที่ (ค่างวด ประกัน ค่าจอดรถ ค่าเสื่อม) จะเฉลี่ยออกมาสูงถึงวันละ 400 - 650 บาท ซึ่งมักแพงกว่าการนั่งรถไฟฟ้าและเรียกรถแอป แต่หากต้องเดินทางรับส่งครอบครัวหรือขนของบ่อย ความสะดวกและเวลาที่ประหยัดได้ก็เป็นปัจจัยที่ต้องชั่งน้ำหนักร่วมกัน',
  },
  {
    question: 'ควรกันเงินสำรองค่าดูแลรถไว้เดือนละเท่าไหร่เพื่อไม่ให้ช็อตตอนต่อประกัน?',
    answer: 'แนะนำให้เปิดบัญชีแยกและโอนเงินเก็บไว้เดือนละ 2,500 - 3,500 บาท สำหรับรถ Eco Car / B-Segment หรือเดือนละ 4,000 - 5,500 บาท สำหรับรถ SUV / รถยุโรป เมื่อถึงรอบจ่ายประกันชั้น 1 ต่อภาษี หรือเปลี่ยนยางชุดใหม่ 4 เส้น จะมีเงินก้อนจ่ายทันทีโดยไม่ต้องรูดบัตรเครดิต',
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
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="มาตรฐานวิเคราะห์ต้นทุนการถือครองสินทรัพย์ยานยนต์แห่งประเทศไทย" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            เจาะลึกค่าใช้จ่ายแฝงของคนมีรถ 1 คัน: ทำไม "ค่างวด" จึงเป็นแค่ครึ่งเดียวของความจริง?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            กางตัวเลขค่าใช้จ่ายจริงรายปีของรถแต่ละขนาด เพื่อวางแผนงบไม่ให้ช็อตหลังออกรถ
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            หลายคนวางแผนซื้อรถโดยดูเพียงตัวเลขค่างวดต่อเดือน เช่น ผ่อนเดือนละ 10,000 บาทก็คิดว่าจ่ายไหว แต่ในความจริงการมีรถยนต์ 1 คันมี <strong>ต้นทุนการถือครองทั้งหมด (Total Cost of Ownership: TCO)</strong> ที่ต้องจ่ายตลอดทั้งปี แม้บางรายการจะไม่ได้จ่ายทุกเดือน แต่เมื่อหารเฉลี่ยเป็นรายเดือนแล้วมักสูงกว่าที่คาดไว้ 40% - 70%
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. ตารางประมาณการค่าใช้จ่ายแฝงต่อปี (ไม่รวมค่างวดผ่อนรถ)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">หมวดค่าใช้จ่าย</th>
                  <th className="px-4 py-3">Eco Car / B-Segment</th>
                  <th className="px-4 py-3">B-SUV / C-Segment</th>
                  <th className="px-4 py-3">รอบการจ่าย</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ประกันภัยชั้น 1</td>
                  <td className="px-4 py-3">14,000 - 19,000 บ.</td>
                  <td className="px-4 py-3">19,000 - 26,000 บ.</td>
                  <td className="px-4 py-3">ปีละ 1 ครั้ง</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ภาษีรถยนต์ + พ.ร.บ.</td>
                  <td className="px-4 py-3">1,845 - 2,295 บ.</td>
                  <td className="px-4 py-3">2,745 - 3,545 บ.</td>
                  <td className="px-4 py-3">ปีละ 1 ครั้ง</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">เช็คระยะ (2 ครั้ง/ปี)</td>
                  <td className="px-4 py-3">5,000 - 8,000 บ.</td>
                  <td className="px-4 py-3">7,000 - 12,000 บ.</td>
                  <td className="px-4 py-3">ทุก 10,000 กม. หรือ 6 เดือน</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ยาง + แบตเตอรี่ (เฉลี่ยรายปี)</td>
                  <td className="px-4 py-3">4,500 - 6,500 บ.</td>
                  <td className="px-4 py-3">7,000 - 11,000 บ.</td>
                  <td className="px-4 py-3">แบตทุก 2 ปี / ยางทุก 3-4 ปี</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ค่าน้ำมัน (วิ่ง ~15,000 กม./ปี)</td>
                  <td className="px-4 py-3">30,000 - 38,000 บ.</td>
                  <td className="px-4 py-3">40,000 - 52,000 บ.</td>
                  <td className="px-4 py-3">รายเดือน</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. วิธีลดต้นทุน TCO โดยไม่ต้องลดคุณภาพการใช้งาน
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>ระบุชื่อผู้ขับขี่และเช็คส่วนลดประวัติดีประกันภัย:</strong> หากขับรถดีไม่มีเคลมฝ่ายผิด สามารถรับส่วนลดเบี้ยประกันประวัติดีได้สูงสุด 50% และเลือกซ่อมอู่มาตรฐานแทนซ่อมห้างเมื่อรถอายุเกิน 4-5 ปี</li>
            <li><strong>เปรียบเทียบค่าน้ำมันกับระยะทางจริง:</strong> หากขับรถเกิน 20,000 กม./ปี ลองใช้เครื่องมือ <a href="/ev-vs-ice-calculator" className="text-brand-600 font-semibold hover:underline">คำนวณจุดคุ้มทุน EV vs รถน้ำมัน</a> เพื่อดูว่าการเปลี่ยนไปใช้รถไฮบริดหรือรถไฟฟ้าช่วยประหยัด TCO 5 ปีได้เท่าไร</li>
            <li><strong>แยกบัญชี "กองทุนดูแลรถ" ตั้งแต่วันแรก:</strong> กันเงินส่วนค่าประกัน ภาษี และยางแยกไว้อัตโนมัติทุกเดือน จะช่วยไม่ให้กระทบกระแสเงินสดหลักในครอบครัว</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="car-ownership-cost" category="cost" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
