'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Car, 
  Calculator, 
  Menu, 
  X, 
  ChevronDown, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Fuel, 
  RefreshCw, 
  FileCheck 
} from 'lucide-react';
import { TOOLS, CATEGORIES } from '@/lib/tools-data';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">AutoFin Hub</span>
                <span className="bg-brand-100 text-brand-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">Thai</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block">ศูนย์รวมเครื่องมือคำนวณการเงินรถยนต์ครบวงจร</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-brand-600 bg-brand-50' 
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              หน้าแรก
            </Link>

            {/* Dropdown for All 10 Tools */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                onMouseEnter={() => setToolsDropdownOpen(true)}
                className={`flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.includes('-calculator') || pathname.includes('-cost') || pathname.includes('-affordability')
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span>10 เครื่องมือคำนวณ</span>
                <ChevronDown className="w-4 h-4 ml-1 text-slate-400" />
              </button>

              {toolsDropdownOpen && (
                <div 
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-2 grid gap-1 border border-slate-100 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    เลือกเครื่องมือคำนวณรถยนต์
                  </div>
                  <div className="max-h-[420px] overflow-y-auto space-y-0.5">
                    {TOOLS.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/${tool.slug}`}
                        onClick={() => setToolsDropdownOpen(false)}
                        className={`flex items-start p-2.5 rounded-xl text-xs sm:text-sm hover:bg-brand-50/80 transition-colors group ${
                          pathname === `/${tool.slug}` ? 'bg-brand-50 text-brand-700 font-medium' : 'text-slate-700'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors mr-3 mt-0.5">
                          <Calculator className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-900 group-hover:text-brand-600 truncate">{tool.shortTitle}</div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{tool.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/car-installment-calculator" 
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/car-installment-calculator' 
                  ? 'text-brand-600 bg-brand-50' 
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              คำนวณค่างวด
            </Link>

            <Link 
              href="/salary-car-affordability" 
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/salary-car-affordability' 
                  ? 'text-brand-600 bg-brand-50' 
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              เงินเดือนซื้อรถ
            </Link>

            <Link 
              href="/car-tax-calculator" 
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/car-tax-calculator' 
                  ? 'text-brand-600 bg-brand-50' 
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              ภาษีรถ & พ.ร.บ.
            </Link>

            <Link 
              href="/ev-vs-ice-calculator" 
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/ev-vs-ice-calculator' 
                  ? 'text-brand-600 bg-brand-50' 
                  : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              เทียบ EV vs น้ำมัน
            </Link>
          </nav>

          {/* Quick CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/car-loan-early-payoff"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <span>คำนวณปิดยอด สคบ.</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="เปิดเมนู"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <div className="font-bold text-xs text-slate-400 uppercase tracking-wider px-2">
            เมนูหลัก
          </div>
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                pathname === '/' ? 'bg-brand-50 text-brand-600 font-bold' : 'text-slate-700'
              }`}
            >
              หน้าแรก (ศูนย์รวม 10 เครื่องมือ)
            </Link>
          </div>

          <div className="font-bold text-xs text-slate-400 uppercase tracking-wider px-2 pt-2">
            10 เครื่องมือคำนวณการเงินรถยนต์
          </div>
          <div className="grid grid-cols-1 gap-1">
            {TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={`/${tool.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  pathname === `/${tool.slug}` ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{tool.shortTitle}</span>
                {tool.badge && (
                  <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium">
                    {tool.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
