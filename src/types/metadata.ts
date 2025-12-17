export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
  siteName?: string;
  locale?: string;
}

export interface TwitterMetadata {
  card?: 'summary' | 'summary_large_image';
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
}

export interface AlternateLink {
  lang: string;
  url: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  openGraph?: OpenGraphMetadata;
  twitter?: TwitterMetadata;
  canonical?: string;
  robots?: string;
  alternate?: AlternateLink[];
  jsonLd?: Record<string, any>[];
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  twitterHandle?: string;
  facebookAppId?: string;
  logo?: string;
  organization?: {
    name: string;
    description: string;
    url: string;
    logo: string;
    contactPoint?: {
      telephone: string;
      contactType: string;
      availableLanguage: string;
    };
    sameAs?: string[];
  };
}
