Je fais confiance aux modèles de pointe. Je les éprouve tous les jours, sur des scénarios très différents.

Et ça ne prouve rien.

—

Ma confiance parle de moi, pas du logiciel. Elle ne se transmet pas à la personne qui arrive lundi. Elle ne s'audite pas. Et elle ne vaudra rien devant quelqu'un qui demande comment on garantit qu'une trace d'audit est écrite.

Je dirige l'ingénierie sur un ERP hospitalier. En santé régulée, la qualité n'est pas un nombre de bogues. C'est une liste de propriétés qui doivent tenir après chaque changement — et aucune ne dépend de qui a écrit la ligne.

—

Le vrai problème n'est pas le volume de code.

Relire un diff, c'est un instrument fait pour trouver une ligne fausse. Or les défauts qui passent sont le plus souvent une ligne manquante, dans un fichier que le diff n'a jamais ouvert.

On ne remarque pas une absence dans un document qui ne la contient pas.

—

Alors on a arrêté de défendre ces propriétés en relisant, et on a commencé à les compiler :

🧱 67 décisions d'architecture, lues par chaque agent avant tout changement structurant
🚦 39 contrôles qui font échouer la chaîne — un par propriété, chacun né d'une erreur qu'on a payée
✍️ 1 périmètre où la revue par un tiers reste obligatoire, par choix

La revue elle-même est très majoritairement automatisée : des agents relisent des agents. Ce qui reste aux humains, c'est ce qu'une machine ne peut pas assumer — les décisions opposables et les arbitrages de sécurité.

—

On mesure une seule chose : à quelle étape chaque défaut est attrapé. Un contrôle ne sert pas à faire baisser un compteur, il sert à faire attraper une classe de défauts une étape plus tôt, définitivement.

Deux de ces étapes sont encore vides. Nous ne sommes pas en production, les premiers tests sur site arrivent dans quelques semaines. C'est là que je saurai ce que tout ça vaut vraiment.

—

Le but n'a jamais été de ralentir. C'est d'aller plus vite et mieux à la fois.

J'ai écrit le détail — les quatre couches, l'échelle de mesure, et ce que rien de tout ça ne prouve :

https://blog.battistella.ovh/posts/quality-is-executed
