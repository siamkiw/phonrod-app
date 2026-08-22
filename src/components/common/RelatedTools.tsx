import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';
import { TOOLS, ToolMetadata } from '@/lib/tools-data';

interface RelatedToolsProps {
  currentSlug: string;
  category?: string;
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({ currentSlug, category }) => {
  // Filter out the current tool and pick 3 most relevant tools
  const related = TOOLS.filter((t) => t.slug !== currentSlug)
    .sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (b.category === category && a.category !== category) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-brand-950 text-white border border-slate-800">
      <div className="flex items-center space-x-2 text-brand-300 text-xs font-bold uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4 text-amber-300" />
        <span>ขั้นตอนถัดไปสำหรับการวางแผนการเงิน</span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
        เครื่องมือคำนวณที่เกี่ยวข้อง (แนะนำให้คำนวณต่อ)
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mb-6">
        วางแผนการเงินรถยนต์ให้รอบด้านด้วยเครื่องมือเชื่อมโยงเพื่อความคุ้มค่าสูงสุด
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {related.map((tool) => (
          <Link
            key={tool.id}
            href={`/${tool.slug}`}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-brand-300 uppercase tracking-wider block mb-1">
                {tool.categoryLabel}
              </span>
              <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors mb-1">
                {tool.shortTitle}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                {tool.description}
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-brand-300 group-hover:text-amber-300">
              <span>เริ่มคำนวณ</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
