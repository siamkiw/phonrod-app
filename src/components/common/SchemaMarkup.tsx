import React from 'react';

export interface WebApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  keywords?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItemSchema {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  webApp?: WebApplicationSchemaProps;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItemSchema[];
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ webApp, faqs, breadcrumbs }) => {
  const schemaList: any[] = [];

  if (webApp) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: webApp.name,
      description: webApp.description,
      url: webApp.url,
      applicationCategory: webApp.applicationCategory || 'FinanceApplication',
      operatingSystem: webApp.operatingSystem || 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'THB',
      },
      keywords: webApp.keywords ? webApp.keywords.join(', ') : undefined,
    });
  }

  if (faqs && faqs.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'หน้าแรก',
          item: 'https://car-finance.in.th/',
        },
        ...breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `https://car-finance.in.th${item.url}`,
        })),
      ],
    });
  }

  return (
    <>
      {schemaList.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};
