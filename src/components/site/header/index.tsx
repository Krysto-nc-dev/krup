'use client'
import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { LogIn, Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  user?: null
  // user?: null | User;
}

const Index = (props: Props) => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to close menu with delay
  const closeMenuWithDelay = () => {
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 800) // Delay 0,8 Seconde before closing the menu
  }

  // Variants for menu animation
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <header className="fixed top-0 z-50 right-0 left-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-[#1e97f3] text-white w-full text-sm gap-3 ">
        <p className="text-white/70 hidden md:block">Rester en avance sur la concurrence et booster votre créativité</p>
        <div className="inline-flex gap-1 items-center">
          <p>Commencer gratuitement</p>
          <ArrowRight className="inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-4">
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
            <button
              className="flex md:hidden z-50 focus:outline-none  items-center gap-3"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="text-gray-600" size={24} /> // Affiche l'icône X si le menu est ouvert
              ) : (
                <Menu className="text-gray-600" size={24} /> // Affiche l'icône Menu si le menu est fermé
              )}
            </button>
            <nav className='hidden md:flex gap-6 text-black/60 mt-2'>
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
              <Link className="btn btn-primary" href="/agency">
                <LogIn size={15}/>
                Connexion
              </Link>
              <ModeToggle />
            </nav>
            {/* Mobile menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="fixed top-0 bottom-0 left-0 right-0 z-40 flex flex-col items-center w-full h-full min-h-screen px-6 py-1 pt-36 pb-4 tracking-widest text-white uppercase bg-indigo-950"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="w-full py-3 text-center">
                    <Link href="/site/pricing" className="hover:text-secondary" onClick={closeMenuWithDelay}>
                      Tarifs
                    </Link>
                  </div>
                  <div className="w-full py-3 text-center">
                    <Link href="/site/features" className="hover:text-secondary" onClick={closeMenuWithDelay}>
                      Fonctionnalités
                    </Link>
                  </div>
                  <div className="w-full py-3 text-center">
                    <Link href="/site/about" className="hover:text-secondary" onClick={closeMenuWithDelay}>
                      A propos
                    </Link>
                  </div>
                  <div className="w-full py-3 text-center">
                    <Link href="/site/contact" className="hover:text-secondary" onClick={closeMenuWithDelay}>
                      Contact
                    </Link>
                  </div>
                  <div className="w-full py-3 text-center">
                    <Link href="/site/documentation" className="hover:text-secondary" onClick={closeMenuWithDelay}>
                      Documentation
                    </Link>
                  </div>
                  <div className="w-full py-3 text-center flex items-center justify-between">
                    <Link
                      className="bg-primary text-center text-white p-2 rounded-md flex gap-2 mt-3 items-center transition-all duration-300 ease-in-out relative overflow-hidden hover:bg-primary/80"
                      href="/agency"
                      onClick={closeMenuWithDelay}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 hover:bg-secondary/90 transition-opacity duration-500"></span>
                      <span className="relative z-10 flex gap-2 items-center justify-center text-sm text-center">
                        <LogIn size={20} />
                        Connexion
                      </span>
                    </Link>
                    <UserButton />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index
