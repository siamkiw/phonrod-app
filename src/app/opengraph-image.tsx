import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Thai Automotive Financial Hub | ศูนย์รวม 10 เครื่องมือการเงินรถยนต์';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #082f49 50%, #0369a1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
            }}
          >
            🚗
          </div>
          <span style={{ fontSize: '36px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
            AutoFin Hub Thailand
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
            }}
          >
            ศูนย์รวม 10 เครื่องมือคำนวณการเงินรถยนต์ครบวงจร
          </span>
          <span style={{ fontSize: '26px', color: '#bae6fd', lineHeight: 1.4 }}>
            ค่างวด • ภาษี • พ.ร.บ. • ค่าโอนมือสอง • วงเงินกู้ DSR • จุดคุ้มทุน EV • ปิดยอด สคบ. ใหม่
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '20px',
            color: '#7dd3fc',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '24px',
            width: '100%',
          }}
        >
          <span>✓ คำนวณฟรี แม่นยำ 100%</span>
          <span>✓ มาตรฐานกฎหมายไทย 2567-2568</span>
          <span>✓ car-finance.in.th</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
