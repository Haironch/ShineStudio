import { FC } from "react";
import { Instagram, Facebook, Phone } from "lucide-react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo y Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-pink-500 font-semibold">Shine Studio</span>
            <p className="text-sm mt-1">
              © {currentYear} Todos los derechos reservados.
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/shine_salongt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087444022446"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="tel:+50258497615"
              className="hover:text-pink-500 transition-colors"
              aria-label="Teléfono"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
