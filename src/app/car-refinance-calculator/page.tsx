import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { RefinanceCalc } from '@/components/calculators/RefinanceCalc';
import { RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ ลดค่างวด รับเงินสดก้อนโต',
  description: 'คำนวณรีไฟแนนซ์รถยนต์ที่ยังผ่อนไม่หมด เปรียบเทียบดอกเบี้ยใหม่ ขยายงวดเพื่อลดภาระค่างวดต่อเดือน หรือประเมินเงินสดคงเหลือ Cashback',
  alternates: { canonical: 'https://phonrod.com/car-refinance-calculator' },
  keywords: ['รีไฟแนนซ์รถยนต์', 'สินเชื่อจำนำทะเบียน', 'ลดค่างวดรถ', 'รถยังผ่อนไม่หมดรีไฟแนนซ์ได้ไหม', 'รีไฟแนนซ์รถคุ้มไหม'],
  openGraph: {
    title: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ',
    description: 'คำนวณรีไฟแนนซ์ ลดค่างวด ขยายงวด และประเมินเงินสดคงเหลือ Cashback',
    url: 'https://phonrod.com/car-refinance-calculator',
  },
};

const faqs = [
  {
    question: 'การรีไฟแนนซ์รถยนต์คืออะไร และเหมาะกับใคร?',
    answer: 'การรีไฟแนนซ์รถยนต์คือการขอสินเชื่อก้อนใหม่เพื่อนำมาปิดบัญชีไฟแนนซ์เดิม เหมาะกับผู้ที่ต้องการลดค่างวดรายเดือนลง (จากการขยายระยะเวลาผ่อนหรือได้ดอกเบี้ยใหม่ที่ต่ำกว่า) หรือต้องการนำเงินส่วนต่าง (Cashback) จากมูลค่ารถมาหมุนเวียนธุรกิจหรือปิดหนี้นอกระบบ/บัตรเครดิตที่ดอกเบี้ยสูงกว่า',
  },
  {
    question: 'รถยังผ่อนไม่หมด รีไฟแนนซ์ได้เมื่อไหร่?',
    answer: 'สามารถยื่นรีไฟแนนซ์ได้เมื่อผ่อนชำระมาแล้วเกินครึ่งทางของสัญญาเดิม หรือเมื่อยอดปิดบัญชีคงเหลือต่ำกว่าราคาประเมินรถของไฟแนนซ์ใหม่ (ปกติคือหลังผ่อนไปแล้ว 24-36 งวด) เพื่อให้วงเงินใหม่เพียงพอสำหรับปิดหนี้เดิม',
  },
  {
    question: 'รีไฟแนนซ์รถยนต์แบบโอนเล่ม กับ แบบไม่โอนเล่ม (จำนำทะเบียน) ต่างกันอย่างไร?',
    answer: 'แบบโอนเล่ม (เช่าซื้อใหม่) มักได้วงเงินสูงกว่าและดอกเบี้ยต่ำกว่า แต่มีค่าโอน อากรแสตมป์ และค่างวดต้องบวก VAT 7% ส่วนแบบไม่โอนเล่ม (สินเชื่อจำนำทะเบียน) ใช้เล่มทะเบียนค้ำประกัน ไม่ต้องเสีย VAT 7% ในค่างวด และคิดดอกเบี้ยแบบลดต้นลดดอก (Effective Rate) จึงเหมาะกับรถที่ผ่อนหมดแล้วหรือต้องการโปะปิดเร็ว',
  },
  {
    question: 'รีไฟแนนซ์รถยนต์มีค่าใช้จ่ายแฝงอะไรบ้างที่ต้องเอามาคิดด้วย?',
    answer: 'ควรเช็คค่าธรรมเนียมปิดบัญชีและโอนเล่มจากไฟแนนซ์เดิม (ประมาณ 1,000 - 2,000 บาท), ค่าอากรแสตมป์และค่าโอนที่กรมขนส่ง (กรณีโอนเล่ม), ค่าตรวจสภาพรถ และค่าเบี้ยประกันภัยชั้น 1 หรือประกันคุ้มครองวงเงินสินเชื่อที่บางแห่งอาจเสนอขายพ่วง',
  },
];

