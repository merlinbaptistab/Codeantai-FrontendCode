import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeAnt AI',
  description: 'AI to Detect & Autofix Bad Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ulIazpi840u8jReEZnNtS6c6jO6SRg.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

