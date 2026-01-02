<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'renovation-couloir-maison-1970',
  date: '2020-10-15',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Rénovation du couloir - Série rénovation #4',
  description: 'Rénovation complète du couloir de la maison des années 1970, de la préparation des murs et du sol à l\'installation du revêtement de sol et des finitions.',
  html: `<h2>Introduction</h2>
<p>Après avoir créé le nouveau WC dans <a href="/posts/renovation-wc-maison-1970">le troisième article de cette série</a>, il était temps de s'attaquer à la rénovation du couloir. Ce long espace de circulation, qui relie les différentes pièces de la maison, nécessitait une rénovation complète pour être en harmonie avec le reste des travaux effectués.</p>
<p>Le couloir présentait un état similaire à celui de la salle de bain : murs à refaire, sol en béton brut, et aucune finition. C'était l'occasion de créer un espace de transition moderne et lumineux, qui servirait de fil conducteur entre les différentes pièces de la maison.</p>

<h2>L'état initial</h2>
<p>Le couloir était dans un état très brut. Les murs présentaient des traces d'anciennes finitions, des zones de plâtre irrégulières, et des couleurs qui dataient des années 1970. Le sol était en béton brut, avec des irrégularités et des traces de travaux précédents. Il n'y avait pas de revêtement de sol, et les portes étaient encore à installer ou à rénover.</p>
<p>Cet espace, bien que fonctionnel, nécessitait une rénovation complète pour être à la hauteur du reste de la maison.</p>
<p><img src="/images/renovation-couloir-etat-initial-1.jpg" alt="Couloir avant rénovation - murs et sol bruts"></p>
<p><img src="/images/renovation-couloir-etat-initial-2.jpg" alt="Vue du couloir montrant l'état des murs et du sol"></p>

<h2>Préparation des murs</h2>
<p>La première étape consistait à préparer les murs pour la peinture. J'ai commencé par retirer les anciennes finitions et réparer les zones abîmées. J'ai appliqué un enduit de rebouchage sur les fissures et les irrégularités, puis j'ai poncé l'ensemble pour obtenir une surface lisse et uniforme.</p>
<p>Une fois les murs préparés, j'ai appliqué une sous-couche pour garantir une bonne adhérence de la peinture et un rendu uniforme. Cette étape est essentielle pour obtenir un résultat de qualité, surtout sur des murs qui ont connu plusieurs couches de peinture au fil des années.</p>
<p><img src="/images/renovation-couloir-murs-preparation-1.jpg" alt="Murs en cours de préparation avec enduit"></p>
<p><img src="/images/renovation-couloir-murs-preparation-2.jpg" alt="Application de la sous-couche sur les murs"></p>

<h2>Peinture des murs</h2>
<p>Pour la peinture, j'ai choisi une couleur blanche pour créer un espace lumineux et moderne. Le blanc permet également de mettre en valeur les portes et les finitions, et de créer une continuité visuelle avec le reste de la maison.</p>
<p>J'ai appliqué deux couches de peinture acrylique blanche, en veillant à bien protéger les zones qui ne devaient pas être peintes, notamment les emplacements des portes et les raccords avec le sol et le plafond.</p>
<p><img src="/images/renovation-couloir-peinture-1.jpg" alt="Murs en cours de peinture"></p>

<h2>Préparation du sol</h2>
<p>Le sol nécessitait une préparation importante avant l'installation du revêtement. J'ai commencé par nettoyer et niveler le béton existant. Les irrégularités et les dénivelés ont été corrigés avec un ragréage auto-nivelant, qui permet d'obtenir une surface parfaitement plane.</p>
<p>Cette étape est cruciale pour garantir une pose de qualité du revêtement de sol, qu'il s'agisse de carrelage ou de parquet flottant. Un sol mal nivelé se traduirait par des problèmes d'usure prématurée et d'esthétique.</p>
<p><img src="/images/renovation-couloir-sol-preparation-1.jpg" alt="Préparation du sol avec ragréage auto-nivelant"></p>
<p><img src="/images/renovation-couloir-sol-preparation-2.jpg" alt="Sol après ragréage, prêt pour le revêtement"></p>

<h2>Installation du revêtement de sol</h2>
<p>Pour le revêtement de sol, j'ai choisi un parquet flottant en bois clair, qui apporte de la chaleur à l'espace et s'harmonise avec le reste de la maison. Avant la pose, j'ai installé une sous-couche isolante pour améliorer le confort acoustique et thermique.</p>
<p>La pose du parquet s'est faite en commençant par un côté du couloir et en progressant vers l'autre extrémité. J'ai utilisé un système de clips pour assembler les lames, ce qui garantit une pose solide et durable. Les lames ont été posées dans le sens de la longueur du couloir pour créer un effet visuel d'allongement de l'espace.</p>
<p><img src="/images/renovation-couloir-sol-installation-1.jpg" alt="Installation de la sous-couche isolante"></p>
<p><img src="/images/renovation-couloir-sol-installation-2.jpg" alt="Pose du parquet flottant en cours"></p>
<p><img src="/images/renovation-couloir-sol-installation-3.jpg" alt="Parquet partiellement installé"></p>

<h2>Installation des plinthes</h2>
<p>Une fois le parquet installé, j'ai posé les plinthes pour finaliser le revêtement de sol. Les plinthes masquent l'espace entre le parquet et les murs, et apportent une finition propre et soignée. J'ai choisi des plinthes blanches pour s'harmoniser avec les murs.</p>
<p>L'installation des plinthes nécessite une attention particulière aux angles et aux raccords avec les portes. J'ai utilisé des raccords d'angle et des coupes précises pour obtenir un rendu professionnel.</p>

<h2>Éclairage</h2>
<p>Pour l'éclairage du couloir, j'ai installé des spots LED encastrés dans le plafond. Ces spots apportent un éclairage moderne et uniforme, tout en restant discrets. L'éclairage a été positionné de manière à éclairer efficacement tout le couloir sans créer d'ombres.</p>
<p>Les spots LED offrent également l'avantage d'une consommation énergétique réduite et d'une longue durée de vie, ce qui est important pour un éclairage qui reste allumé régulièrement.</p>
<p><img src="/images/renovation-couloir-eclairage-1.jpg" alt="Installation des spots LED dans le plafond"></p>

<h2>Résultat final</h2>
<p>La rénovation du couloir est maintenant terminée. Le résultat est un espace moderne, lumineux et fonctionnel, qui sert de transition harmonieuse entre les différentes pièces de la maison. Les murs blancs, le parquet clair et l'éclairage LED créent une ambiance chaleureuse et contemporaine.</p>
<p>Le couloir rénové s'intègre parfaitement avec le reste des travaux effectués dans la maison, notamment la salle de bain et le WC. C'est un espace qui, bien que souvent négligé, contribue grandement à l'impression générale de la maison.</p>
<p><img src="/images/renovation-couloir-final-1.jpg" alt="Couloir terminé - vue d'ensemble"></p>
<p><img src="/images/renovation-couloir-final-2.jpg" alt="Couloir terminé - vue montrant les portes et l'éclairage"></p>

<h2>Ce que j'ai appris</h2>
<p>Ce projet m'a permis de perfectionner mes compétences en préparation de surfaces et en pose de revêtements de sol. La préparation minutieuse des murs et du sol est essentielle pour obtenir un résultat de qualité. J'ai également appris l'importance de bien planifier l'installation du revêtement de sol, notamment en ce qui concerne les raccords avec les portes et les autres pièces.</p>
<p>Le couloir, bien qu'étant un espace de transition, mérite autant d'attention que les autres pièces de la maison. Un couloir bien rénové contribue grandement à l'impression générale de la maison et au confort de vie.</p>

<h2>Conclusion</h2>
<p>La rénovation du couloir est maintenant terminée. C'était un projet qui, bien que moins spectaculaire que la rénovation de la salle de bain, était essentiel pour créer une continuité dans la maison. Le couloir est maintenant un espace moderne et lumineux, qui s'intègre parfaitement avec le reste des travaux de rénovation.</p>`
}

