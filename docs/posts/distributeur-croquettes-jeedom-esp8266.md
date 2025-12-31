---
title: Distributeur de croquettes sous Jeedom via un ESP8266
date: 2016-04-14
description: Afin d'éviter LE problème quotidien : « nourrir le chat affamé », j'ai réalisé un distributeur connecté à Jeedom. Ce distributeur est constitué d'un simple moteur 12v actionné par un double relais et contrôler par un ESP8266.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
  - DIY
---

## Introduction

Afin d'éviter LE problème quotidien : « nourrir le chat affamé », j'ai réalisé un distributeur connecté à Jeedom.

Ce distributeur est constitué d'un simple moteur 12v actionné par un double relais et contrôler par un ESP8266.

## Prérequis

Afin de réaliser ce montage, il vous faut :

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 régulateur [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) (5v vers 3.3v);
- 1 résistance [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) (pull-up);
- 1 [double relais](http://www.ebay.com/itm/1pcs-5V-2-Channel-Relay-Module-for-Arduino-PIC-ARM-DSP-AVR-Electronic-/400985229770?hash=item5d5c9509ca:g:cJgAAOxy86RSY-Jq) module (5v).

## Principe

Le distributeur est constitué d'un moteur 12v qui fait tourner une tige filetée à laquelle est fixé un plateau.

Le plateau est verrouillé en rotation par deux fine tiges à la base du distributeur.

En conséquence, selon le sens de rotation du moteur, la plateau descend ou monte.

Un tuyau de plus gros diamètre englobe le tout afin de récupérer les croquettes et les verse à la base par un bec.

Le distributeur est connecté à Jeedom par un ESP8266 et actionne le double relais sur requête HTTP.

![Distributeur 1](/images/cat_feeder.jpg)

![Distributeur 2](/images/cat_feeder_02.jpg)

![Distributeur 3](/images/cat_feeder_03.jpg)

## Câblage

![Schéma relais](/images/relay_command.png)

## Code

[Github](https://github.com/Wifsimster/distributeur-lua)

## Jeedom

Création d'un script pour communiquer avec l'esp8266 du distributeur :

![Jeedom script](/images/cat_feeder_jeedom.png)

Création d'un virtuel pour interagir avec le script précédent :

![Jeedom virtuel](/images/cat_feeder_virtual.png)

Création d'un scénario pour automatiser la distribution des croquettes :

![Jeedom scénario](/images/cat_feeder_scenari.png)

## Résultat

![Dashboard](/images/cat_feeder_dash.png)

<iframe src="//www.youtube.com/embed/_gSTuAhnkl0" frameborder="0" allowfullscreen></iframe>
