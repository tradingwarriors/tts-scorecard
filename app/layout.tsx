import { DM_Sans, Merriweather } from 'next/font/google'
import type { Metadata } from 'next'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans'
})

const merriweather = Merriweather({ 
  weight: '700',
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'TTS Qualification Scorecard | YASLEA LLC',
  description: 'Find out if you qualify for Trader Tax Status in 5 minutes. Free IRS-aligned assessment with instant results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${merriweather.variable}`} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}