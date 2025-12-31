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
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {}, `
      (function() {
        function injectLanguageSwitcher() {
          const actions = document.querySelector('.VPNavBarActions');
          if (!actions) return false;
          if (actions.querySelector('.vp-locale-switch')) return true;
          
          const isEnglish = window.location.pathname.startsWith('/en');
          const currentLocale = isEnglish ? 'EN' : 'FR';
          
          const switcher = document.createElement('div');
          switcher.className = 'vp-locale-switch';
          switcher.innerHTML = \`
            <button class="vp-locale-switch-button" aria-label="\${currentLocale}">
              <span class="vp-locale-switch-label">\${currentLocale}</span>
              <svg class="vp-locale-switch-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>
            <div class="vp-locale-switch-dropdown" style="display: none;">
              <a href="/" class="vp-locale-switch-item \${!isEnglish ? 'active' : ''}">Français</a>
              <a href="/en/" class="vp-locale-switch-item \${isEnglish ? 'active' : ''}">English</a>
            </div>
          \`;
          
          const button = switcher.querySelector('.vp-locale-switch-button');
          const dropdown = switcher.querySelector('.vp-locale-switch-dropdown');
          
          button.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
          });
          
          document.addEventListener('click', function(e) {
            if (!switcher.contains(e.target)) {
              dropdown.style.display = 'none';
            }
          });
          
          const darkToggle = actions.querySelector('.VPNavBarAppearance');
          if (darkToggle) {
            actions.insertBefore(switcher, darkToggle);
          } else {
            actions.appendChild(switcher);
          }
          return true;
        }
        
        function tryInject() {
          if (!injectLanguageSwitcher()) {
            setTimeout(tryInject, 100);
          }
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', tryInject);
        } else {
          tryInject();
        }
        
        // Also try after a delay
        setTimeout(tryInject, 500);
        setTimeout(tryInject, 1000);
      })();
    `]
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
