'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const LogoTicker = () => {
  const { theme } = useTheme(); // Accès au thème actuel

  // Détermination du style de fond en fonction du thème
  const backgroundColor = theme === 'dark' ? 'bg-gray-500' : 'bg-white';

  return (
    <div className={`py-8 md:py-12 ${backgroundColor}`}>
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black, transparent)',
          }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: "loop"
            }}
          >
            {/* Example images repeated for seamless animation */}
            <Image src='/assets/logo-acme.png' alt="logo acme" width={100} height={100} />
            <Image src='/assets/logo-quantum.png' alt="logo quantum" width={100} height={100} />
            <Image src='/assets/logo-echo.png' alt="logo echo" width={100} height={100} />
            <Image src='/assets/logo-celestial.png' alt="logo celestial" width={100} height={100} />
            <Image src='/assets/logo-pulse.png' alt="logo pulse" width={100} height={100} />
            <Image src='/assets/logo-apex.png' alt="logo apex" width={100} height={100} />

            {/* Second set of logos for animation */}
            <Image src='/assets/logo-acme.png' alt="logo acme" width={100} height={100} />
            <Image src='/assets/logo-quantum.png' alt="logo quantum" width={100} height={100} />
            <Image src='/assets/logo-echo.png' alt="logo echo" width={100} height={100} />
            <Image src='/assets/logo-celestial.png' alt="logo celestial" width={100} height={100} />
            <Image src='/assets/logo-pulse.png' alt="logo pulse" width={100} height={100} />
            <Image src='/assets/logo-apex.png' alt="logo apex" width={100} height={100} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker;
