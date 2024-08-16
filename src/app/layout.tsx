import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

import { Toaster } from '@/components/ui/toaster'



export const metadata: Metadata = {
  title: 'Krysto',
  description: 'La gestion de business tout en un',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
       
          {children}
          <Toaster />
          
       
        </ThemeProvider>
      </body>
    </html>
  )
}