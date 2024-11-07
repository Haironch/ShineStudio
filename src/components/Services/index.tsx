import { FC } from 'react';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  duration?: string;
  highlight?: string;
}

const Services: FC = () => {
  const services: Service[] = [
    {
      title: "Extensiones de pestañas",
      description: "Transforma tu mirada con extensiones personalizadas pelo a pelo. Técnica premium que realza tu belleza natural con un acabado impecable y duradero.",
      duration: "2-3 horas",
      highlight: "Hasta 6 semanas de duración",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: "Lifting & Rizado de pestañas",
      description: "Eleva y curva tus pestañas naturales desde la raíz para una mirada más abierta y expresiva. Incluye tinte para un efecto mascara permanente.",
      duration: "1 hora",
      highlight: "Resultados hasta 8 semanas",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4c3.5 2 4 6 4 6M18 4c-3.5 2-4 6-4 6" />
          <path d="M12 16c-4-1-8 4-8 4s4-8 8-7c4 1 8-7 8-7s-4 10-8 10Z" />
        </svg>
      )
    },
    {
      title: "Diseño de cejas",
      description: "Arquitectura facial personalizada mediante diseño y depilación profesional. Definimos la forma perfecta para armonizar tus facciones.",
      duration: "45 minutos",
      highlight: "Incluye tinte y laminado",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6c2-2 6-2.5 8.5-.5.5 2 0 4.5-2.5 5.5 2.5 1 3 3.5 2.5 5.5-2.5 2-6.5 1.5-8.5-.5M12 6c-2-2-6-2.5-8.5-.5-.5 2 0 4.5 2.5 5.5-2.5 1-3 3.5-2.5 5.5 2.5 2 6.5 1.5 8.5-.5" />
        </svg>
      )
    },
    {
      title: "Manicura Premium",
      description: "Experimenta el arte en tus manos con nuestros tratamientos exclusivos. Desde diseños minimalistas hasta las últimas tendencias en nail art.",
      duration: "1-2 horas",
      highlight: "Productos de primera calidad",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-1.1.9-2 2-2 .5 0 1 .2 1.4.6.4.4.6.9.6 1.4 0 1.1.9 2 2 2 .5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-1.1.9-2 2-2 .5 0 1 .2 1.4.6.4.4.6.9.6 1.4" />
          <path d="M21 12c-3 0-6-2-6-5 0 3-3 5-6 5s-6-2-6-5c0 3-3 5-6 5" />
        </svg>
      )
    },
    {
      title: "Pedicura Spa",
      description: "Renueva y embellece tus pies con nuestro tratamiento spa completo. Combina relajación profunda con resultados profesionales.",
      duration: "1-1.5 horas",
      highlight: "Incluye masaje podal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16" />
          <path d="M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M7 12v3" />
          <path d="M17 12v3" />
          <path d="M12 12v3" />
        </svg>
      )
    },
    {
      title: "Cursos Profesionales",
      description: "Domina el arte de la belleza con nuestra formación especializada. Aprende técnicas exclusivas y obtén certificación profesional.",
      duration: "Duración variable",
      highlight: "Certificación incluida",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[url('/bg-beauty.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/70">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios de belleza profesional, diseñados para realzar tu belleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-500/40 transition-colors duration-300">
                  <span className="text-pink-300 group-hover:text-pink-200 transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.duration && (
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {service.duration}
                    </div>
                  )}
                  {service.highlight && (
                    <div className="flex items-center text-sm text-pink-300 font-medium">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {service.highlight}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;