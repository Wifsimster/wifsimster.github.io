<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'renovation-salle-de-bain-maison-1970',
  date: '2020-09-24',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Rénovation complète de la salle de bain - Série rénovation #2',
  description: 'Rénovation totale de la salle de bain de la maison des années 1970, de la démolition à la finition.',
  html: `<h2>Introduction</h2>
<p>Après avoir présenté la maison dans le premier article de cette série, il est temps de se pencher sur la rénovation de la salle de bain. Vous vous souvenez peut-être de cette salle de bain avec ses carreaux bruns des années 1970 ? Eh bien, c'est parti pour une rénovation complète, de la chape à la finition !</p>
<p>Ce projet m'a permis d'apprendre énormément : plomberie, béton, placo, électricité... Mais surtout, j'ai découvert que toute la plomberie était encastrée dans le sol en béton, ce que je n'avais pas anticipé. En retirant les carreaux du sol, j'ai malheureusement endommagé plusieurs tuyaux, ce qui a finalement conduit à la rénovation complète de la plomberie de toute la maison.</p>

<h2>Le défi</h2>
<p>La salle de bain nécessitait une rénovation complète. Tout était à refaire : sol, murs, plomberie, électricité, finitions. Un projet ambitieux qui allait m'apprendre beaucoup de choses.</p>

<h2>Phase de démolition</h2>
<p>La première étape consistait à démolir l'existant. J'ai retiré les anciens carreaux bruns des années 1970, les finitions et exposé la structure sous-jacente. C'est à ce moment-là que j'ai commencé à comprendre l'ampleur du travail à réaliser.</p>
<p><img src="/images/renovation-salle-bain-demolition-1.jpg" alt="Sol exposé avec restes de colle à carrelage"></p>
<p><img src="/images/renovation-salle-bain-demolition-2.jpg" alt="Murs dénudés montrant la brique"></p>
<p><img src="/images/renovation-salle-bain-demolition-3.jpg" alt="Plomberie exposée dans le sol en béton"></p>

<h2>La surprise de la plomberie</h2>
<p>En retirant les carreaux du sol, j'ai fait une découverte inattendue : toute la plomberie était encastrée dans le sol en béton. Je n'avais pas anticipé cela, et en utilisant des outils pour retirer les carreaux, j'ai malheureusement endommagé plusieurs tuyaux.</p>
<p>Cette découverte a changé complètement l'ampleur du projet. Au lieu de simplement rénover la plomberie de la salle de bain, j'ai dû rénover toute la plomberie de la maison. Un défi supplémentaire, mais aussi une opportunité de tout refaire correctement.</p>
<p><img src="/images/renovation-salle-bain-plomberie-decouverte-1.jpg" alt="Tuyaux dans le sol en béton"></p>
<p><img src="/images/renovation-salle-bain-plomberie-decouverte-2.jpg" alt="Tuyaux endommagés lors du retrait des carreaux"></p>

<h2>Installation du placo</h2>
<p>J'ai commencé par installer le placo au plafond. Le plafond étant un plancher hourdis, j'ai installé la structure en rails pour la placo avec des suspentes directement dans les marmites de l'hourdis. J'ai ensuite installé des panneaux de placo hydrofuges (verts) pour les murs. J'ai créé l'encadrement de la baignoire et effectué le travail de jointoiement.</p>
<p><img src="/images/renovation-salle-bain-placo-plafond-1.jpg" alt="Plafond avec placo vert et boîtes électriques"></p>
<p><img src="/images/renovation-salle-bain-placo-1.jpg" alt="Panneaux de placo verts avec enduit de jointoiement"></p>
<p><img src="/images/renovation-salle-bain-placo-2.jpg" alt="Installation du placo avec joints visibles"></p>
<p><img src="/images/renovation-salle-bain-placo-3.jpg" alt="Encadrement de la baignoire avec placo"></p>

<h2>Installation de la plomberie</h2>
<p>Cette fois, contrairement à l'ancienne installation où toute la plomberie était dans le sol en béton, j'ai installé un nouveau système de plomberie avec des tuyaux multicouches qui arrivent depuis le plafond. J'ai également installé le système d'évacuation.</p>
<p>Le chauffe-eau sanitaire étant très éloigné, situé près du garage, j'ai directement ajouté un cumulus dans la salle de bain pour avoir de l'eau chaude directement disponible. Cela permet d'éviter les longues attentes et les pertes d'eau chaude dans les tuyaux.</p>
<p><img src="/images/renovation-salle-bain-plomberie-installation-1.jpg" alt="Nouvelle installation de plomberie avec tuyaux PVC"></p>
<p><img src="/images/renovation-salle-bain-plomberie-installation-2.jpg" alt="Tuyaux de plomberie fixés aux murs avec clips"></p>
<p><img src="/images/renovation-salle-bain-plomberie-installation-3.jpg" alt="Plomberie d'angle avec plusieurs tuyaux et raccords"></p>

<h2>Chape</h2>
<p>Une fois la plomberie installée, j'ai préparé le sol pour la nouvelle chape. J'ai installé un treillis métallique de renforcement et préparé <a href="https://www.espace-aubade.fr/blog/carrelage/tout-savoir-sur-la-chape-maigre-pour-carrelage.html" target="_blank" rel="noopener noreferrer">une chape maigre</a>.</p>
<p><img src="/images/renovation-salle-bain-chappe-preparation-1.jpg" alt="Treillis métallique de renforcement sur le sol"></p>
<p><img src="/images/renovation-salle-bain-chappe-preparation-2.jpg" alt="Base de sable/gravier avec treillis"></p>
<p><img src="/images/renovation-salle-bain-chappe-preparation-3.jpg" alt="Bétonnière et matériaux (sacs MAPEI)"></p>
<p>J'ai ensuite coulé la chape maigre. C'était un travail délicat, car il fallait travailler autour de la plomberie et de l'électricité tout en garantissant un sol parfaitement nivelé. J'ai ensuite coulé un ragréage pour obtenir une surface parfaitement plane.</p>
<p><img src="/images/renovation-salle-bain-chappe-application-1.jpg" alt="Chape en cours de coulage et de nivellement"></p>
<p><img src="/images/renovation-salle-bain-chappe-application-2.jpg" alt="Chape fraîche avec travail à la truelle"></p>
<p><img src="/images/renovation-salle-bain-chappe-application-3.jpg" alt="Chape avec baignoire positionnée"></p>

<h2>Travaux électriques</h2>
<p>J'ai installé les gaines électriques, les boîtes de dérivation et le câblage pour l'éclairage et les prises. J'ai également installé un système d'éclairage LED pour le meuble vasque.</p>
<p><img src="/images/renovation-salle-bain-electricite-1.jpg" alt="Gaines électriques sur le sol et les murs"></p>
<p><img src="/images/renovation-salle-bain-electricite-2.jpg" alt="Boîte électrique avec marquage 'Cumulus'"></p>
<p><img src="/images/renovation-salle-bain-electricite-3.jpg" alt="Plusieurs gaines fixées avec clips jaunes"></p>
<p><img src="/images/renovation-salle-bain-electricite-rough-in-1.jpg" alt="Mur carrelé avec boîtes électriques et câblage exposés"></p>
<p><img src="/images/renovation-salle-bain-electricite-eclairage-1.jpg" alt="Installation de l'éclairage LED du meuble vasque avec outils"></p>
<p><img src="/images/renovation-salle-bain-electricite-eclairage-2.jpg" alt="Zone du meuble vasque avec bande LED installée"></p>

<h2>Installation de la baignoire</h2>
<p>J'ai positionné la baignoire, créé un encadrement en blocs de béton, installé la bordure blanche et connecté la plomberie.</p>
<p><img src="/images/renovation-salle-bain-baignoire-1.jpg" alt="Baignoire sur supports avec protection"></p>
<p><img src="/images/renovation-salle-bain-baignoire-2.jpg" alt="Baignoire avec tuyaux en dessous"></p>
<p><img src="/images/renovation-salle-bain-baignoire-3.jpg" alt="Baignoire dans l'encadrement en placo"></p>
<p><img src="/images/renovation-salle-bain-baignoire-4.jpg" alt="Baignoire avec bordure blanche installée"></p>
<p><img src="/images/renovation-salle-bain-baignoire-5.jpg" alt="Baignoire dans niche avec encadrement en blocs de béton"></p>
<p><img src="/images/renovation-salle-bain-baignoire-6.jpg" alt="Installation de la baignoire avec outils (niveau à bulle, aspirateur)"></p>
<p><img src="/images/renovation-salle-bain-baignoire-7.jpg" alt="Baignoire sur sol de chape fraîche"></p>

<h2>Travaux de carrelage</h2>
<p>J'ai carrelé le sol avec de grands carreaux gris et les murs avec des carreaux rectangulaires blancs. J'ai utilisé un système de nivellement de carrelage (clips et cales) pour garantir un résultat parfait. J'ai également fait des choix de design avec des carreaux à effet bois et à effet pierre.</p>
<p><img src="/images/renovation-salle-bain-carrelage-sol-1.jpg" alt="Carrelage du sol en cours avec cales de nivellement"></p>
<p><img src="/images/renovation-salle-bain-carrelage-mur-1.jpg" alt="Carrelage des murs avec clips de nivellement noirs et violets"></p>
<p><img src="/images/renovation-salle-bain-carrelage-mur-2.jpg" alt="Processus de carrelage avec carreaux à effet bois et à effet pierre"></p>
<p><img src="/images/renovation-salle-bain-carrelage-mur-3.jpg" alt="Carrelage des murs autour d'une porte avec système de nivellement"></p>
<p><img src="/images/renovation-salle-bain-carrelage-complete-1.jpg" alt="Carrelage des murs terminé avec raccords électriques et de plomberie visibles"></p>

<h2>Meubles et finitions</h2>
<p>J'ai installé les meubles vasque (OSKAR/IKEA), le double meuble vasque avec vasques sur colonne, les robinets et les équipements, l'éclairage LED pour le meuble vasque, l'équipement de douche et la machine à laver dans l'alcôve.</p>
<p><img src="/images/renovation-salle-bain-meuble-1.jpg" alt="Assemblage de meubles OSKAR/IKEA (installation du meuble vasque)"></p>
<p><img src="/images/renovation-salle-bain-lavabo-installation-1.jpg" alt="Installation du lavabo et du robinet sur plan de travail à effet bois"></p>
<p><img src="/images/renovation-salle-bain-lavabo-complete-1.jpg" alt="Double meuble vasque terminé avec vasques sur colonne et robinets"></p>
<p><img src="/images/renovation-salle-bain-douche-1.jpg" alt="Installation de l'équipement de douche avec carreaux à effet bois"></p>
<p><img src="/images/renovation-salle-bain-lave-linge-1.jpg" alt="Machine à laver Samsung installée dans alcôve"></p>
<p><img src="/images/renovation-salle-bain-lave-linge-2.jpg" alt="Zone de la machine à laver avec table à langer et rangement"></p>

<h2>Résultat final</h2>
<p>La transformation de la salle de bain est maintenant terminée. Le design moderne avec des carreaux à effet bois, la disposition fonctionnelle avec baignoire, meuble vasque et espace buanderie, le double meuble vasque avec miroir à éclairage LED intégré, l'espace buanderie intégré avec machine à laver et les solutions de rangement et de séchage des serviettes créent un espace à la fois esthétique et pratique.</p>
<p><img src="/images/renovation-salle-bain-final-1.jpg" alt="Vue de la salle de bain terminée avec baignoire, carreaux à effet bois et sèche-serviettes"></p>
<p><img src="/images/renovation-salle-bain-final-2.jpg" alt="Vue complète de la salle de bain montrant baignoire, machine à laver et sèche-serviettes"></p>
<p><img src="/images/renovation-salle-bain-final-3.jpg" alt="Vue d'ensemble de la salle de bain avec fenêtre, sèche-serviettes et plan de travail du meuble vasque"></p>
<p><img src="/images/renovation-salle-bain-final-4.jpg" alt="Zone de la baignoire terminée avec carreaux à effet bois et équipement de douche"></p>
<p><img src="/images/renovation-salle-bain-final-5.jpg" alt="Double meuble vasque avec miroir à éclairage LED et vasques sur colonne"></p>
<p><img src="/images/renovation-salle-bain-final-6.jpg" alt="Zone du meuble vasque terminée avec lavabos, robinets et éclairage LED"></p>
<p><img src="/images/renovation-salle-bain-final-7.jpg" alt="Détail du meuble vasque montrant la réflexion du miroir et l'éclairage intégré"></p>
<p><img src="/images/renovation-salle-bain-final-8.jpg" alt="Vue d'ensemble complète de la salle de bain depuis un angle élevé montrant toutes les fonctionnalités"></p>
<p><img src="/images/renovation-salle-bain-final-9.jpg" alt="Vue finale de la salle de bain avec baignoire, meuble vasque, machine à laver et sèche-serviettes"></p>

<h2>Ce que j'ai appris</h2>
<p>Ce projet m'a permis d'apprendre énormément de nouvelles compétences : la plomberie, le travail du béton, l'installation de placo, l'électricité... J'ai fait face à de nombreux défis, notamment la découverte inattendue de la plomberie dans le sol en béton, ce qui a considérablement élargi la portée du projet. Mais chaque défi a été une opportunité d'apprendre et de trouver des solutions.</p>
<p>L'expansion inattendue du projet (plomberie de toute la maison) m'a enseigné l'importance de la flexibilité et de l'adaptation lors d'une rénovation. Parfois, les meilleurs projets sont ceux qui vous surprennent et vous poussent à aller plus loin que prévu.</p>

<h2>Conclusion</h2>
<p>La rénovation de la salle de bain est maintenant terminée. C'était un projet ambitieux qui m'a beaucoup appris et qui a transformé complètement cet espace. La salle de bain est maintenant moderne, fonctionnelle et agréable à utiliser.</p>
<p>Des vidéos timelapse seront ajoutées ultérieurement pour chaque étape majeure du projet, permettant de voir l'évolution du chantier de manière accélérée.</p>`
}

