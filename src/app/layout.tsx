import './globals.css'
import { Metadata } from 'next'
import { Questrial } from 'next/font/google'

const questrial = Questrial({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "Lau Organização | Assessoria e Cerimonial",
  description:
    "Por Laudicéia André, organizando eventos com dinamismo, tranquilidade e discrição! Trabalhamos na cidade de Suzano, Mogi das Cruzes e região do Alto Tietê- SP.",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Paulo Moutinho', url: 'https://paulomoutinho.vercel.app/' }],
  creator: 'Paulo Moutinho',
  openGraph: {
    title: 'Lau Organização | Assessoria e Cerimonial',
    description: 'Por Laudicéia André, organizando eventos com dinamismo, tranquilidade e discrição! Trabalhamos na cidade de Suzano, Mogi das Cruzes e região do Alto Tietê- SP.',
    url: 'https://lauorganization.vercel.app/',
    siteName: 'Lau Organização',
    images: [
      {
        url: 'https://lauorganization.vercel.app/lau-organização.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: "icon.png",
  },
  verification: {
    google: "4on3Ax2OR-BtXre94Wg3N7yZ0OoXYFPRCxle-bWVeAo"
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={questrial.className}>{children}</body>
    </html>
  )
}
