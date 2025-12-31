---
title: Ambi-like avec 240 LED WS2812B et une Teensy 2.0
date: 2014-10-06
description: Réalisation d'un système Ambi-like avec un ruban de 4m composé de 240 LED WS2812B et une Teensy 2.0 pour restituer le flux vidéo de l'ordinateur sur les LED.
tags:
  - Ambilight
  - WS2812B
  - Teensy
  - DIY
---

## Introduction

J'ai terminé il y a quelques semaines la construction de mon bureau avec pc intégré. Je me devais d'y ajouter un peu de couleurs !

J'ai donc réalisé un nouvel Ambi-like avec une ruban de 4m composé de 240 LED WS2812B soit 60 LED par mètre contrairement à mon ancien Ambi-like de la télévision qui lui est constitué d'uniquement 50 LED WS2801.

J'en ai profité pour passer sur de l'Arduino-like (au lieu d'un Raspbery Pi), sur les conseils de plusieurs personnes, mon choix s'est porté sur une Teensy 2.0 vendu par [PJRC](http://www.pjrc.com/store/teensy.html) et qui permet de commander facilement un système Ambi-like.

Le but principal ici est de pouvoir restituer le flux vidéo de l'ordinateur sur les LED, on verra qu'il est également possible de capturer le sons et également mettre des couleurs dynamiques d'ambiance.

## Pourquoi ce choix de matériel ?

Un système Ambi-like se fait généralement avec des LED WS2801 car elles sont adressables contrairement aux LED WS2811/WS2812. J'avoue avoir acheté ce ruban sur un coup de tête (le nombre de LED au mètre m'a attiré) sans avoir vérifié la compatibilité avec les systèmes Ambi-like du moment… Mais j'aime les défis et surtout les nouvelles choses :)

![Ruban WS2812](/images/strip_rgb_ws28121.jpg)

Pour le choix du contrôleur, j'avais déjà joué avec un Raspeberry Pi précédemment, je voulais donc tenter l'aventure sur un autre périphérique. Un Arduino correspond très bien au besoin, c'est petit, possède une faible consommation énergétique et il existe plusieurs systèmes d'Ambi-like dédiés. J'ai donc commandé une Tensy 2.0 qui est encore plus petite qu'un Arduino Uno et possède une plus grande puissance de calcul (ça se révélera important étant donné que mes LED ne sont pas adressables).

![Teensy 2.0](/images/teensy_2.jpg)

## Programmation

J'ai donc découvert la programmation sous Arduino grâce à cette Teensy 2.0. A vrai dire avec quelques connaissance en C, c'est relativement simple !

Il existe un logiciel de développement dédié pour les Arduino, à [télécharger ici](http://arduino.cc/en/Main/Software), par défaut Arduino ne prend pas en charge les Teensy, il faut donc télécharger et installer sur votre installation d'Arduino le 'patch' [Teensyduino](https://www.pjrc.com/teensy/td_download.html).

Il embarque nativement des libraires de développement, à utiliser selon la fonction que vous voulez donner à votre système.

Ici, nous voulons commander notre ruban à LED via notre ordinateur en passant par la Teensy. Pour cela nous utiliserons deux logiciels concurrent nommés [Ambibox](http://www.ambibox.ru/en/index.php/Main_Page) et [Prismatik](http://lightpack.tv/downloads).

Ces deux logiciels peuvent fonctionner en communiquant avec un système [Adalight](http://www.adafruit.com/products/461) (embarqué sur la Teensy).

Le problème, c'est qu'Adalight est développé pour fonctionner avec des LED 2801. Après quelques heures de recherches, j'ai réussi à trouver un [fork d'Adalight](https://code.google.com/p/adalight-ws2812/source/browse/0.9?spec=svn2&r=2) fonctionnant avec des LED WS2812.

Ce fork d'Adalight repose malheureusement sur une ancienne librairie FastSPI_LED2 (permettant de commander des LED WS2811/WS2812), qui a évoluée et se trouve maintenant sous le nom FastLED (disponible sous l'éditeur Arduino).

J'ai donc résolu mon problème en modifiant légèrement le code du fork pour utiliser la dernière version de la librairie FastLED, ma version disponible sur [Github](https://github.com/Wifsimster/adalight_ws2812) (dernière mise à jour 22/11/2015).

Je ne vais pas vous expliquer comment charger le programme sur la Teensy, c'est très simple et repose sur le même principe que n'importe quel Arduino, pour plus d'informations, [voir ici](http://www.pjrc.com/teensy/loader_vista.html).

## Montage

J'ai donc simplement découpé des bandes pour chaque longueur des écrans, bien penser à respecter le sens des flèches du ruban (pour le signal).

J'ai relié chaque bandes bout à bout par trois fils soudés de chaque côté et relié mon alimentation 5v 8A en entrée et sortie du ruban (préféré plusieurs points d'alimentation sur votre ruban).

![Montage 1](/images/IMG_20140921_1522391-1050x590.jpg)

Comme vous pouvez le voir ci-dessous, j'ai connecté les trois fils du ruban sur les ports VCC, GRD B1 de la Teensy 2.0. Le port B1 est paramétrable dans ma version de l'Adalight.

![Montage 2](/images/IMG_20140921_1523001.jpg)

## Communication avec Adalight

Adalight est très répandu et est de plus en plus reconnu par les logiciels Ambilight. J'ai donc testé les deux plus connus du moment, Prismatik et Ambibox !

![Communication](/images/IMG_20140921_1531451-1050x590.jpg)

## Update - 22/11/2015

Suite à mon déménagement, j'ai dû me remettre dans la programmation de la Teensy et je viens donc d'en profiter pour mettre à jour ma version d'Adalight.

Le plus gros problème que j'ai eu après tout ce temps (et un nouvelle installation de Windows) c'est la configuration de Prismatik !

Penser à bien installer les drivers pour votre Teensy, les drivers sont embarqués dans le 'patch' [Teensyduino](https://www.pjrc.com/teensy/td_download.html) (voir au début de l'article) et par la suite récupéré le port dans la gestion de vos périphériques Windows.

![Périphériques](/images/periph.png)
