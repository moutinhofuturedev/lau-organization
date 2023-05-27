import { MetadataRoute } from 'next';

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  image: string
}>;
 
export default function sitemap(): Sitemap {
  return [
    {
      url: 'https://lauorganization.vercel.app/',
      lastModified: new Date(),
      image: 'http://lauorganization.vercel.app/lau-organização.png'
    }
  ];
}