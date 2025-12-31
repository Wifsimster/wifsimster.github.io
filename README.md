# Blog de Damien BATTISTELLA

Blog personnel de Damien BATTISTELLA - Passionate Web Dev 💻 ❤️

## 🌐 Site web

Le blog est accessible publiquement à : https://wifsimster.github.io/

## 📁 Structure du projet

```
.
├── docs/                    # Contenu source VitePress
│   ├── posts/              # Articles du blog (Markdown)
│   ├── tags/               # Pages de tags
│   ├── public/             # Assets statiques (images)
│   │   ├── images/         # Images des articles
│   │   └── img/            # Images générales
│   ├── index.md            # Page d'accueil
│   └── archives.md         # Page archives
├── .vitepress/             # Configuration VitePress
│   ├── config.ts           # Configuration principale
│   └── theme/              # Personnalisation du thème
└── package.json            # Dépendances et scripts
```

## 🚀 Développement

### Prérequis

- Node.js LTS (v20.x ou supérieur)
- npm ou yarn

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

Générer le site statique :

```bash
npm run build
```

Le site sera généré dans `.vitepress/dist/`

### Prévisualisation

Prévisualiser le build de production :

```bash
npm run preview
```

## 📝 Ajouter un nouvel article

1. Créer un nouveau fichier Markdown dans `docs/posts/`
2. Ajouter le frontmatter avec les métadonnées :
   ```yaml
   ---
   title: Titre de l'article
   date: YYYY-MM-DD
   description: Description courte
   tags:
     - Tag1
     - Tag2
   ---
   ```
3. Ajouter le lien vers l'article dans `docs/index.md` et `docs/archives.md`
4. Mettre à jour la sidebar dans `.vitepress/config.ts` si nécessaire

## 🚢 Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions.

### Déploiement manuel

1. Build le site :
   ```bash
   npm run build
   ```

2. Le répertoire `.vitepress/dist/` contient les fichiers statiques à déployer

3. Pour GitHub Pages, configurer le répertoire source sur `/.vitepress/dist` dans les paramètres du repository

## 🛠️ Technologies utilisées

- [VitePress](https://vitepress.dev/) - Framework de documentation/blog
- [Vue 3](https://vuejs.org/) - Framework JavaScript (dépendance de VitePress)
- [Vite](https://vitejs.dev/) - Build tool (dépendance de VitePress)

## 📄 Licence

MIT

## 👤 Auteur

**Damien BATTISTELLA**

- GitHub: [@Wifsimster](https://github.com/Wifsimster)
- Twitter: [@wifsimster](https://twitter.com/wifsimster)
- Email: battistella@proton.me

---

© 2017-2025 Damien BATTISTELLA
