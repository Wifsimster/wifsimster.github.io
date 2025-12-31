import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

type Language = 'fr' | 'en'

const currentLang = ref<Language>('fr')

export function useI18n() {
  const route = useRoute()
  const router = useRouter()

  const language = computed(() => {
    const path = route.path
    if (path.startsWith('/en')) {
      return 'en'
    }
    return 'fr'
  })

  const switchLanguage = (lang: Language) => {
    const currentPath = route.path
    let newPath = currentPath

    if (lang === 'en') {
      if (!currentPath.startsWith('/en')) {
        newPath = '/en' + (currentPath === '/' ? '' : currentPath)
      }
    } else {
      if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace('/en', '') || '/'
      }
    }

    router.push(newPath)
  }

  const t = (key: string, params?: Record<string, string>) => {
    const translations: Record<string, Record<string, string>> = {
      fr: {
        'nav.home': 'Accueil',
        'nav.articles': 'Articles',
        'nav.archives': 'Archives',
        'nav.tags': 'Tags',
        'nav.blog': 'Blog',
        'nav.projects': 'Projets',
        'nav.resume': 'CV',
        'sidebar.aboutMe': 'À propos',
        'sidebar.aboutMeText': "Je suis Damien BATTISTELLA (alias Wifsimster), développeur web passionné.",
        'sidebar.stayConnected': 'Restez connecté',
        'sidebar.emailSignup': 'Inscription email',
        'sidebar.github': 'GitHub',
        'sidebar.linkedin': 'LinkedIn',
        'sidebar.rssFeed': 'Flux RSS',
        'home.title': 'Wifsimster Blog',
        'home.subtitle': 'Blog personnel',
        'home.tagline': 'Passionate Web Dev 💻',
        'home.viewArchives': 'Voir les archives',
        'home.latestArticles': 'Derniers articles',
        'home.introTitle': 'Salut, je suis Damien !',
        'home.introText': "Je suis un développeur web passionné. J'ai créé ce blog pour partager mes projets et expériences !",
        'home.blogTitle': 'Blog',
        'home.blogSubtitle': 'Guides, références et tutoriels.',
        'archives.title': 'Archives',
        'archives.description': 'Tous les articles du blog, classés par date.',
        'tags.title': 'Articles taggés',
        'post.readMore': 'Lire la suite',
        'footer.copyright': '© 2017-2025 Wifsimster',
        'footer.blog': 'Blog personnel'
      },
      en: {
        'nav.home': 'Home',
        'nav.articles': 'Articles',
        'nav.archives': 'Archives',
        'nav.tags': 'Tags',
        'nav.blog': 'Blog',
        'nav.projects': 'Projects',
        'nav.resume': 'Resume',
        'sidebar.aboutMe': 'About Me',
        'sidebar.aboutMeText': "I'm Damien BATTISTELLA (alias Wifsimster), passionate web developer.",
        'sidebar.stayConnected': 'Stay Connected',
        'sidebar.emailSignup': 'Email signup',
        'sidebar.github': 'GitHub',
        'sidebar.linkedin': 'LinkedIn',
        'sidebar.rssFeed': 'RSS feed',
        'home.title': 'Wifsimster Blog',
        'home.subtitle': 'Personal Blog',
        'home.tagline': 'Passionate Web Dev 💻',
        'home.viewArchives': 'View Archives',
        'home.latestArticles': 'Latest Articles',
        'home.introTitle': 'Hey, I\'m Damien!',
        'home.introText': "I'm a passionate web developer. I've created this blog to share my projects and experiences!",
        'home.blogTitle': 'Blog',
        'home.blogSubtitle': 'Guides, references, and tutorials.',
        'archives.title': 'Archives',
        'archives.description': 'All blog articles, sorted by date.',
        'tags.title': 'Tagged Articles',
        'post.readMore': 'Read more',
        'footer.copyright': '© 2017-2025 Wifsimster',
        'footer.blog': 'Personal Blog'
      }
    }

    let text = translations[language.value]?.[key] || key
    if (params) {
      Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param])
      })
    }
    return text
  }

  return {
    language,
    switchLanguage,
    t
  }
}
