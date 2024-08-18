/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <section className='bg-gradient-to-b from-white to-[#1e97f3] py-24 overflow-x-clip mt-20'>
      <div className='container'>
        <div className="section-heading relative">
          <h2 className='section-title'>Inscrivez-vous dès aujourd&apos;hui.</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <Image
            src="/assets/star.png" // Utilisation du chemin depuis le dossier public
            alt="image étoile"
            width={360}
            height={360}
            className='absolute -left-[350px] -top-[137px]'
          />
          <Image
            src="/assets/spring.png" // Utilisation du chemin depuis le dossier public
            alt="image étoile"
            width={360}
            height={360}
            className='absolute -right-[331px] -top-[5px]'
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Inscription gratuite</button>
          <button className="btn btn-text gap-2">
            En savoir plus
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
