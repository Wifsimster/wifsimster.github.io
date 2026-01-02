# Blog de Wifsimster

Blog personnel de Wifsimster - Passionate Web Dev 💻 ❤️

## 🌐 Site web

Le blog est accessible publiquement à : <https://wifsimster.github.io/>

## 📁 Structure du projet

```text
.
├── src/                     # Code source de l'application Vue
│   ├── components/         # Composants Vue réutilisables
│   │   ├── blog/           # Composants spécifiques au blog
│   │   │   ├── ImageGallery.vue
│   │   │   ├── PostCard.vue
│   │   │   ├── PostContent.vue
│   │   │   ├── PostList.vue
│   │   │   ├── TableOfContents.vue
│   │   │   └── TagList.vue
│   │   └── layout/         # Composants de mise en page
│   │       ├── AppLayout.vue
│   │       ├── Footer.vue
│   │       ├── Header.vue
│   │       ├── MobileMenu.vue
│   │       └── Sidebar.vue
│   ├── composables/        # Composables Vue (hooks)
│   │   ├── useDarkMode.ts
│   │   ├── useI18n.ts
│   │   ├── useImageGallery.ts
│   │   ├── usePostImages.ts
│   │   └── usePosts.ts
│   ├── i18n/               # Traductions
│   │   └── translations.ts
│   ├── posts/              # Composants Vue pour les articles
│   │   └── *.vue           # Composants d'articles individuels
│   ├── router/             # Configuration Vue Router
│   │   └── index.ts
│   ├── styles/             # Styles CSS globaux
│   │   └── main.css
│   ├── types/              # Définitions TypeScript
│   │   ├── gallery.ts
│   │   └── i18n.ts
│   ├── utils/              # Utilitaires
│   │   ├── imageGrouping.ts
│   │   ├── markdown.ts
│   │   └── posts.ts
│   ├── views/              # Vues principales (pages)
│   │   ├── Archives.vue
│   │   ├── Home.vue
│   │   ├── Post.vue
│   │   └── Tag.vue
│   ├── App.vue             # Composant racine
│   └── main.ts             # Point d'entrée de l'application
├── public/                 # Fichiers statiques
│   ├── data/               # Données JSON des articles
│   │   ├── posts-fr.json   # Articles en français
│   │   └── posts-en.json   # Articles en anglais
│   ├── images/             # Images des articles
│   └── favicon.svg
├── dist/                   # Build de production (généré)
├── docs/                   # Documentation
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile              # Image Docker
├── nginx.conf              # Configuration Nginx
├── package.json            # Dépendances et scripts
├── tsconfig.json           # Configuration TypeScript
├── vite.config.ts          # Configuration Vite
└── README.md               # Ce fichier
```

## 🌍 Support multilingue

Le blog supporte deux langues avec un système d'internationalisation complet :

- **Français** : articles dans `public/data/posts-fr.json`, routes `/`
- **Anglais** : articles dans `public/data/posts-en.json`, routes `/en/`

### Fonctionnalités i18n

- Détection automatique de la langue via l'URL
- Basculement de langue avec préservation de la route
- Traductions centralisées dans `src/i18n/translations.ts`
- Formatage des dates selon la locale
- Composables Vue pour la gestion de l'i18n (`useI18n`)

Les articles sont stockés au format JSON et chargés dynamiquement par l'application Vue. Chaque article peut avoir son propre composant Vue dans `src/posts/`.

## 🚀 Développement

### Prérequis

- Node.js v24.0.0 ou supérieur
- npm

### Installation

```bash
npm install
```

### Développement local

Lancer le serveur de développement avec hot-reload :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

Le serveur de développement inclut :
- Hot Module Replacement (HMR)
- Vue DevTools (en mode développement)
- Support TypeScript natif

### Build

Générer l'application pour la production :

```bash
npm run build
```

L'application sera générée dans le répertoire `dist/` avec :
- Optimisation des assets
- Minification du code
- Code splitting automatique

### Prévisualisation

Prévisualiser le build de production localement :

```bash
npm run preview
```

Cela permet de tester le build de production avant le déploiement.

## 📝 Ajouter un nouvel article

### Étapes

1. **Créer le composant Vue de l'article** dans `src/posts/`
   - Nommer le fichier en PascalCase (ex: `MonArticle.vue`)
   - Exporter le composant avec `defineComponent` ou `<script setup>`
   - Le composant doit exposer une fonction `getContent(locale: 'fr' | 'en')` qui retourne le contenu de l'article

2. **Enregistrer le composant** dans `src/posts/index.ts`

3. **Ajouter les métadonnées** dans les fichiers JSON :
   - `public/data/posts-fr.json` pour la version française
   - `public/data/posts-en.json` pour la version anglaise

