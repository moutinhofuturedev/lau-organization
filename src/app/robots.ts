import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        disallow: '/nogooglebot/',
      },
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: 'https://lauorganization.vercel.app/sitemap.xml',
  };
}