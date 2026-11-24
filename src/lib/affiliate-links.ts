export type AffiliateType = 'insurance' | 'refinance' | 'ev-charger' | 'used-car-loan';

/**
 * Set real partner tracking URLs here (e.g. from AccessTrade / Roojai / DirectAsia).
 * Leave as null to hide the card until an active partner link is ready.
 */
export const AFFILIATE_LINKS: Record<AffiliateType, string | null> = {
  insurance: null,
  refinance: null,
  'ev-charger': null,
  'used-car-loan': null,
};