const englishContent: PostContent = {
  title: 'Hallway Renovation - Renovation Series #4',
  description: 'Complete renovation of the 1970s house hallway, from wall and floor preparation to flooring installation and finishing.',
  html: `<h2>Introduction</h2>
<p>After creating the new WC in <a href="/en/posts/renovation-wc-maison-1970">the third article of this series</a>, it was time to tackle the hallway renovation. This long circulation space, which connects the different rooms of the house, needed a complete renovation to be in harmony with the rest of the work done.</p>
<p>The hallway was in a similar state to the bathroom: walls to be redone, raw concrete floor, and no finishes. This was an opportunity to create a modern and bright transition space, which would serve as a common thread between the different rooms of the house.</p>

<h2>Initial State</h2>
<p>The hallway was in a very raw state. The walls showed traces of old finishes, irregular plaster areas, and colors dating from the 1970s. The floor was raw concrete, with irregularities and traces of previous work. There was no floor covering, and the doors were still to be installed or renovated.</p>
<p>This space, although functional, needed a complete renovation to match the rest of the house.</p>
<p><img src="/images/renovation-couloir-etat-initial-1.jpg" alt="Hallway before renovation - raw walls and floor"></p>
<p><img src="/images/renovation-couloir-etat-initial-2.jpg" alt="Hallway view showing wall and floor condition"></p>

<h2>Wall Preparation</h2>
<p>The first step was to prepare the walls for painting. I started by removing old finishes and repairing damaged areas. I applied filler on cracks and irregularities, then sanded everything to obtain a smooth and uniform surface.</p>
<p>Once the walls were prepared, I applied a primer to ensure good paint adhesion and uniform appearance. This step is essential to achieve quality results, especially on walls that have seen several layers of paint over the years.</p>
<p><img src="/images/renovation-couloir-murs-preparation-1.jpg" alt="Walls being prepared with filler"></p>
<p><img src="/images/renovation-couloir-murs-preparation-2.jpg" alt="Primer application on walls"></p>

<h2>Wall Painting</h2>
<p>For painting, I chose white to create a bright and modern space. White also helps highlight doors and finishes, and creates visual continuity with the rest of the house.</p>
<p>I applied two coats of white acrylic paint, taking care to protect areas that shouldn't be painted, especially door openings and connections with the floor and ceiling.</p>
<p><img src="/images/renovation-couloir-peinture-1.jpg" alt="Walls being painted"></p>

<h2>Floor Preparation</h2>
<p>The floor needed significant preparation before installing the covering. I started by cleaning and leveling the existing concrete. Irregularities and level differences were corrected with a self-leveling compound, which allows obtaining a perfectly flat surface.</p>
<p>This step is crucial to ensure quality installation of the floor covering, whether tile or floating floor. A poorly leveled floor would result in premature wear and aesthetic problems.</p>
<p><img src="/images/renovation-couloir-sol-preparation-1.jpg" alt="Floor preparation with self-leveling compound"></p>
<p><img src="/images/renovation-couloir-sol-preparation-2.jpg" alt="Floor after leveling, ready for covering"></p>

<h2>Flooring Installation</h2>
<p>For the floor covering, I chose a light wood floating floor, which brings warmth to the space and harmonizes with the rest of the house. Before installation, I installed an insulating underlay to improve acoustic and thermal comfort.</p>
<p>The floor installation started from one side of the hallway and progressed toward the other end. I used a click system to assemble the planks, which ensures solid and durable installation. The planks were laid lengthwise along the hallway to create a visual effect of lengthening the space.</p>
<p><img src="/images/renovation-couloir-sol-installation-1.jpg" alt="Insulating underlay installation"></p>
<p><img src="/images/renovation-couloir-sol-installation-2.jpg" alt="Floating floor installation in progress"></p>
<p><img src="/images/renovation-couloir-sol-installation-3.jpg" alt="Partially installed floor"></p>

<h2>Baseboard Installation</h2>
<p>Once the floor was installed, I installed the baseboards to finalize the floor covering. The baseboards hide the space between the floor and walls, and provide a clean and neat finish. I chose white baseboards to harmonize with the walls.</p>
<p>Baseboard installation requires particular attention to angles and connections with doors. I used corner joints and precise cuts to achieve a professional result.</p>

<h2>Lighting</h2>
<p>For hallway lighting, I installed recessed LED spots in the ceiling. These spots provide modern and uniform lighting, while remaining discreet. The lighting was positioned to effectively illuminate the entire hallway without creating shadows.</p>
<p>LED spots also offer the advantage of reduced energy consumption and long lifespan, which is important for lighting that stays on regularly.</p>
<p><img src="/images/renovation-couloir-eclairage-1.jpg" alt="LED spot installation in ceiling"></p>

<h2>Final Result</h2>
<p>The hallway renovation is now complete. The result is a modern, bright, and functional space, which serves as a harmonious transition between the different rooms of the house. The white walls, light floor, and LED lighting create a warm and contemporary atmosphere.</p>
<p>The renovated hallway integrates perfectly with the rest of the work done in the house, particularly the bathroom and WC. It's a space that, although often neglected, greatly contributes to the overall impression of the house.</p>
<p><img src="/images/renovation-couloir-final-1.jpg" alt="Completed hallway - overview"></p>
<p><img src="/images/renovation-couloir-final-2.jpg" alt="Completed hallway - view showing doors and lighting"></p>

<h2>What I Learned</h2>
<p>This project allowed me to perfect my skills in surface preparation and floor covering installation. Careful preparation of walls and floor is essential to achieve quality results. I also learned the importance of properly planning floor covering installation, especially regarding connections with doors and other rooms.</p>
<p>The hallway, although being a transition space, deserves as much attention as the other rooms of the house. A well-renovated hallway greatly contributes to the overall impression of the house and quality of life.</p>

<h2>Conclusion</h2>
<p>The hallway renovation is now complete. It was a project that, although less spectacular than the bathroom renovation, was essential to create continuity in the house. The hallway is now a modern and bright space, which integrates perfectly with the rest of the renovation work.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RenovationCouloirMaison1970',
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