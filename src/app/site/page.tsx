import Header from '@/components/site/header'
import Hero from '@/components/site/hero';
import LogoTicker from '@/components/site/logo-ticker';
import Footer from '@/components/site/footer'
import Image from 'next/image';
import React from 'react';


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      
      {/* <Footer/> */}
    </>
  );
}
