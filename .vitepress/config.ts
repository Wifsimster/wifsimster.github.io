import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Wifsimster',
  description: 'Passionate Web Dev, Tech Geek, Raspberry Pi & ESP8266 Lover 💻 ❤️',
  base: '/',
  
  sitemap: {
    hostname: 'https://wifsimster.github.io'
  },
  
  head: [
    ['meta', { name: 'author', content: 'Damien BATTISTELLA' }],
    ['meta', { property: 'og:site_name', content: 'Wifsimster' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      title: 'Wifsimster',
      description: 'Passionate Web Dev, Tech Geek, Raspberry Pi & ESP8266 Lover 💻 ❤️',
      themeConfig: {
        logo: '/wifsimster.png',
        siteTitle: 'Wifsimster',
        langMenuLabel: 'Changer de langue',
        i18nRouting: true,
        
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'Archives', link: '/archives' }
        ],

        sidebar: [
          {
            text: 'Articles',
            items: [
              { text: 'Communication sans fil ESP8266', link: '/posts/communication-sans-fil-esp8266' },
              { text: 'Luminosité Jeedom ESP8266', link: '/posts/luminosite-jeedom-esp8266' },
              { text: 'Affichage I2C ESP8266', link: '/posts/affichage-i2c-esp8266' },
              { text: 'Distributeur croquettes', link: '/posts/distributeur-croquettes-jeedom-esp8266' },
              { text: 'Flash ESP8266', link: '/posts/flash-esp8266' },
              { text: 'BMP180 Jeedom ESP8266', link: '/posts/temperature-pression-bmp180-jeedom-esp8266' },
              { text: 'Ambilight WS2812B Teensy', link: '/posts/ambilight-ws2812b-teensy' },
              { text: 'Bureau sur mesure', link: '/posts/bureau-sur-mesure-pc-integre' },
              { text: 'Ambilight WS2801 Raspberry Pi', link: '/posts/ambilight-ws2801-raspberry-pi-hyperion' },
              { text: 'Contrôle prise Chacon', link: '/posts/controle-prise-chacon-raspberry-pi' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Wifsimster' },
          { icon: 'twitter', link: 'https://twitter.com/wifsimster' }
        ],

        search: {
          provider: 'local'
        },

        footer: {
          message: '© 2017-2024 Damien BATTISTELLA',
          copyright: 'Blog personnel - Tech, DIY, ESP8266 & Raspberry Pi'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Wifsimster',
      description: 'Passionate Web Dev, Tech Geek, Raspberry Pi & ESP8266 Lover 💻 ❤️',
      themeConfig: {
        logo: '/wifsimster.png',
        siteTitle: 'Wifsimster',
        langMenuLabel: 'Change language',
        i18nRouting: true,
        
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Archives', link: '/en/archives' }
        ],

        sidebar: [
          {
            text: 'Articles',
            items: [
              { text: 'Wireless Communication ESP8266', link: '/en/posts/communication-sans-fil-esp8266' },
              { text: 'Luminosity Jeedom ESP8266', link: '/en/posts/luminosite-jeedom-esp8266' },
              { text: 'I2C Display ESP8266', link: '/en/posts/affichage-i2c-esp8266' },
              { text: 'Cat Feeder', link: '/en/posts/distributeur-croquettes-jeedom-esp8266' },
              { text: 'Flash ESP8266', link: '/en/posts/flash-esp8266' },
              { text: 'BMP180 Jeedom ESP8266', link: '/en/posts/temperature-pression-bmp180-jeedom-esp8266' },
              { text: 'Ambilight WS2812B Teensy', link: '/en/posts/ambilight-ws2812b-teensy' },
              { text: 'Custom Desk', link: '/en/posts/bureau-sur-mesure-pc-integre' },
              { text: 'Ambilight WS2801 Raspberry Pi', link: '/en/posts/ambilight-ws2801-raspberry-pi-hyperion' },
              { text: 'Chacon Plug Control', link: '/en/posts/controle-prise-chacon-raspberry-pi' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Wifsimster' },
          { icon: 'twitter', link: 'https://twitter.com/wifsimster' }
        ],

        search: {
          provider: 'local'
        },

        footer: {
          message: '© 2017-2024 Damien BATTISTELLA',
          copyright: 'Personal Blog - Tech, DIY, ESP8266 & Raspberry Pi'
        }
      }
    }
  }
})
