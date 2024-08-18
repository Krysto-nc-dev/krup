import Header from '@/components/site/header'
import Hero from '@/components/site/hero';
import LogoTicker from '@/components/site/logo-ticker';
import Footer from '@/components/site/footer'
import Image from 'next/image';
import React from 'react';
import ProductShowcase from '@/components/site/product-show-case';
import Pricing from '@/components/site/pricing';
import { Testimonials } from '@/components/testimonials.tsx';
import CallToAction from '@/components/site/call-to-action';


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
