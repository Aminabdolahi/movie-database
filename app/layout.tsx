import './globals.css'
import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Movie database ',
  description: 'Movie database',
  keywords: ['movie', 'movie database']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
