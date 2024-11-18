import { FC } from "react";

const ContactIcon: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
    {children}
  </div>
);

const Contact: FC = () => {
  const contacts = [
    {
      title: "WhatsApp",
      info: "+502 5849 7615",
      href: "https://wa.me/50258497615",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12.25l-4 4-4-4"
          />
        </svg>
      ),
    },
    {
      title: "Teléfono",
      info: "+502 5849 7615",
      href: "tel:+50258497615",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3"
          />
        </svg>
      ),
    },
    {
      title: "Facebook",
      info: "Shine Studio",
      href: "https://www.facebook.com/profile.php?id=100087444022446",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
          />
        </svg>
      ),
    },
    {
      title: "Instagram",
      info: "@shine_salongt",
      href: "https://www.instagram.com/shine_salongt",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={2} />
          <circle cx="12" cy="12" r="4" strokeWidth={2} />
          <circle cx="17" cy="7" r="1" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contacto"
      className="relative py-24 bg-[url('/bg-beauty.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/70"
    >
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contáctanos</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Estamos aquí para atenderte. Contáctanos por cualquiera de nuestros
            medios o visítanos en nuestra ubicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Información de Contacto */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-200 hover:text-pink-300 transition-colors duration-300"
                >
                  <ContactIcon>{contact.icon}</ContactIcon>
                  <div>
                    <p className="font-medium text-white">{contact.title}</p>
                    <p className="text-sm text-gray-300">{contact.info}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Nuestra Ubicación
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8753962089744!2d-90.51436908255615!3d14.613033681114275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a7e5f7a41d63%3A0x3f7d7f5f5f5f5f5f!2sShine%20Studio!5e0!3m2!1sen!2sgt!4v1620000000000!5m2!1sen!2sgt"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/RqWE7MtQe3YsWhRq7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;