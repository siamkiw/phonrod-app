import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { RelatedTools } from '@/components/common/RelatedTools';
import { TransferFeeCalc } from '@/components/calculators/TransferFeeCalc';
import { FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก อากรแสตมป์ 0.5% ถูกต้องแม่นยำ',
  description: 'คำนวณค่าธรรมเนียมโอนกรรมสิทธิ์รถยนต์มือสอง อากรแสตมป์ 0.5% (500 บาทต่อแสน) ค่าคำขอ ค่าตรวจสภาพ สรุปยอดเงินและเอกสารที่ต้องใช้ที่กรมขนส่ง',
  alternates: { canonical: 'https://phonrod.com/car-transfer-fee-calculator' },
  keywords: ['ค่าโอนรถยนต์มือสอง', 'อากรแสตมป์โอนรถ', 'ค่าธรรมเนียมกรมการขนส่ง', 'เอกสารโอนรถ', 'โอนลอยรถยนต์'],
  openGraph: {
    title: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก',
    description: 'คำนวณค่าอากรแสตมป์ 0.5% ค่าธรรมเนียมการโอน ค่าคำขอ และค่าตรวจสภาพรถ',
    url: 'https://phonrod.com/car-transfer-fee-calculator',
  },
};

const faqs = [
  {
    question: 'ค่าโอนรถยนต์มือสองคิดจากราคาซื้อขายจริง หรือราคาประเมินของกรมการขนส่ง?',
    answer: 'เจ้าหน้าที่กรมการขนส่งทางบกจะคิดค่าอากรแสตมป์ 0.5% (500 บาทต่อราคาประเมิน 100,000 บาท) จากราคาที่ "สูงกว่า" เสมอ ระหว่างราคาซื้อขายในสัญญากับราคาประเมินกลางของกรมการขนส่งทางบก',
  },
  {
    question: 'โอนรถให้พ่อ แม่ ลูก หรือคู่สมรส ต้องเสียค่าอากรแสตมป์ 0.5% ไหม?',
    answer: 'กรณีโอนโดยเสน่หาให้บิดา มารดา บุตร หรือคู่สมรสที่จดทะเบียนสมรสถูกต้องตามกฎหมาย จะได้รับการยกเว้นค่าอากรแสตมป์ 0.5% เสียเฉพาะค่าคำขอ 5 บาท และค่าธรรมเนียมการโอน 100 บาท',
  },
  {
    question: 'โอนรถต่างจังหวัดต้องแจ้งย้ายปลายทางหรือไม่ และเสียค่าใช้จ่ายเพิ่มเท่าไหร่?',
    answer: 'หากต้องการเปลี่ยนป้ายทะเบียนเป็นจังหวัดใหม่ สามารถทำเรื่องแจ้งย้ายปลายทางได้ที่สำนักงานขนส่งจังหวัดปลายทาง มีค่าธรรมเนียมแจ้งย้ายออก-เข้า รวมค่าแผ่นป้ายทะเบียนใหม่ประมาณ 255 - 300 บาท โดยใช้เวลาดำเนินการ 2 รอบ (ยื่นเรื่อง + นำรถมาตรวจสภาพรับป้าย)',
  },
  {
    question: 'การโอนลอยมีความเสี่ยงอะไรบ้าง และควรป้องกันอย่างไร?',
    answer: 'การโอนลอยคือผู้ขายเซ็นชุดโอนให้ผู้ซื้อไปโอนเอง หากผู้ซื้อไม่ยอมไปโอนภายใน 15 วันและนำรถไปก่อเหตุหรือโดนใบสั่ง ความรับผิดชอบทางทะเบียนจะยังตกอยู่กับผู้ขาย แนะนำให้ไปโอนพร้อมกันที่กรมขนส่ง หรือทำสัญญาซื้อขายระบุวันเวลาส่งมอบรถชัดเจนพร้อมเก็บสำเนาบัตรประชาชนผู้ซื้อไว้',
  },
];

