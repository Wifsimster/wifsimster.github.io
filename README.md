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
│   │   └── layout/         # Composants de mise en page
│   ├── composables/        # Composables Vue (hooks)
│   ├── posts/              # Composants Vue pour les articles
│   ├── router/             # Configuration Vue Router
│   ├── styles/             # Styles CSS globaux
│   ├── utils/              # Utilitaires
│   ├── views/              # Vues principales (pages)
│   └── App.vue             # Composant racine
├── public/                 # Fichiers statiques
│   ├── data/               # Données JSON des articles
│   │   ├── posts-fr.json   # Articles en français
│   │   └── posts-en.json   # Articles en anglais
│   └── images/             # Images des articles
├── docs/                   # Documentation et assets
│   ├── posts/              # Articles Markdown (archives)
│   ├── en/                 # Version anglaise
│   ├── fr/                 # Version française
│   ├── tags/               # Pages de tags
│   └── public/             # Assets statiques (images)
├── .vitepress/             # Configuration VitePress (legacy)
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile              # Image Docker
├── nginx.conf              # Configuration Nginx
└── package.json            # Dépendances et scripts
```

## 🌍 Support multilingue

Le blog supporte deux langues :

- **Français** : articles dans `public/data/posts-fr.json`, routes `/`
- **Anglais** : articles dans `public/data/posts-en.json`, routes `/en/`

Les articles sont stockés au format JSON et chargés dynamiquement par l'application Vue.

## 🚀 Développement

### Prérequis

- Node.js v24.0.0 ou supérieur
- npm

### Installation

```bash
npm install
```

### Développement local

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build

Générer l'application pour la production :

```bash
npm run build
```

L'application sera générée dans le répertoire `dist/`

### Prévisualisation

Prévisualiser le build de production :

```bash
npm run preview
```

## 📝 Ajouter un nouvel article

1. Ajouter les métadonnées de l'article dans `public/data/posts-fr.json` pour la version française
2. Ajouter les métadonnées dans `public/data/posts-en.json` pour la version anglaise
3. Créer le composant Vue correspondant dans `src/posts/` si nécessaire

4. Le format JSON attendu :

   ```json
   {
     "slug": "mon-article",
     "title": "Titre de l'article",
     "date": "2025-01-01",
     "description": "Description courte",
     "tags": ["Tag1", "Tag2"],
     "component": "MonArticle"
   }
   ```

## 🚢 Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions.

### Déploiement manuel

1. Build l'application :
   ```bash
   npm run build
   ```

2. Le répertoire `dist/` contient les fichiers statiques à déployer

3. Pour GitHub Pages, configurer le répertoire source sur `/dist` dans les paramètres du repository

## 🐳 Docker

### Build de l'image Docker

```bash
npm run docker:build
```

### Exécution avec Docker

```bash
npm run docker:run
```

Le site sera accessible sur <http://localhost:8080>

### Docker Compose

```bash
docker-compose up
```

## 🛠️ Technologies utilisées

- [Vue 3](https://vuejs.org/) - Framework JavaScript réactif
- [Vue Router](https://router.vuejs.org/) - Routeur pour applications Vue
- [PrimeVue](https://primevue.org/) - Bibliothèque de composants UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Vite](https://vitejs.dev/) - Build tool et serveur de développement
- [VueUse](https://vueuse.org/) - Collection de composables Vue
- [markdown-it](https://github.com/markdown-it/markdown-it) - Parser Markdown
- [Docker](https://www.docker.com/) - Conteneurisation
- [Nginx](https://nginx.org/) - Serveur web pour la production

## 📄 Licence

MIT

## 👤 Auteur

**Wifsimster**

- GitHub: [@Wifsimster](https://github.com/Wifsimster)
- Twitter: [@wifsimster](https://twitter.com/wifsimster)
- Email: battistella@proton.me

---

© 2017-2025 Wifsimster
