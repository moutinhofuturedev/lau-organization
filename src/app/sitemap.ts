import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lauorganization.vercel.app/',
      lastModified: new Date(),
    }
  ]
}