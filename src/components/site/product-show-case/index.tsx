import Image from 'next/image'
import React from 'react'

type Props = {}

const ProductShowcase = (props: Props) => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#1e97f3] py-24 overflow-x-clip'>
         
         <div className="container">
            <div className='section-heading'>

            <div className="flex justify-center">

            <div className='tag '>Boostez votre productivité</div>
            </div>
            <h2 className=" section-title mt-5">Une manière plus efficace de suivre le progrès</h2>
            <p className='section-description mt-5'>Transformez vos idées en un site web complet, fonctionnel, et réactif en quelques minutes avec notre solution</p>
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
