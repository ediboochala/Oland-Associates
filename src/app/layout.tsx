import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oland Associates Enterprises — Infrastructure & Energy Solutions',
  description: 'Nigeria\'s premier infrastructure partner. Solar energy systems, electronics supply, and premium building materials for developers, corporations, and government contractors.',
  keywords: 'solar energy Nigeria, building materials supply, electronics supplier, infrastructure partner, Oland Associates Enterprises',
  openGraph: {
    title: 'Oland Associates Enterprises',
    description: 'Powering the infrastructure of tomorrow — solar, electronics, and building materials at scale.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
