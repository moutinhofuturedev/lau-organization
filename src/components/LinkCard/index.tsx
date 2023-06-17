import Link from 'next/link'
import { LinkCardProps } from '@/types/type'

export function LinkCard({ url, title }: LinkCardProps) {
  return (
    <Link
      data-cy="link"
      href={url}
      passHref
      target="_blank"
      className="flex 
        w-80 
        max-h-16
        md:w-[480px]
        lg:w-[520px] 
        p-4 
        rounded-md 
        hover:scale-105 
        transition-all 
        border-none 
        mb-3 
        bg-colorPalette"
      rel="noreferrer"
    >
      <div className="flex justify-center items-center w-full">
        <h2 className="font-semibold text-lg text-center sm:text-left leading-6">
          {title}
        </h2>
      </div>
    </Link>
  )
}
