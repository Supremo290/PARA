import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PARA - Smart Transportation Tracking Platform',
  description: 'Monitor passengers, drivers, and cooperatives in real time with PARA. Smart transportation management for modern logistics.',
  viewport: 'width=device-width, initial-scale=1',
 icons: {
  icon: '/PARA-logo.png',
},
  openGraph: {
    title: 'PARA - Smart Transportation Tracking Platform',
    description: 'Monitor passengers, drivers, and cooperatives in real time',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}