export default function CarTransferFeePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก', url: '/car-transfer-fee-calculator' }]} />
      <SchemaMarkup
        webApp={{
          name: 'โปรแกรมคำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก',
          description: 'คำนวณค่าธรรมเนียมโอนรถ อากรแสตมป์ 0.5% ค่าคำขอ และค่าตรวจสภาพรถ',
          url: 'https://phonrod.com/car-transfer-fee-calculator',
          applicationCategory: 'FinanceApplication',
        }}
        faqs={faqs}
        breadcrumbs={[{ name: 'ค่าโอนรถมือสอง', url: '/car-transfer-fee-calculator' }]}
      />
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <FileCheck className="w-3.5 h-3.5" />
          <span>อัตราค่าธรรมเนียมกรมการขนส่งทางบก</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          คำนวณค่าธรรมเนียมการโอนกรรมสิทธิ์รถยนต์มือสอง ค่าอากรแสตมป์ 0.5% ค่าคำขอ และค่าตรวจสภาพรถ พร้อมเช็คลิสต์เอกสารก่อนไปกรมขนส่ง
        </p>
      </div>
      <TransferFeeCalc />
      <AuthorBox reviewedDate="พฤศจิกายน 2569" sourceLaw="ระเบียบกรมการขนส่งทางบกว่าด้วยการดำเนินการเกี่ยวกับทะเบียนและภาษีรถ" />

      <article className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            คู่มือโอนรถยนต์มือสองที่กรมขนส่ง: ค่าธรรมเนียมจริง เอกสาร และขั้นตอน
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            เตรียมตัวล่วงหน้าให้เสร็จในวันเดียว ไม่ต้องเสียค่าบริการเต็นท์รถหรือโดนบวกค่าโอนเกินจริง
          </p>
        </div>

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            เมื่อซื้อขายรถยนต์มือสองแบบเงินสด (หรือปิดไฟแนนซ์รับเล่มมาแล้ว) การไปโอนกรรมสิทธิ์ด้วยตัวเองที่สำนักงานขนส่งทางบกมีค่าใช้จ่ายจริงต่ำกว่าที่หลายคนคิดมาก เพราะค่าใช้จ่ายหลักมีเพียงค่าอากรแสตมป์ร้อยละ 0.5 และค่าธรรมเนียมราชการไม่กี่ร้อยบาทเท่านั้น
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            1. รายการค่าธรรมเนียมโอนรถยนต์ที่กรมขนส่ง (อัตราทางการ)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">รายการค่าธรรมเนียม</th>
                  <th className="px-4 py-3">อัตราค่าบริการ</th>
                  <th className="px-4 py-3">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ค่าอากรแสตมป์</td>
                  <td className="px-4 py-3 font-bold text-brand-700">0.5% (500 บ. ต่อแสน)</td>
                  <td className="px-4 py-3">คิดจากราคาประเมินรถของกรมขนส่ง (ปัดเศษขึ้นตามเกณฑ์)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ค่าธรรมเนียมการโอน</td>
                  <td className="px-4 py-3">100 บาท</td>
                  <td className="px-4 py-3">อัตราคงที่สำหรับรถยนต์ทุกขนาด</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ค่าคำขอ</td>
                  <td className="px-4 py-3">5 บาท</td>
                  <td className="px-4 py-3">ชำระพร้อมค่าโอน</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ค่าเปลี่ยนเล่มทะเบียน (ถ้าเต็ม/ชำรุด)</td>
                  <td className="px-4 py-3">100 บาท</td>
                  <td className="px-4 py-3">จ่ายเฉพาะกรณีจำเป็นต้องออกเล่มใหม่</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">ค่าแผ่นป้ายใหม่ (กรณีย้ายจังหวัด)</td>
                  <td className="px-4 py-3">200 บาท</td>
                  <td className="px-4 py-3">กรณีคงเลขทะเบียนเดิมในจังหวัดเดิมไม่ต้องจ่าย</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
            2. เช็คลิสต์เอกสารที่ต้องเตรียมไปในวันโอน
          </h3>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li><strong>เล่มทะเบียนรถตัวจริง</strong> (สมุดคู่มือจดทะเบียนรถยนต์) ที่ภาษีประจำปียังไม่ขาด</li>
            <li><strong>สำเนาบัตรประชาชนของผู้โอน (ผู้ขาย) และผู้รับโอน (ผู้ซื้อ)</strong> พร้อมเซ็นรับรองสำเนาถูกต้อง</li>
            <li><strong>แบบคำขอโอนและรับโอน (ขนส่ง)</strong> ที่ลงลายมือชื่อครบทั้งสองฝ่าย</li>
            <li><strong>หนังสือมอบอำนาจ + อากรแสตมป์ 10 บาท</strong> (กรณีผู้ซื้อหรือผู้ขายไม่ได้เดินทางมาด้วยตัวเอง)</li>
            <li><strong>นำรถยนต์คันจริงเข้าช่องตรวจสภาพที่กรมขนส่ง:</strong> เพื่อขูดเลขตัวถังและตรวจเช็คสภาพรถให้ตรงตามเล่มทะเบียนก่อนยื่นเอกสารบนอาคาร</li>
          </ul>
        </div>
      </article>

      <RelatedTools currentSlug="car-transfer-fee-calculator" category="ownership" />
      <FAQSection faqs={faqs} />
    </div>
  );
}
