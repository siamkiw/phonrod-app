import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap py-1">
        <li className="flex items-center">
          <Link href="/" className="flex items-center text-slate-500 hover:text-brand-600 transition-colors">
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>หน้าแรก</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1 flex-shrink-0" />
              {isLast ? (
                <span className="font-medium text-slate-800 truncate max-w-[200px] sm:max-w-md" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-brand-600 transition-colors truncate max-w-[150px]">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
