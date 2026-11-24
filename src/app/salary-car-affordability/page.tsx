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
    canonical: 'https://phonrod.com/salary-car-affordability',
  },
  keywords: ['เงินเดือนซื้อรถ', 'คำนวณวงเงินกู้รถ', 'DSR ไฟแนนซ์', 'เงินเดือน 20000 ซื้อรถอะไรได้', 'เงินเดือน 30000 กู้รถได้เท่าไหร่'],
  openGraph: {
    title: 'คำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR ไฟแนนซ์)',
    description: 'วิเคราะห์วงเงินกู้ซื้อรถสูงสุดตามฐานเงินเดือน ประเมินสัดส่วนภาระหนี้ DSR',
    url: 'https://phonrod.com/salary-car-affordability',
  },
};

const faqs = [
  {
    question: 'เกณฑ์ DSR (Debt Service Ratio) ของไฟแนนซ์รถยนต์คืออะไร?',
    answer: 'DSR คือสัดส่วนภาระหนี้สินรวมต่อรายได้สุทธิต่อเดือน เช่น หากมีเงินเดือน 30,000 บาท และไฟแนนซ์กำหนดเกณฑ์ DSR สูงสุด 50% หมายความว่าภาระหนี้ทั้งหมด (ค่างวดรถใหม่ + บัตรเครดิต + สินเชื่อเดิม) ต้องไม่เกิน 15,000 บาทต่อเดือน',
  },
  {
    question: 'เงินเดือน 20,000 บาท ซื้อรถยนต์รุ่นไหน ราคาเท่าไหร่ได้บ้าง?',
    answer: 'สำหรับเงินเดือน 20,000 บาทที่ไม่มีหนี้เดิม ค่างวดที่ปลอดภัยไม่ควรเกิน 6,000 - 8,000 บาท/เดือน เมื่อวางเงินดาวน์ 20% ผ่อน 5-6 ปี จะเหมาะกับกลุ่ม Eco Car หรือรถมือสองสภาพดีราคาประมาณ 450,000 - 600,000 บาท เพื่อให้เหลือเงินสำรองค่าน้ำมันและประกันภัย',
  },
  {
    question: 'หากมีภาระหนี้บัตรเครดิตหรือผ่อนคอนโดอยู่ จะกู้ซื้อรถผ่านไหม?',
    answer: 'กู้ผ่านได้หากหนี้เดิมรวมค่างวดรถใหม่ยังไม่เกิน 50% ของรายได้ แต่ถ้าสัดส่วนเกิน แนะนำให้ปิดหนี้บัตรเครดิตบางส่วนก่อนยื่นกู้ เพิ่มเงินดาวน์เป็น 25-30% หรือใช้ผู้กู้ร่วมในครอบครัวเพื่อเพิ่มฐานรายได้',
  },
  {
    question: 'ต้องมีรายได้เป็นกี่เท่าของค่างวดรถ ถึงจะไม่ต้องใช้คนค้ำประกัน?',
    answer: 'เกณฑ์มาตรฐานของไฟแนนซ์ไทยคือรายได้สุทธิต้องมากกว่า 2 เท่าของค่างวดรถ และหากวางเงินดาวน์ตั้งแต่ 20-25% ขึ้นไปร่วมกับประวัติเครดิตบูโรปกติ ส่วนใหญ่จะอนุมัติได้โดยไม่ต้องมีผู้ค้ำประกัน',
  },
  {
    question: 'อาชีพอิสระหรือค้าขาย ไม่มีสลิปเงินเดือน กู้ซื้อรถได้หรือไม่?',
    answer: 'กู้ได้ โดยใช้เอกสารแสดงรายได้อื่นแทน เช่น รายการเดินบัญชี (Statement) ย้อนหลัง 6 เดือน ทะเบียนพาณิชย์ สัญญาเช่าร้าน ใบเสร็จซื้อขาย หรือหนังสือรับรองการหักภาษี ณ ที่จ่าย (50 ทวิ) โดยไฟแนนซ์อาจขอเงินดาวน์สูงขึ้นเป็น 20-30%',
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
          url: 'https://phonrod.com/salary-car-affordability',
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
        reviewedDate="พฤศจิกายน 2569"
        sourceLaw="แนวปฏิบัติการให้สินเชื่ออย่างรับผิดชอบ (Responsible Lending) ธนาคารแห่งประเทศไทย"
      />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            เงินเดือนเท่านี้ ผ่อนรถเท่าไหร่ถึงปลอดภัย? คู่มืออ่านเกณฑ์ DSR ก่อนยื่นไฟแนนซ์
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เข้าใจความต่างระหว่าง "วงเงินที่ไฟแนนซ์อนุมัติ" กับ "ค่างวดที่คุณผ่อนไหวจริงโดยไม่ตึงมือ"
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            ข้อผิดพลาดที่เจอบ่อยที่สุดของคนซื้อรถคันแรกคือการดูแค่ว่า <strong>"ไฟแนนซ์ให้กู้ผ่านไหม"</strong> โดยลืมคิดถึงค่าใช้จ่ายแฝงหลังรับรถ ไม่ว่าจะเป็นค่าน้ำมัน ค่าประกันชั้น 1 ค่าเช็คระยะ และค่าจอดรถ ซึ่งรวมกันแล้วสูงถึง 4,000 - 7,000 บาทต่อเดือน หากค่างวดรถกินสัดส่วนเกิน 40% ของเงินเดือน โอกาสที่จะหมุนเงินไม่ทันในปีที่ 2-3 จะสูงมาก
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. สูตรคำนวณ DSR ที่ไฟแนนซ์ไทยใช้พิจารณาจริง
          </h3>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm space-y-1.5 text-slate-800">
            <div>DSR (%) = ((ภาระหนี้เดิมต่อเดือน + ค่างวดรถใหม่รวม VAT) / รายได้สุทธิต่อเดือน) x 100</div>
            <div>ค่างวดสูงสุดตามเกณฑ์ = (รายได้สุทธิ x เพดาน DSR) - ภาระหนี้เดิมต่อเดือน</div>
          </div>
          <p>
            โดยทั่วไป สถาบันการเงินจะแบ่งระดับความเสี่ยงออกเป็น 3 ช่วง ได้แก่ <strong>ไม่เกิน 30% (โซนปลอดภัย)</strong> อนุมัติง่ายและเหลือสภาพคล่องสูง, <strong>31% - 45% (โซนมาตรฐาน)</strong> อนุมัติผ่านได้แต่ต้องคุมรายจ่ายอื่น และ <strong>เกิน 50% (โซนเสี่ยงสูง)</strong> มักถูกขอให้เพิ่มเงินดาวน์หรือหาผู้กู้ร่วม
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. ตารางเปรียบเทียบฐานเงินเดือน vs ราคารถที่ผ่อนสบาย (ไม่มีหนี้เดิม, ดาวน์ 20%, ผ่อน 60 งวด)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">เงินเดือนสุทธิ</th>
                  <th className="px-4 py-3">ค่างวดปลอดภัย (ไม่เกิน 30%)</th>
                  <th className="px-4 py-3">ราคารถที่แนะนำ</th>
                  <th className="px-4 py-3">กลุ่มรถที่เหมาะสม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">20,000 บาท</td>
                  <td className="px-4 py-3">ไม่เกิน 6,000 บ./เดือน</td>
                  <td className="px-4 py-3">350,000 - 450,000 บาท</td>
                  <td className="px-4 py-3">รถมือสองสภาพดี 3-5 ปี / Eco Car มือสอง</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">30,000 บาท</td>
                  <td className="px-4 py-3">ไม่เกิน 9,000 บ./เดือน</td>
                  <td className="px-4 py-3">550,000 - 650,000 บาท</td>
                  <td className="px-4 py-3">Eco Car ป้ายแดง / B-Segment รุ่นเริ่มต้น</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">45,000 บาท</td>
                  <td className="px-4 py-3">ไม่เกิน 13,500 บ./เดือน</td>
                  <td className="px-4 py-3">750,000 - 900,000 บาท</td>
                  <td className="px-4 py-3">B-SUV / Hybrid / EV พิกัดกลาง</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">60,000+ บาท</td>
                  <td className="px-4 py-3">ไม่เกิน 18,000 บ./เดือน</td>
                  <td className="px-4 py-3">1,000,000 - 1,250,000 บาท</td>
                  <td className="px-4 py-3">C-Segment / PPV / EV พิกัดใหญ่</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            3. กฎ 20/4/10 ช่วยตัดสินใจเลือกแผนการซื้อที่ไม่ทำร้ายการเงิน
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>วางเงินดาวน์อย่างน้อย 20%:</strong> ช่วยลดยอดจัดและป้องกันภาวะหนี้ท่วมมูลค่ารถตั้งแต่ปีแรก</li>
            <li><strong>ผ่อนไม่เกิน 4-5 ปี (48-60 งวด):</strong> ยิ่งลากยาวเป็น 7 ปี ดอกเบี้ยรวมจะพุ่งสูงขึ้นหลายหมื่นบาท</li>
            <li><strong>ค่าใช้จ่ายรถรวมไม่เกิน 25-30% ของรายได้:</strong> นับรวมทั้งค่างวด ค่าน้ำมัน ประกัน และบำรุงรักษาเฉลี่ยต่อเดือน</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="salary-car-affordability" category="loan" />

      <FAQSection faqs={faqs} />
    </div>
  );
}
