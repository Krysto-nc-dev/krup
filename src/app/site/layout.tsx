
import Navigation from '@/components/site/navigation'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import {twMerge} from 'tailwind-merge'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
     <main>
        {/* <Navigation /> */}
      
        
        {children}
      </main>
     
    </ClerkProvider>
  )
}

export default layout