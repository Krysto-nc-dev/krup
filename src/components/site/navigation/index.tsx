import { ModeToggle } from '@/components/global/mode-toggle';
import { UserButton } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    user?: null ;
    // user?: null | User;
};

const Navigation: React.FC<Props> = ({ user }) => {
    return (
        <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 ">
            <aside className="flex items-center gap-2">
                <Link href="/site">
                    <Image
                        src="/assets/krup_logo.png"
                        alt="krup logo"
                        width={85}
                        height={85}
                    />
                </Link>
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[55%] transform translate-x-[-50%] translate-y-[-50%] ">
                <ul className="flex items-center justify-center gap-6 ">
                    <li>
                        <Link href="/site/pricing" className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm ">
                            <span className="group-hover:text-secondary transition-colors duration-300">Tarifs</span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/site/features" className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm">
                            <span className="group-hover:text-secondary transition-colors duration-300">Fonctionnalités</span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/site/about" className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm">
                            <span className="group-hover:text-secondary transition-colors duration-300">À propos</span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/site/contact" className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm">
                            <span className="group-hover:text-secondary transition-colors duration-300">Contact</span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/site/documentation" className="relative group font-medium text-gray-800 dark:text-gray-200 text-sm">
                            <span className="group-hover:text-secondary transition-colors duration-300">Documentation</span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center mt-3">
                <Link
                    className="bg-secondary text-white p-2 rounded-md flex gap-2 items-center transition-all duration-300 ease-in-out relative overflow-hidden hover:bg-secondary/80"
                    href="/agency"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 hover:bg-secondary/90 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex gap-2 items-center text-sm">
                        <LogIn size={20} />
                        Connexion
                    </span>
                </Link>
                <UserButton />
                <ModeToggle/>
            </aside>
        </div>
    );
};

export default Navigation;
