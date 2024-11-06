import { FC } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App: FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        {" "}
        {/* pt-16 para compensar la altura del header fijo */}
        {/* Sección Inicio */}
        <section id="inicio">
          {" "}
          {/* Removidos los estilos adicionales */}
          <Hero />
        </section>
        {/* Sección Servicios */}
        <section id="servicios" className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center">
              Nuestros Servicios
            </h2>
            <Services />
          </div>
        </section>
        {/* Sección Galería */}
        <section id="galeria" className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center">Galería</h2>
            <Gallery />
          </div>
        </section>
        {/* Sección Contacto */}
        <section id="contacto" className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center">Contacto</h2>
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
