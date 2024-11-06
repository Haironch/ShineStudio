/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Aquí puedes definir los colores personalizados para el salón
        primary: "#ff69b4", // ejemplo de color rosa
        secondary: "#4a90e2", // ejemplo de color azul
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
