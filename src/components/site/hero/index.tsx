'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';

const Hero = () => {
  const heroRef = useRef(null);
  const { theme } = useTheme(); // Accès au thème actuel
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -150]);

  // Style conditionnel basé sur le thème
  const backgroundStyle = theme === 'dark' ? 'bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#000,#333)]' : 'bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]';
  const textStyle = theme === 'dark' ? 'text-white' : 'text-[#010D3E]';
  const tagStyle = theme === 'dark' ? 'text-white' : 'text-gray-500'; // Couleur de police pour le tag en mode sombre
  const gradientTextStyle = theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-primary' : 'bg-gradient-to-b from-black to-[#1e97f3]';

  return (
    <section
      ref={heroRef}
      className={`${backgroundStyle} pt-[160px] pb-20 overflow-x-clip`}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className={`tag ${tagStyle}`}>Optimisez votre quotidien</div>
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter ${gradientTextStyle} text-transparent bg-clip-text mb-3 leading-snug md:leading-snug`}>
              Simplifiez votre gestion
            </h1>
            <p className={`text-xl ${textStyle} tracking-tight mt-6`}>
              Gérez tous les aspects de votre entreprise avec une seule application, efficace, intuitive, et facile à utiliser, pour maximiser votre productivité.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Essai gratuit</button>
              <button className="btn btn-text gap-1">
                Découvrir
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[860px] md:flex-1 relative">
            <motion.img
              src="/assets/cog.png"
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-8 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="hidden md:block"
              style={{ translateY }}
            >
              <Image
                src="/assets/cylinder.png"
                alt="image de cylindre"
                width={220}
                height={220}
                className="-top-8 -left-32 md:absolute"
              />
            </motion.div>
            <motion.div
              className="hidden lg:block"
              style={{ translateY }}
            >
              <Image
                src="/assets/noodle.png"
                alt="image de cylindre"
                width={220}
                height={220}
                className="absolute top-[542px] left-[600px] rotate-[30deg] xl:top-[720px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
