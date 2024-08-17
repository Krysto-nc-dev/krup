import Footer from '@/components/site/footer'
import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
     <main className="h-screen w-screen overflow-hidden font-sans">
        <Navigation />
        {children}
      </main>
      <Footer/>
    </ClerkProvider>
  )
}

export default layout