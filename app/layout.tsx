import type { Metadata } from 'next'
import { Libre_Caslon_Text } from 'next/font/google'
import './globals.css'


import { ThemeProvider } from "@/components/theme-provider";

const lbre = Libre_Caslon_Text({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Muzych Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lbre.className}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}