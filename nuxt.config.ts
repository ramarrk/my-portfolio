export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts' 
  ],
  

  googleFonts: {
    families: {
      Poppins: [400, 600, 700], 
      Inter: [400, 500],       
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  devtools: { enabled: true }
})