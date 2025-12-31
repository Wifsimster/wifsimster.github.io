---
title: Ambi-like avec un ruban WS2801, un Raspberry Pi et Hyperion
date: 2014-07-09
description: Réalisation d'un système Ambi-like DIY avec un ruban de 50 LED WS2801, un Raspberry Pi et le logiciel Hyperion pour reproduire l'effet Ambilight de Philips.
tags:
  - Ambilight
  - WS2801
  - Raspberry-Pi
  - DIY
---

## Introduction

Le système [Ambilight](http://en.wikipedia.org/wiki/Ambilight) de chez Phiilips m'a fait les yeux doux depuis trop longtemps, je me suis donc décidé à faire un système Ambilight en [DIY](http://fr.wikipedia.org/wiki/Do_it_yourself). Les projets et tuto ne manquent pas sur le net, beaucoup de personnes se sont essayé à l'exercice et certains softs sont même très complet maintenant (Hyperion pour ne pas le citer).

## Matériel

Au niveau du matériel, j'ai choisi un ruban à 50 leds, une alimentation 5v 8A et un connecteur d'alimentation jack.

- 1 ruban de 50 [LED WS2801](http://www.ebay.fr/itm/50PCS-WS2801-RGB-Full-Color-12mm-Pixels-digital-Addressable-LED-String-DC-5V-/121159316753?pt=US_Car_Lighting&hash=item1c35a87511) pour 21€ ;
- 1 alimentation [5V 8A](http://www.ebay.fr/itm/5V-8A-Power-supply-AC-to-DC-Adapter-for-WS2811-WS2801-HL8806-LED-String-Light-/121153648301?hash=item1c3551f6ad&pt=US_Lighting_Parts_and_Accessories) pour 12€ ;
- 1 connecteur d'alimentation jack (à l'[unité 3€](http://www.amazon.fr/gp/product/B006WJL7Y6/ref=oh_details_o00_s00_i00?ie=UTF8&psc=1) ou [10 pour 7€](http://www.amazon.fr/gp/product/B008H2HLUA/ref=oh_details_o08_s00_i00?ie=UTF8&psc=1)).

## Prototype

J'ai commencé par réaliser un cadre avec des morceaux de MDF qui ne me servaient à rien. C'est léger, facile à travaillé mais vite fragilisé avec les trous vu l'épaisseur.

![Prototype 1](/images/IMG_20140706_1353301.jpg)

![Prototype 2](/images/IMG_20140706_1353481.jpg)

![Prototype 3](/images/IMG_20140706_1532031.jpg)

![Prototype 4](/images/IMG_20140706_1648501.jpg)

![Prototype 5](/images/IMG_20140707_0843401.jpg)

## Connexion avec le Raspberry Pi

La connexion avec le Raspberry Pi est relativement simple, comme vous pouvez le voir sur le schéma ci-dessous.

Les LED étant sensibles au voltage, il est préférable de les alimenter avec une alimentation extérieure connectée en parallèle au 5v du port GPIO.

![Schéma connexion](/images/diagram1.png)

## Installation d'Hyperion

Le plus simple pour utiliser Hyperion est d'utiliser une [Raspbian](http://www.raspberrypi.org/downloads/) sur votre Raspberry Pi, si jamais vous voulez absoluement tourner sur un aure OS je vous repporte sur le wiki d'Hyperion qui explique la procédure supplémentaire à suivre [ici](https://github.com/tvdzwan/hyperion/wiki/installation).

En premier lieu, une installation de quelques librairies est nécessaire pour faire tourner Hyperion sur votre Raspberi Pi.

```bash
sudo apt-get update 
sudo apt-get install libqtcore4 libqtgui4 libqt4-network libusb-1.0-0 libprotobuf7 ca-certificates
```

Ensuite téléchargé et déployé Hyperion.

```bash
wget -N https://raw.github.com/tvdzwan/hyperion/master/bin/install_hyperion.sh
sudo sh ./install_hyperion.sh
```

A savoir qu'Hyperion se lancera automatiquement dès le prochain démarrage du Raspberry Pi.

Vous pouvez ensuite tester simple d'allumer votre ruban en rouge.

```bash
hyperion-remote --priority 50 --color red --duration 5000
```

Si vous souhaité désactiver le lancement automatique d'Hyperion au démarrage.

```bash
sudo /sbin/initctl stop hyperion
rm /etc/init/hyperion.conf
```

Pour information, je n'ai pas réussi à faire fonctionner mon connecteur usb/wifi Edimax sur la Raspbmc alors qu'il fonctionnait très bien sur ma Raspbian, je me suis donc résolu à connecter mon Raspberry Pi en RJ45.

Il existe une application Android gratuite pour contrôler le serveur Hyperion à distance, disponible sur le [store](https://play.google.com/store/apps/details?id=nl.hyperion.hyperionfree).

## Configuration d'Hyperion

Hyperion possède un logiciel de paramétrage très bien fait, nommé [HyperCon](https://github.com/tvdzwan/hyperion/wiki/configuration), il permet de gérer l'ensemble des LED (position, couleurs, éclairage, taille, …). L'ensemble des possibilités est détaillées dans le lien précédent.

Hypercon va donc vous générer un fichier hyperion.config.json à déposer par défaut dans /etc.

![HyperCon](/images/hypercon_mainscreen_011-1050x565.jpg)

## Cadre en acier

Mon cadre en MDF n'étant pas très résistant, j'ai acheté quelques cornières en acier, que j'ai découpé et ensuite peinte. Le résultat est bien mieux, l'ensemble est solide, léger et tient bien mieux à la TV.

![Cadre acier 1](/images/IMG_20140707_2149471.jpg)

![Cadre acier 2](/images/IMG_20140707_2347261.jpg)

![Cadre acier 3](/images/IMG_20140708_0757471.jpg)

![Cadre acier 4](/images/IMG_20140707_2301481.jpg)

![Cadre acier 5](/images/IMG_20140708_0758191.jpg)

## Configuration avec XBMC

J'ai bataillé un moment avant de faire communiquer mon XBMC sous mon media center (Windows) avec le serveur Hyperion sur le Raspberry Pi.

La seule solution (à l'heure actuelle) que j'ai trouvé, c'est de passer par l'addon XBMC Boblight qui rend possible la communication entre XBMC et Hyperion sur le réseau.

J'ai testé l'addon Hyperion pour XBMC mais impossible d'établir une connexion…

## Vidéos

<iframe src="//www.youtube.com/embed/OVBgoJScQIA" frameborder="0" allowfullscreen></iframe>

<iframe src="//www.youtube.com/embed/4Ka4kQxznlQ" frameborder="0" allowfullscreen></iframe>
