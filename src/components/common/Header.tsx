'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Car, 
  Calculator, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  ShieldAlert,
  Wallet,
  Zap,
  RefreshCw,
  Search
} from 'lucide-react';
import { TOOLS } from '@/lib/tools-data';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-brand-600 via-brand-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Car className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  PhonRod<span className="text-brand-600">.com</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-200/60">
                  ผ่อนรถ.คอม
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                ช่วยเลือกทางเลือกทางการเงินที่เหมาะกับคุณ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="/car-installment-calculator" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              คำนวณค่างวด
            </Link>

            <Link 
              href="/salary-car-affordability" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              เงินเดือนซื้อรถ
            </Link>

            <Link 
              href="/car-tax-calculator" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              ภาษี & พ.ร.บ.
            </Link>

            <Link 
              href="/ev-vs-ice-calculator" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              จุดคุ้มทุน EV
            </Link>

            <Link 
              href="/car-loan-early-payoff" 
              className="px-3.5 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
            >
              ปิดยอด สคบ.
            </Link>

            <Link 
              href="/guides" 
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              คู่มือตัดสินใจ
            </Link>

            {/* Dropdown for other tools */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                onBlur={() => setTimeout(() => setToolsDropdownOpen(false), 200)}
                className="inline-flex items-center px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span>เครื่องมือทั้งหมด (10)</span>
                <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    เลือกเครื่องมือการเงิน
                  </div>
                  {TOOLS.map((tool) => (
                    <Link
                      key={tool.id}
                      href={`/${tool.slug}`}
                      onClick={() => setToolsDropdownOpen(false)}
                      className="flex items-start px-3.5 py-2.5 hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-brand-600">
                          {tool.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {tool.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 px-3 py-1">เครื่องมือคำนวณทั้งหมด</div>
          {TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/${tool.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors"
            >
              <span>{tool.title}</span>
              <span className="text-xs text-brand-600 font-bold bg-brand-50 px-2 py-0.5 rounded-md">
                {tool.categoryLabel}
              </span>
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <Link
              href="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors"
            >
              คู่มือตัดสินใจซื้อรถ & ผ่อนรถ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
