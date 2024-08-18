'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import {motion ,useScroll, useTransform} from 'framer-motion'
type Props = {}

const ProductShowcase = (props: Props) => {

    const sectionRef = useRef(null)
    const {scrollYProgress} =
    useScroll({
        target: sectionRef,
        offset:['start end', 'end start']
    })
    const translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#1e97f3] py-24 overflow-x-clip'>
         
         <div className="container">
            <div className='section-heading'>

            <div className="flex justify-center">

            <div className='tag '>Boostez votre productivité</div>
            </div>
            <h2 className=" section-title mt-5">Une manière plus efficace de suivre le progrès</h2>
            <p className='section-description mt-5'>Transformez vos idées en un site web complet, fonctionnel, et réactif en quelques minutes avec notre solution</p>
            </div>
            <div className="relative">

            <motion.img
             src={"/assets/product-image.png"}
             alt="image du dashboard krup"
             className='mt-10'
             width={1500}
             height={600}
             
             />
            <motion.img
             src={"/assets/pyramid.png"}
             alt="image de pyramide"
             className='hidden md:block absolute -right-36 -top-32'
             width={262}
             height={262}
             style= {{
                translateY
             }}
             />
            <motion.img
             src={"/assets/tube.png"}
             alt="image de tube"
             className='hidden md:block absolute -left-36 bottom-24'
             width={248}
             height={248}
             style= {{
                translateY
             }}
             />
             </div>
         </div>
    </section>
  )
}

export default ProductShowcase
