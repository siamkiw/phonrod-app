import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { ShieldCheck, Award, BookOpen, Users, CheckCircle2, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา (About Us) | Thai Automotive Financial Hub',
  description: 'พันธกิจและทีมงานผู้อยู่เบื้องหลัง Thai Automotive Financial Hub ศูนย์รวมเครื่องมือคำนวณการเงินรถยนต์ที่แม่นยำและถูกต้องตามกฎหมายไทย 100%',
};

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'เกี่ยวกับเรา', url: '/about-us' }]} />
      
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <Award className="w-3.5 h-3.5" />
          <span>ความเป็นมา & มาตรฐานความถูกต้อง</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          เกี่ยวกับเรา: Thai Automotive Financial Hub
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          เราคือกลุ่มวิศวกรซอฟต์แวร์และที่ปรึกษาด้านการเงินยานยนต์ที่มีเป้าหมายร่วมกันในการสร้าง <strong>"เครื่องมือการเงินสำหรับคนมีรถที่มีความโปร่งใส แม่นยำ และเป็นกลางที่สุดในประเทศไทย"</strong>
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">
          ทำไมเราจึงสร้าง AutoFin Hub Thailand?
        </h2>
        <p>
          ในปัจจุบัน การซื้อขายรถยนต์และการขอสินเชื่อเช่าซื้อในประเทศไทยเต็มไปด้วยความซับซ้อน เช่น การคิดอัตราดอกเบี้ยคงที่ (Flat Rate) ที่แท้จริงแล้วมีต้นทุนสูงกว่าที่ระบุในสัญญาเกือบ 2 เท่า รวมถึงกฎหมายใหม่ของ สคบ. เกี่ยวกับสิทธิการรับส่วนลดดอกเบี้ยเมื่อปิดยอดก่อนกำหนด ซึ่งผู้บริโภคจำนวนมากยังไม่ทราบสิทธิของตนเอง
        </p>
        <p>
          AutoFin Hub จึงพัฒนา 10 เครื่องมือคำนวณแบบ Instant Client-side ที่ทำงานรวดเร็วระดับเสี้ยววินาที โดยไม่เก็บข้อมูลส่วนบุคคลของผู้ใช้งาน และอ้างอิงสูตรตามข้อกำหนดของกฎหมายไทย 100%
        </p>

        <h3 className="text-lg font-bold text-slate-900 pt-4">
          แหล่งอ้างอิงและมาตรฐานความถูกต้องทางกฎหมาย
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong>ประกาศคณะกรรมการว่าด้วยสัญญา (สคบ.):</strong> เรื่องให้ธุรกิจให้เช่าซื้อรถยนต์และรถจักรยานยนต์เป็นธุรกิจที่ควบคุมสัญญา พ.ศ. 2565 (สูตรส่วนลดดอกเบี้ย 60%, 70%, 100%)</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong>พระราชบัญญัติรถยนต์ พ.ศ. 2522:</strong> กรมการขนส่งทางบก (อัตราภาษีรถยนต์ประจำปีตาม ซีซี และน้ำหนัก พร้อมส่วนลดปีที่ 6-10+)</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong>ประมวลรัษฎากร:</strong> กรมสรรพากร (ภาษีมูลค่าเพิ่ม 7% ในสัญญาเช่าซื้อ และอัตราอากรแสตมป์ 0.5% ในการโอนกรรมสิทธิ์รถยนต์)</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong>แนวปฏิบัติการให้สินเชื่ออย่างรับผิดชอบ:</strong> ธนาคารแห่งประเทศไทย (เกณฑ์ DSR 40-50%)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
