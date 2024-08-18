
import Footer from '@/components/site/footer'
import Header from '@/components/site/header'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import {twMerge} from 'tailwind-merge'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
     <main>
        {/* <Navigation /> */}
      
        <Header/>
        {children}
        <Footer/>
      </main>
     
    </ClerkProvider>
  )
}

export default layout