# Blog de Wifsimster

Blog personnel de Wifsimster - Passionate Web Dev 💻 ❤️

## 🌐 Site web

Le blog est accessible publiquement à : https://wifsimster.github.io/

## 📁 Structure du projet

```
.
├── docs/                    # Contenu source VitePress
│   ├── posts/              # Articles du blog en français (Markdown)
│   ├── en/                 # Version anglaise
│   │   ├── posts/          # Articles du blog en anglais
│   │   ├── index.md        # Page d'accueil anglaise
│   │   └── archives.md     # Archives anglaises
│   ├── fr/                 # Version française
│   │   ├── index.md        # Page d'accueil française
│   │   └── archives.md     # Archives françaises
│   ├── tags/               # Pages de tags
│   ├── public/             # Assets statiques (images)
│   │   ├── images/         # Images des articles
│   │   └── img/            # Images générales
│   ├── index.md            # Page d'accueil par défaut
│   └── archives.md         # Page archives par défaut
├── .vitepress/             # Configuration VitePress
│   ├── config.ts           # Configuration principale
│   └── theme/              # Personnalisation du thème
└── package.json            # Dépendances et scripts
```

## 🌍 Support multilingue

Le blog supporte deux langues :
- **Français** : articles dans `docs/posts/`, pages dans `docs/fr/`
- **Anglais** : articles dans `docs/en/posts/`, pages dans `docs/en/`

Les articles sont organisés par langue dans leurs répertoires respectifs, permettant une navigation séparée pour chaque langue.

## 🚀 Développement

### Prérequis

- Node.js v24.0.0 ou supérieur
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

1. Créer un nouveau fichier Markdown dans `docs/posts/` pour la version française
2. Créer la version anglaise correspondante dans `docs/en/posts/` si nécessaire
3. Ajouter le frontmatter avec les métadonnées :
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
4. Ajouter le lien vers l'article dans :
   - `docs/index.md` et `docs/archives.md` pour la version française
   - `docs/en/index.md` et `docs/en/archives.md` pour la version anglaise
5. Mettre à jour la sidebar dans `.vitepress/config.ts` si nécessaire

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

**Wifsimster**

- GitHub: [@Wifsimster](https://github.com/Wifsimster)
- Twitter: [@wifsimster](https://twitter.com/wifsimster)
- Email: battistella@proton.me

---

© 2017-2025 Wifsimster
