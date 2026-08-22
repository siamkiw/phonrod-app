import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AuthorBoxProps {
  reviewedDate?: string;
  sourceLaw?: string;
}

export const AuthorBox: React.FC<AuthorBoxProps> = ({
  reviewedDate = 'สิงหาคม 2567',
  sourceLaw = 'ประกาศคณะกรรมการว่าด้วยสัญญา (สคบ.) พ.ศ. 2565 และ พ.ร.บ. รถยนต์ พ.ศ. 2522',
}) => {
  return (
    <div className="my-6 px-4 py-2.5 rounded-xl bg-slate-100/70 border border-slate-200 text-slate-500 text-xs flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center space-x-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        <span>
          ตรวจสอบความถูกต้องสูตรและกฎหมายโดย <strong>ทีมงาน AutoFin</strong> (อัปเดตล่าสุด: {reviewedDate})
        </span>
      </div>
      <div className="text-[11px] text-slate-400">
        อ้างอิง: {sourceLaw}
      </div>
    </div>
  );
};
