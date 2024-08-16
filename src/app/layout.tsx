import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { frFR } from "@clerk/localizations"; 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,  // Assurez-vous que le thème correspond à vos attentes de style
    }}
    localization={frFR}  // Localisation en français
  >
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
