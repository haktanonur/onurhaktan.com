import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './components/Provider'
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Onur Haktan',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={`${inter.className} bg-white text-black dark:bg-[#0F0A0A] dark:text-white h-full 
       selection:bg-gray-50 dark:selection:bg-gray-800`}
       >
        <Provider>
          <Navbar/>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <Analytics />
          </main>
        </Provider>
        
       </body>
    </html>
  )
}
