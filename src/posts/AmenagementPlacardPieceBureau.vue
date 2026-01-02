<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'amenagement-placard-piece-bureau',
  date: '2018-02-17',
  tags: ['DIY']
}

const frenchContent: PostContent = {
  title: 'Aménagement d\'un placard dans la pièce bureau',
  description: 'Organisation et aménagement d\'un placard encastré dans la pièce bureau avec installation d\'étagères et unités de rangement pour optimiser l\'espace de stockage.',
  html: `<h2>Introduction</h2>
<p>Dans le cadre de l'aménagement de ma pièce bureau, j'ai décidé d'organiser un placard encastré pour créer un espace de rangement fonctionnel et bien organisé. Cet espace me permettra de stocker mes composants électroniques, outils et divers accessoires de manière ordonnée.</p>

<h2>Préparation de l'espace</h2>
<p>Le placard est une alcove rectangulaire encastrée dans le mur, avec des murs blancs et un sol en parquet clair. L'espace était initialement vide et prêt à être aménagé.</p>
<p>J'ai d'abord nettoyé et préparé les surfaces pour m'assurer que les supports d'étagères seraient fixés de manière solide et durable.</p>
<p><img src="/images/amenagement-placard-vide-1.jpg" alt="Alcove vide initiale avant aménagement"></p>

<h2>Installation des supports d'étagères</h2>
<p>Pour créer un système d'étagères modulaire et solide, j'ai installé des supports en bois blanc fixés directement sur les murs latéraux de l'alcove. Ces supports sont constitués de bandes de bois d'environ 1 à 2 pouces de largeur, fixées horizontalement à plusieurs niveaux.</p>
<p>Chaque niveau comprend deux paires de supports parallèles sur chaque mur latéral, permettant de poser une étagère qui reposera directement sur ces supports. Les supports sont fixés avec des vis, espacées régulièrement pour assurer une bonne répartition de la charge.</p>
<p><img src="/images/amenagement-placard-supports-1.jpg" alt="Installation des supports d'étagères en bois blanc"></p>

<h2>Installation des étagères</h2>
<p>Une fois les supports en place, j'ai installé les étagères en contreplaqué. J'ai choisi un mélange d'étagères en bois naturel clair et en contreplaqué teinté rouge-brun pour créer un contraste visuel intéressant.</p>
<p>Les étagères sont posées directement sur les supports et s'étendent sur toute la largeur de l'alcove. Elles sont suffisamment épaisses (environ 1 pouce) pour supporter le poids des unités de rangement et des objets qui y seront stockés.</p>
<p><img src="/images/amenagement-placard-etageres-1.jpg" alt="Étagères installées dans l'alcove"></p>

<h2>Organisation et rangement</h2>
<p>Pour organiser efficacement mes petits composants électroniques, vis, écrous et autres accessoires, j'ai placé plusieurs unités de rangement à tiroirs bleus sur les étagères. Chaque unité contient 24 tiroirs en plastique transparent, organisés en 4 rangées de 6 tiroirs.</p>
<p>Les tiroirs sont étiquetés pour faciliter l'identification rapide du contenu. Ces unités de rangement permettent de garder tout organisé et facilement accessible.</p>
<p><img src="/images/amenagement-placard-organisation-1.jpg" alt="Unités de rangement bleues avec tiroirs organisés"></p>

<h2>Résultat final</h2>
<p>Le placard est maintenant complètement aménagé et organisé. L'espace est utilisé de manière optimale avec plusieurs niveaux d'étagères permettant de stocker une grande quantité d'objets tout en gardant tout accessible et bien organisé.</p>
<p>Cette organisation offre plusieurs avantages :</p>
<ul>
<li>Gain d'espace grâce à l'utilisation verticale de l'alcove</li>
<li>Organisation claire et systématique des composants</li>
<li>Accès facile à tous les éléments stockés</li>
<li>Esthétique propre et fonctionnelle</li>
</ul>
<p><img src="/images/amenagement-placard-final-1.jpg" alt="Résultat final - Placard organisé et fonctionnel"></p>`
}

const englishContent: PostContent = {
  title: 'Closet organization in desk room',
  description: 'Organization and setup of a built-in closet in the desk room with shelf installation and storage units to optimize storage space.',
  html: `<h2>Introduction</h2>
<p>As part of organizing my desk room, I decided to set up a built-in closet to create a functional and well-organized storage space. This space will allow me to store my electronic components, tools, and various accessories in an orderly manner.</p>

<h2>Space Preparation</h2>
<p>The closet is a rectangular alcove recessed into the wall, with white walls and a light wooden floor. The space was initially empty and ready to be organized.</p>
<p>I first cleaned and prepared the surfaces to ensure that the shelf supports would be securely and durably fixed.</p>
<p><img src="/images/amenagement-placard-vide-1.jpg" alt="Initial empty alcove before organization"></p>

<h2>Shelf Support Installation</h2>
<p>To create a modular and sturdy shelf system, I installed white wooden supports fixed directly to the side walls of the alcove. These supports consist of wood strips approximately 1 to 2 inches wide, fixed horizontally at several levels.</p>
<p>Each level includes two pairs of parallel supports on each side wall, allowing a shelf to be placed that will rest directly on these supports. The supports are fixed with screws, evenly spaced to ensure good load distribution.</p>
<p><img src="/images/amenagement-placard-supports-1.jpg" alt="Installation of white wooden shelf supports"></p>

<h2>Shelf Installation</h2>
<p>Once the supports were in place, I installed the plywood shelves. I chose a mix of natural light wood shelves and reddish-brown stained plywood to create an interesting visual contrast.</p>
<p>The shelves are placed directly on the supports and extend across the full width of the alcove. They are thick enough (approximately 1 inch) to support the weight of storage units and objects that will be stored on them.</p>
<p><img src="/images/amenagement-placard-etageres-1.jpg" alt="Shelves installed in the alcove"></p>

<h2>Organization and Storage</h2>
<p>To efficiently organize my small electronic components, screws, nuts, and other accessories, I placed several blue drawer storage units on the shelves. Each unit contains 24 transparent plastic drawers, organized in 4 rows of 6 drawers.</p>
<p>The drawers are labeled to facilitate quick identification of contents. These storage units allow everything to be kept organized and easily accessible.</p>
<p><img src="/images/amenagement-placard-organisation-1.jpg" alt="Blue storage units with organized drawers"></p>

<h2>Final Result</h2>
<p>The closet is now completely organized and set up. The space is used optimally with multiple shelf levels allowing storage of a large quantity of objects while keeping everything accessible and well-organized.</p>
<p>This organization offers several advantages:</p>
<ul>
<li>Space saving thanks to vertical use of the alcove</li>
<li>Clear and systematic organization of components</li>
<li>Easy access to all stored items</li>
<li>Clean and functional aesthetics</li>
</ul>
<p><img src="/images/amenagement-placard-final-1.jpg" alt="Final result - Organized and functional closet"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AmenagementPlacardPieceBureau',
  props: {
    locale: {
      type: String as () => 'fr' | 'en',
      required: true
    }
  },
  setup(props) {
    const content = computed(() => {
      return getContent(props.locale)
    })
    return { content }
  },
  template: '<div v-html="content.html"></div>'
})
</script>

<template>
  <div v-html="content.html"></div>
</template>
