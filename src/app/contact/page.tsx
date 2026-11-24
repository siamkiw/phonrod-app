import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { Mail, MessageSquare, ShieldCheck, Clock, Wrench, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ติดต่อเรา (Contact Us)',
  description: 'ช่องทางการติดต่อทีมงาน PhonRod.com (ผ่อนรถ.คอม) สำหรับแจ้งแก้ไขสูตรคำนวณ เสนอแนะเครื่องมือใหม่ หรือสอบถามข้อมูลทั่วไป',
  alternates: { canonical: 'https://phonrod.com/contact' },
  openGraph: {
    title: 'ติดต่อเรา (Contact Us) | PhonRod.com',
    description: 'ช่องทางการติดต่อทีมงาน PhonRod.com แจ้งข้อผิดพลาด เสนอแนะฟีเจอร์ หรือสอบถามข้อมูล',
    url: 'https://phonrod.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'ติดต่อเรา', url: '/contact' }]} />
      <SchemaMarkup breadcrumbs={[{ name: 'ติดต่อเรา', url: '/contact' }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>ช่องทางติดต่อทีมงาน PhonRod.com</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          ติดต่อเรา (Contact Us)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          หากคุณพบจุดผิดพลาดในการคำนวณ ต้องการอัปเดตอัตราภาษี/ข้อกฎหมายใหม่ หรืออยากเสนอไอเดียเครื่องมือทางการเงินเพิ่มเติม สามารถติดต่อทีมงาน PhonRod.com ได้โดยตรงตามช่องทางด้านล่าง
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">อีเมลติดต่อหลัก</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            สำหรับแจ้งแก้ไขข้อมูลสูตรคำนวณ สอบถามการใช้งานเว็บไซต์ ข้อเสนอด้านเนื้อหา หรือติดต่อเรื่องนโยบายความเป็นส่วนตัว
          </p>
          <a
            href="mailto:contact@phonrod.com"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>contact@phonrod.com</span>
          </a>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">เวลาทำการและการตอบกลับ</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            ทีมงานตรวจสอบและตอบกลับอีเมลทุกวันจันทร์ - ศุกร์ เวลา 09:00 - 18:00 น. (ตามเวลาประเทศไทย) โดยปกติจะตอบกลับภายใน 1 - 2 วันทำการ
          </p>
          <div className="text-xs text-slate-500 pt-1">
            ดำเนินการและดูแลเนื้อหาจากกรุงเทพมหานคร ประเทศไทย
          </div>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900">หัวข้อที่ทีมงานยินดีรับฟัง</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <Wrench className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
            <span><strong>แจ้งตรวจสอบสูตรคำนวณและอัปเดตกฎหมาย:</strong> หากประกาศ สคบ. อัตราภาษีกรมการขนส่ง หรือค่า พ.ร.บ. มีการเปลี่ยนแปลง สามารถส่งข้อมูลอ้างอิงให้ทีมงานอัปเดตได้ทันที</span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <span><strong>เสนอแนะเครื่องมือและบทความใหม่:</strong> อยากให้เราเพิ่มหัวข้อเปรียบเทียบทางการเงินรถยนต์เรื่องไหน บอกเราได้เลย</span>
          </li>
          <li className="flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span><strong>หมายเหตุสำคัญ:</strong> PhonRod.com เป็นเว็บไซต์ให้ข้อมูลและเครื่องมือคำนวณอิสระ เราไม่ได้เป็นสถาบันการเงิน ไม่ได้ปล่อยสินเชื่อ และไม่เคยขอข้อมูลส่วนตัวหรือเอกสารทางการเงินจากผู้ใช้</span>
          </li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 text-sm">
          <Link href="/about-us" className="text-brand-600 font-semibold hover:underline">
            อ่านเพิ่มเติมเกี่ยวกับเรา →
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/privacy-policy" className="text-brand-600 font-semibold hover:underline">
            นโยบายความเป็นส่วนตัว →
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/guides" className="text-brand-600 font-semibold hover:underline">
            อ่านคู่มือตัดสินใจซื้อรถ →
          </Link>
        </div>
      </div>
    </div>
  );
}
