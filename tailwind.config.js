/** @type {import('tailwindcss').Config} */
export default {
  // deseo que tengas en cuenta la carpeta src, con cualquier carpeta adicional y cualquier archivo con esas extensiones
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // modificar la configuración y valores que maneja tailwind
    extend: {
      fontFamily: {
        // la fuente predeterminada de Tailwind es Sans
        sans: ["Jost", "sans-serif"],
        jost: ["Jost", "sans-serif"]
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700
      },
      colors: {
        light: {
          background: "#ffffff",
          text:"#333333",
          primary: "#3490dc",
          secondary: "#f6ed4a"
        },
        dark: {
          background: "#1a202c",
          text:"#e2e8f0",
          primary: "#63b3ed",
          secondary: "#faf089"
        }
      }
    },
  },
  //va a traer clases listas para utilizar para forms
  plugins: [require('@tailwindcss/forms')],
  // indicamos el modo dark
  darkMode: "class"
}

