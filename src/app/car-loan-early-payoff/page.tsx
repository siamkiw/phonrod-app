import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { EarlyPayoffCalc } from '@/components/calculators/EarlyPayoffCalc';
import { ShieldCheck } from 'lucide-react';

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
    answer: 'ประกาศคณะกรรมการว่าด้วยสัญญา สคบ. พ.ศ. 2565 มีผลบังคับใช้ตั้งแต่วันที่ 10 มกราคม 2566 เป็นต้นไป โดยคุ้มครองสัญญาเช่าซื้อรถยนต์และรถจักรยานยนต์ส่วนบุคคลที่ทำตั้งแต่วันที่กฎหมายมีผลบังคับใช้',
  },
  {
    question: 'เกณฑ์ส่วนลดดอกเบี้ยคงเหลือ 3 ขั้นบันไดของ สคบ. แบ่งอย่างไร?',
    answer: 'แบ่งตามสัดส่วนจำนวนงวดที่ผ่อนไปแล้ว: (1) ไม่เกิน 1 ใน 3 ของงวดทั้งหมด ลดดอกเบี้ยที่ยังไม่ถึงกำหนดชำระไม่น้อยกว่า 60%, (2) เกิน 1 ใน 3 แต่ไม่เกิน 2 ใน 3 ลดไม่น้อยกว่า 70%, และ (3) เกิน 2 ใน 3 ขึ้นไป ลดดอกเบี้ยคงเหลือ 100% เต็มจำนวน',
  },
  {
    question: 'ทำไมส่วนลดดอกเบี้ยปิดยอดจึงไม่ได้คิดจากดอกเบี้ยทั้งหมดหารเฉลี่ยเท่ากันทุกงวด?',
    answer: 'เพราะสัญญาเช่าซื้อในไทยคิดการตัดดอกเบี้ยแบบลดต้นลดดอก (Effective Interest Rate) ในตารางบัญชีภายใน ช่วงงวดแรกๆ ค่างวดจะถูกตัดเป็นดอกเบี้ยในสัดส่วนที่สูงกว่าช่วงท้ายสัญญา ดังนั้นยิ่งปิดยอดเร็วเท่าไร ดอกเบี้ยที่ยังไม่ถึงกำหนดชำระ (Unearned Interest) ที่นำมาลดจะยิ่งมีมูลค่าสูงกว่าการปิดตอนใกล้หมดสัญญา',
  },
  {
    question: 'ถ้าทำสัญญาก่อนวันที่ 10 มกราคม 2566 จะได้รับส่วนลดกี่เปอร์เซ็นต์?',
    answer: 'สัญญาที่ทำก่อนวันที่ 10 มกราคม 2566 จะยังใช้ประกาศ สคบ. ฉบับปี 2561 ซึ่งกำหนดส่วนลดดอกเบี้ยที่ยังไม่ถึงกำหนดชำระในอัตราไม่น้อยกว่า 50% (ยกเว้นไฟแนนซ์แต่ละแห่งจัดโปรโมชันให้มากกว่า)',
  },
  {
    question: 'หลังโอนเงินปิดยอดแล้ว กี่วันถึงจะได้เล่มทะเบียนรถตัวจริง?',
    answer: 'โดยปกติไฟแนนซ์จะใช้เวลาดำเนินการโอนกรรมสิทธิ์และจัดส่งเล่มทะเบียนรถประมาณ 15 - 30 วันทำการ หลังจากได้รับเงินปิดยอดและเอกสารโอนครบถ้วน โดยจะมีค่าธรรมเนียมโอนเล่มและค่ามัดจำตามเงื่อนไขของแต่ละบริษัท',
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
          <span>สิทธิประโยชน์ตามประกาศ สคบ. ฉบับล่าสุด</span>
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
        reviewedDate="พฤศจิกายน 2569"
        sourceLaw="ประกาศคณะกรรมการว่าด้วยสัญญา สคบ. พ.ศ. 2565 เรื่องควบคุมสัญญาเช่าซื้อรถยนต์และรถจักรยานยนต์"
      />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            เจาะลึกสิทธิปิดยอดรถก่อนกำหนด (สคบ.) ปิดช่วงไหนคุ้มที่สุด?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เข้าใจวิธีคิดดอกเบี้ยที่ยังไม่ถึงกำหนดชำระ (Rule of 78 / Effective) และวิธีเทียบความคุ้มค่าก่อนควักเงินก้อนปิดบัญชี
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            หลายคนเข้าใจผิดว่า "สินเชื่อรถยนต์ปิดก่อนกำหนดไม่ได้ส่วนลด" หรือ "ได้ลดแค่ 50% เหมือนเดิม" แต่ตามประกาศคณะกรรมการว่าด้วยสัญญา สคบ. พ.ศ. 2565 (มีผลตั้งแต่ 10 มกราคม 2566) ผู้เช่าซื้อที่ต้องการปิดบัญชีก่อนครบกำหนดจะได้รับส่วนลดดอกเบี้ยที่ยังไม่ถึงกำหนดชำระแบบขั้นบันได 3 ระดับ ซึ่งช่วยประหยัดเงินได้หลักหมื่นบาทหากวางแผนจังหวะปิดอย่างถูกต้อง
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. ตารางเกณฑ์ส่วนลดดอกเบี้ย สคบ. 3 ขั้นบันได (ตัวอย่างสัญญา 60 งวด)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">สัดส่วนงวดที่ผ่อนไปแล้ว</th>
                  <th className="px-4 py-3">ตัวอย่าง (สัญญา 60 งวด)</th>
                  <th className="px-4 py-3">ส่วนลดดอกเบี้ยคงเหลือ</th>
                  <th className="px-4 py-3">ลักษณะความคุ้มค่า</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ไม่เกิน 1/3 ของสัญญา</td>
                  <td className="px-4 py-3">งวดที่ 1 - 20</td>
                  <td className="px-4 py-3 font-bold text-brand-700">ไม่น้อยกว่า 60%</td>
                  <td className="px-4 py-3">ดอกเบี้ยคงเหลือยังเยอะ ปิดเร็วประหยัดเป็นตัวเงินมากที่สุด</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">เกิน 1/3 ถึง 2/3</td>
                  <td className="px-4 py-3">งวดที่ 21 - 40</td>
                  <td className="px-4 py-3 font-bold text-indigo-700">ไม่น้อยกว่า 70%</td>
                  <td className="px-4 py-3">จุดสมดุล ได้ส่วนลดสูงขึ้นและยอดปิดไม่หนักเกินไป</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">เกิน 2/3 ของสัญญา</td>
                  <td className="px-4 py-3">งวดที่ 41 - 59</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">ลด 100% เต็มจำนวน</td>
                  <td className="px-4 py-3">ไม่เสียดอกเบี้ยที่เหลือเลย แต่ดอกเบี้ยช่วงท้ายเหลือค่อนข้างน้อย</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. วิธีตัดสินใจ: ควรเอาเงินก้อนไปปิดรถ หรือเก็บไว้ลงทุน/สำรองฉุกเฉิน?
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>ควรปิดยอดทันทีเมื่อ:</strong> เงินก้อนนั้นเป็นเงินเย็น (เหลือเงินสำรองฉุกเฉินอย่างน้อย 6 เดือนแล้ว) และส่วนลดดอกเบี้ยที่ประหยัดได้คิดเป็นผลตอบแทนสูงกว่าดอกเบี้ยเงินฝาก (ปกติช่วงครึ่งแรกของสัญญา มักประหยัดได้เทียบเท่าผลตอบแทน 4-7% ต่อปีแบบปลอดความเสี่ยง)</li>
            <li><strong>ไม่ควรรีบปิดเมื่อ:</strong> เหลืออีกไม่ถึง 6-10 งวดสุดท้าย เพราะดอกเบี้ยในงวดท้ายๆ ถูกตัดไปเกือบหมดแล้ว ส่วนลดที่ได้อาจเหลือเพียงหลักร้อยถึงพันต้นๆ การเก็บเงินสดไว้เสริมสภาพคล่องอาจคุ้มกว่า</li>
            <li><strong>เช็คยอดปิดจริงกับไฟแนนซ์ก่อนโอนเสมอ:</strong> โทรขอ "ใบแจ้งยอดปิดบัญชี" ที่ระบุวันหมดอายุของยอดปิด รวมถึงค่าธรรมเนียมโอนเล่ม (ประมาณ 1,000 - 2,000 บาท) เพื่อให้โอนครบจบในครั้งเดียว</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="car-loan-early-payoff" category="loan" />

      <FAQSection faqs={faqs} />
    </div>
  );
}
