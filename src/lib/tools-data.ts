export interface ToolMetadata {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: 'loan' | 'cost' | 'ownership' | 'trip';
  categoryLabel: string;
  iconName: string;
  badge?: string;
  popular?: boolean;
  keywords: string[];
}

export const TOOLS: ToolMetadata[] = [
  {
    id: 'car-installment',
    slug: 'car-installment-calculator',
    title: 'คำนวณค่างวดรถยนต์ ตารางผ่อน Flat Rate & ลดต้นลดดอก',
    shortTitle: 'คำนวณค่างวดรถ',
    description: 'โปรแกรมคำนวณค่างวดรถยนต์ ยอดจัด ดอกเบี้ยคงที่ VAT 7% พร้อมตารางผ่อนชำระละเอียดและดอกเบี้ยแท้จริง (Effective Rate)',
    category: 'loan',
    categoryLabel: 'สินเชื่อและค่างวด',
    iconName: 'Calculator',
    popular: true,
    badge: 'ยอดนิยมอันดับ 1',
    keywords: ['คำนวณค่างวดรถ', 'ตารางผ่อนรถ', 'คิดดอกเบี้ยรถยนต์', 'ยอดจัดไฟแนนซ์', 'vat 7% ค่างวด'],
  },
  {
    id: 'salary-affordability',
    slug: 'salary-car-affordability',
    title: 'คำนวณเงินเดือนกับวงเงินกู้ซื้อรถยนต์ (DSR ไฟแนนซ์)',
    shortTitle: 'เงินเดือนซื้อรถได้เท่าไหร่',
    description: 'วิเคราะห์วงเงินกู้ซื้อรถสูงสุดตามฐานเงินเดือน ประเมินสัดส่วนภาระหนี้ DSR กู้ผ่านฉลุยไม่ต้องมีคนค้ำประกัน',
    category: 'loan',
    categoryLabel: 'สินเชื่อและค่างวด',
    iconName: 'Wallet',
    popular: true,
    badge: 'เช็คโอกาสกู้ผ่าน',
    keywords: ['เงินเดือนซื้อรถ', 'คำนวณวงเงินกู้รถ', 'DSR ไฟแนนซ์', 'เงินเดือน 20000 ซื้อรถอะไรได้', 'กู้รถไม่ค้ำ'],
  },
  {
    id: 'car-ownership-cost',
    slug: 'car-ownership-cost',
    title: 'คำนวณต้นทุนการมีรถจริงต่อปี (Total Cost of Ownership)',
    shortTitle: 'ต้นทุนการมีรถต่อปี',
    description: 'คำนวณค่าใช้จ่ายแฝง ค่างวด น้ำมัน ประกันภัย เช็คระยะ ภาษี และที่จอดรถ เผยต้นทุนแท้จริงต่อวัน/ต่อปี',
    category: 'cost',
    categoryLabel: 'ค่าใช้จ่ายและต้นทุน',
    iconName: 'TrendingUp',
    popular: true,
    keywords: ['ค่าใช้จ่ายรถยนต์ต่อเดือน', 'ต้นทุนมีรถยนต์', 'TCO รถยนต์', 'ค่าบำรุงรักษารถ', 'มีรถ 1 คันจ่ายปีละเท่าไหร่'],
  },
  {
    id: 'car-transfer-fee',
    slug: 'car-transfer-fee-calculator',
    title: 'คำนวณค่าโอนรถยนต์มือสอง กรมการขนส่งทางบก',
    shortTitle: 'ค่าโอนรถมือสอง',
    description: 'คำนวณค่าอากรแสตมป์ 0.5% ค่าธรรมเนียมการโอน ค่าคำขอ และค่าตรวจสภาพรถ สรุปยอดเงินพร้อมไปจ่ายที่ขนส่ง',
    category: 'ownership',
    categoryLabel: 'เอกสารและกรรมสิทธิ์',
    iconName: 'FileCheck',
    keywords: ['ค่าโอนรถยนต์มือสอง', 'อากรแสตมป์โอนรถ', 'ค่าธรรมเนียมกรมการขนส่ง', 'โอนรถจ่ายกี่บาท', 'เอกสารโอนรถ'],
  },
  {
    id: 'car-equity',
    slug: 'car-equity-calculator',
    title: 'คำนวณขายดาวน์รถยนต์ & มูลค่าหนี้คงเหลือไฟแนนซ์',
    shortTitle: 'คำนวณขายดาวน์ & หนี้คงเหลือ',
    description: 'เช็คมูลค่าสุทธิ (Equity) ราคารถเทียบหนี้คงค้าง ประเมินว่าขายดาวน์ได้เงินสดกลับมา หรือต้องยกให้ผ่อนต่อฟรี',
    category: 'ownership',
    categoryLabel: 'เอกสารและกรรมสิทธิ์',
    iconName: 'Coins',
    keywords: ['คำนวณขายดาวน์รถ', 'เปลี่ยนสัญญาผ่อนต่อ', 'หนี้ท่วมรถ', 'ขายรถยังติดไฟแนนซ์', 'เช็คยอดหนี้รถ'],
  },
  {
    id: 'car-tax',
    slug: 'car-tax-calculator',
    title: 'คำนวณภาษีรถยนต์ประจำปี + พ.ร.บ. + ค่าตรวจ ตรอ.',
    shortTitle: 'คำนวณภาษีรถ & พ.ร.บ.',
    description: 'คิดภาษีรถยนต์ตามขนาด ซีซี / น้ำหนัก ส่วนลดอายุรถปีที่ 6-10+ พร้อมคำนวณค่า พ.ร.บ. และตรวจสภาพ ตรอ.',
    category: 'cost',
    categoryLabel: 'ค่าใช้จ่ายและต้นทุน',
    iconName: 'ShieldAlert',
    popular: true,
    badge: 'อัปเดตอัตราภาษี 2567-2568',
    keywords: ['ต่อภาษีรถยนต์', 'คำนวณภาษีรถยนต์ตาม cc', 'ค่าพรบรถยนต์', 'ตรวจสภาพ ตรอ กี่บาท', 'ลดหย่อนภาษีรถเก่า'],
  },
  {
    id: 'trip-fuel',
    slug: 'trip-fuel-cost',
    title: 'คำนวณค่าน้ำมันเดินทาง & หารค่าทริปท่องเที่ยว',
    shortTitle: 'คำนวณค่าน้ำมัน & หารค่าทริป',
    description: 'วางแผนค่าน้ำมัน ค่าทางด่วน คำนวณจำนวนลิตรที่ใช้ และหารเฉลี่ยค่าเดินทางต่อคนอย่างแม่นยำและเป็นธรรม',
    category: 'trip',
    categoryLabel: 'การเดินทางและพลังงาน',
    iconName: 'Fuel',
    keywords: ['คำนวณค่าน้ำมัน', 'หารค่าน้ำมันเที่ยว', 'ค่าน้ำมันไปต่างจังหวัด', 'คิดอัตราสิ้นเปลือง', 'หารค่าทางด่วน'],
  },
  {
    id: 'ev-vs-ice',
    slug: 'ev-vs-ice-calculator',
    title: 'คำนวณจุดคุ้มทุน รถยนต์ไฟฟ้า EV vs รถน้ำมัน ICE',
    shortTitle: 'เปรียบเทียบ EV vs รถน้ำมัน',
    description: 'เปรียบเทียบต้นทุนต่อกิโลเมตร ค่าไฟ TOU ค่าบำรุงรักษา และระยะเวลาคืนทุนจากส่วนต่างราคารถยนต์ไฟฟ้า',
    category: 'trip',
    categoryLabel: 'การเดินทางและพลังงาน',
    iconName: 'Zap',
    popular: true,
    badge: 'วิเคราะห์ความคุ้มค่า EV',
    keywords: ['EV vs รถน้ำมัน', 'จุดคุ้มทุนรถไฟฟ้า', 'ค่าไฟชาร์จรถ EV', 'ประหยัดค่าน้ำมัน EV', 'เทียบค่าใช้จ่ายรถยนต์'],
  },
  {
    id: 'car-refinance',
    slug: 'car-refinance-calculator',
    title: 'คำนวณรีไฟแนนซ์รถยนต์ & สินเชื่อจำนำทะเบียนรถ',
    shortTitle: 'คำนวณรีไฟแนนซ์รถ',
    description: 'เปรียบเทียบดอกเบี้ยใหม่ ขยายงวดเพื่อลดค่างวดต่อเดือน หรือประเมินเงินสดคงเหลือ Cashback เสริมสภาพคล่อง',
    category: 'loan',
    categoryLabel: 'สินเชื่อและค่างวด',
    iconName: 'RefreshCw',
    keywords: ['รีไฟแนนซ์รถยนต์', 'สินเชื่อจำนำทะเบียน', 'ลดค่างวดรถ', 'กู้เงินเอารถเข้าไฟแนนซ์', 'รีไฟแนนซ์ได้เงินสดกี่บาท'],
  },
  {
    id: 'early-payoff',
    slug: 'car-loan-early-payoff',
    title: 'คำนวณปิดยอดรถก่อนกำหนด รับส่วนลดดอกเบี้ยตามเกณฑ์ สคบ. ใหม่',
    shortTitle: 'ปิดยอดรถก่อนกำหนด (สคบ.)',
    description: 'คำนวณส่วนลดดอกเบี้ยคงเหลือ 60% 70% และ 100% ตามประกาศคณะกรรมการว่าด้วยสัญญา สคบ. ฉบับล่าสุด',
    category: 'loan',
    categoryLabel: 'สินเชื่อและค่างวด',
    iconName: 'BadgePercent',
    popular: true,
    badge: 'เกณฑ์ สคบ. ใหม่ 100%',
    keywords: ['ปิดยอดรถก่อนกำหนด', 'ส่วนลดดอกเบี้ย สคบ', 'โปะค่างวดรถ', 'ปิดไฟแนนซ์ก่อนกำหนด', 'ส่วนลดดอกเบี้ยรถยนต์ 100%'],
  },
];

export const CATEGORIES = [
  { key: 'all', label: 'เครื่องมือทั้งหมด' },
  { key: 'loan', label: 'สินเชื่อและค่างวด' },
  { key: 'cost', label: 'ค่าใช้จ่ายและต้นทุน' },
  { key: 'ownership', label: 'เอกสารและกรรมสิทธิ์' },
  { key: 'trip', label: 'การเดินทางและพลังงาน' },
];
