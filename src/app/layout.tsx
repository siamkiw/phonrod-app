import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://car-finance.in.th'),
  title: {
    default: 'Thai Automotive Financial Hub | รวม 10 เครื่องมือคำนวณการเงินรถยนต์ครบวงจร',
    template: '%s | AutoFin Hub Thailand',
  },
  description: 'ศูนย์รวม 10 เครื่องมือคำนวณการเงินรถยนต์ครบวงจร คำนวณค่างวด ภาษี พ.ร.บ. ค่าโอนรถมือสอง วงเงินกู้ตามเงินเดือน จุดคุ้มทุน EV และปิดยอดรถก่อนกำหนดตามเกณฑ์ สคบ. ใหม่',
  keywords: [
    'คำนวณค่างวดรถ',
    'เงินเดือนซื้อรถ',
    'ภาษีรถยนต์',
    'ค่าโอนรถมือสอง',
    'ปิดยอดรถ สคบ',
    'จุดคุ้มทุน EV',
    'รีไฟแนนซ์รถยนต์',
    'ต้นทุนมีรถยนต์',
    'หารค่าน้ำมัน',
    'การเงินรถยนต์',
  ],
  authors: [{ name: 'AutoFin Hub Thailand Team' }],
  creator: 'AutoFin Hub Thailand',
  publisher: 'AutoFin Hub Thailand',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://car-finance.in.th/',
    siteName: 'Thai Automotive Financial Hub',
    title: 'Thai Automotive Financial Hub | รวม 10 เครื่องมือคำนวณการเงินรถยนต์ครบวงจร',
    description: 'คำนวณค่างวด ภาษี พ.ร.บ. ค่าโอนรถมือสอง วงเงินกู้ตามเงินเดือน และปิดยอดตามเกณฑ์ สคบ. ใหม่ แม่นยำ รวดเร็ว 100%',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thai Automotive Financial Hub | 10 เครื่องมือการเงินรถยนต์',
    description: 'วางแผนการเงินคนมีรถ คำนวณค่างวด ภาษี ค่าโอน ปิดยอดตามเกณฑ์ สคบ. ใหม่',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense script placeholder */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
