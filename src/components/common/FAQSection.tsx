'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from './SchemaMarkup';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'คำถามที่พบบ่อย (Frequently Asked Questions)',
  subtitle = 'ข้อสงสัยยอดฮิตเกี่ยวกับการคำนวณและข้อกฎหมายการเงินรถยนต์',
  faqs,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First one open by default

  const toggleIndex = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <section className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
      <div className="flex items-center space-x-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h2>
      </div>
      {subtitle && <p className="text-xs sm:text-sm text-slate-500 mb-6 ml-10">{subtitle}</p>}

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all hover:border-brand-300"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-800 hover:text-brand-700 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                  <div className="pt-3">{faq.answer}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
