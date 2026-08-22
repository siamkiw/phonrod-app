'use client';

import React from 'react';

export type AdSlotType = 'in-article' | 'sidebar' | 'leaderboard' | 'sticky-bottom';

interface AdBannerProps {
  slot?: AdSlotType;
  className?: string;
  adClient?: string; // e.g. ca-pub-XXXXXXXXXXXXXXXX
  adSlotId?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot = 'in-article',
  className = '',
  adClient = 'ca-pub-xxxxxxxxxxxxxxxx',
  adSlotId = '1234567890',
}) => {
  // Determine dimensions and styling based on slot type
  let slotStyles = 'w-full my-6 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100/70 border border-dashed border-slate-300 text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[150px]';
  let slotLabel = 'Advertisement (In-Article Responsive 728x90 / Mobile 300x250)';

  if (slot === 'sidebar') {
    slotStyles = 'w-full my-4 p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-dashed border-slate-300 text-center flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]';
    slotLabel = 'Advertisement (Sidebar Banner 300x600)';
  } else if (slot === 'leaderboard') {
    slotStyles = 'w-full my-4 p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center flex flex-col items-center justify-center min-h-[90px]';
    slotLabel = 'Advertisement (Top Leaderboard 728x90)';
  }

  return (
    <div className={`${slotStyles} ${className} transition-all hover:bg-slate-100/80`}>
      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">พื้นที่โฆษณาผู้สนับสนุน</span>
      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs sm:text-sm py-2">
        {/* Real AdSense tag placeholder */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={adClient}
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <p className="text-slate-400 font-medium text-xs mt-1">{slotLabel}</p>
        <p className="text-[11px] text-slate-400">Google AdSense Auto Responsive Unit</p>
      </div>
    </div>
  );
};
