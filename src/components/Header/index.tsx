// components/Header/index.tsx
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-pink-600">
              Shine Studio
            </span>
          </div>

          {/* Navegación */}
          <div className="flex items-center">
            <div className="flex space-x-8">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                Servicios
              </a>
              <a
                href="#galeria"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                Galería
              </a>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
