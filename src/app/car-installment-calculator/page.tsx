import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { CarInstallmentCalc } from '@/components/calculators/CarInstallmentCalc';
import { Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'โปรแกรมคำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate & ดอกเบี้ยแท้จริง (รวม VAT 7%)',
  description: 'คำนวณค่างวดรถยนต์ป้ายแดงและมือสอง แม่นยำ 100% คิดยอดจัด ดอกเบี้ยคงที่ VAT 7% พร้อมตารางแจกแจงค่างวดรายเดือนและดอกเบี้ยแท้จริง Effective Rate',
  alternates: {
    canonical: 'https://phonrod.com/car-installment-calculator',
  },
  keywords: ['คำนวณค่างวดรถ', 'ตารางผ่อนรถ', 'คิดค่างวดรถยนต์', 'ยอดจัดไฟแนนซ์', 'ดอกเบี้ยรถยนต์ Flat rate', 'คำนวณผ่อนรถยนต์'],
  openGraph: {
    title: 'โปรแกรมคำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate & ดอกเบี้ยแท้จริง',
    description: 'คำนวณค่างวดรถยนต์ ยอดจัด ดอกเบี้ยรวม VAT 7% พร้อมตารางผ่อนชำระละเอียด',
    url: 'https://phonrod.com/car-installment-calculator',
  },
};

const faqs = [
  {
    question: 'สูตรการคำนวณค่างวดรถยนต์แบบ Flat Rate คิดอย่างไร?',
    answer: 'สูตรคือ: (1) ยอดจัด = ราคารถ - เงินดาวน์, (2) ดอกเบี้ยรวม = ยอดจัด x อัตราดอกเบี้ยต่อปี x จำนวนปี, (3) ยอดหนี้รวมก่อน VAT = ยอดจัด + ดอกเบี้ยรวม, (4) ค่างวดก่อน VAT = ยอดหนี้รวม / จำนวนงวด, (5) ค่างวดสุทธิ = ค่างวดก่อน VAT x 1.07 (รวมภาษีมูลค่าเพิ่ม 7%)',
  },
  {
    question: 'ดอกเบี้ยคงที่ (Flat Rate) แตกต่างจาก ดอกเบี้ยลดต้นลดดอก (Effective Rate) อย่างไร?',
    answer: 'ดอกเบี้ยคงที่จะคิดจากเงินต้นก้อนแรกเต็มจำนวนตลอดอายุสัญญา แม้จะผ่อนไปจนเงินต้นเหลือน้อยดอกเบี้ยก็ไม่ลดลง ในขณะที่ดอกเบี้ยลดต้นลดดอกจะคิดดอกเบี้ยจากเงินต้นที่เหลือจริงในแต่ละงวด สำหรับสินเชื่อรถยนต์ ดอกเบี้ยที่แท้จริง (Effective Rate) จะมีค่าประมาณ 1.8 - 1.9 เท่าของอัตรา Flat Rate เสมอ',
  },
  {
    question: 'ควรวางเงินดาวน์รถยนต์กี่เปอร์เซ็นต์ดีที่สุด?',
    answer: 'ผู้เชี่ยวชาญแนะนำให้วางเงินดาวน์อย่างน้อย 20% ถึง 25% เพราะนอกจากจะได้รับอัตราดอกเบี้ยพิเศษที่ถูกกว่าแล้ว ยังผ่านการอนุมัติง่ายโดยไม่ต้องมีคนค้ำประกัน และช่วยป้องกันภาวะ "หนี้ท่วมมูลค่ารถ" ในช่วง 2-3 ปีแรกของการผ่อน',
  },
  {
    question: 'ทำไมค่างวดรถยนต์ถึงต้องมี VAT 7% บวกเพิ่ม?',
    answer: 'ตามประมวลรัษฎากรของไทย สัญญาเช่าซื้อรถยนต์ถือเป็นการ "ให้บริการเช่าซื้อสินค้า" จึงต้องเสียภาษีมูลค่าเพิ่ม (VAT 7%) ในทุกงวดที่ชำระ แตกต่างจากสินเชื่อบ้านที่เป็นสินเชื่อกู้ยืมเงินโดยตรงซึ่งได้รับการยกเว้นภาษีมูลค่าเพิ่ม',
  },
];

