import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Photo AI Academy – Master Mobile Photography with AI',
  description: 'Learn mobile photography with practical content for beginners. Master camera settings, lighting, composition, and AI prompts. Enroll now for $19.',
  generator: 'v0.app',
  openGraph: {
    title: 'Photo AI Academy',
    description: 'Master mobile photography with practical beginner content using AI tools.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=1200&h=630&fit=crop&auto=format',
        width: 1200,
        height: 630,
        alt: 'Photo AI Academy Course',
      },
    ],
  },
  icons: {
    icon: '/img/logo.png',
    shortcut: '/img/logo.png',
    apple: '/img/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
