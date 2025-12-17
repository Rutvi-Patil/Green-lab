import Head from 'next/head';
import { PageMetadata } from '@/types/metadata';

interface SEOHeadProps {
  metadata: PageMetadata;
}

const SEOHead: React.FC<SEOHeadProps> = ({ metadata }) => {
  const {
    title,
    description,
    keywords,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    openGraph,
    twitter,
    canonical,
    robots,
    alternate,
    jsonLd,
  } = metadata;

  // Generate full title with site name
  const fullTitle = title.includes('My Green Lab') ? title : `${title} | My Green Lab`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {robots && <meta name="robots" content={robots} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Article Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={openGraph?.title || fullTitle} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      {openGraph?.siteName && <meta property="og:site_name" content={openGraph.siteName} />}
      {openGraph?.locale && <meta property="og:locale" content={openGraph.locale} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={twitter?.title || fullTitle} />
      <meta name="twitter:description" content={twitter?.description || description} />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter?.creator && <meta name="twitter:creator" content={twitter.creator} />}
      
      {/* Alternate Language Links */}
      {alternate?.map((link, index) => (
        <link key={index} rel="alternate" hrefLang={link.lang} href={link.url} />
      ))}
      
      {/* JSON-LD Structured Data */}
      {jsonLd && jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </Head>
  );
};

export default SEOHead;
