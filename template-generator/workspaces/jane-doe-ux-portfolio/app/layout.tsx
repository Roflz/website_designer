import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FixedSectionNavArrows, SectionNav, BackToTopButton } from '../lib'
import { heroSection } from '../site.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${heroSection.name} - Software Developer`,
  description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
  keywords: ['software developer', 'web development', 'portfolio', 'react', 'typescript', 'full-stack'],
  authors: [{ name: heroSection.name }],
  creator: heroSection.name,
  openGraph: {
    title: `${heroSection.name} - Software Developer`,
    description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${heroSection.name} - Software Developer`,
    description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
  },
}

const SECTIONS: SectionNav[] = [
  { id: 'home', up: null, down: 'about' },
  { id: 'about', up: 'home', down: 'skills' },
  { id: 'skills', up: 'about', down: 'projects' },
  { id: 'projects', up: 'skills', down: 'experience' },
  { id: 'experience', up: 'projects', down: 'contact' },
  { id: 'contact', up: 'experience', down: null },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <FixedSectionNavArrows sections={SECTIONS} />
        <BackToTopButton />
      </body>
    </html>
  )
} 