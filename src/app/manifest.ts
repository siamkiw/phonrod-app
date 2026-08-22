import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PhonRod.com (ผ่อนรถ.คอม)',
    short_name: 'PhonRod',
    description: 'ศูนย์รวม 10 เครื่องมือคำนวณและวางแผนการเงินรถยนต์ครบวงจร',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
