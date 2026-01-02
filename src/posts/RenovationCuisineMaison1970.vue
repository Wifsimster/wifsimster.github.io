<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'renovation-cuisine-maison-1970',
  date: '2021-03-06',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Rénovation de la cuisine - Série rénovation #6',
  description: 'Rénovation complète de la cuisine de la maison des années 1970, de la démolition à la finition finale avec installation des meubles, électroménagers, crédence et éléments décoratifs.',
  html: `<h2>Introduction</h2>
<p>Après avoir rénové la nouvelle entrée dans <a href="/posts/renovation-entree-maison-1970">le cinquième article de cette série</a>, il était temps de s'attaquer à la rénovation complète de la cuisine. Cette étape majeure du projet de rénovation impliquait une transformation totale de l'espace : démolition complète, reconstruction des murs, installation des réseaux électriques et de plomberie, pose du carrelage, installation des meubles et des électroménagers, et enfin les finitions avec la crédence et les éléments décoratifs.</p>
<p>Cette rénovation de la cuisine était essentielle pour créer un espace fonctionnel, moderne et esthétique, qui deviendrait le cœur de la maison. Le projet a nécessité de nombreuses étapes techniques et une planification minutieuse pour chaque élément, des réseaux aux finitions finales.</p>

<h2>L'état initial</h2>
<p>La cuisine conservait encore ses finitions d'origine des années 1970. Les murs étaient partiellement recouverts de petits carreaux de mosaïque verts, et la peinture s'écaillait par endroits, révélant la structure sous-jacente. Le sol était en béton brut, et l'ensemble de l'espace nécessitait une rénovation complète.</p>
<p>Cette démolition initiale a permis de libérer l'espace et de préparer la zone pour tous les travaux de reconstruction à venir.</p>
<p><img src="/images/renovation-cuisine-etat-initial-1.jpg" alt="État initial de la cuisine avec carreaux verts"></p>
<p><img src="/images/renovation-cuisine-etat-initial-2.jpg" alt="Vue de la cuisine avant rénovation"></p>

<h2>Préparation du sol</h2>
<p>Le sol nécessitait une préparation importante avant l'installation du nouveau revêtement. J'ai commencé par nettoyer et niveler le béton existant. Des tranchées ont été creusées dans le sol pour faire passer les conduits de plomberie et d'électricité, permettant ainsi d'alimenter les différents points d'eau et les prises électriques nécessaires pour les électroménagers.</p>
<p>Les conduits ont été installés avec soin, en veillant à respecter les normes et à faciliter la maintenance future. Cette étape est cruciale pour garantir une installation de qualité et éviter les problèmes ultérieurs.</p>
<p><img src="/images/renovation-cuisine-sol-1.jpg" alt="Préparation du sol avec tranchées pour les conduits"></p>
<p><img src="/images/renovation-cuisine-sol-2.jpg" alt="Installation des conduits dans les tranchées"></p>

<h2>Ossature, isolation et placo</h2>
<p>Pour créer une structure solide et isolée, j'ai commencé par l'installation du plafond. Le plafond étant un plancher hourdis, j'ai installé la structure en rails pour le placo avec des suspentes directement dans les marmites de l'hourdis, créant un espace rempli d'isolation thermique. Le plafond a été terminé en premier, avant de procéder aux murs.</p>
<p>Ensuite, j'ai installé une ossature métallique avec des montants et des rails pour les murs, remplie d'isolation thermique pour une excellente performance énergétique. Les panneaux OSB ont été utilisés dans la partie inférieure des murs, sous la fenêtre, pour renforcer la structure et permettre la fixation future des meubles de cuisine.</p>
<p>Pour les murs, j'ai utilisé des panneaux de placo hydrofuge, spécialement conçus pour résister à l'humidité. Les panneaux ont été fixés à l'ossature, puis les joints ont été rebouchés avec de l'enduit et du ruban de joint. Plusieurs couches d'enduit ont été appliquées avant le ponçage final pour obtenir une surface parfaitement lisse.</p>
<p><img src="/images/renovation-cuisine-ossature-1.jpg" alt="Ossature métallique avec isolation Isover"></p>
<p><img src="/images/renovation-cuisine-placo-1.jpg" alt="Installation des panneaux de placo hydrofuge"></p>
<p><img src="/images/renovation-cuisine-placo-2.jpg" alt="Rebouchage des joints"></p>

<h2>Installation de la fenêtre</h2>
<p>Une nouvelle fenêtre a été installée pour remplacer l'ancienne. Cette fenêtre coulissante moderne apporte beaucoup de lumière naturelle dans la cuisine et offre une vue sur le jardin.</p>
<p>La fenêtre a été positionnée de manière à optimiser l'éclairage naturel et à créer un espace agréable pour cuisiner.</p>
<p><img src="/images/renovation-cuisine-fenetre-1.jpg" alt="Installation de la nouvelle fenêtre"></p>
<p><img src="/images/renovation-cuisine-fenetre-2.jpg" alt="Fenêtre installée avec vue sur l'extérieur"></p>

<h2>Installation électrique</h2>
<p>L'installation électrique a été planifiée avec précision pour chaque électroménager. Chaque point a été marqué et étiqueté avec sa hauteur exacte :</p>
<ul>
<li>Hotte à 1,30 m de hauteur</li>
<li>Four à 0,95 m de hauteur</li>
<li>Micro-ondes à 1,20 m de hauteur</li>
<li>Plaques de cuisson à 0,30 m de hauteur</li>
<li>Réfrigérateur à 0,30 m de hauteur</li>
</ul>
<p>Les conduits électriques ont été installés dans l'ossature, avec des boîtes de dérivation aux emplacements prévus.</p>
<p><img src="/images/renovation-cuisine-electricite-1.jpg" alt="Installation électrique avec étiquetage des points"></p>
<p><img src="/images/renovation-cuisine-electricite-2.jpg" alt="Conduits électriques dans l'ossature"></p>

<h2>Installation de la plomberie</h2>
<p>La plomberie a été installée avec des tuyaux PEX, un système moderne et fiable. Les tuyaux d'eau chaude sont marqués d'une bande rouge, et ceux d'eau froide d'une bande bleue, ce qui facilite l'identification et l'installation. Les tuyaux ont été fixés au mur avec des clips jaunes et positionnés précisément sous la fenêtre pour l'emplacement de l'évier.</p>
<p>Cette installation anticipée permet de préparer l'arrivée d'eau pour l'évier et les autres points d'eau nécessaires dans la cuisine.</p>
<p><img src="/images/renovation-cuisine-plomberie-1.jpg" alt="Installation des tuyaux PEX"></p>
<p><img src="/images/renovation-cuisine-plomberie-2.jpg" alt="Détail des tuyaux avec bandes colorées"></p>

<h2>Peinture des murs</h2>
<p>Les murs ont été peints en blanc pour créer un espace lumineux et moderne. J'ai choisi de peindre le mur au-dessus des meubles hauts en bleu foncé (teal), créant ainsi un accent coloré qui apporte de la personnalité à la cuisine. Cette touche de couleur contraste élégamment avec le blanc des meubles et de la crédence.</p>
<p>Les sections inférieures des murs ont été préparées pour recevoir la crédence, tandis que les parties supérieures ont été peintes pour créer un espace cohérent et esthétique.</p>
<p><img src="/images/renovation-cuisine-peinture-1.jpg" alt="Peinture des murs en blanc"></p>
<p><img src="/images/renovation-cuisine-peinture-2.jpg" alt="Mur d'accent bleu foncé"></p>

<h2>Carrelage du sol</h2>
<p>Pour le sol, j'ai choisi de grands carreaux gris clair qui apportent une touche moderne à la cuisine. L'installation a été réalisée avec un système de nivellement professionnel utilisant des clips noirs et des cales violettes et blanches. Ce système garantit une surface parfaitement plane et des joints réguliers.</p>
<p>Les joints ont été réalisés en gris foncé pour créer un contraste élégant avec les carreaux. Un niveau à bulle a été utilisé tout au long de l'installation pour s'assurer de la parfaite horizontalité du sol.</p>
<p><img src="/images/renovation-cuisine-carrelage-1.jpg" alt="Installation du carrelage avec système de nivellement"></p>
<p><img src="/images/renovation-cuisine-carrelage-2.jpg" alt="Détail du système de clips et cales"></p>
<p><img src="/images/renovation-cuisine-carrelage-3.jpg" alt="Sol carrelé terminé"></p>

<h2>Installation des meubles</h2>
<p>Les meubles de cuisine ont été installés en suivant un plan en L. Les meubles bas sont blancs avec un design moderne sans poignées apparentes, créant une esthétique épurée. Les meubles hauts ont été installés au-dessus des meubles bas, et une colonne haute a été positionnée pour accueillir le four et le micro-ondes.</p>
<p>Les meubles sont équipés de pieds réglables noirs qui permettent de les ajuster parfaitement au niveau du sol. Cette installation soigneuse garantit un rendu professionnel et fonctionnel.</p>
<p><img src="/images/renovation-cuisine-meubles-1.jpg" alt="Installation des meubles bas"></p>
<p><img src="/images/renovation-cuisine-meubles-2.jpg" alt="Colonne haute pour four et micro-ondes"></p>
<p><img src="/images/renovation-cuisine-meubles-3.jpg" alt="Meubles hauts installés"></p>

<h2>Installation du plan de travail</h2>
<p>Le plan de travail en stratifié imitation bois clair a été installé en suivant la forme en L de la cuisine. Ce matériau apporte de la chaleur à l'espace et s'harmonise parfaitement avec le blanc des meubles. Des découpes ont été réalisées pour l'évier et les plaques de cuisson, garantissant une intégration parfaite.</p>
<p><img src="/images/renovation-cuisine-plan-travail-1.jpg" alt="Installation du plan de travail"></p>
<p><img src="/images/renovation-cuisine-plan-travail-2.jpg" alt="Plan de travail installé en L"></p>

<h2>Installation des électroménagers</h2>
<p>Les électroménagers ont été installés un par un, en commençant par l'évier noir avec robinet chromé en col de cygne, positionné sous la fenêtre. Les plaques de cuisson à induction noires ont été intégrées dans le plan de travail, et la hotte aspirante en inox (marque Candy) a été installée au-dessus, avec son éclairage intégré.</p>
<p>Le four (marque Beko) a été installé dans la colonne haute, et le micro-ondes (marque Whirlpool) a été placé au-dessus dans une niche ouverte. Tous les appareils ont été correctement branchés aux réseaux électriques préparés précédemment.</p>
<p><img src="/images/renovation-cuisine-electromenagers-1.jpg" alt="Installation de l'évier et du robinet"></p>
<p><img src="/images/renovation-cuisine-electromenagers-2.jpg" alt="Plaques de cuisson et hotte installées"></p>

<h2>Installation de la crédence</h2>
<p>La crédence a été réalisée avec de grands carreaux rectangulaires blancs à effet marbre avec des veines grises. L'installation a été effectuée avec des croisillons rouges pour garantir des joints réguliers. La crédence s'étend du plan de travail jusqu'au bas des meubles hauts, et une section plus haute a été réalisée au-dessus des plaques de cuisson, jusqu'à la hotte.</p>
<p>Plusieurs prises électriques ont été intégrées dans la crédence, avec des prises blanches et noires qui s'harmonisent avec le design. Cette installation soigneuse garantit un rendu professionnel et esthétique.</p>
<p><img src="/images/renovation-cuisine-splashback-1.jpg" alt="Installation de la crédence avec croisillons"></p>
<p><img src="/images/renovation-cuisine-splashback-2.jpg" alt="Crédence terminée avec prises intégrées"></p>

<h2>Éléments extérieurs</h2>
<p>Pour compléter la rénovation, un volet roulant a été installé à l'extérieur de la fenêtre pour protéger la cuisine et réguler la lumière. Une porte vitrée a également été installée pour séparer la cuisine des autres espaces de la maison, créant une transition élégante tout en préservant la luminosité.</p>
<p><img src="/images/renovation-cuisine-volet-1.jpg" alt="Installation du volet roulant"></p>
<p><img src="/images/renovation-cuisine-porte-1.jpg" alt="Porte vitrée installée"></p>

<h2>Résultat final</h2>
<p>La rénovation complète de la cuisine est maintenant terminée. Le résultat est un espace fonctionnel, moderne et esthétique qui combine élégance et praticité. Le mur d'accent bleu foncé apporte une touche de personnalité, tandis que la crédence en marbre et les meubles blancs créent un design épuré et contemporain.</p>
<p>Tous les électroménagers sont en place et fonctionnels, les réseaux sont correctement installés, et l'espace est prêt à être utilisé au quotidien. Cette rénovation a transformé complètement la cuisine, en faisant un espace agréable et moderne qui correspond parfaitement à nos attentes.</p>
<p><img src="/images/renovation-cuisine-final-3.jpg" alt="Vue d'ensemble de la cuisine terminée"></p>
<p><img src="/images/renovation-cuisine-final-4.jpg" alt="Détail de la zone de cuisson"></p>
<p><img src="/images/renovation-cuisine-final-5.jpg" alt="Vue de l'évier et de la fenêtre"></p>
<p><img src="/images/renovation-cuisine-final-6.jpg" alt="Cuisine complète avec tous les éléments"></p>

<h2>Conclusion</h2>
<p>La rénovation complète de la cuisine est maintenant terminée. Cette étape majeure du projet a nécessité de nombreuses compétences techniques et une planification minutieuse, de la démolition initiale aux finitions finales. Le résultat est un espace moderne, fonctionnel et esthétique qui répond parfaitement à nos besoins.</p>
<p>Ce projet m'a permis d'apprendre énormément sur la rénovation complète d'une cuisine, de la gestion des réseaux à l'installation des meubles et des électroménagers. Les choix de design, comme le mur d'accent bleu foncé et la crédence en marbre, apportent une touche de personnalité à l'espace tout en conservant une esthétique moderne et épurée.</p>`
}

