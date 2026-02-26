export default defineNuxtConfig({

  app: {
    head: {
      title: 'Portofolio Rama', 
      link: [
        { rel: 'icon', type: 'image/png', href: '/dog.png' } 
      ]
    }
  },

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