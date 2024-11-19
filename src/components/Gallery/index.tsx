const Gallery = () => {
  const images = [
    {
      src:
        "https://res.cloudinary.com/dwfevkxzf/image/upload/c_fill,h_800,w_600/v1731962799/4_m4wsx8.jpg",
      alt: "Extensiones de pestañas",
      title: "Extensiones de pestañas",
    },
    {
      src:
        "https://res.cloudinary.com/dwfevkxzf/image/upload/c_fill,h_800,w_600/v1731962797/5_chtpvs.jpg",
      alt: "Diseño de cejas",
      title: "Diseño de cejas",
    },
    {
      src:
        " https://res.cloudinary.com/dwfevkxzf/image/upload/v1732033754/06_ni3gzg.jpg",
      alt: "Manicura Premium",
      title: "Manicura Premium",
    },
    {
      src:
        "https://res.cloudinary.com/dwfevkxzf/image/upload/c_fill,h_800,w_600/v1731962798/2_p8ystx.jpg",
      alt: "Volumen de pestañas",
      title: "Volumen de pestañas",
    },
    {
      src:
        "https://res.cloudinary.com/dwfevkxzf/image/upload/c_fill,h_800,w_600/v1731962797/1_pvtrr6.jpg",
      alt: "Tratamientos especiales",
      title: "Tratamientos especiales",
    },
    {
      src:
        "https://res.cloudinary.com/dwfevkxzf/image/upload/c_fill,h_800,w_600/v1731963335/6_ggbzly.jpg",
      alt: "Pedicura Spa",
      title: "Pedicura Spa",
    },
  ];

  return (
    <section
      id="servicios"
      className="pt-4 relative bg-[url('/bg-beauty.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/70 before:to-black/50"
    >
      <div className="container mx-auto px-4 relative pt-16 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Galería</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Descubre nuestros trabajos y resultados profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
