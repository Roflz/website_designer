import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FixedSectionNavArrows, SectionNav, BackToTopButton } from 'theme-lib'
import { headerContent } from '../site.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${headerContent.businessName} - Digital Solutions`,
  description: 'Professional digital solutions for modern businesses. Web development, mobile apps, and software engineering services.',
  keywords: ['web development', 'mobile apps', 'software development', 'digital solutions', 'business services'],
  authors: [{ name: headerContent.businessName }],
  creator: headerContent.businessName,
  openGraph: {
    title: `${headerContent.businessName} - Digital Solutions`,
    description: 'Professional digital solutions for modern businesses. Web development, mobile apps, and software engineering services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${headerContent.businessName} - Digital Solutions`,
    description: 'Professional digital solutions for modern businesses. Web development, mobile apps, and software engineering services.',
  },
}

const SECTIONS: SectionNav[] = [
  { id: 'home', up: null, down: 'about' },
  { id: 'about', up: 'home', down: 'services' },
  { id: 'services', up: 'about', down: 'projects' },
  { id: 'projects', up: 'services', down: 'testimonials' },
  { id: 'testimonials', up: 'projects', down: 'process' },
  { id: 'process', up: 'testimonials', down: 'contact' },
  { id: 'contact', up: 'process', down: null },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <FixedSectionNavArrows sections={SECTIONS} />
            {children}
        <BackToTopButton />
      </body>
    </html>
  )
}