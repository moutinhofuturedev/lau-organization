import Link from "next/link";
import Image from "next/image";
import data from "../../data.json";
import { LinkCard } from "@/components/LinkCard";
import { InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { Nobile } from 'next/font/google'

const nobile = Nobile({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className="h-full bg-[url('back.png')] bg-no-repeat bg-cover">
      <div className="flex items-center justify-center flex-col mx-auto w-full">
        <Image className="rounded-md mt-16" src="logo.svg" alt={data.name} title={data.name} width="100" height="100" priority={true}/>

        <div className="flex justify-center flex-col items-center">
          <h1 className={`text-xl font-sans mt-4 tracking-widest ${nobile.className}`}>{data.name}</h1>
          <p className="text-sm font-sans mb-8 leading-3 tracking-[.2em]">{data.jobTilte}</p>
        </div>

        {data.links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}

        <div className="flex items-center gap-8 mt-6">
          {data.social.map((social) => {
            if (social.title.includes("Instagram")) {
              return (
                <Link key={social.title} href={social.url} passHref target="_blank" title="Instagram Lau Organização"
                  className="hover:scale-105 transition-all"
                >
                  <InstagramIcon key={social.title} />
                </Link>
              )
            }
            
            if (social.title.includes("WhatsApp")) {
              return (
                <Link key={social.title} href={social.url} passHref target="_blank" title="WhatsApp Lau Organização"
                  className="hover:scale-105 transition-all"
                >
                  <WhatsAppIcon key={social.title} />
                </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