export default function CarInstallmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[{ name: 'คำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate', url: '/car-installment-calculator' }]}
      />

      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate & ดอกเบี้ยแท้จริง',
          description: 'คำนวณค่างวดรถยนต์ป้ายแดงและมือสอง คิดยอดจัด ดอกเบี้ยคงที่ VAT 7% พร้อมตารางผ่อนชำระ',
          url: 'https://phonrod.com/car-installment-calculator',
          applicationCategory: 'FinanceApplication',
          keywords: ['คำนวณค่างวดรถ', 'ตารางผ่อนรถ', 'ดอกเบี้ยคงที่', 'vat 7% ค่างวด'],
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'คำนวณค่างวดรถยนต์', url: '/car-installment-calculator' }]}
      />

      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <Calculator className="w-3.5 h-3.5" />
          <span>เครื่องมือคำนวณอันดับ 1 สำหรับคนซื้อรถ</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate & ดอกเบี้ยแท้จริง
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          โปรแกรมคำนวณค่างวดรถยนต์ป้ายแดงและรถมือสอง คำนวณยอดจัดไฟแนนซ์ ดอกเบี้ยคงที่รายปี และภาษีมูลค่าเพิ่ม 7% แบบแม่นยำ พร้อมวิเคราะห์อัตราดอกเบี้ยที่แท้จริง (Effective Interest Rate / APR) และตารางแจกแจงทุกงวด
        </p>
      </div>

      <CarInstallmentCalc />

      <AuthorBox
        reviewedDate="สิงหาคม 2567"
        sourceLaw="พระราชบัญญัติคุ้มครองผู้บริโภค และ ประมวลรัษฎากรว่าด้วยภาษีมูลค่าเพิ่มสัญญาเช่าซื้อ"
      />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            เจาะลึกสูตรการคำนวณค่างวดรถยนต์ และข้อควรรู้ก่อนขอสินเชื่อไฟแนนซ์
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            คู่มือการเงินโดยผู้เชี่ยวชาญสินเชื่อเช่าซื้อรถยนต์แห่งประเทศไทย
          </p>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            การคำนวณค่างวดรถยนต์ (Car Installment Calculation) เป็นขั้นตอนแรกที่สำคัญที่สุดสำหรับผู้ที่ต้องการซื้อรถยนต์ป้ายแดงหรือรถยนต์มือสอง เนื่องจากการผ่อนชำระรถยนต์ถือเป็นข้อผูกพันทางการเงินระยะยาวตั้งแต่ 1 ถึง 7 ปี (12 ถึง 84 งวด) หากผู้กู้ไม่เข้าใจโครงสร้างการคิดดอกเบี้ยและภาษีมูลค่าเพิ่ม อาจทำให้เกิดความผิดพลาดในการวางแผนสภาพคล่องทางการเงินได้
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. โครงสร้างสูตรการคิดดอกเบี้ยแบบ Flat Rate
          </h3>
          <p>
            สินเชื่อเช่าซื้อรถยนต์ในประเทศไทยจะคำนวณดอกเบี้ยแบบ <strong>อัตราดอกเบี้ยคงที่ (Flat Rate)</strong> ซึ่งหมายความว่า ดอกเบี้ยจะถูกคิดจากยอดจัดเช่าซื้อตั้งแต่วันแรก และคงที่ตลอดอายุสัญญา โดยมีสูตรการคำนวณดังนี้:
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm space-y-1.5 text-slate-800">
            <div>1. ยอดจัดไฟแนนซ์ (Loan Principal) = ราคารถยนต์ - เงินดาวน์</div>
            <div>2. ดอกเบี้ยรวมทั้งหมด = ยอดจัดไฟแนนซ์ x (อัตราดอกเบี้ยต่อปี / 100) x จำนวนปีที่ผ่อน</div>
            <div>3. ยอดรวมเงินต้นและดอกเบี้ย = ยอดจัดไฟแนนซ์ + ดอกเบี้ยรวมทั้งหมด</div>
            <div>4. ค่างวดก่อนภาษีมูลค่าเพิ่ม = ยอดรวมเงินต้นและดอกเบี้ย / จำนวนงวดทั้งหมด</div>
            <div>5. ค่างวดสุทธิที่ต้องจ่ายจริง = ค่างวดก่อนภาษีมูลค่าเพิ่ม x 1.07 (VAT 7%)</div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. ตัวอย่างการคำนวณจริง
          </h3>
          <p>
            สมมติว่าคุณซื้อรถยนต์ราคา <strong>800,000 บาท</strong> วางเงินดาวน์ <strong>20% (160,000 บาท)</strong> ดอกเบี้ยคงที่ <strong>2.50% ต่อปี</strong> ผ่อนชำระเป็นเวลา <strong>5 ปี (60 งวด)</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li>ยอดจัดไฟแนนซ์ = 800,000 - 160,000 = 640,000 บาท</li>
            <li>ดอกเบี้ยรวมตลอด 5 ปี = 640,000 x 2.50% x 5 = 80,000 บาท</li>
            <li>ยอดหนี้รวมก่อน VAT = 640,000 + 80,000 = 720,000 บาท</li>
            <li>ค่างวดก่อน VAT = 720,000 / 60 = 12,000 บาท/งวด</li>
            <li>ค่างวดสุทธิรวม VAT 7% = 12,000 x 1.07 = <strong>12,840 บาท/งวด</strong></li>
          </ul>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            3. ดอกเบี้ยแท้จริง (Effective Rate) คืออะไร และทำไมต้องรู้?
          </h3>
          <p>
            แม้ว่าดอกเบี้ยในสัญญาเช่าซื้อจะระบุไว้เพียง 2.50% ต่อปี แต่เนื่องจากเป็นการคิดแบบคงที่ ดอกเบี้ยไม่ได้ลดลงตามเงินต้นที่ทยอยจ่ายไปในแต่ละเดือน เมื่อนำมาแปลงเป็นอัตราดอกเบี้ยที่แท้จริงแบบลดต้นลดดอก (Effective Interest Rate / Annual Percentage Rate - APR) อัตราดอกเบี้ยแท้จริงจะอยู่ที่ประมาณ <strong>4.75% ถึง 4.90% ต่อปี</strong> ซึ่งเป็นตัวเลขที่แท้จริงสำหรับใช้เปรียบเทียบกับสินเชื่อประเภทอื่น เช่น สินเชื่อบ้าน หรือสินเชื่อส่วนบุคคล
          </p>
        </div>
      </article>

      <RelatedTools currentSlug="car-installment-calculator" category="loan" />

      <FAQSection faqs={faqs} />
    </div>
  );
}
