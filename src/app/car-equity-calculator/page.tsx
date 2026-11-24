import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { CarEquityCalc } from '@/components/calculators/CarEquityCalc';
import { Coins } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์ (Car Equity Calculator)',
  description: 'เช็คมูลค่าสุทธิราคารถยนต์เทียบยอดหนี้ไฟแนนซ์คงเหลือ ประเมินว่าขายดาวน์ได้เงินสดกลับมา หรือต้องยกให้ผ่อนต่อฟรี',
  alternates: { canonical: 'https://phonrod.com/car-equity-calculator' },
  keywords: ['คำนวณขายดาวน์รถ', 'ขายรถติดไฟแนนซ์', 'หนี้ท่วมรถ', 'เปลี่ยนสัญญาผ่อนต่อ', 'ยกให้ผ่อนต่อฟรี'],
  openGraph: {
    title: 'คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์',
    description: 'เช็คมูลค่าสุทธิ (Equity) ราคารถเทียบหนี้คงค้าง ประเมินเงินสดขายดาวน์',
    url: 'https://phonrod.com/car-equity-calculator',
  },
};

const faqs = [
  {
    question: 'การขายดาวน์แบบเปลี่ยนสัญญา ต้องเตรียมค่าใช้จ่ายอะไรบ้าง?',
    answer: 'ผู้ซื้อและผู้ขายต้องตกลงกันเรื่องค่าธรรมเนียมเปลี่ยนสัญญา (ประมาณ 3,000 - 5,000 บาท), ค่างวดล่วงหน้า 1-2 งวดตามเกณฑ์ของไฟแนนซ์ และค่าประกันภัยชั้น 1 (กรณีประกันใกล้หมดอายุ)',
  },
  {
    question: 'ภาวะ "หนี้ท่วมรถ" (Negative Equity) คืออะไร และแก้ยังไงได้บ้าง?',
    answer: 'คือสถานการณ์ที่ยอดปิดบัญชีไฟแนนซ์สูงกว่าราคาตลาดรถมือสองในปัจจุบัน มักเกิดจากการดาวน์น้อย (0-10%) และผ่อนยาว 7 ปี หากต้องการเปลี่ยนรถหรือลดภาระ มีทางออกหลัก 3 ทางคือ: (1) ยกให้ผ่อนต่อฟรีโดยเปลี่ยนสัญญาให้ถูกกฎหมาย, (2) เติมเงินส่วนต่างปิดบัญชี, หรือ (3) ผ่อนต่อไปจนพ้นปีที่ 3-4 ที่ยอดหนี้ลดลงต่ำกว่าราคาตลาด',
  },
  {
    question: 'ขายรถติดไฟแนนซ์โดยไม่เปลี่ยนสัญญา (โอนลอยให้คนอื่นผ่อนต่อ) อันตรายแค่ไหน?',
    answer: 'อันตรายมากและไม่ควรทำเด็ดขาด เพราะชื่อผู้เช่าซื้อตามกฎหมายยังเป็นชื่อคุณ หากคนซื้อเชิดรถหนีหรือหยุดผ่อน คุณจะถูกไฟแนนซ์ฟ้องเรียกค่าเสียหายและติดเครดิตบูโร รวมถึงอาจถูกดำเนินคดีฐานยักยอกทรัพย์ได้ ต้องทำเรื่อง "เปลี่ยนสัญญาเช่าซื้อ" ที่บริษัทไฟแนนซ์เท่านั้น',
  },
  {
    question: 'ต้องผ่อนมาแล้วกี่งวดถึงจะทำเรื่องเปลี่ยนสัญญาขายดาวน์ได้?',
    answer: 'ไฟแนนซ์ส่วนใหญ่กำหนดให้ต้องผ่อนชำระค่างวดมาแล้วอย่างน้อย 6 - 12 งวดขึ้นไป และต้องไม่มีค่างวดค้างชำระในวันยื่นเรื่องเปลี่ยนสัญญา',
  },
];

