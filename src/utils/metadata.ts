import { SEOConfig, PageMetadata } from '@/types/metadata';

export const seoConfig: SEOConfig = {
  siteName: 'My Green Lab',
  siteUrl: 'https://mygreenlab.org',
  defaultTitle: 'My Green Lab - Accelerating a Global Culture of Sustainability in Scientific Research',
  defaultDescription: 'At My Green Lab we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.',
  twitterHandle: '@mygreenlab',
  logo: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
  organization: {
    name: 'My Green Lab',
    description: 'A non-profit organization dedicated to creating a global culture of sustainability in science.',
    url: 'https://mygreenlab.org',
    logo: 'https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png',
    contactPoint: {
      telephone: '+1-858-215-3456',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/mygreenlab',
      'https://www.linkedin.com/company/my-green-lab',
      'https://www.facebook.com/MyGreenLab',
      'https://www.instagram.com/mygreenlab'
    ]
  }
};

// Organization JSON-LD Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: seoConfig.organization?.name,
  description: seoConfig.organization?.description,
  url: seoConfig.organization?.url,
  logo: seoConfig.organization?.logo,
  contactPoint: seoConfig.organization?.contactPoint,
  sameAs: seoConfig.organization?.sameAs,
  areaServed: 'Worldwide',
  knowsAbout: [
    'Laboratory Sustainability',
    'Green Lab Certification',
    'Environmental Impact Reduction',
    'Sustainable Science',
    'Laboratory Energy Efficiency',
    'Waste Reduction in Labs',
    'Green Chemistry',
    'Sustainable Procurement'
  ]
};

// Helper function to create page metadata
export function createPageMetadata(overrides: Partial<PageMetadata>): PageMetadata {
  return {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: 'laboratory sustainability, green lab, sustainable science, environmental impact, lab certification',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      siteName: seoConfig.siteName,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
    },
    jsonLd: [organizationSchema],
    ...overrides,
  };
}

// Helper function to create breadcrumb schema
export function createBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

// Helper function to create course schema
export function createCourseSchema(course: {
  name: string;
  description: string;
  provider: string;
  url: string;
  image?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      url: seoConfig.siteUrl
    },
    url: course.url,
    image: course.image,
    offers: course.offers && {
      '@type': 'Offer',
      price: course.offers.price,
      priceCurrency: course.offers.priceCurrency,
      availability: course.offers.availability,
      seller: {
        '@type': 'Organization',
        name: seoConfig.siteName
      }
    },
    educationalLevel: 'Professional Development',
    inLanguage: 'English',
    about: 'Laboratory Sustainability'
  };
}

// Helper function to create article schema
export function createArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: article.author && {
      '@type': 'Organization',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.logo
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
}

// Helper function to create event schema
export function createEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location && {
      '@type': 'VirtualLocation',
      url: event.location
    },
    url: event.url,
    image: event.image,
    organizer: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.siteUrl
    },
    about: 'Laboratory Sustainability'
  };
}

// Helper function to create FAQ schema
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
