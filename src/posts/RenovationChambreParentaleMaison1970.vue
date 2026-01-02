<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'renovation-chambre-parentale-maison-1970',
  date: '2024-07-06',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Rénovation de la chambre parentale - Série rénovation #8',
  description: 'Rénovation complète de la chambre parentale de la maison des années 1970, incluant la démolition, l\'agrandissement pour créer une salle d\'eau et un dressing, l\'installation des réseaux, la construction des nouveaux espaces en rails métalliques et plaques BA13, le carrelage, et les finitions.',
  html: `<h2>Introduction</h2>
<p>Après avoir rénové le salon dans <a href="/posts/renovation-salon-maison-1970">le septième article de cette série</a>, il était temps de s'attaquer à la rénovation complète de la chambre parentale. Cette chambre est la plus grande de la maison et représentait un défi majeur : l'agrandir pour créer une salle d'eau privative et un dressing intégré. Cette transformation majeure impliquait une démolition importante, la reconstruction de nouveaux espaces avec une ossature métallique et des plaques BA13, ainsi que tous les travaux de finition nécessaires.</p>

<h2>Démolition</h2>
<p>La chambre parentale conservait encore ses finitions d'origine des années 1970. Les murs étaient recouverts de papier peint, notamment un mur violet qui nécessitait un détapissage complet. Le sol était recouvert d'un parquet qui avait vieilli et qui ne correspondait plus à nos attentes. Un placard intégré occupait une partie de la chambre et devait être démonté pour libérer l'espace.</p>
<p>La première étape a consisté à démolir l'existant : détapisser le mur violet, retirer le parquet pour exposer le sol en béton, démonter le placard de la chambre. Pour agrandir la chambre et créer les nouveaux espaces, il était également nécessaire de casser le mur donnant sur les anciens WC. Cette démolition partielle a permis de libérer l'espace nécessaire pour la future salle d'eau et le dressing.</p>
<p><img src="/images/renovation-chambre-parentale-etat-initial-1.jpg" alt="État initial de la chambre parentale"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-1.jpg" alt="Détapissage du mur violet"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-2.jpg" alt="Retrait du parquet"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-3.jpg" alt="Démontage du placard"></p>
<p><img src="/images/renovation-chambre-parentale-mur-wc-1.jpg" alt="Démolition du mur vers les anciens WC"></p>
<p><img src="/images/renovation-chambre-parentale-mur-demoli-1.jpg" alt="Mur partiellement démoli avec briques apparentes"></p>

<h2>Installation des réseaux</h2>
<p>L'installation des réseaux de plomberie et d'électricité a été planifiée avec précision pour chaque équipement futur. J'ai installé les conduits électriques dans les murs et dans les combles, avec des boîtes de dérivation aux emplacements prévus. La plomberie a été installée avec des tuyaux PER, cuivre et PVC pour alimenter la future salle d'eau et les équipements sanitaires.</p>
<p><img src="/images/renovation-chambre-parentale-plomberie-1.jpg" alt="Installation de la plomberie"></p>
<p><img src="/images/renovation-chambre-parentale-electricite-1.jpg" alt="Installation électrique avec conduits"></p>
<p><img src="/images/renovation-chambre-parentale-preparation-electrique-1.jpg" alt="Préparations électriques dans les murs"></p>
<p><img src="/images/renovation-chambre-parentale-tuyaux-1.jpg" alt="Tuyaux de plomberie verticaux"></p>

<h2>Construction des nouveaux espaces</h2>
<p>La construction des nouveaux espaces a été réalisée avec une ossature métallique (rails et montants) pour créer la structure des nouvelles cloisons. J'ai ensuite installé des plaques BA13 standard pour les murs de la chambre et des plaques BA13 vertes (résistantes à l'humidité) pour la salle d'eau. Les plaques BA13 HYDRO+ ont été utilisées pour les zones humides.</p>
<p><img src="/images/renovation-chambre-parentale-ossature-1.jpg" alt="Installation de l'ossature métallique"></p>
<p><img src="/images/renovation-chambre-parentale-placo-1.jpg" alt="Installation des plaques BA13 standard"></p>
<p><img src="/images/renovation-chambre-parentale-placo-2.jpg" alt="Installation des plaques BA13 vertes"></p>
<p><img src="/images/renovation-chambre-parentale-placo-hydro-1.jpg" alt="Plaques BA13 HYDRO+ vertes"></p>

<h2>Salle d'eau</h2>
<p>La création de la salle d'eau parentale a été une étape majeure de cette rénovation. J'ai commencé par installer l'isolation (isOver SAINT-GOBAIN) dans la niche douche, puis j'ai installé une membrane d'étanchéité grise sur le sol pour assurer l'étanchéité de la zone humide. Un drain linéaire turquoise a été installé pour évacuer l'eau de la douche.</p>
<p>L'installation de la plomberie a nécessité la pose de tuyaux PVC gris pour les évacuations, de tuyaux PER blancs pour l'alimentation en eau, et de tuyaux en cuivre pour certaines connexions. J'ai choisi d'installer un WC suspendu GROHE pour un rendu moderne et un gain d'espace.</p>
<p>Le carrelage a été réalisé avec des carreaux beige/gris de grande taille pour les murs et le sol, créant un rendu moderne et épuré. Pour la zone WC et le lavabo, j'ai choisi un carrelage décoratif en chevron avec de petits carreaux blancs, apportant une touche d'élégance et de contraste.</p>
<p>Les équipements ont ensuite été installés : robinetterie de douche avec mitigeur thermostatique, pomme de douche pluie et douchette, lavabo en coin avec comptoir blanc et évier ovale, sèche-serviettes électrique blanc, et enfin une porte coulissante en bois avec verre dépoli pour séparer la salle d'eau de la chambre.</p>
<p><img src="/images/renovation-chambre-parentale-sdb-construction-1.jpg" alt="Salle d'eau en construction avec BA13 vertes"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-isolation-1.jpg" alt="Isolation de la niche douche"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-membrane-1.jpg" alt="Installation de la membrane d'étanchéité"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-drain-1.jpg" alt="Installation du drain linéaire"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-plomberie-1.jpg" alt="Installation de la plomberie de la salle d'eau"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-wc-installation-1.jpg" alt="Installation du WC suspendu GROHE"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-carrelage-1.jpg" alt="Carrelage en cours avec cales de nivellement"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-carrelage-chevron-1.jpg" alt="Carrelage décoratif en chevron"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-robinetterie-1.jpg" alt="Installation de la robinetterie de douche"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-douche-final-1.jpg" alt="Douche terminée"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-lavabo-final-1.jpg" alt="Lavabo en coin terminé"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-seche-serviettes-1.jpg" alt="Sèche-serviettes électrique installé"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-porte-1.jpg" alt="Porte coulissante en bois avec verre dépoli"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-wc-final-1.jpg" alt="WC terminés avec carrelage chevron"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-final-1.jpg" alt="Salle d'eau terminée complète"></p>

<h2>Dressing</h2>
<p>La création du dressing a été réalisée avec des étagères en bois installées avec précision à l'aide d'un laser niveau. Les tuyaux de plomberie ont été intégrés dans le dressing pour alimenter la salle d'eau adjacente. La construction a été progressive, avec l'installation des étagères et des supports, puis l'aménagement des rangements.</p>
<p>Le dressing final est un placard intégré moderne avec des étagères pour le rangement, une penderie avec barre de suspension, et des tiroirs pour l'organisation. Une penderie avec portes coulissantes en bois a également été installée dans la chambre, apportant une touche chaleureuse qui s'intègre parfaitement à l'ensemble de la décoration.</p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-1.jpg" alt="Installation des étagères avec laser niveau"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-2.jpg" alt="Construction du dressing en cours"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-final-1.jpg" alt="Dressing final terminé"></p>
<p><img src="/images/renovation-chambre-parentale-penderie-1.jpg" alt="Penderie avec portes coulissantes en bois"></p>

<h2>Sol et finitions</h2>
<p>Le sol de la chambre a été préparé avec des panneaux d'isolation verts (sous-couche) pour améliorer l'isolation thermique et phonique. Le plancher en laminate/parquet a ensuite été installé avec les outils appropriés, et les plinthes ont été fixées.</p>
<p>Les finitions ont consisté à appliquer l'enduit de rebouchage sur les murs pour masquer les vis et les joints entre les plaques BA13. Les portes coulissantes en bois ont été installées, et une porte avec verre dépoli à quatre panneaux a été posée. Les murs ont été peints en blanc pour créer un espace lumineux et moderne.</p>
<p><img src="/images/renovation-chambre-parentale-sol-isolation-1.jpg" alt="Panneaux d'isolation verts"></p>
<p><img src="/images/renovation-chambre-parentale-sol-installation-1.jpg" alt="Installation du plancher en cours"></p>
<p><img src="/images/renovation-chambre-parentale-sol-final-1.jpg" alt="Plancher terminé"></p>
<p><img src="/images/renovation-chambre-parentale-enduit-1.jpg" alt="Application de l'enduit de rebouchage"></p>
<p><img src="/images/renovation-chambre-parentale-portes-1.jpg" alt="Portes coulissantes installées"></p>
<p><img src="/images/renovation-chambre-parentale-porte-verre-1.jpg" alt="Porte avec verre dépoli"></p>
<p><img src="/images/renovation-chambre-parentale-fenetre-1.jpg" alt="Fenêtre et vue sur le jardin"></p>

<h2>Résultat final</h2>
<p>La rénovation complète de la chambre parentale est maintenant terminée. Le résultat est un espace fonctionnel, moderne et esthétique qui combine élégance et praticité. La chambre agrandie offre maintenant une salle d'eau privative complète avec douche, WC suspendu et lavabo, ainsi qu'un dressing intégré spacieux. Le plancher clair apporte une touche de chaleur à l'ensemble, et la grande fenêtre offre une vue magnifique sur le jardin.</p>
<p><img src="/images/renovation-chambre-parentale-final-1.jpg" alt="Chambre parentale presque terminée"></p>
<p><img src="/images/renovation-chambre-parentale-final-2.jpg" alt="Détails finaux avec radiateur monté"></p>

<h2>Conclusion</h2>
<p>La rénovation complète de la chambre parentale est maintenant terminée. Cette étape majeure du projet a nécessité de nombreuses compétences techniques et une planification minutieuse, de la démolition initiale aux finitions finales. Le résultat est un espace moderne, fonctionnel et esthétique qui répond parfaitement à nos besoins.</p>
<p>Ce projet m'a permis d'apprendre énormément sur l'agrandissement d'une pièce, la création de nouveaux espaces avec ossature métallique et plaques BA13, l'installation complète d'une salle d'eau avec tous ses équipements, et la construction d'un dressing intégré. La chambre parentale est maintenant un espace de vie agréable et confortable, parfait pour se détendre et profiter de tous les équipements modernes.</p>`
}

