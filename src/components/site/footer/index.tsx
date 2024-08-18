import { FC } from "react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-8 pt-56 h-screen relative ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Infos de l'entreprise */}
        <div>
         
          <p>
            Vous offre les meilleurs outils pour gérer votre entreprise et rester
            en avance sur la concurrence.
          </p>
        </div>

        {/* Liens de navigation */}
        {/* <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-primary/80">Liens rapides</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/site/pricing" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Tarifs</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/features" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Fonctionnalités</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/about" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">À propos</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/contact" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Contact</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/documentation" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Documentation</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Mentions légales et autres liens */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-primary/80">Informations légales</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/site/legal" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Mentions légales</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/privacy" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Politique de confidentialité</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/cookies" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Politique des cookies</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/site/terms" className="relative group font-medium text-gray-300 text-sm">
                <span className="group-hover:text-secondary transition-colors duration-300">Conditions générales</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux et contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-primary/80">Suivez-nous</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-secondary transition">
              <FacebookIcon size={24} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-secondary transition">
              <TwitterIcon size={24} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-secondary transition">
              <InstagramIcon size={24} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-secondary transition">
              <LinkedinIcon size={24} />
            </Link>
          </div>

          <h4 className="text-lg font-semibold text-primary/80 mt-8">Parlons de votre projet</h4>
          <Link
            href="/site/contact"
            className="bg-secondary text-white p-2 rounded-md flex gap-2 items-center transition-all duration-300 ease-in-out relative overflow-hidden hover:bg-secondary/80"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 hover:bg-secondary/90 transition-opacity duration-500"></span>
            <span className="relative z-10 flex gap-2 text-sm justify-center  m-auto ">
              Nous contacter
            </span>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center absolute bottom-6 left-0 right-0">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Krup. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
