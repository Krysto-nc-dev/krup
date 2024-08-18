
import { Check } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

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
]


const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">

        <h2 className="section-title">Tarifs</h2>
        <p className="section-description mt-5">
          Choisissez le modèle de tarification qui convient le mieux à votre
          entreprise. Vos besoins peuvent évoluer, et nos offres s’adaptent à
          vos exigences.
        </p>
        </div>
     
            <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:align-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className= {twMerge("card", inverse === true && 'border-black bg-black/90 text-white/60')}
              >
                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black/50 mb-4", inverse === true && "text-white/60")}>
                    {title}
                  </h3>
                  <div className="inline-flex items-center text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    {popular === true && (
                      <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#3BFFFF] text-transparent bg-clip-text font-medium">
                        Populaire
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice.toLocaleString()}
                    <span className={twMerge("text-sm align-super text-black/60 ml-2", inverse === true && "text-white")}>
                      XPF
                    </span>
                  </span>
                  <span className={twMerge("tracking-tight font-bold text-black/50", inverse === true && " text-white")}>
                    /mois
                  </span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-4", inverse === true && "bg-white text-black")}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
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
  )
}

export default Pricing