export default function CarEquityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณขายดาวน์ & มูลค่าหนี้คงเหลือไฟแนนซ์', url: '/car-equity-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์',
          description: 'ประเมินมูลค่าสุทธิ Equity หนี้คงค้างไฟแนนซ์ และเงินสดขายดาวน์',
          url: 'https://phonrod.com/car-equity-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'คำนวณขายดาวน์ & หนี้คงเหลือ', url: '/car-equity-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
          <Coins className="w-3.5 h-3.5" />
          <span>วิเคราะห์มูลค่าสุทธิของรถยนต์</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          วิเคราะห์มูลค่ารถยนต์เปรียบเทียบกับภาระหนี้คงค้างไฟแนนซ์ (Car Equity) ประเมินเงินสดขายดาวน์ หรือวางแผนรับมือภาวะหนี้ท่วมรถอย่างถูกวิธี
        </p>
      </div>
      <CarEquityCalc />
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="ข้อกำหนดการโอนสิทธิเรียกร้องตามสัญญาเช่าซื้อ ประมวลกฎหมายแพ่งและพาณิชย์" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            ขายดาวน์รถติดไฟแนนซ์อย่างไรไม่ให้ขาดทุน และวิธีเช็ค "หนี้ท่วมรถ"
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เข้าใจความต่างระหว่าง "ยอดหนี้คงเหลือทั้งหมด" กับ "ยอดปิดบัญชี" เพื่อตั้งราคาขายดาวน์ได้สมเหตุสมผลและขายออกไว
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            หลายคนอยากเปลี่ยนรถหรือเริ่มผ่อนไม่ไหว แต่พอเช็คตัวเลขจริงกลับพบว่าขายรถไม่ได้ราคาอย่างที่คิด สาเหตุหลักมาจากการดูแค่เงินดาวน์และค่างวดที่จ่ายไปแล้ว โดยไม่ได้นำ <strong>ราคาตลาดรถมือสองปัจจุบัน</strong> มาเทียบกับ <strong>ยอดหนี้คงเหลือทั้งหมด (ค่างวด x จำนวนงวดที่เหลือ)</strong>
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. สูตรประเมินมูลค่าสุทธิ (Car Equity) และราคาขายดาวน์
          </h3>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm space-y-1.5 text-slate-800">
            <div>ยอดหนี้คงเหลือทั้งหมด = ค่างวดต่อเดือน x จำนวนงวดที่เหลือ</div>
            <div>ส่วนต่างมูลค่ารถ (Equity) = ราคาตลาดรถมือสองปัจจุบัน - ยอดหนี้คงเหลือทั้งหมด</div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. อ่านผลลัพธ์แล้วควรเลือกทางไหน?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>กรณีส่วนต่างเป็นบวก (+):</strong> คุณสามารถตั้งราคา "ขายดาวน์" เพื่อรับเงินสดกลับมาได้ โดยควรตั้งราคาต่ำกว่าส่วนต่างจริงเล็กน้อยเพื่อจูงใจผู้ซื้อให้ยอมจ่ายค่าเปลี่ยนสัญญา (ซึ่งผู้ซื้อรถขายดาวน์ได้เปรียบตรงไม่ต้องเสีย VAT 7% ซ้ำอีกรอบและไม่ต้องจัดไฟแนนซ์ดอกเบี้ยรถมือสองที่แพงกว่า)</li>
            <li><strong>กรณีส่วนต่างเป็นศูนย์ หรือติดลบเล็กน้อย (0 ถึง -30,000 บาท):</strong> ทางออกที่จบไวและเจ็บตัวน้อยที่สุดคือการ <strong>"ยกให้ผ่อนต่อฟรี เปลี่ยนสัญญา"</strong> โดยให้ผู้ซื้อรับผิดชอบค่าเปลี่ยนสัญญาและค่างวดล่วงหน้า เพื่อปลดภาระหนี้ทั้งหมดออกจากเครดิตบูโรของคุณ</li>
            <li><strong>กรณีหนี้ท่วมรถหนัก (ติดลบเกิน 50,000 บาท):</strong> หากยังพอผ่อนไหว แนะนำให้ลองใช้เครื่องมือ <a href="/car-refinance-calculator" className="text-brand-600 font-semibold hover:underline">คำนวณรีไฟแนนซ์รถยนต์</a> หรือเจรจาปรับโครงสร้างหนี้กับไฟแนนซ์เดิมก่อน เพราะการปล่อยยึดรถจะทำให้ถูกฟ้องส่วนต่างหลังขายทอดตลาดซึ่งสูงกว่าหลายเท่า</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="car-equity-calculator" category="ownership" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
