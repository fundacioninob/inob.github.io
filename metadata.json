import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  type?: string;
}

export default function SEO({ title, description, url = 'https://inob.org.bo', type = 'website' }: SEOProps) {
  const logoUrl = 'https://lh3.googleusercontent.com/pw/AP1GczNjd8RQGgG9QX_4N2UGb0dSqwzHv8uSYZ-8fMP9zm32qKCpxnq8aEt35PYlPKmJf84ibGBu2IMy5jQCdmlDdLH9GtgkxkJzqzhVk7mpmiMPglBU71DFF7pb21PQv0P25c2LWAA1nEpONpjnna9nk9aO=w834-h834-s-no-gm?authuser=2';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fundación INOB",
    "url": "https://inob.org.bo",
    "logo": logoUrl,
    "sameAs": [
      "https://www.linkedin.com/company/inob",
      "https://www.facebook.com/inob",
      "https://twitter.com/inob"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logoUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={logoUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
