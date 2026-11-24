import { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools-data';
import { GUIDES } from '@/lib/guides-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phonrod.com';
  const currentDate = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // 10 Tools routes
  TOOLS.forEach((tool) => {
    routes.push({
      url: `${baseUrl}/${tool.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: tool.popular ? 0.9 : 0.8,
    });
  });

  // Decision Guides routes
  GUIDES.forEach((guide) => {
    routes.push({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: new Date(guide.isoDate),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}
