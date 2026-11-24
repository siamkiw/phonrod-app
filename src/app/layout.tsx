import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://phonrod.com'),
  alternates: {
    canonical: 'https://phonrod.com',
  },
  title: {
    default: 'PhonRod.com (ผ่อนรถ.คอม) | รวม 10 เครื่องมือคำนวณและวางแผนการเงินรถยนต์ครบวงจร',
    template: '%s | PhonRod.com',
  },
  description: 'PhonRod.com ศูนย์รวม 10 เครื่องมือคำนวณการเงินคนมีรถ คำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate & ดอกเบี้ยแท้จริง วงเงินกู้ตามเงินเดือน DSR ค่าโอนรถมือสอง ภาษี พ.ร.บ. และปิดยอดตามเกณฑ์ สคบ. ใหม่',
  keywords: [
    'ผ่อนรถ',
    'คำนวณค่างวดรถ',
    'เงินเดือนซื้อรถ',
    'ภาษีรถยนต์',
    'ค่าโอนรถมือสอง',
    'ปิดยอดรถ สคบ',
    'จุดคุ้มทุน EV',
    'รีไฟแนนซ์รถยนต์',
    'ต้นทุนมีรถยนต์',
    'หารค่าน้ำมัน',
    'phonrod',
    'phonrod.com',
  ],
  authors: [{ name: 'PhonRod.com Team' }],
  creator: 'PhonRod.com',
  publisher: 'PhonRod.com',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://phonrod.com/',
    siteName: 'PhonRod.com (ผ่อนรถ.คอม)',
    title: 'PhonRod.com | รวม 10 เครื่องมือคำนวณและวางแผนการเงินรถยนต์ครบวงจร',
    description: 'ช่วยเลือกทางเลือกทางการเงินที่เหมาะกับคุณที่สุด คำนวณค่างวด ภาษี ค่าโอน วงเงินกู้ DSR และปิดยอด สคบ. ใหม่ แม่นยำ 100%',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhonRod.com (ผ่อนรถ.คอม) | 10 เครื่องมือการเงินรถยนต์',
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3665371202412168"
          crossOrigin="anonymous"
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
