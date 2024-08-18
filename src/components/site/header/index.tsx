'use client'
import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { LogIn, Menu, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <header className="fixed top-0 z-50 right-0 left-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-[#1e97f3] text-white w-full text-sm gap-3 ">
      <p className="text-white/70 hidden md:block">Rester en avance sur la concurence et booster votre créativité</p>
        <div className="inline-flex gap-1 items-center">
          <p>Commencer gratuitement</p>
          <ArrowRight className="inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-4 ">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/site">
              <Image
                src="/assets/krup_logo.png"
                alt="krup logo"
                width={120}
                height={120}
              />
            </Link>
            <Menu className="md:hidden mt-2" size={20} />
            <nav className='hidden md:flex gap-6 text-black/60 mt-2'>
            {/* <Link href="/site/pricing" className="hover:text-secondary mt-1">
              Tarifs
            </Link> */}
            <Link href="/site/features" className="hover:text-secondary mt-1">
              Fonctionnalités
            </Link>
            <Link href="/site/about" className="hover:text-secondary mt-1">
              A propos
            </Link>
            <Link href="/site/contact" className="hover:text-secondary mt-1">
              Contact
            </Link>
            <Link href="/site/documentation" className="hover:text-secondary mt-1">
              Documentation
            </Link>
            <Link
                className="btn btn-primary"
                href="/agency"
              >
               

                  <LogIn size={15}/>
                  Connexion
              
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default index
