'use client';

import { Check } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';

const pricingTiers = [
  {
    title: 'Patente',
    monthlyPrice: 5000,
    buttonText: 'Obtenir votre devis',
    popular: false,
    inverse: false,
    features: [
      "Jusqu'à 5 membres par projet",
      'Tâches et projets illimités',
      '2GB de stockage',
      'Intégrations',
      'Support de base',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 8900,
    buttonText: 'Obtenir votre devis',
    popular: true,
    inverse: true,
    features: [
      "Jusqu'à 50 membres par projet",
      'Tâches et projets illimités',
      '50GB de stockage',
      'Intégrations',
      'Support prioritaire',
      'Support avancé',
      "Support d'exportation",
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 15900,
    buttonText: 'Obtenir votre devis',
    popular: false,
    inverse: false,
    features: [
      "Jusqu'à 500 membres par projet",
      'Tâches et projets illimités',
      '200GB de stockage',
      'Intégrations',
      'Gestionnaire de compte dédié',
      'Champs personnalisés',
      'Analyses avancées',
      "Capacités d'exportation",
      'Accès API',
      'Fonctionnalités de sécurité avancées',
    ],
  },
];

const Pricing = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container">
        <div className="section-heading">
          <h2 className={`section-title ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Tarifs</h2>
          <p className={`section-description mt-5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Choisissez le modèle de tarification qui convient le mieux à votre entreprise. Vos besoins peuvent évoluer, et nos offres s’adaptent à vos exigences.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:align-end lg:justify-center">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
              <div
                key={title}
                className={twMerge(
                  'card shadow-lg rounded-lg p-6',
                  inverse ? (theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black') : 'bg-white text-black',
                  popular && 'border border-blue-500'
                )}
              >
                <div className="flex justify-between">
                  <h3 className={`text-lg font-bold mb-4 ${inverse ? (theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white') : 'text-black '}`}>
                    {title}
                  </h3>
                  {popular && (
                    <motion.span
                      animate={{ backgroundPositionX: '-100px' }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                      className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#3BFFFF] text-transparent bg-clip-text font-medium"
                      style={{ backgroundPosition }}
                    >
                      Populaire
                    </motion.span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice.toLocaleString()} XPF
                  </span>
                  <span className={`tracking-tight font-bold ${inverse && theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    /mois
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-4',
                    inverse && theme === 'dark' ? 'bg-black text-white' : 'bg-primary text-white',
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className={`text-sm flex items-center gap-4 ${theme === 'dark' && inverse ? 'text-white' : 'text-black'}`}>
                      <Check size={24} className="text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
