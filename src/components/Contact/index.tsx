import { FC } from "react";
import { Phone, MessageCircle, Facebook, Instagram } from "lucide-react";

const ContactIcon: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
    {children}
  </div>
);

const Contact: FC = () => {
  const contacts = [
    {
      title: "WhatsApp",
      info: "+502 5849 7615",
      href: "https://wa.me/50258497615",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      title: "Teléfono",
      info: "+502 5849 7615",
      href: "tel:+50258497615",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      info: "Shine Studio",
      href: "https://www.facebook.com/profile.php?id=100087444022446",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Instagram",
      info: "@shine_salongt",
      href: "https://www.instagram.com/shine_salongt",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full bg-[url('/bg-beauty.jpg')] bg-cover bg-center py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Contáctanos</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-base text-gray-200 max-w-xl mx-auto">
            Estamos aquí para atenderte. Contáctanos por cualquiera de nuestros
            medios o visítanos en nuestra ubicación.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-200 hover:text-pink-300 transition-colors duration-300"
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

          {/* Map Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
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
              className="mt-3 inline-block px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 text-sm"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
