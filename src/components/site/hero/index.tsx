import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=" pt-[160px] pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">

        <div className='md:w-[478px]'>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Optimisez votre quotidien
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#1e97f3] text-transparent bg-clip-text mb-3 leading-snug md:leading-snug ">
            Simplifiez votre gestion
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Gérez tous les aspects de votre entreprise avec une seule
            application, efficace, intuitive, et facile à utiliser, pour
            maximiser votre productivité.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Essai gratuit</button>
            <button className="btn btn-text gap-1">
              {' '}
              Découvrir
              <span>
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[860px] md:flex-1  relative">
        <Image
          src="/assets/cog.png"
          alt="Cog image"
          layout="responsive"
          width={1500} 
          height={1500}
        
          className="md:absolute md:h-full md:w-auto md:max-w-none md:left-8 lg:left-0"
          />
          <Image
           src="/assets/cylinder.png"
           alt="image de cilyndre"
           width={220}
           height={220}
           className='hidden md:block -top-8 -left-32 md:absolute '
          />
          <Image
           src="/assets/noodle.png"
           alt="image de cilyndre"
           width={220}
           height={220}
           className='hidden lg:block absolute top-[542px] left-[600px] rotate-[30deg] xl:top-[720px]'
          />
        </div>
          </div>
      </div>
    </section>
  )
}

export default Hero
