import Image from "next/image";
import data from "../../data.json";
import { LinkCard } from "@/components/LinkCard";

export default function Home() {
  return (
    <div className="h-full bg-[url('back.jpeg')] bg-cover">
      <div className="flex items-center justify-center flex-col mx-auto w-full">
        <Image className="rounded-md mt-16" src="logo.svg" alt={data.name} title={data.name} width="100" height="100"/>
        <h1 className="font-bold text-xl mt-4">{data.name}</h1>
        <p className="text-sm mb-8">{data.jobTilte}</p>
        {data.links.map((link) => (
          <LinkCard key={link.title} {...link}/>
        ))}
      </div>
    </div>
  )
}