export default function CarRefinancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียน', url: '/car-refinance-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียน',
          description: 'เปรียบเทียบสัญญาเดิมและสัญญาใหม่ ลดค่างวด และคำนวณเงินสด Cashback',
          url: 'https://phonrod.com/car-refinance-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'คำนวณรีไฟแนนซ์รถ', url: '/car-refinance-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>ปรับโครงสร้างหนี้ & เสริมสภาพคล่อง</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          จำลองการรีไฟแนนซ์รถยนต์ที่ยังผ่อนไม่หมด เปรียบเทียบผลประโยชน์ระหว่างค่างวดเดิมกับค่างวดใหม่ ขยายงวดเพื่อลดภาระรายเดือน และคำนวณเงินสดก้อน Cashback
        </p>
      </div>
      <RefinanceCalc />
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="หลักเกณฑ์การกำกับดูแลธุรกิจสินเชื่อที่มีทะเบียนรถเป็นประกัน ธนาคารแห่งประเทศไทย" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            รีไฟแนนซ์รถยนต์คุ้มจริงไหม? เช็ค 3 จุดสำคัญก่อนเซ็นสัญญาใหม่
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            รู้ทันความต่างระหว่าง "ค่างวดต่อเดือนที่ลดลง" กับ "ดอกเบี้ยรวมที่อาจเพิ่มขึ้น" เพื่อเลือกทางที่เหมาะกับสถานการณ์ของคุณ
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            การรีไฟแนนซ์รถยนต์ไม่ได้แปลว่าจะประหยัดดอกเบี้ยเสมอไปเหมือนการรีไฟแนนซ์บ้าน เพราะสินเชื่อรถมือสองมักมีอัตราดอกเบี้ยสูงกว่าดอกเบี้ยรถป้ายแดง (เฉลี่ย 3.5% - 6.5% Flat Rate หรือ 12% - 24% แบบลดต้นลดดอก) ดังนั้นก่อนตัดสินใจรีไฟแนนซ์ คุณต้องแยกเป้าหมายให้ชัดว่าต้องการ <strong>"ลดค่างวดเพื่อประคองสภาพคล่อง"</strong> หรือ <strong>"รวมหนี้ดอกเบี้ยแพง"</strong>
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. เปรียบเทียบ รีไฟแนนซ์แบบโอนเล่ม vs จำนำทะเบียน (ไม่โอนเล่ม)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">หัวข้อเปรียบเทียบ</th>
                  <th className="px-4 py-3">รีไฟแนนซ์โอนเล่ม (เช่าซื้อ)</th>
                  <th className="px-4 py-3">จำนำทะเบียน (ไม่โอนเล่ม)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">รูปแบบดอกเบี้ย</td>
                  <td className="px-4 py-3">คงที่ (Flat Rate)</td>
                  <td className="px-4 py-3">ลดต้นลดดอก (Effective Rate)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ภาษีมูลค่าเพิ่ม VAT 7%</td>
                  <td className="px-4 py-3 text-rose-700 font-semibold">มี VAT 7% ในทุกค่างวด</td>
                  <td className="px-4 py-3 text-emerald-700 font-semibold">ไม่มี VAT 7%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">การโปะปิดก่อนกำหนด</td>
                  <td className="px-4 py-3">ลดดอกเบี้ยตามเกณฑ์ สคบ.</td>
                  <td className="px-4 py-3">โปะตัดเงินต้นได้ทันที ดอกเบี้ยลดตามจริง</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">เหมาะกับใคร</td>
                  <td className="px-4 py-3">ต้องการวงเงินสูง ผ่อนยาว 4-6 ปี</td>
                  <td className="px-4 py-3">ต้องการเงินหมุนระยะสั้น 1-3 ปี แล้วรีบโปะปิด</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. กรณีไหนควรรีไฟแนนซ์ และกรณีไหนควรหลีกเลี่ยง?
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>คุ้มค่าที่จะทำเมื่อ:</strong> ค่างวดเดิมตึงมือจนเสี่ยงผิดนัดชำระ (การยืดงวดช่วยลดค่างวดลง 25-40% เพื่อรักษาประวัติเครดิตบูโร) หรือเอาเงิน Cashback ไปปิดหนี้บัตรเครดิต/สินเชื่อส่วนบุคคลที่ดอกเบี้ย 16-25% ต่อปี</li>
            <li><strong>ควรหลีกเลี่ยงเมื่อ:</strong> เหลือค่างวดเดิมอีกไม่กี่เดือน หรือนำเงินส่วนต่างไปใช้จ่ายฟุ่มเฟือย เพราะการเปิดสัญญาเช่าซื้อใหม่จะทำให้ต้องจ่าย VAT 7% และดอกเบี้ยรอบใหม่ซ้ำซ้อน</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="car-refinance-calculator" category="loan" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
