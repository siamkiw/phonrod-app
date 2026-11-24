import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { EvVsIceCalc } from '@/components/calculators/EvVsIceCalc';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE วิ่งปีละเท่าไหร่ถึงคุ้ม?',
  description: 'เปรียบเทียบต้นทุนต่อกิโลเมตร ค่าไฟ TOU Off-peak ค่าบำรุงรักษา เบี้ยประกัน และระยะเวลาคืนทุนจากส่วนต่างราคารถยนต์ไฟฟ้า',
  alternates: { canonical: 'https://phonrod.com/ev-vs-ice-calculator' },
  keywords: ['จุดคุ้มทุน EV', 'EV vs รถน้ำมัน', 'เปรียบเทียบค่าใช้จ่ายรถไฟฟ้า', 'ชาร์จไฟบ้าน TOU', 'รถไฟฟ้าคุ้มไหม'],
  openGraph: {
    title: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE',
    description: 'วิเคราะห์ต้นทุนต่อ กม. ค่าไฟ TOU ค่าบำรุงรักษา และระยะเวลาคืนทุน',
    url: 'https://phonrod.com/ev-vs-ice-calculator',
  },
};

const faqs = [
  {
    question: 'รถยนต์ไฟฟ้า EV ประหยัดกว่ารถน้ำมันกี่เท่า?',
    answer: 'หากชาร์จไฟบ้านด้วยมิเตอร์ TOU ช่วง Off-peak (ประมาณ 2.6 - 3.2 บาท/หน่วย) รถ EV จะมีค่าไฟเพียงประมาณ 0.45 - 0.65 บาท/กม. เทียบกับรถน้ำมันที่กิน 2.20 - 3.50 บาท/กม. ซึ่งประหยัดค่าพลังงานลงกว่า 4 - 5 เท่า แต่หากชาร์จตู้ DC สาธารณะ (7.5 - 9.0 บาท/หน่วย) ต้นทุนจะอยู่ที่ราว 1.30 - 1.60 บาท/กม.',
  },
  {
    question: 'ต้องขับรถปีละกี่กิโลเมตร รถยนต์ไฟฟ้า EV ถึงจะคุ้มกว่ารถน้ำมัน?',
    answer: 'หากราคาซื้อรถ EV แพงกว่ารถน้ำมันรุ่นเทียบเคียง 150,000 - 200,000 บาท และหักส่วนต่างเบี้ยประกันภัยชั้น 1 ที่รถ EV แพงกว่าปีละ 6,000 - 10,000 บาทออกแล้ว ผู้ที่ขับรถเกิน 18,000 - 20,000 กม./ปี มักจะคืนทุนภายใน 3 - 5 ปี แต่หากขับน้อยกว่า 10,000 กม./ปี จุดคุ้มทุนจะลากยาวเกิน 6-8 ปี',
  },
  {
    question: 'เบี้ยประกันภัยชั้น 1 รถยนต์ไฟฟ้า EV แพงกว่ารถน้ำมันแค่ไหน?',
    answer: 'ปัจจุบันเบี้ยประกันภัยชั้น 1 ของรถ EV อยู่ที่ประมาณ 22,000 - 32,000 บาทต่อปี ซึ่งสูงกว่ารถน้ำมันระดับราคาเดียวกันประมาณ 6,000 - 12,000 บาทต่อปี เนื่องจากต้นทุนอะไหล่แบตเตอรี่และชุดขับเคลื่อนไฟฟ้าที่สูงกว่า ควรนำส่วนต่างเบี้ยประกันมารวมในการคำนวณจุดคุ้มทุนเสมอ',
  },
  {
    question: 'อยู่คอนโดไม่มีที่ชาร์จที่บ้าน ซื้อรถ EV คุ้มไหม?',
    answer: 'หากต้องพึ่งพาตู้ชาร์จเร็ว DC สาธารณะ 100% ค่าไฟจะอยู่ที่ประมาณ 7.5 - 9.0 บาท/หน่วย ทำให้ส่วนต่างประหยัดต่อกิโลเมตรลดลงเกือบครึ่งเมื่อเทียบกับชาร์จไฟบ้าน และต้องเสียเวลารอชาร์จ แนะนำให้พิจารณาว่ามีที่ชาร์จที่ทำงานหรือใกล้บ้านสะดวกหรือไม่ หรือลองเทียบกับรถไฮบริด (HEV) ที่ไม่ต้องชาร์จไฟ',
  },
];