const englishContent: PostContent = {
  title: 'Kitchen Renovation - Renovation Series #6',
  description: 'Complete renovation of the 1970s house kitchen, from demolition to final finishing with cabinet installation, appliances, backsplash, and decorative elements.',
  html: `<h2>Introduction</h2>
<p>After renovating the new entry in <a href="/en/posts/renovation-entree-maison-1970">the fifth article of this series</a>, it was time to tackle the complete kitchen renovation. This major step in the renovation project involved a total transformation of the space: complete demolition, wall reconstruction, electrical and plumbing network installation, tiling, cabinet and appliance installation, and finally the finishing touches with the backsplash and decorative elements.</p>
<p>This kitchen renovation was essential to create a functional, modern, and aesthetic space that would become the heart of the house. The project required many technical steps and meticulous planning for each element, from the networks to the final finishes.</p>

<h2>Initial State</h2>
<p>The kitchen still retained its original 1970s finishes. The walls were partially covered with small green mosaic tiles, and the paint was peeling in places, revealing the underlying structure. The floor was raw concrete, and the entire space needed a complete renovation.</p>
<p>This initial demolition freed up the space and prepared the area for all the upcoming reconstruction work.</p>
<p><img src="/images/renovation-cuisine-etat-initial-1.jpg" alt="Initial state of the kitchen with green tiles"></p>
<p><img src="/images/renovation-cuisine-etat-initial-2.jpg" alt="Kitchen view before renovation"></p>

<h2>Floor Preparation</h2>
<p>The floor needed significant preparation before installing the new covering. I started by cleaning and leveling the existing concrete. Trenches were dug in the floor to run plumbing and electrical conduits, thus allowing water supply to various points and electrical outlets needed for appliances.</p>
<p>The conduits were installed carefully, ensuring compliance with standards and facilitating future maintenance. This step is crucial to guarantee quality installation and avoid future problems.</p>
<p><img src="/images/renovation-cuisine-sol-1.jpg" alt="Floor preparation with trenches for conduits"></p>
<p><img src="/images/renovation-cuisine-sol-2.jpg" alt="Conduit installation in trenches"></p>

<h2>Framing, Insulation and Drywall</h2>
<p>To create a solid and insulated structure, I started with the ceiling installation. Since the ceiling is a hollow-core slab, I installed the rail structure for the drywall with hangers directly into the hollow cores of the slab, creating a space filled with thermal insulation. The ceiling was completed first, before proceeding with the walls.</p>
<p>Then, I installed a metal framework with studs and rails for the walls, filled with thermal insulation for excellent energy performance. OSB panels were used in the lower part of the walls, under the window, to strengthen the structure and allow future attachment of kitchen cabinets.</p>
<p>For the walls, I used moisture-resistant drywall panels, specifically designed to resist moisture. The panels were fixed to the framework, then the joints were filled with joint compound and joint tape. Several layers of compound were applied before final sanding to obtain a perfectly smooth surface.</p>
<p><img src="/images/renovation-cuisine-ossature-1.jpg" alt="Metal framework with Isover insulation"></p>
<p><img src="/images/renovation-cuisine-placo-1.jpg" alt="Moisture-resistant drywall panel installation"></p>
<p><img src="/images/renovation-cuisine-placo-2.jpg" alt="Joint filling"></p>

<h2>Window Installation</h2>
<p>A new window was installed to replace the old one. This modern sliding window brings a lot of natural light into the kitchen and offers a view of the garden.</p>
<p>The window was positioned to optimize natural lighting and create a pleasant space for cooking.</p>
<p><img src="/images/renovation-cuisine-fenetre-1.jpg" alt="New window installation"></p>
<p><img src="/images/renovation-cuisine-fenetre-2.jpg" alt="Installed window with outdoor view"></p>

<h2>Electrical Installation</h2>
<p>The electrical installation was planned precisely for each appliance. Each point was marked and labeled with its exact height:</p>
<ul>
<li>Range hood at 1.30m height</li>
<li>Oven at 0.95m height</li>
<li>Microwave at 1.20m height</li>
<li>Cooktop at 0.30m height</li>
<li>Refrigerator at 0.30m height</li>
</ul>
<p>Electrical conduits were installed in the framework, with junction boxes at the planned locations.</p>
<p><img src="/images/renovation-cuisine-electricite-1.jpg" alt="Electrical installation with point labeling"></p>
<p><img src="/images/renovation-cuisine-electricite-2.jpg" alt="Electrical conduits in framework"></p>

<h2>Plumbing Installation</h2>
<p>The plumbing was installed with PEX pipes, a modern and reliable system. Hot water pipes are marked with a red stripe, and cold water pipes with a blue stripe, which facilitates identification and installation. The pipes were fixed to the wall with yellow clips and positioned precisely under the window for the sink location.</p>
<p>This anticipatory installation prepares the water supply for the sink and other water points needed in the kitchen.</p>
<p><img src="/images/renovation-cuisine-plomberie-1.jpg" alt="PEX pipe installation"></p>
<p><img src="/images/renovation-cuisine-plomberie-2.jpg" alt="Pipe detail with colored stripes"></p>

<h2>Wall Painting</h2>
<p>The walls were painted white to create a bright and modern space. I chose to paint the wall above the upper cabinets in dark blue (teal), creating a colored accent that adds personality to the kitchen. This touch of color elegantly contrasts with the white of the cabinets and backsplash.</p>
<p>The lower sections of the walls were prepared to receive the backsplash, while the upper parts were painted to create a coherent and aesthetic space.</p>
<p><img src="/images/renovation-cuisine-peinture-1.jpg" alt="Wall painting in white"></p>
<p><img src="/images/renovation-cuisine-peinture-2.jpg" alt="Dark blue accent wall"></p>

<h2>Floor Tiling</h2>
<p>For the floor, I chose large light grey tiles that add a modern touch to the kitchen. The installation was done with a professional leveling system using black clips and purple and white wedges. This system guarantees a perfectly flat surface and regular joints.</p>
<p>The joints were made in dark grey to create an elegant contrast with the tiles. A spirit level was used throughout the installation to ensure perfect floor horizontality.</p>
<p><img src="/images/renovation-cuisine-carrelage-1.jpg" alt="Tile installation with leveling system"></p>
<p><img src="/images/renovation-cuisine-carrelage-2.jpg" alt="Clip and wedge system detail"></p>
<p><img src="/images/renovation-cuisine-carrelage-3.jpg" alt="Completed tiled floor"></p>

<h2>Cabinet Installation</h2>
<p>The kitchen cabinets were installed following an L-shaped plan. The base cabinets are white with a modern handle-less design, creating a clean aesthetic. The upper cabinets were installed above the base cabinets, and a tall column was positioned to house the oven and microwave.</p>
<p>The cabinets are equipped with black adjustable feet that allow perfect adjustment to the floor level. This careful installation guarantees a professional and functional result.</p>
<p><img src="/images/renovation-cuisine-meubles-1.jpg" alt="Base cabinet installation"></p>
<p><img src="/images/renovation-cuisine-meubles-2.jpg" alt="Tall column for oven and microwave"></p>
<p><img src="/images/renovation-cuisine-meubles-3.jpg" alt="Upper cabinets installed"></p>

<h2>Countertop Installation</h2>
<p>The light wood-look laminate countertop was installed following the L-shape of the kitchen. This material brings warmth to the space and harmonizes perfectly with the white cabinets. Cutouts were made for the sink and cooktop, ensuring perfect integration.</p>
<p><img src="/images/renovation-cuisine-plan-travail-1.jpg" alt="Countertop installation"></p>
<p><img src="/images/renovation-cuisine-plan-travail-2.jpg" alt="L-shaped countertop installed"></p>

<h2>Appliance Installation</h2>
<p>The appliances were installed one by one, starting with the black sink with chrome gooseneck faucet, positioned under the window. The black induction cooktop was integrated into the countertop, and the stainless steel range hood (Candy brand) was installed above, with its integrated lighting.</p>
<p>The oven (Beko brand) was installed in the tall column, and the microwave (Whirlpool brand) was placed above in an open niche. All appliances were properly connected to the electrical networks prepared earlier.</p>
<p><img src="/images/renovation-cuisine-electromenagers-1.jpg" alt="Sink and faucet installation"></p>
<p><img src="/images/renovation-cuisine-electromenagers-2.jpg" alt="Cooktop and hood installed"></p>

<h2>Backsplash Installation</h2>
<p>The backsplash was made with large white rectangular marble-effect tiles with grey veining. The installation was done with red tile spacers to ensure regular joints. The backsplash extends from the countertop to the bottom of the upper cabinets, and a higher section was made above the cooktop, up to the hood.</p>
<p>Several electrical outlets were integrated into the backsplash, with white and black outlets that harmonize with the design. This careful installation guarantees a professional and aesthetic result.</p>
<p><img src="/images/renovation-cuisine-splashback-1.jpg" alt="Backsplash installation with spacers"></p>
<p><img src="/images/renovation-cuisine-splashback-2.jpg" alt="Completed backsplash with integrated outlets"></p>

<h2>Exterior Elements</h2>
<p>To complete the renovation, a roller shutter was installed outside the window to protect the kitchen and regulate light. A glass door was also installed to separate the kitchen from other spaces in the house, creating an elegant transition while preserving brightness.</p>
<p><img src="/images/renovation-cuisine-volet-1.jpg" alt="Roller shutter installation"></p>
<p><img src="/images/renovation-cuisine-porte-1.jpg" alt="Glass door installed"></p>

<h2>Final Result</h2>
<p>The complete kitchen renovation is now finished. The result is a functional, modern, and aesthetic space that combines elegance and practicality. The dark blue accent wall adds a touch of personality, while the marble backsplash and white cabinets create a clean and contemporary design.</p>
<p>All appliances are in place and functional, the networks are properly installed, and the space is ready for daily use. This renovation completely transformed the kitchen, making it a pleasant and modern space that perfectly meets our expectations.</p>
<p><img src="/images/renovation-cuisine-final-3.jpg" alt="Overall view of completed kitchen"></p>
<p><img src="/images/renovation-cuisine-final-4.jpg" alt="Cooking area detail"></p>
<p><img src="/images/renovation-cuisine-final-5.jpg" alt="Sink and window view"></p>
<p><img src="/images/renovation-cuisine-final-6.jpg" alt="Complete kitchen with all elements"></p>

<h2>Conclusion</h2>
<p>The complete kitchen renovation is now finished. This major step in the project required many technical skills and meticulous planning, from the initial demolition to the final finishes. The result is a modern, functional, and aesthetic space that perfectly meets our needs.</p>
<p>This project allowed me to learn a great deal about complete kitchen renovation, from network management to cabinet and appliance installation. The design choices, such as the dark blue accent wall and marble backsplash, add a touch of personality to the space while maintaining a modern and clean aesthetic.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RenovationCuisineMaison1970',
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