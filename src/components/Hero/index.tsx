const services = [
  "Extensiones de pestañas",
  "Lifting & Rizado de pestañas",
  "Diseño de cejas",
  "Manicura",
  "Pedicura",
  "Cursos",
];

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicios");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen pt-20">
      {/* Background con overlay - Ajustamos el gradiente para que coincida con Services */}
      <div className="absolute inset-0 bg-[url('/bg-beauty.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Contenido Principal */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        {/* Logo o Marca */}
        <div className="mb-6 pt-8 md:pt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Shine Studio
          </h1>
          <div className="w-24 h-1 mx-auto bg-pink-500 rounded-full mb-6" />
        </div>

        {/* Descripción */}
        <p className="max-w-2xl text-sm md:text-lg lg:text-xl mb-8 leading-relaxed">
          Somos un salón dedicado a las extensiones de pestañas a nivel nacional
          de Guatemala con altos estándares profesionales atendiendo eventos y
          clientas.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#contacto"
            className="px-6 py-2.5 bg-pink-600 text-white rounded-full hover:bg-pink-700 
            transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Reserva tu cita
          </a>
          <a
            href="#servicios"
            className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full 
            hover:bg-white/20 transition-colors duration-300 border border-white/30"
          >
            Nuestros servicios
          </a>
        </div>

        {/* Servicios Preview */}
        <div className="max-w-4xl w-full">
          <h3 className="text-lg mb-4 font-semibold">Nuestros Servicios</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg
                border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator con fondo gradual */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          {" "}
          {/* Eliminar bg-gradient-to-b from-transparent to-black/70 */}
          {/* Scroll Indicator - sin línea divisoria */}
          <button
            onClick={scrollToServices}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
