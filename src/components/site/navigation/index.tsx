'use client'
import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { LogIn, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

type Props = {
  user?: null
  // user?: null | User;
}

const Navigation: React.FC<Props> = ({ user }) => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative mx-auto">
      <div className="flex items-center justify-between space-x-20 my-6">
        <Link href="/site" className="z-30">
          <Image
            src="/assets/krup_logo.png"
            alt="krup logo"
            width={85}
            height={85}
          />
        </Link>
        <div className="hidden items-center space-x-10 uppercase text-primary md:flex">
          <ul className="flex items-center justify-center gap-6 ">
            <li>
              <Link
                href="/site/pricing"
                className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm "
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  Tarifs
                </span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/site/features"
                className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm"
              >
                <span className="group-hover:text-primary  transition-colors duration-300">
                  Fonctionnalités
                </span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/site/about"
                className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm"
              >
                <span className="group-hover:text-primary  transition-colors duration-300">
                  À propos
                </span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/site/contact"
                className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm"
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  Contact
                </span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/site/documentation"
                className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm"
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  Documentation
                </span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                className="bg-primary text-white p-2 rounded-md flex gap-2 items-center transition-all duration-300 ease-in-out relative overflow-hidden hover:bg-primary/80"
                href="/agency"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 hover:bg-secondary/90 transition-opacity duration-500"></span>
                <span className="relative z-10 flex gap-2 items-center text-sm">
                  <LogIn size={20} />
                  Connexion
                </span>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <UserButton />
          </ul>
        </div>
        <div className="flex items-center gap-4 md:hidden">
        <ModeToggle />

        <button
          className="z-30 focus:outline-none flex items-center gap-3"
          onClick={toggleMenu} // Ajouter cet événement onClick ici
          >
          <Menu className="text-gray-600" size={24} />
        </button>
          </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-36 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-95 bg-indigo-950">
         
          <div className="w-full py-3 text-center">
            <Link href="/site/pricing" className="hover:text-secondary">
              Tarifs
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="/site/features" className="hover:text-secondary">
              Fonctionnalités
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="/site/about" className="hover:text-secondary">
              A propos
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="/site/contact" className="hover:text-secondary">
              Contact
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="/site/documentation" className="hover:text-secondary">
              Documentation
            </Link>
          </div>
          <div className="w-full py-3 text-center flex item-center justify-between">
            <Link
              className="bg-primary text-center text-white p-2 rounded-md flex gap-2 mt-3 items-center transition-all duration-300 ease-in-out relative overflow-hidden hover:bg-primary/80"
              href="/agency"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 hover:bg-secondary/90 transition-opacity duration-500"></span>
              <span className="relative z-10 flex gap-2 items-center justify-center text-sm text-center">
                <LogIn size={20} />
                Connexion
              </span>
            </Link>
           

            <UserButton />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
