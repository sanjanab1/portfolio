import './global.css'
import type { Metadata } from 'next'
import { DM_Mono, Press_Start_2P, Inter } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sanjana\'s Portfolio',
    template: '%s | Sanjana\'s Portfolio',
  },
  description: 'sanjana\'s portfolio.',
  openGraph: {
    title: 'Sanjana\'s Portfolio',
    description: 'sanjana\'s portfolio.',
    url: baseUrl,
    siteName: 'Sanjana\'s Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx('dark', inter.variable, pressStart2P.variable, dmMono.variable)}
    >
      <body className="antialiased grain relative">
        <div className="sprocket-rail sprocket-rail-left" aria-hidden="true" />
        <div className="sprocket-rail sprocket-rail-right" aria-hidden="true" />
        <Navbar />
        <main className="flex-auto min-w-0 flex flex-col px-6 md:px-10 max-w-6xl mx-auto">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
