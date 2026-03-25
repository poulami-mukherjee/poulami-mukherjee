import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: '--font-serif',
})

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Poulami Mukherjee — Software Engineer, Architect & Technology Consultant',
  description: 'Poulami Mukherjee is a software engineer, architect and technology consultant with 8+ years of experience including 5 at Amazon. Specialising in Applied AI/ML, cloud architecture, and regulatory compliance (GDPR, HIPAA). B.Tech in Computer Science Engineering. Based in India, working with clients across the US, Europe, India, UK, and Australia.',
  keywords: ['software engineer', 'technology consultant', 'cloud architect', 'AWS', 'software architecture', 'fractional CTO', 'engineering leadership', 'GDPR', 'HIPAA', 'AI consultant'],
  authors: [{ name: 'Poulami Mukherjee' }],
  creator: 'Poulami Mukherjee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://poulamimukherjee.com',
    title: 'Poulami Mukherjee — Software Engineer & Technology Consultant',
    description: 'Software engineer and technology consultant with 8+ years of experience including 5 years at Amazon. Cloud architecture, Applied AI/ML, and regulatory compliance.',
    siteName: 'Poulami Mukherjee',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poulami Mukherjee — Software Engineer & Technology Consultant',
    description: 'Software engineer and technology consultant with 8+ years of experience including 5 years at Amazon.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
