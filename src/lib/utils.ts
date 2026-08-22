import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number, decimals: number = 0): string {
  if (isNaN(num)) return '0';
  return num.toLocaleString('th-TH', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatCurrency(num: number, decimals: number = 0): string {
  return `฿${formatNumber(num, decimals)}`;
}

export function parseNumberInput(val: string): number {
  const clean = val.replace(/,/g, '');
  const num = parseFloat(clean);
  return isNaN(num) ? 0 : num;
}
