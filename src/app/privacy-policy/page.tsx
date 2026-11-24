import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว (Privacy Policy)',
  description: 'นโยบายความเป็นส่วนตัว การจัดการคุกกี้ และมาตรฐานความปลอดภัยของข้อมูลบน PhonRod.com ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)',
  alternates: { canonical: 'https://phonrod.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'นโยบายความเป็นส่วนตัว', url: '/privacy-policy' }]} />
      
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          นโยบายความเป็นส่วนตัว (Privacy Policy)
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          มีผลบังคับใช้ตั้งแต่วันที่: 1 มกราคม 2567 (อัปเดตล่าสุด: สิงหาคม 2567)
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900">1. การไม่เก็บรวบรวมข้อมูลทางการเงินส่วนบุคคล</h2>
        <p>
          PhonRod.com ให้ความสำคัญสูงสุดกับความเป็นส่วนตัวของคุณ เครื่องมือคำนวณทั้ง 10 ตัวบนเว็บไซต์ทำงานด้วยเทคโนโลยี <strong>Client-side Processing</strong> ข้อมูลตัวเลขรายได้ ราคารถ ยอดหนี้ หรือค่างวดที่คุณกรอกเพื่อคำนวณ จะถูกประมวลผลบนเบราว์เซอร์ของคุณโดยตรง และไม่มีการส่งกลับมาจัดเก็บบนเซิร์ฟเวอร์ของเรา
        </p>

        <h2 className="text-lg font-bold text-slate-900">2. คุกกี้และเทคโนโลยีการติดตาม (Cookies & Tracking)</h2>
        <p>
          เราอาจใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งาน วิเคราะห์สถิติผู้เข้าชมเว็บไซต์ และแสดงผลโฆษณาที่เกี่ยวข้องผ่านผู้ให้บริการบุคคลที่สาม เช่น Google Analytics และ Google AdSense
        </p>

        <h2 className="text-lg font-bold text-slate-900">3. โฆษณา Google AdSense และ DoubleClick DART Cookie</h2>
        <p>
          Google ในฐานะผู้ให้บริการบุคคลที่สาม ใช้คุกกี้เพื่อแสดงโฆษณาบนเว็บไซต์นี้ การใช้คุกกี้ DART ของ Google ช่วยให้สามารถแสดงโฆษณาแก่ผู้ใช้ตามการเยี่ยมชมเว็บไซต์นี้และเว็บไซต์อื่นๆ บนอินเทอร์เน็ต ผู้ใช้สามารถเลือกไม่ใช้คุกกี้ DART ได้โดยไปที่นโยบายความเป็นส่วนตัวของเครือข่ายโฆษณาและเนื้อหาของ Google
        </p>

        <h2 className="text-lg font-bold text-slate-900">4. ลิงก์พันธมิตร (Affiliate Links)</h2>
        <p>
          เว็บไซต์นี้อาจมีลิงก์ไปยังเว็บไซต์ของพันธมิตรภายนอก (เช่น ผู้ให้บริการประกันภัยรถยนต์ หรือสถาบันการเงิน) เมื่อคุณคลิกลิงก์เหล่านี้เพื่อขอใบเสนอราคา เราอาจได้รับค่าตอบแทนจากพันธมิตรโดยที่คุณไม่ต้องเสียค่าใช้จ่ายเพิ่มเติมใดๆ
        </p>

        <h2 className="text-lg font-bold text-slate-900">5. การติดต่อเรา</h2>
        <p>
          หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ สามารถติดต่อทีมงานได้ที่อีเมล: <strong className="text-brand-700">contact@phonrod.com</strong>
        </p>
      </div>
    </div>
  );
}
