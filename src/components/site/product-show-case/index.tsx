import Image from 'next/image'
import React from 'react'

type Props = {}

const ProductShowcase = (props: Props) => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#1e97f3] py-24 overflow-x-clip'>
         
         <div className="container">
            <div className='max-w-[540px] mx-auto '>

            <div className="flex justify-center">

            <div className='tag'>Boostez votre productivité</div>
            </div>
            <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#1e97f3] text-transparent bg-clip-text mt-5">Une manière plus efficace de suivre le progrès</h2>
            <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>Transformez vos idées en un site web complet, fonctionnel, et réactif en quelques minutes avec notre solution</p>
            </div>
            <div className="relative">

            <Image
             src={"/assets/product-image.png"}
             alt="image du dashboard krup"
             className='mt-10'
             width={1500}
             height={600}
             />
            <Image
             src={"/assets/pyramid.png"}
             alt="image de pyramide"
             className='hidden md:block absolute -right-36 -top-32'
             width={262}
             height={262}
             />
            <Image
             src={"/assets/tube.png"}
             alt="image de tube"
             className='hidden md:block absolute -left-36 bottom-24'
             width={248}
             height={248}
             />
             </div>
         </div>
    </section>
  )
}

export default ProductShowcase
