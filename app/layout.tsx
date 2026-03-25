import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'Poulami Mukherjee — Software Engineer, Architect & Technology Consultant',
  description: 'Poulami Mukherjee is a software engineer, architect and technology consultant with 8+ years of experience including 5 at Amazon. B.Tech CSE with ML specialisation. Based in India, working with clients across US, Europe and India.',
  keywords: ['software engineer', 'technology consultant', 'cloud architect', 'AWS', 'software architecture', 'fractional CTO', 'engineering leadership'],
  authors: [{ name: 'Poulami Mukherjee' }],
  creator: 'Poulami Mukherjee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://poulamimukherjee.com',
    title: 'Poulami Mukherjee — Software Engineer & Technology Consultant',
    description: 'Software engineer and technology consultant with 8+ years of experience including 5 years at Amazon. Cloud architecture, software delivery, and engineering leadership.',
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
  themeColor: '#1a1a2e',
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
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
