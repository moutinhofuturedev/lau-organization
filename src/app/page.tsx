/* eslint-disable array-callback-return */
import Link from 'next/link'
import Image from 'next/image'
import { LinkCard } from '@/components/LinkCard'
import { InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons'
import { Nobile } from 'next/font/google'
import { DataProps } from '@/types/type'
import { get } from '@vercel/edge-config'

const nobile = Nobile({ subsets: ['latin'], weight: '400' })

export default async function HomePage() {
  const data: DataProps = await get('lauorganization')

  return (
    <div className="h-full bg-[url('back.png')] bg-no-repeat bg-cover">
      <div className="flex items-center justify-center flex-col mx-auto w-full">
        <Image
          className="mt-16"
          src="/lau-organização.png"
          alt={data.name}
          title={data.name}
          width="100"
          height="100"
          priority={true}
        />

        <div className="flex justify-center flex-col items-center">
          <h1
            className={`text-xl font-sans mt-4 tracking-widest ${nobile.className}`}
          >
            {data.name.toUpperCase()}
          </h1>
          <p className="text-sm font-sans mb-8 leading-3 tracking-[.2em]">
            {data.jobTitle}
          </p>
        </div>

        {data.links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}

        <div className="flex items-center gap-8 mt-6 relative">
          {data.social.map((social) => {
            if (social.title.includes('Instagram')) {
              return (
                <Link
                  key={social.title}
                  href={social.url}
                  passHref
                  target="_blank"
                  title="Instagram Lau Organização"
                  className="hover:scale-105 transition-all"
                >
                  <InstagramIcon key={social.title} />
                </Link>
              )
            }

            if (social.title.includes('WhatsApp')) {
              return (
                <Link
                  key={social.title}
                  href={social.url}
                  passHref
                  target="_blank"
                  title="WhatsApp Lau Organização"
                  className="hover:scale-105 transition-all"
                >
                  <WhatsAppIcon key={social.title} />
                </Link>
              )
            }
          })}
        </div>
        <footer className="mx-auto -my-10">
          <p className="text-colorPalette mt-32 text-xs">
            Copyright © Lau Organização 2023.Suzano, SP.
          </p>
        </footer>
      </div>
    </div>
  )
}
