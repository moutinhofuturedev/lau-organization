import './globals.css'
import { Metadata } from 'next'
import { Questrial } from 'next/font/google'

const questrial = Questrial({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Lau Organização',
  description: 'Assessoria e Cerimonial',
}

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
