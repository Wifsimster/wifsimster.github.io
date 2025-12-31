import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Wifsimster Blog',
  titleTemplate: false,
  description: 'Passionate Web Dev, Tech Geek, Raspberry Pi & ESP8266 Lover 💻 ❤️',
  base: '/',

  sitemap: {
    hostname: 'https://wifsimster.github.io'
  },

  head: [
    ['meta', { name: 'author', content: 'Wifsimster' }],
    ['meta', { property: 'og:site_name', content: 'Wifsimster Blog' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      title: 'Wifsimster Blog',
      titleTemplate: false,
      description: 'Passionate Web Dev, Tech Geek, Raspberry Pi & ESP8266 Lover 💻 ❤️',
      head: [
        ['meta', { name: 'author', content: 'Wifsimster' }],
        ['meta', { property: 'og:site_name', content: 'Wifsimster Blog' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
      ],
      themeConfig: {
        logo: {
          src: '/images/wifsimster.png',
          alt: 'Wifsimster Blog Logo'
        },
        siteTitle: 'Wifsimster Blog',
        langMenuLabel: 'Changer de langue',
        i18nRouting: true,

        nav: [
          {
            text: 'Accueil',
            link: '/',
            activeMatch: '^/$'
          },
          {
            text: 'Articles',
            items: [
              {
                text: 'ESP8266',
                items: [
                  { text: 'Communication sans fil', link: '/posts/communication-sans-fil-esp8266' },
                  { text: 'Luminosité Jeedom', link: '/posts/luminosite-jeedom-esp8266' },
                  { text: 'Affichage I2C', link: '/posts/affichage-i2c-esp8266' },
                  { text: 'Distributeur croquettes', link: '/posts/distributeur-croquettes-jeedom-esp8266' },
                  { text: 'Flash ESP8266', link: '/posts/flash-esp8266' },
                  { text: 'BMP180 Jeedom', link: '/posts/temperature-pression-bmp180-jeedom-esp8266' }
                ]
              },
              {
                text: 'Ambilight',
                items: [
                  { text: 'WS2812B Teensy', link: '/posts/ambilight-ws2812b-teensy' },
                  { text: 'WS2801 Raspberry Pi', link: '/posts/ambilight-ws2801-raspberry-pi-hyperion' }
                ]
              },
              {
                text: 'Autres',
                items: [
                  { text: 'Bureau sur mesure', link: '/posts/bureau-sur-mesure-pc-integre' },
                  { text: 'Contrôle prise Chacon', link: '/posts/controle-prise-chacon-raspberry-pi' }
                ]
              }
            ],
            activeMatch: '^/posts/'
          },
          {
            text: 'Archives',
            link: '/archives',
            activeMatch: '^/archives'
          },
          {
            text: 'Tags',
            items: [
              { text: 'Ambilight', link: '/tags/Ambilight' },
              { text: 'DIY', link: '/tags/DIY' },
              { text: 'ESP8266', link: '/tags/ESP8266' },
              { text: 'Jeedom', link: '/tags/Jeedom' },
              { text: 'NodeMCU', link: '/tags/NodeMCU' },
              { text: 'Raspberry Pi', link: '/tags/Raspberry-Pi' },
              { text: 'Teensy', link: '/tags/Teensy' },
              { text: 'WS2801', link: '/tags/WS2801' },
              { text: 'WS2812B', link: '/tags/WS2812B' }
            ],
            activeMatch: '^/tags/'
          }
        ],

        sidebar: {
          '/posts/': [
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
          '/tags/': [
            {
              text: 'Tags',
              items: [
                { text: 'Ambilight', link: '/tags/Ambilight' },
                { text: 'DIY', link: '/tags/DIY' },
                { text: 'ESP8266', link: '/tags/ESP8266' },
                { text: 'Jeedom', link: '/tags/Jeedom' },
                { text: 'NodeMCU', link: '/tags/NodeMCU' },
                { text: 'Raspberry Pi', link: '/tags/Raspberry-Pi' },
                { text: 'Teensy', link: '/tags/Teensy' },
                { text: 'WS2801', link: '/tags/WS2801' },
                { text: 'WS2812B', link: '/tags/WS2812B' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Wifsimster' },
          { icon: 'twitter', link: 'https://twitter.com/wifsimster' }
        ],

        search: {
          provider: 'local'
        },

        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },

        footer: {
          message: '© 2017-2025 Wifsimster',
          copyright: 'Blog personnel'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Wifsimster Blog',
      titleTemplate: false,
      description: 'Passionate Web Dev, Tech Geek, Raspberry Pi & ESP8266 Lover 💻 ❤️',
      head: [
        ['meta', { name: 'author', content: 'Wifsimster' }],
        ['meta', { property: 'og:site_name', content: 'Wifsimster Blog' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
      ],
      themeConfig: {
        logo: {
          src: '/images/wifsimster.png',
          alt: 'Wifsimster Blog Logo'
        },
        siteTitle: 'Wifsimster Blog',
        langMenuLabel: 'Change language',
        i18nRouting: true,

        nav: [
          {
            text: 'Home',
            link: '/en/',
            activeMatch: '^/en/$'
          },
          {
            text: 'Articles',
            items: [
              {
                text: 'ESP8266',
                items: [
                  { text: 'Wireless Communication', link: '/en/posts/communication-sans-fil-esp8266' },
                  { text: 'Luminosity Jeedom', link: '/en/posts/luminosite-jeedom-esp8266' },
                  { text: 'I2C Display', link: '/en/posts/affichage-i2c-esp8266' },
                  { text: 'Cat Feeder', link: '/en/posts/distributeur-croquettes-jeedom-esp8266' },
                  { text: 'Flash ESP8266', link: '/en/posts/flash-esp8266' },
                  { text: 'BMP180 Jeedom', link: '/en/posts/temperature-pression-bmp180-jeedom-esp8266' }
                ]
              },
              {
                text: 'Ambilight',
                items: [
                  { text: 'WS2812B Teensy', link: '/en/posts/ambilight-ws2812b-teensy' },
                  { text: 'WS2801 Raspberry Pi', link: '/en/posts/ambilight-ws2801-raspberry-pi-hyperion' }
                ]
              },
              {
                text: 'Others',
                items: [
                  { text: 'Custom Desk', link: '/en/posts/bureau-sur-mesure-pc-integre' },
                  { text: 'Chacon Plug Control', link: '/en/posts/controle-prise-chacon-raspberry-pi' }
                ]
              }
            ],
            activeMatch: '^/en/posts/'
          },
          {
            text: 'Archives',
            link: '/en/archives',
            activeMatch: '^/en/archives'
          },
          {
            text: 'Tags',
            items: [
              { text: 'Ambilight', link: '/en/tags/Ambilight' },
              { text: 'DIY', link: '/en/tags/DIY' },
              { text: 'ESP8266', link: '/en/tags/ESP8266' },
              { text: 'Jeedom', link: '/en/tags/Jeedom' },
              { text: 'NodeMCU', link: '/en/tags/NodeMCU' },
              { text: 'Raspberry Pi', link: '/en/tags/Raspberry-Pi' },
              { text: 'Teensy', link: '/en/tags/Teensy' },
              { text: 'WS2801', link: '/en/tags/WS2801' },
              { text: 'WS2812B', link: '/en/tags/WS2812B' }
            ],
            activeMatch: '^/en/tags/'
          }
        ],

        sidebar: {
          '/en/posts/': [
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
          '/en/tags/': [
            {
              text: 'Tags',
              items: [
                { text: 'Ambilight', link: '/en/tags/Ambilight' },
                { text: 'DIY', link: '/en/tags/DIY' },
                { text: 'ESP8266', link: '/en/tags/ESP8266' },
                { text: 'Jeedom', link: '/en/tags/Jeedom' },
                { text: 'NodeMCU', link: '/en/tags/NodeMCU' },
                { text: 'Raspberry Pi', link: '/en/tags/Raspberry-Pi' },
                { text: 'Teensy', link: '/en/tags/Teensy' },
                { text: 'WS2801', link: '/en/tags/WS2801' },
                { text: 'WS2812B', link: '/en/tags/WS2812B' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Wifsimster' },
          { icon: 'twitter', link: 'https://twitter.com/wifsimster' }
        ],

        search: {
          provider: 'local'
        },

        docFooter: {
          prev: 'Previous Page',
          next: 'Next Page'
        },

        footer: {
          message: '© 2017-2025 Wifsimster',
          copyright: 'Personal Blog'
        }
      }
    }
  }
})
