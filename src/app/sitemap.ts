import { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://car-finance.in.th';
  const currentDate = new Date();

  // Root & Legal pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
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

  return routes;
}
