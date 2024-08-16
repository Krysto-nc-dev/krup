import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Unauthorized: React.FC = () => {
  return (
    <div className="p-4 text-center h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl md:text-6xl">Accès non autorisé!</h1>
      <p>Oups! On dirait que vous avez pris un mauvais virage.</p>
      <p>Veuillez contacter le support ou le propriétaire de l&apos;entreprise pour obtenir l&apos;accès.</p>
      <Link href="/" className="mt-4 bg-primary p-2 rounded text-white">
        Retour à l&apos;accueil
      </Link>
      <div className="mt-8">
        <Image
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHYyaWY4OGhxYTFudHl2cmMybXY0MDB2Z2IxcG5mNWUybTJydDIybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7uU59bOjkGMT53Zyhd/giphy.webp"
          alt="Unauthorized Cat"
          width={336} // remplacer par la largeur réelle de l'image
          height={256} // remplacer par la hauteur réelle de l'image
          className="w-84 h-64"
        />
      </div>
    </div>
  );
};

export default Unauthorized;
