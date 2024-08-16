import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <section className="h-full w-full relative flex items-center justify-center flex-col">
        {/* Background for light mode */}
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-white dark:hidden"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, #edfdf9 40%, #2196f3 100%)',
          }}
        ></div>
        {/* Background for dark mode */}
        <div
          className="absolute inset-0 -z-10 h-full w-full hidden dark:block"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, #0b101e 40%, #3f51b5 100%)',
          }}
        ></div>

        {/* Tagline */}
        <p className="text-center text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Tout ce dont vous avez besoin dans une seule application
        </p>

        {/* Title */}
        <div className="relative mb-12">
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-7xl md:text-[140px] font-extrabold tracking-tight text-center">
            Krup
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl rounded-lg"></div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center relative md:mt-[-50px]">
          <Image
            src={'/assets/preview.jpeg'}
            alt='banner image'
            height={600}
            width={600}
            className='rounded-2xl shadow-lg border-4 border-muted dark:border-gray-700'
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
    </main>
  );
}
