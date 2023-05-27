import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: '/nogooglebot/',
    },
    sitemap: 'https://lauorganization.vercel.app/sitemap.xml',
  };
}