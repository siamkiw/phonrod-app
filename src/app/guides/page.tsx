import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { GUIDES } from '@/lib/guides-data';
import { BookOpen, Clock, ArrowRight, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คู่มือตัดสินใจซื้อรถ & วางแผนผ่อนรถยนต์ (Car Finance Guides)',
  description: 'รวมบทความเจาะลึกพร้อมตารางเทียบตัวเลขจริง ช่วยตัดสินใจเรื่องการวางเงินดาวน์ เทียบรถป้ายแดงกับมือสอง จุดคุ้มทุน EV การปิดยอด สคบ. และรีไฟแนนซ์',
  alternates: { canonical: 'https://phonrod.com/guides' },
  openGraph: {
    title: 'คู่มือตัดสินใจซื้อรถ & วางแผนผ่อนรถยนต์ | PhonRod.com',
    description: 'บทความช่วยเลือกทางเลือกทางการเงินรถยนต์ที่เหมาะกับคุณที่สุด พร้อมตารางเทียบตัวเลขจริง',
    url: 'https://phonrod.com/guides',
  },
};

export default function GuidesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ name: 'คู่มือตัดสินใจซื้อรถ', url: '/guides' }]} />
      <SchemaMarkup breadcrumbs={[{ name: 'คู่มือตัดสินใจซื้อรถ', url: '/guides' }]} />

      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center space-x-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>คู่มือการเงินรถยนต์เชิงลึก</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          คู่มือช่วยตัดสินใจ: ทางเลือกไหนเหมาะกับคุณที่สุด?
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          กางตัวเลขจริง เปรียบเทียบข้อดี-ข้อเสีย และข้อกฎหมายไทย เพื่อช่วยให้คุณตัดสินใจเรื่องซื้อรถ ผ่อนรถ ปิดยอด และรีไฟแนนซ์ได้อย่างคุ้มค่าและไม่เจ็บตัวในระยะยาว
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
                  {guide.category}
                </span>
                <span className="inline-flex items-center text-slate-400">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  อ่าน {guide.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                {guide.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {guide.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
              <span>อัปเดต {guide.updatedAt}</span>
              <span className="inline-flex items-center group-hover:translate-x-1 transition-transform">
                อ่านคู่มือ
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold">อยากลองคำนวณด้วยตัวเลขของคุณเอง?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            ใช้เครื่องมือคำนวณฟรีทั้ง 10 ตัวของ PhonRod.com เปรียบเทียบเงินดาวน์ จำนวนงวด ดอกเบี้ยแท้จริง และค่าใช้จ่ายแฝงได้ทันที
          </p>
        </div>
        <Link
          href="/car-installment-calculator"
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-colors flex-shrink-0"
        >
          <Calculator className="w-4 h-4" />
          <span>เปิดเครื่องคำนวณค่างวดรถ</span>
        </Link>
      </div>
    </div>
  );
}