const englishContent: PostContent = {
  title: 'Complete Bathroom Renovation - Renovation Series #2',
  description: 'Total renovation of the 1970s house bathroom, from demolition to finishing. Unexpected discovery: all plumbing was in the concrete floor, requiring complete renovation of the house plumbing.',
  html: `<h2>Introduction</h2>
<p>After presenting the house in the first article of this series, it's time to tackle the bathroom renovation. You may remember that bathroom with its brown 1970s tiles? Well, here we go for a complete renovation, from screed to finishing!</p>
<p>This project allowed me to learn a great deal: plumbing, concrete, drywall, electricity... But most importantly, I discovered that all the plumbing was embedded in the concrete floor, which I hadn't anticipated. When removing the floor tiles, I unfortunately damaged several pipes, which ultimately led to the complete renovation of the entire house's plumbing.</p>

<h2>The Challenge</h2>
<p>The bathroom required a complete renovation. Everything needed to be redone: floor, walls, plumbing, electricity, finishes. An ambitious project that would teach me a lot.</p>

<h2>Demolition Phase</h2>
<p>The first step was to demolish the existing elements. I removed the old brown 1970s tiles, finishes, and exposed the underlying structure. It was at this point that I began to understand the scope of work ahead.</p>
<p><img src="/images/renovation-salle-bain-demolition-1.jpg" alt="Exposed floor with tile adhesive remnants"></p>
<p><img src="/images/renovation-salle-bain-demolition-2.jpg" alt="Stripped walls showing brickwork"></p>
<p><img src="/images/renovation-salle-bain-demolition-3.jpg" alt="Exposed plumbing in concrete floor"></p>

<h2>The Plumbing Surprise</h2>
<p>When removing the floor tiles, I made an unexpected discovery: all the plumbing was embedded in the concrete floor. I hadn't anticipated this, and when using tools to remove the tiles, I unfortunately damaged several pipes.</p>
<p>This discovery completely changed the scope of the project. Instead of simply renovating the bathroom plumbing, I had to renovate the entire house's plumbing. An additional challenge, but also an opportunity to do everything correctly.</p>
<p><img src="/images/renovation-salle-bain-plomberie-decouverte-1.jpg" alt="Pipes in concrete floor"></p>
<p><img src="/images/renovation-salle-bain-plomberie-decouverte-2.jpg" alt="Damaged pipes from tile removal"></p>

<h2>Drywall Installation</h2>
<p>I started by installing the drywall on the ceiling. Since the ceiling is a hollow-core slab, I installed the rail structure for the drywall with hangers directly into the hollow cores of the slab. I then installed moisture-resistant green drywall panels for the walls. I created the bathtub enclosure and performed joint compound work.</p>
<p><img src="/images/renovation-salle-bain-placo-plafond-1.jpg" alt="Ceiling with green drywall and electrical boxes"></p>
<p><img src="/images/renovation-salle-bain-placo-1.jpg" alt="Green drywall panels with joint compound"></p>
<p><img src="/images/renovation-salle-bain-placo-2.jpg" alt="Drywall installation with visible seams"></p>
<p><img src="/images/renovation-salle-bain-placo-3.jpg" alt="Bathtub enclosure with drywall"></p>

<h2>Plumbing Installation</h2>
<p>This time, unlike the old installation where all plumbing was in the concrete floor, I installed a new plumbing system with multilayer pipes arriving from the ceiling. I also installed the drainage system.</p>
<p>Since the sanitary boiler is very far away, located near the garage, I directly added a water heater (cumulus) in the bathroom for direct hot water availability. This avoids long waits and hot water losses in the pipes.</p>
<p><img src="/images/renovation-salle-bain-plomberie-installation-1.jpg" alt="New plumbing installation with PVC pipes"></p>
<p><img src="/images/renovation-salle-bain-plomberie-installation-2.jpg" alt="Plumbing pipes secured to walls with clips"></p>
<p><img src="/images/renovation-salle-bain-plomberie-installation-3.jpg" alt="Corner plumbing with multiple pipes and fittings"></p>

<h2>Screed</h2>
<p>Once the plumbing was installed, I prepared the floor for the new screed. I installed metal reinforcement mesh and prepared the <a href="https://www.espace-aubade.fr/blog/carrelage/tout-savoir-sur-la-chape-maigre-pour-carrelage.html" target="_blank" rel="noopener noreferrer">lean screed</a>.</p>
<p><img src="/images/renovation-salle-bain-chappe-preparation-1.jpg" alt="Metal reinforcement mesh on floor"></p>
<p><img src="/images/renovation-salle-bain-chappe-preparation-2.jpg" alt="Sand/gravel base with mesh"></p>
<p><img src="/images/renovation-salle-bain-chappe-preparation-3.jpg" alt="Cement mixer and materials (MAPEI bags)"></p>
<p>I then poured the lean screed. It was delicate work, as I had to work around plumbing and electrical while ensuring a perfectly level floor. I then poured a self-leveling compound to achieve a perfectly flat surface.</p>
<p><img src="/images/renovation-salle-bain-chappe-application-1.jpg" alt="Screed being laid and leveled"></p>
<p><img src="/images/renovation-salle-bain-chappe-application-2.jpg" alt="Fresh screed with trowel work"></p>
<p><img src="/images/renovation-salle-bain-chappe-application-3.jpg" alt="Screed with bathtub positioned"></p>

<h2>Electrical Work</h2>
<p>I installed electrical conduits, junction boxes, and wiring for lighting and outlets. I also installed an LED lighting system for the vanity.</p>
<p><img src="/images/renovation-salle-bain-electricite-1.jpg" alt="Electrical conduits on floor and walls"></p>
<p><img src="/images/renovation-salle-bain-electricite-2.jpg" alt="Electrical box with 'Cumulus' marking"></p>
<p><img src="/images/renovation-salle-bain-electricite-3.jpg" alt="Multiple conduits secured with yellow clips"></p>
<p><img src="/images/renovation-salle-bain-electricite-rough-in-1.jpg" alt="Tiled wall with exposed electrical boxes and wiring"></p>
<p><img src="/images/renovation-salle-bain-electricite-eclairage-1.jpg" alt="Vanity LED lighting installation with tools"></p>
<p><img src="/images/renovation-salle-bain-electricite-eclairage-2.jpg" alt="Vanity area with LED strip lighting installed"></p>

<h2>Bathtub Installation</h2>
<p>I positioned the bathtub, created a concrete block enclosure, installed the white ledge, and connected the plumbing.</p>
<p><img src="/images/renovation-salle-bain-baignoire-1.jpg" alt="Bathtub on supports with protective covering"></p>
<p><img src="/images/renovation-salle-bain-baignoire-2.jpg" alt="Bathtub with pipes underneath"></p>
<p><img src="/images/renovation-salle-bain-baignoire-3.jpg" alt="Bathtub in drywall enclosure"></p>
<p><img src="/images/renovation-salle-bain-baignoire-4.jpg" alt="Bathtub with white ledge/surround installed"></p>
<p><img src="/images/renovation-salle-bain-baignoire-5.jpg" alt="Bathtub in niche with concrete block enclosure"></p>
<p><img src="/images/renovation-salle-bain-baignoire-6.jpg" alt="Bathtub installation with tools (spirit level, vacuum)"></p>
<p><img src="/images/renovation-salle-bain-baignoire-7.jpg" alt="Bathtub on fresh screed floor"></p>

<h2>Tiling Work</h2>
<p>I tiled the floor with large grey tiles and the walls with white rectangular tiles. I used a tile leveling system (clips and wedges) to ensure a perfect result. I also made design choices with wood-grain and stone-effect tiles.</p>
<p><img src="/images/renovation-salle-bain-carrelage-sol-1.jpg" alt="Floor tiling in progress with leveling wedges"></p>
<p><img src="/images/renovation-salle-bain-carrelage-mur-1.jpg" alt="Wall tiling with black and purple leveling clips"></p>
<p><img src="/images/renovation-salle-bain-carrelage-mur-2.jpg" alt="Tiling process with wood-grain and stone-effect tiles"></p>
<p><img src="/images/renovation-salle-bain-carrelage-mur-3.jpg" alt="Wall tiling around doorway with leveling system"></p>
<p><img src="/images/renovation-salle-bain-carrelage-complete-1.jpg" alt="Completed wall tiling with electrical and plumbing rough-ins visible"></p>

<h2>Cabinets & Finishing</h2>
<p>I installed the vanity cabinets (OSKAR/IKEA), the double vanity with vessel sinks, faucets and fixtures, LED lighting for the vanity, shower fixture, and washing machine in the alcove.</p>
<p><img src="/images/renovation-salle-bain-meuble-1.jpg" alt="OSKAR/IKEA cabinet assembly (vanity installation)"></p>
<p><img src="/images/renovation-salle-bain-lavabo-installation-1.jpg" alt="Sink and faucet installation on wood-grain countertop"></p>
<p><img src="/images/renovation-salle-bain-lavabo-complete-1.jpg" alt="Completed double vanity with vessel sinks and faucets"></p>
<p><img src="/images/renovation-salle-bain-douche-1.jpg" alt="Shower fixture installation with wood-grain tiles"></p>
<p><img src="/images/renovation-salle-bain-lave-linge-1.jpg" alt="Samsung washing machine installed in alcove"></p>
<p><img src="/images/renovation-salle-bain-lave-linge-2.jpg" alt="Washing machine area with changing station and storage"></p>

<h2>Final Result</h2>
<p>The bathroom transformation is now complete. The modern design with wood-grain tiles, the functional layout with bathtub, vanity, and laundry area, the double vanity with integrated LED backlit mirror, the integrated laundry area with washing machine, and towel storage and drying solutions create a space that is both aesthetic and practical.</p>
<p><img src="/images/renovation-salle-bain-final-1.jpg" alt="Completed bathroom view with bathtub, wood-grain tiles, and towel warmer"></p>
<p><img src="/images/renovation-salle-bain-final-2.jpg" alt="Complete bathroom view showing bathtub, washing machine, and towel warmer"></p>
<p><img src="/images/renovation-salle-bain-final-3.jpg" alt="Bathroom overview with window, towel warmer, and vanity counter"></p>
<p><img src="/images/renovation-salle-bain-final-4.jpg" alt="Bathtub area completed with wood-grain tiles and shower fixture"></p>
<p><img src="/images/renovation-salle-bain-final-5.jpg" alt="Double vanity with LED backlit mirror and vessel sinks"></p>
<p><img src="/images/renovation-salle-bain-final-6.jpg" alt="Completed vanity area with sinks, faucets, and LED lighting"></p>
<p><img src="/images/renovation-salle-bain-final-7.jpg" alt="Vanity detail showing mirror reflection and integrated lighting"></p>
<p><img src="/images/renovation-salle-bain-final-8.jpg" alt="Complete bathroom overview from elevated angle showing all features"></p>
<p><img src="/images/renovation-salle-bain-final-9.jpg" alt="Final bathroom view with bathtub, vanity, washing machine, and towel warmer"></p>

<h2>What I Learned</h2>
<p>This project allowed me to learn many new skills: plumbing, concrete work, drywall installation, electricity... I faced many challenges, particularly the unexpected discovery of plumbing in the concrete floor, which significantly expanded the project scope. But each challenge was an opportunity to learn and find solutions.</p>
<p>The unexpected project expansion (entire house plumbing) taught me the importance of flexibility and adaptation during a renovation. Sometimes, the best projects are those that surprise you and push you to go further than expected.</p>

<h2>Conclusion</h2>
<p>The bathroom renovation is now complete. It was an ambitious project that taught me a lot and completely transformed this space. The bathroom is now modern, functional, and pleasant to use.</p>
<p>Timelapse videos will be added later for each major step of the project, allowing you to see the evolution of the construction site in an accelerated manner.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RenovationSalleDeBainMaison1970',
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
