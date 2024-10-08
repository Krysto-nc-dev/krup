'use client'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import {motion} from 'framer-motion'

const testimonials = [
  {
    text:
      "En tant que designer expérimenté à la recherche constante d&apos;outils innovants, Krup a immédiatement attiré mon attention.",
    imageSrc: '/assets/avatar-1.png',
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
  },
  {
    text:
      "La productivité de notre équipe a explosé depuis que nous utilisons cette application.",
    imageSrc: '/assets/avatar-2.png',
    name: 'Josh Smith',
    username: '@jjsmith',
  },
  {
    text:
      "Cette application a complètement transformé ma manière de gérer mes projets et mes échéances.",
    imageSrc: '/assets/avatar-3.png',
    name: 'Morgan Lee',
    username: '@morganleewhiz',
  },
  {
    text:
      "J&apos;ai été stupéfait de voir à quelle vitesse nous avons pu intégrer cette application dans notre flux de travail.",
    imageSrc: '/assets/avatar-4.png',
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    text:
      "Planifier et exécuter des événements n&apos;a jamais été aussi facile. Cette application m&apos;aide à suivre tous les aspects, garantissant qu&apos;aucun détail ne soit négligé.",
    imageSrc: '/assets/avatar-5.png',
    name: 'Taylor Kim',
    username: '@taylorkimm',
  },
  {
    text:
      "La personnalisation et les capacités d&apos;intégration de cette application sont de premier ordre.",
    imageSrc: '/assets/avatar-6.png',
    name: 'Riley Smith',
    username: '@rileysmith1',
  },
  {
    text:
      "Adopter cette application pour notre équipe a simplifié notre gestion de projet et amélioré la communication à tous les niveaux.",
    imageSrc: '/assets/avatar-7.png',
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
  },
  {
    text:
      "Avec cette application, nous pouvons facilement assigner des tâches, suivre les progrès, et gérer les documents au même endroit.",
    imageSrc: '/assets/avatar-8.png',
    name: 'Sam Dawson',
    username: '@dawsontechtips',
  },
  {
    text:
      "Son interface conviviale et ses fonctionnalités robustes répondent parfaitement à nos besoins diversifiés.",
    imageSrc: '/assets/avatar-9.png',
    name: 'Casey Harper',
    username: '@casey09',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsColumn = (props: { className?: string, testimonials: typeof testimonials , duration?: number }) => (
  <div className={props.className}>

  <motion.div
  animate={{
    translateY: '-50%',
  }}
  transition={{
      duration: props.duration || 10,
    repeat: Infinity,
    ease: 'linear',
    repeatType: 'loop',
  }}
    className="flex flex-col gap-6 pb-6 -translate-y-1/2"
    
    >
    {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>

  
    {props.testimonials.map(({ text, imageSrc, name, username }) => (
        <div key={username} className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt="avatar utilisateur"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
       </React.Fragment>
    ))}
    </motion.div>
    
</div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white py-0">
      <div className="container">
        <div className='section-header'>

        <div className="flex justify-center">
          <div className="tag">Témoignages</div>
        </div>
        <h2 className="section-title mt-5">Ce que disent nos utilisateurs</h2>
        <p className="section-description mt-5">
          Découvrez comment notre plateforme a véritablement transformé la
          productivité et simplifié la gestion pour nos utilisateurs et
          entreprises.
        </p>
        </div>
        <div className="flex justify-center gap-6  mt-10 max-h-[738px] overflow-hidden"
        style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black, black, transparent)',
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19}  className='hidden md:block' />
          <TestimonialsColumn testimonials={thirdColumn} duration={17}  className='hidden lg:block' />
        </div>
      </div>
    </section>
  )
}