### Format JSON des métadonnées

```json
{
  "slug": "mon-article",
  "title": "Titre de l'article",
  "date": "2025-01-01",
  "description": "Description courte de l'article",
  "tags": ["Tag1", "Tag2"],
  "component": "MonArticle"
}
```

### Structure d'un composant d'article

Les composants d'articles doivent suivre cette structure :

```typescript
// src/posts/MonArticle.vue
import type { PostComponent } from '@/utils/posts'

export default {
  metadata: {
    slug: 'mon-article',
    date: '2025-01-01',
    tags: ['Tag1', 'Tag2']
  },
  getContent(locale: 'fr' | 'en') {
    return {
      title: locale === 'fr' ? 'Titre FR' : 'Title EN',
      description: locale === 'fr' ? 'Description FR' : 'Description EN',
      html: '<p>Contenu HTML de l\'article...</p>'
    }
  }
} satisfies PostComponent
```

### Images

Les images doivent être placées dans `public/images/` et peuvent être référencées dans le contenu HTML de l'article. Le système de galerie d'images est géré par les composables `useImageGallery` et `usePostImages`.

## ✨ Fonctionnalités

- 🌍 **Multilingue** : Support français/anglais avec basculement automatique
- 🌙 **Mode sombre** : Basculement entre thème clair et sombre
- 📱 **Responsive** : Design adaptatif pour mobile, tablette et desktop
- 🖼️ **Galerie d'images** : Système de galerie intégré pour les articles
- 📑 **Table des matières** : Génération automatique pour les articles
- 🏷️ **Tags** : Système de tags avec pages dédiées
- 📚 **Archives** : Page d'archives avec tous les articles
- 🔍 **SEO-friendly** : Structure optimisée pour les moteurs de recherche
- ⚡ **Performance** : Optimisations Vite et code splitting

## 🚢 Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions.

### Déploiement manuel

1. **Build l'application** :
   ```bash
   npm run build
   ```

2. Le répertoire `dist/` contient les fichiers statiques à déployer

3. **Pour GitHub Pages** :
   - Configurer le répertoire source sur `/dist` dans les paramètres du repository
   - Ou utiliser `gh-pages` pour déployer automatiquement

### Déploiement avec Docker

Voir la section [🐳 Docker](#-docker) pour les instructions de déploiement avec Docker.

## 🐳 Docker

### Build de l'image Docker

```bash
npm run docker:build
```

Cela construit l'image Docker `wifsimster/wifsimster-blog` avec Nginx configuré pour servir l'application.

### Exécution avec Docker

```bash
npm run docker:run
```

Le site sera accessible sur <http://localhost:8080>

### Docker Compose

Pour un déploiement complet avec Docker Compose :

```bash
docker-compose up
```

Ou en arrière-plan :

```bash
docker-compose up -d
```

### Publication de l'image Docker

Pour publier l'image sur Docker Hub :

```bash
npm run docker:publish
```

**Note** : Assurez-vous d'être authentifié avec `docker login` avant de publier.

## 🛠️ Technologies utilisées

### Core
- [Vue 3](https://vuejs.org/) - Framework JavaScript réactif avec Composition API
- [TypeScript](https://www.typescriptlang.org/) - Typage statique pour JavaScript
- [Vue Router](https://router.vuejs.org/) - Routeur pour applications Vue (SPA)
- [Vite](https://vitejs.dev/) - Build tool ultra-rapide et serveur de développement

### UI & Styling
- [PrimeVue](https://primevue.org/) - Bibliothèque de composants UI riche
- [PrimeIcons](https://primeng.org/icons) - Icônes pour PrimeVue
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [@primeuix/themes](https://primevue.org/theming/) - Thèmes pour PrimeVue

### Utilitaires
- [VueUse](https://vueuse.org/) - Collection de composables Vue réutilisables
- [markdown-it](https://github.com/markdown-it/markdown-it) - Parser Markdown
- [DOMPurify](https://github.com/cure53/DOMPurify) - Sanitisation HTML pour la sécurité
- [front-matter](https://github.com/jxson/front-matter) - Parsing de front matter

### Développement
- [Vue DevTools](https://devtools.vuejs.org/) - Outils de développement Vue

### Déploiement
- [Docker](https://www.docker.com/) - Conteneurisation
- [Nginx](https://nginx.org/) - Serveur web pour la production
- [GitHub Pages](https://pages.github.com/) - Hébergement statique

## 📄 Licence

MIT

## 👤 Auteur

**Wifsimster**

- GitHub: [@Wifsimster](https://github.com/Wifsimster)
- Twitter: [@wifsimster](https://twitter.com/wifsimster)
- Email: battistella@proton.me

---

© 2017-2025 Wifsimster
