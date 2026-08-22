import React from 'react';
import Link from 'next/link';
import { Car, ShieldCheck } from 'lucide-react';
import { TOOLS } from '@/lib/tools-data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1 & 2: About Hub */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg">
                <Car className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">AutoFin Hub Thailand</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              ศูนย์รวมเครื่องมือคำนวณและวางแผนการเงินสำหรับคนมีรถในประเทศไทย คำนวณค่างวด ภาษี พ.ร.บ. ค่าโอน จุดคุ้มทุน EV และปิดยอดตามเกณฑ์ สคบ. ใหม่ ด้วยอัลกอริทึมแม่นยำตามข้อกฎหมายไทย 100%
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center bg-slate-800 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" /> อัปเดตกฎหมาย สคบ. 2566-2568
              </span>
              <span className="inline-flex items-center bg-slate-800 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-blue-400" /> อัตราภาษี กรมการขนส่งทางบก
              </span>
            </div>
          </div>

          {/* Col 3: Loan & Installment */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">สินเชื่อ & การผ่อนชำระ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/car-installment-calculator" className="hover:text-brand-400 transition-colors">
                  คำนวณค่างวดรถยนต์
                </Link>
              </li>
              <li>
                <Link href="/salary-car-affordability" className="hover:text-brand-400 transition-colors">
                  เงินเดือนซื้อรถได้เท่าไหร่
                </Link>
              </li>
              <li>
                <Link href="/car-refinance-calculator" className="hover:text-brand-400 transition-colors">
                  คำนวณรีไฟแนนซ์รถยนต์
                </Link>
              </li>
              <li>
                <Link href="/car-loan-early-payoff" className="hover:text-brand-400 transition-colors">
                  ปิดยอดรถก่อนกำหนด (สคบ.)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ownership & Tax */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">ต้นทุน ภาษี & เอกสาร</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/car-ownership-cost" className="hover:text-brand-400 transition-colors">
                  ต้นทุนการมีรถจริงต่อปี (TCO)
                </Link>
              </li>
              <li>
                <Link href="/car-tax-calculator" className="hover:text-brand-400 transition-colors">
                  คำนวณภาษีรถยนต์ + พ.ร.บ.
                </Link>
              </li>
              <li>
                <Link href="/car-transfer-fee-calculator" className="hover:text-brand-400 transition-colors">
                  ค่าโอนรถยนต์มือสอง กรมขนส่ง
                </Link>
              </li>
              <li>
                <Link href="/car-equity-calculator" className="hover:text-brand-400 transition-colors">
                  คำนวณขายดาวน์ & หนี้คงเหลือ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Fuel & EV + Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">ข้อมูลและนโยบาย</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ev-vs-ice-calculator" className="hover:text-brand-400 transition-colors">
                  จุดคุ้มทุน EV vs รถน้ำมัน
                </Link>
              </li>
              <li>
                <Link href="/trip-fuel-cost" className="hover:text-brand-400 transition-colors">
                  คำนวณค่าน้ำมัน & หารค่าทริป
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors block">
                  เกี่ยวกับเรา (About Us)
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors block">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors block">
                  ข้อกำหนดและเงื่อนไข
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs text-slate-500 leading-relaxed">
          <p>
            *ข้อสงวนสิทธิ์: ผลการคำนวณจากทุกเครื่องมือบนเว็บไซต์นี้มีวัตถุประสงค์เพื่อเป็นข้อมูลประกอบการตัดสินใจเบื้องต้นเท่านั้น อัตราดอกเบี้ย เบี้ยประกันภัย ค่าธรรมเนียม และเงื่อนไขการอนุมัติสินเชื่อจริงอาจเปลี่ยนแปลงตามเกณฑ์ของแต่ละสถาบันการเงิน กรมการขนส่งทางบก หรือผู้ให้บริการประกันภัย
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Thai Automotive Financial Hub. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">พัฒนาเพื่อผู้ใช้รถยนต์ในประเทศไทย 🇹🇭</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
