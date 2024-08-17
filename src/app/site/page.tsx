
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <section className="h-screen w-full relative flex flex-col items-center justify-center">
        {/* Background for light mode */}
        <div
          className="absolute inset-0 -z-10 bg-white dark:hidden"
          style={{
            background: "radial-gradient(circle at 50% 20%, #edfdf9 40%, #2196f3 100%)",
          }}
        ></div>
        {/* Background for dark mode */}
        <div
          className="absolute inset-0 -z-10 hidden dark:block"
          style={{
            background: "radial-gradient(circle at 50% 20%, #0b101e 40%, #3f51b5 100%)",
          }}
        ></div>

        {/* Tagline */}
        <div className="text-center px-4">
          <p className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tout ce dont vous avez besoin dans une seule application
          </p>
        </div>

        {/* Title */}
        <div className="relative mb-8">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-6xl md:text-[120px] font-bold tracking-tight text-center">
            Krup
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl rounded-lg"></div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center relative mb-4">
          <Image
            src="/assets/preview.jpeg"
            alt="banner image"
            height={600}
            width={600}
            className="rounded-2xl shadow-lg border-4 border-muted dark:border-gray-700"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t from-background left-0 right-0 absolute z-10"></div>
        </div>

        {/* Call to Action */}
        <button className="text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-colors duration-300 py-2 px-8 rounded-lg font-medium text-lg shadow-lg">
          Commencez maintenant
        </button>
        
      </section>
    </>
  );
}
