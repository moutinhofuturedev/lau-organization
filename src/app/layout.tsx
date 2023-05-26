import './globals.css'
import { Questrial } from 'next/font/google'

const questrial = Questrial({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Lau Organização',
  description: 'Assessoria e Cerimonial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  )
}
