import React from 'react';
import { Shield, Sparkles, CheckCircle2, ArrowUpRight, Percent, Zap, Wallet, Car } from 'lucide-react';

export type AffiliateType = 'insurance' | 'refinance' | 'ev-charger' | 'used-car-loan';

interface AffiliateCardProps {
  type?: AffiliateType;
  className?: string;
  customTitle?: string;
  customDescription?: string;
}

export const AffiliateCard: React.FC<AffiliateCardProps> = ({
  type = 'insurance',
  className = '',
  customTitle,
  customDescription,
}) => {
  if (type === 'refinance') {
    return (
      <div className={`my-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white p-6 sm:p-7 shadow-xl border border-blue-700/50 relative overflow-hidden ${className}`}>
        <div className="absolute -right-8 -top-8 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center space-x-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>สิทธิพิเศษสินเชื่อ & รีไฟแนนซ์รถยนต์</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          {customTitle || 'ต้องการลดค่างวด หรือรับเงินสดก้อนโตจากรถคุณ?'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          {customDescription || 'เปรียบเทียบข้อเสนอรีไฟแนนซ์และสินเชื่อจำนำทะเบียนรถยนต์กว่า 10 สถาบันการเงินชั้นนำ ดอกเบี้ยเริ่มต้น 0.29%/เดือน อนุมัติไว ไม่ต้องเช็คบูโร'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 mb-5">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>ผ่อนอยู่ก็กู้ได้ วงเงินสูงสุด 120%</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>รับเงินสดเข้าบัญชีภายใน 1 วันทำการ</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="https://car-finance.in.th/refinance-partner"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-orange-500/20 transition-all group"
          >
            <span>เช็ควงเงินประเมินฟรีทันที</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="text-[11px] text-slate-400 text-center sm:text-left">
            *ไม่มีค่าใช้จ่ายในการยื่นเช็คสิทธิ์เบื้องต้น
          </span>
        </div>
      </div>
    );
  }

  if (type === 'ev-charger') {
    return (
      <div className={`my-6 rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white p-6 sm:p-7 shadow-xl border border-emerald-700/50 relative overflow-hidden ${className}`}>
        <div className="flex items-center space-x-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span>บริการติดตั้ง Wallbox EV Charger</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          {customTitle || 'ติดตั้งแท่นชาร์จรถยนต์ไฟฟ้าที่บ้าน มาตรฐาน กฟน./กฟภ.'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          {customDescription || 'ชาร์จไฟบ้านช่วง Off-peak ประหยัดค่าน้ำมันลงกว่า 75% รับประกันงานติดตั้งและวงจรมาตรฐาน 3 ปีเต็ม พร้อมเดินสายเมนเฉพาะจุด'}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="https://car-finance.in.th/ev-charger-partner"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-lg transition-all group"
          >
            <span>รับแพ็กเกจติดตั้งพร้อมสำรวจหน้างานฟรี</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    );
  }

  // Default: Insurance
  return (
    <div className={`my-6 rounded-3xl bg-gradient-to-br from-brand-900 via-blue-950 to-slate-900 text-white p-6 sm:p-7 shadow-xl border border-brand-700/50 relative overflow-hidden ${className}`}>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center space-x-2 text-brand-300 text-xs font-bold uppercase tracking-wider mb-2">
        <Shield className="w-4 h-4 text-brand-400" />
        <span>สิทธิพิเศษเปรียบเทียบประกันภัยรถยนต์</span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
        {customTitle || 'เช็คเบี้ยประกันภัยรถยนต์ชั้น 1, 2+, 3+ รับส่วนลดสูงสุด 30%'}
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
        {customDescription || 'เปรียบเทียบราคาเบี้ยประกันจาก 16 บริษัทชั้นนำ เช่น วิริยะ, ทิพย, กรุงเทพประกันภัย ผ่อน 0% สูงสุด 10 เดือน ไม่ต้องใช้บัตรเครดิต'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 mb-5">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>คุ้มครองทันที พร้อมบริการช่วยเหลือ 24 ชม.</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>แถมฟรี พ.ร.บ. หรือบัตรเติมน้ำมันมูลค่า 500 บ.</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href="https://car-finance.in.th/insurance-partner"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-emerald-500/20 transition-all group"
        >
          <span>เปรียบเทียบราคาเบี้ยประกันเลย</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <span className="text-[11px] text-slate-400 text-center sm:text-left">
          *รู้ราคาภายใน 30 วินาที ไม่มีข้อผูกมัด
        </span>
      </div>
    </div>
  );
};
