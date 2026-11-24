import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'ข้อกำหนดและเงื่อนไขการใช้งาน (Terms of Service)',
  description: 'ข้อกำหนด เงื่อนไขการใช้งาน และข้อสงวนสิทธิ์ความรับผิดชอบของ PhonRod.com',
  alternates: { canonical: 'https://phonrod.com/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'ข้อกำหนดการใช้งาน', url: '/terms-of-service' }]} />
      
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          ข้อกำหนดและเงื่อนไขการใช้งาน (Terms of Service)
        </h1>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900">1. ข้อสงวนสิทธิ์ทางการเงิน (Financial Disclaimer)</h2>
        <p>
          ผลลัพธ์ที่ได้จากการคำนวณบน PhonRod.com มีวัตถุประสงค์เพื่อเป็นข้อมูลประกอบการตัดสินใจเบื้องต้นและการศึกษาเท่านั้น <strong>ไม่ถือเป็นคำแนะนำทางการเงิน กฎหมาย หรือการรับประกันการอนุมัติสินเชื่อ</strong> เงื่อนไข อัตราดอกเบี้ย ค่าธรรมเนียม และยอดผ่อนชำระจริงจะขึ้นอยู่กับการพิจารณาของสถาบันการเงินและหน่วยงานราชการที่เกี่ยวข้อง
        </p>

        <h2 className="text-lg font-bold text-slate-900">2. ทรัพย์สินทางปัญญา (Intellectual Property)</h2>
        <p>
          เนื้อหา ซอร์สโค้ด ตรรกะการคำนวณ การออกแบบ และองค์ประกอบกราฟิกทั้งหมดบนเว็บไซต์นี้เป็นทรัพย์สินทางปัญญาของ PhonRod.com ห้ามทำซ้ำ ดัดแปลง หรือเผยแพร่เพื่อการค้าโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
        </p>

        <h2 className="text-lg font-bold text-slate-900">3. การเปลี่ยนแปลงเงื่อนไข</h2>
        <p>
          เราขอสงวนสิทธิ์ในการปรับปรุง เปลี่ยนแปลง หรือแก้ไขข้อกำหนดและเงื่อนไขเหล่านี้ได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
        </p>
      </div>
    </div>
  );
}
