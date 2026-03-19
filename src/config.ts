// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { en: 'Relxtower - Real Estate Apartments' },
  description: { en: 'Discover modern building design with luxury apartments. Find your perfect home with our premium real estate services.' },
  language: 'en',
  keywords: { en: 'real estate, apartments, luxury, modern design, property, residential' },
  ogImage: '/img/slider/slider_img01.jpg',
  canonical: 'https://relxtower.com',
  siteId: 'relxtower',
  apiUrl: 'https://api.relxtower.com',
};
