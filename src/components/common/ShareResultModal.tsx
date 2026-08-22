'use client';

import React, { useState } from 'react';
import { Share2, Copy, Check, Printer, X } from 'lucide-react';

interface ShareResultModalProps {
  title: string;
  summaryText: string;
}

export const ShareResultModal: React.FC<ShareResultModalProps> = ({ title, summaryText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
      >
        <Share2 className="w-4 h-4 mr-1.5" />
        <span>แชร์หรือบันทึกผล</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-brand-600 mb-2">
              <Share2 className="w-5 h-5" />
              <h3 className="font-bold text-lg text-slate-900">แชร์หรือบันทึกผลการคำนวณ</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">{title}</p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-mono whitespace-pre-wrap max-h-60 overflow-y-auto mb-5 leading-relaxed">
              {summaryText}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm shadow transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1.5 text-emerald-300" />
                    <span>คัดลอกเรียบร้อยแล้ว!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1.5" />
                    <span>คัดลอกข้อความสรุป</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
              >
                <Printer className="w-4 h-4 mr-1.5" />
                <span>พิมพ์หน้านี้ (Print)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
