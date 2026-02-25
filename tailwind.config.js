/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Nama 'heading' dan 'body' ini yang kita panggil di class
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        serenity: {
          DEFAULT: '#B3CEE5',
          dark: '#93b2d1',
          midnight: '#2c3e50', // Ini warna biru gelap pengganti hitam
        },
        rosequartz: {
          DEFAULT: '#F7CAC9',
        }
      }
    },
  },
  plugins: [],
}