const englishContent: PostContent = {
  title: 'Parental Bedroom Renovation - Renovation Series #8',
  description: 'Complete renovation of the parental bedroom of the 1970s house, including demolition, expansion to create a water room and dressing room, network installation, construction of new spaces with metal rails and BA13 boards, tiling, and finishing work.',
  html: `<h2>Introduction</h2>
<p>After renovating the living room in <a href="/en/posts/renovation-salon-maison-1970">the seventh article of this series</a>, it was time to tackle the complete renovation of the parental bedroom. This bedroom is the largest in the house and represented a major challenge: expanding it to create a private water room and an integrated dressing room. This major transformation involved significant demolition, reconstruction of new spaces with a metal framework and BA13 boards, as well as all necessary finishing work.</p>

<h2>Demolition</h2>
<p>The parental bedroom still retained its original 1970s finishes. The walls were covered with wallpaper, including a purple wall that required complete stripping. The floor was covered with parquet that had aged and no longer met our expectations. A built-in closet occupied part of the bedroom and had to be dismantled to free up space.</p>
<p>The first step was to demolish the existing elements: strip the purple wall, remove the parquet to expose the concrete floor, dismantle the bedroom closet. To expand the bedroom and create the new spaces, it was also necessary to break down the wall leading to the old WC. This partial demolition freed up the space needed for the future water room and dressing room.</p>
<p><img src="/images/renovation-chambre-parentale-etat-initial-1.jpg" alt="Initial state of the parental bedroom"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-1.jpg" alt="Stripping the purple wall"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-2.jpg" alt="Removing the parquet"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-3.jpg" alt="Dismantling the closet"></p>
<p><img src="/images/renovation-chambre-parentale-mur-wc-1.jpg" alt="Demolition of the wall to the old WC"></p>
<p><img src="/images/renovation-chambre-parentale-mur-demoli-1.jpg" alt="Partially demolished wall with exposed bricks"></p>

<h2>Network Installation</h2>
<p>The installation of plumbing and electrical networks was planned precisely for each future piece of equipment. I installed electrical conduits in the walls and in the attic, with junction boxes at the planned locations. Plumbing was installed with PER, copper, and PVC pipes to supply the future water room and sanitary fixtures.</p>
<p><img src="/images/renovation-chambre-parentale-plomberie-1.jpg" alt="Plumbing installation"></p>
<p><img src="/images/renovation-chambre-parentale-electricite-1.jpg" alt="Electrical installation with conduits"></p>
<p><img src="/images/renovation-chambre-parentale-preparation-electrique-1.jpg" alt="Electrical preparations in walls"></p>
<p><img src="/images/renovation-chambre-parentale-tuyaux-1.jpg" alt="Vertical plumbing pipes"></p>

<h2>Construction of New Spaces</h2>
<p>The construction of new spaces was carried out with a metal framework (rails and studs) to create the structure of the new partitions. I then installed standard BA13 boards for the bedroom walls and green BA13 boards (moisture-resistant) for the water room. HYDRO+ BA13 boards were used for wet areas.</p>
<p><img src="/images/renovation-chambre-parentale-ossature-1.jpg" alt="Metal framework installation"></p>
<p><img src="/images/renovation-chambre-parentale-placo-1.jpg" alt="Standard BA13 board installation"></p>
<p><img src="/images/renovation-chambre-parentale-placo-2.jpg" alt="Green BA13 board installation"></p>
<p><img src="/images/renovation-chambre-parentale-placo-hydro-1.jpg" alt="Green HYDRO+ BA13 boards"></p>

<h2>Water Room</h2>
<p>Creating the parental water room was a major step in this renovation. I started by installing insulation (isOver SAINT-GOBAIN) in the shower niche, then installed a grey waterproofing membrane on the floor to ensure the wet area's waterproofing. A turquoise linear drain was installed to drain the shower water.</p>
<p>Installing the plumbing required laying grey PVC pipes for drains, white PER pipes for water supply, and copper pipes for some connections. I chose to install a GROHE wall-hung toilet for a modern look and space savings.</p>
<p>The tiling was done with large beige/grey tiles for the walls and floor, creating a modern and clean look. For the WC area and sink, I chose decorative herringbone tiling with small white tiles, adding an elegant and contrasting touch.</p>
<p>The fixtures were then installed: shower fixtures with thermostatic mixer, rain shower head and handheld shower, corner sink with white countertop and oval basin, white electric towel warmer, and finally a wooden sliding door with frosted glass to separate the water room from the bedroom.</p>
<p><img src="/images/renovation-chambre-parentale-sdb-construction-1.jpg" alt="Water room under construction with green BA13"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-isolation-1.jpg" alt="Shower niche insulation"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-membrane-1.jpg" alt="Waterproofing membrane installation"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-drain-1.jpg" alt="Linear drain installation"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-plomberie-1.jpg" alt="Water room plumbing installation"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-wc-installation-1.jpg" alt="GROHE wall-hung toilet installation"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-carrelage-1.jpg" alt="Tiling in progress with leveling spacers"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-carrelage-chevron-1.jpg" alt="Decorative herringbone tiling"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-robinetterie-1.jpg" alt="Shower fixture installation"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-douche-final-1.jpg" alt="Completed shower"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-lavabo-final-1.jpg" alt="Completed corner sink"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-seche-serviettes-1.jpg" alt="Electric towel warmer installed"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-porte-1.jpg" alt="Wooden sliding door with frosted glass"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-wc-final-1.jpg" alt="Completed WC with herringbone tiling"></p>
<p><img src="/images/renovation-chambre-parentale-sdb-final-1.jpg" alt="Complete finished water room"></p>

<h2>Dressing Room</h2>
<p>Creating the dressing room was done with wooden shelves installed precisely using a laser level. Plumbing pipes were integrated into the dressing room to supply the adjacent water room. Construction was progressive, with shelf and support installation, then storage organization.</p>
<p>The final dressing room is a modern built-in closet with shelves for storage, a wardrobe with hanging rod, and drawers for organization. A wardrobe with wooden sliding doors was also installed in the bedroom, bringing a warm touch that integrates perfectly with the overall decoration.</p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-1.jpg" alt="Shelf installation with laser level"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-2.jpg" alt="Dressing room construction in progress"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-final-1.jpg" alt="Final completed dressing room"></p>
<p><img src="/images/renovation-chambre-parentale-penderie-1.jpg" alt="Wardrobe with wooden sliding doors"></p>

<h2>Floor and Finishing</h2>
<p>The bedroom floor was prepared with green insulation panels (underlayment) to improve thermal and acoustic insulation. The laminate/parquet flooring was then installed with appropriate tools, and baseboards were secured.</p>
<p>Finishing involved applying joint compound to the walls to hide screws and joints between BA13 boards. Wooden sliding doors were installed, and a door with four frosted glass panels was installed. The walls were painted white to create a bright and modern space.</p>
<p><img src="/images/renovation-chambre-parentale-sol-isolation-1.jpg" alt="Green insulation panels"></p>
<p><img src="/images/renovation-chambre-parentale-sol-installation-1.jpg" alt="Flooring installation in progress"></p>
<p><img src="/images/renovation-chambre-parentale-sol-final-1.jpg" alt="Completed flooring"></p>
<p><img src="/images/renovation-chambre-parentale-enduit-1.jpg" alt="Joint compound application"></p>
<p><img src="/images/renovation-chambre-parentale-portes-1.jpg" alt="Sliding doors installed"></p>
<p><img src="/images/renovation-chambre-parentale-porte-verre-1.jpg" alt="Door with frosted glass"></p>
<p><img src="/images/renovation-chambre-parentale-fenetre-1.jpg" alt="Window and garden view"></p>

<h2>Final Result</h2>
<p>The complete parental bedroom renovation is now finished. The result is a functional, modern, and aesthetic space that combines elegance and practicality. The expanded bedroom now offers a complete private water room with shower, wall-hung toilet, and sink, as well as a spacious integrated dressing room. The light flooring adds a warm touch to the whole, and the large window offers a magnificent view of the garden.</p>
<p><img src="/images/renovation-chambre-parentale-final-1.jpg" alt="Nearly completed parental bedroom"></p>
<p><img src="/images/renovation-chambre-parentale-final-2.jpg" alt="Final details with mounted radiator"></p>

<h2>Conclusion</h2>
<p>The complete parental bedroom renovation is now finished. This major step in the project required many technical skills and meticulous planning, from the initial demolition to the final finishes. The result is a modern, functional, and aesthetic space that perfectly meets our needs.</p>
<p>This project allowed me to learn a great deal about expanding a room, creating new spaces with metal framework and BA13 boards, complete water room installation with all its fixtures, and building an integrated dressing room. The parental bedroom is now a pleasant and comfortable living space, perfect for relaxing and enjoying all modern amenities.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RenovationChambreParentaleMaison1970',
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
