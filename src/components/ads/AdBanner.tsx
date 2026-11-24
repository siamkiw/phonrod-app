'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export type AdSlotType = 'in-article' | 'sidebar' | 'leaderboard' | 'sticky-bottom';

interface AdBannerProps {
  slot?: AdSlotType;
  className?: string;
  adClient?: string;
  adSlotId?: string;
}

const DEFAULT_AD_CLIENT = 'ca-pub-3665371202412168';

export const AdBanner: React.FC<AdBannerProps> = ({
  slot = 'in-article',
  className = '',
  adClient = DEFAULT_AD_CLIENT,
  adSlotId,
}) => {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!adSlotId || initializedRef.current) return;
    initializedRef.current = true;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ignore AdSense initialization errors when blocked or not yet active
    }
  }, [adSlotId]);

  // Do not render placeholder boxes when no manual AdSense unit slot ID is configured.
  // Google Auto Ads will handle placement automatically via the head script.
  if (!adSlotId) {
    return null;
  }

  const slotStyles =
    slot === 'sidebar'
      ? 'w-full my-4 min-h-[250px]'
      : slot === 'leaderboard'
        ? 'w-full my-4 min-h-[90px]'
        : 'w-full my-6 min-h-[100px]';

  return (
    <div className={`${slotStyles} ${className} overflow-hidden text-center`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={adClient}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