export default function EvVsIcePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน', url: '/ev-vs-ice-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE',
          description: 'เปรียบเทียบต้นทุนพลังงาน ค่าชาร์จ TOU ค่าบำรุงรักษา และระยะเวลาคืนทุน',
          url: 'https://phonrod.com/ev-vs-ice-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'เทียบ EV vs น้ำมัน', url: '/ev-vs-ice-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold">
          <Zap className="w-3.5 h-3.5" />
          <span>วิเคราะห์ความคุ้มค่าพลังงานสะอาด</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          เปรียบเทียบต้นทุนการใช้งานจริงระหว่างรถยนต์ไฟฟ้า 100% และรถยนต์น้ำมัน วิเคราะห์ค่าเชื้อเพลิงต่อกิโลเมตร ค่าไฟบ้าน TOU ค่าบำรุงรักษา และระยะเวลาคืนทุน
        </p>
      </div>
      <EvVsIceCalc />
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="อัตราค่าไฟฟ้า TOU การไฟฟ้านครหลวงและการไฟฟ้าส่วนภูมิภาค และนโยบายส่งเสริมยานยนต์ไฟฟ้า EV 3.5" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            รถไฟฟ้า EV vs รถน้ำมัน vs ไฮบริด: ใช้งานแบบไหนเลือกคันไหนคุ้มที่สุด?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เทียบตัวเลขจริงทั้งค่าไฟ ค่าประกัน ค่าเช็คระยะ และเงื่อนไขที่อยู่อาศัยก่อนตัดสินใจซื้อ
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            คำถามยอดฮิตของคนซื้อรถยุคนี้คือ <strong>"ซื้อรถไฟฟ้า EV คุ้มกว่าจริงไหม?"</strong> คำตอบไม่ได้เหมือนกันสำหรับทุกคน เพราะความคุ้มค่าของรถ EV ขึ้นอยู่กับ 3 ตัวแปรหลักคือ <strong>ระยะทางที่ขับต่อปี</strong>, <strong>สถานที่ชาร์จไฟ (บ้าน vs ตู้สาธารณะ)</strong> และ <strong>ส่วนต่างเบี้ยประกันภัยกับราคาขายต่อ</strong>
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. เปรียบเทียบต้นทุนพลังงานต่อกิโลเมตร (คำนวณจากอัตราใช้งานจริง)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">ประเภทการชาร์จ / เชื้อเพลิง</th>
                  <th className="px-4 py-3">อัตราสิ้นเปลืองเฉลี่ย</th>
                  <th className="px-4 py-3">ต้นทุนต่อกิโลเมตร</th>
                  <th className="px-4 py-3">ค่าใช้จ่ายต่อ 20,000 กม./ปี</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-emerald-700">รถ EV (ชาร์จบ้าน TOU Off-peak)</td>
                  <td className="px-4 py-3">6.0 กม./kWh (~2.8 บ./หน่วย)</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">~0.47 บาท/กม.</td>
                  <td className="px-4 py-3">~9,400 บาท/ปี</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-teal-700">รถ EV (ชาร์จบ้านมิเตอร์ปกติ)</td>
                  <td className="px-4 py-3">6.0 กม./kWh (~4.2 บ./หน่วย)</td>
                  <td className="px-4 py-3 font-bold">~0.70 บาท/กม.</td>
                  <td className="px-4 py-3">~14,000 บาท/ปี</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">รถ EV (ชาร์จตู้ DC สาธารณะ)</td>
                  <td className="px-4 py-3">6.0 กม./kWh (~7.8 บ./หน่วย)</td>
                  <td className="px-4 py-3 font-bold">~1.30 บาท/กม.</td>
                  <td className="px-4 py-3">~26,000 บาท/ปี</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">รถไฮบริด (HEV)</td>
                  <td className="px-4 py-3">22 กม./ลิตร (น้ำมัน 36 บ.)</td>
                  <td className="px-4 py-3 font-bold">~1.64 บาท/กม.</td>
                  <td className="px-4 py-3">~32,800 บาท/ปี</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-rose-700">รถน้ำมันเบนซินทั่วไป</td>
                  <td className="px-4 py-3">14 กม./ลิตร (น้ำมัน 36 บ.)</td>
                  <td className="px-4 py-3 font-bold text-rose-700">~2.57 บาท/กม.</td>
                  <td className="px-4 py-3">~51,400 บาท/ปี</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. สรุปทางเลือกที่เหมาะกับไลฟ์สไตล์ของคุณ
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>เหมาะกับรถ EV 100%:</strong> อยู่บ้านเดี่ยว/ทาวน์โฮมที่ติด Wallbox ได้ ขับรถเกินวันละ 50-60 กม. (ปีละ 18,000+ กม.) และตั้งใจใช้รถยาว 5-8 ปีขึ้นไป จะประหยัดเงินสุทธิหลังหักประกันได้ปีละ 25,000 - 40,000 บาท</li>
            <li><strong>เหมาะกับรถไฮบริด (HEV):</strong> อยู่คอนโดไม่มีที่ชาร์จที่บ้าน วิ่งทางไกลต่างจังหวัดบ่อย ไม่อยากวางแผนจุดชาร์จ และต้องการความอุ่นใจเรื่องศูนย์บริการกับราคาขายต่อ</li>
            <li><strong>เหมาะกับรถน้ำมัน / Eco Car:</strong> ขับรถน้อยกว่าปีละ 10,000 กม. เน้นงบเริ่มต้นต่ำ ค่าเบี้ยประกันถูก และค่าซ่อมบำรุงคาดเดาได้ง่าย</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="ev-vs-ice-calculator" category="trip" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
