---
title: Communication sans fil indépendante via deux ESP8266
date: 2016-04-15
description: La problématique de ce projet est de réaliser soit même une communication sans fil. Dans ce cas précis, une communication wifi et autonome
tags:
  - ESP8266
  - NodeMCU
---

## Introduction

La problématique de ce projet est de réaliser soit même une communication sans fil. Dans ce cas précis, une communication wifi et autonome, c'est à dire sans point d'accès provenant d'un routeur (ou autre box). Le but final étant de relier une cellule IR de détection de présence (se trouvant à l'extérieur) à une alarme (à l'intérieur de la maison).

## Prérequis

Je pars du principe que :

- la détection de présence sur la cellule IR provoque un état haut sur une entrée GPIO;
- l'alarme sera mise en fonction via un état haut d'une sortie GPIO.

Il vous faudra :

- 2 [ESP8266](http://www.ebay.com/itm/ESP8266-Serial-WIFI-Wireless-Transceiver-Module-Send-Receive-LWIP-Support-AP-STA-/171653455849?hash=item27f757dfe9:g:KDkAAOSw-W5Uwh9z);
- 2 régulateurs [LF33CV](http://www.ebay.com/itm/LF33CV-Original-New-ST-Transistor-/400409071685?hash=item5d3a3d9045:g:pF4AAMXQk-FRE8mt);
- 2 résistances [1KΩ](http://www.ebay.com/itm/1000PCS-1K-1K-Ohm-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071106631?hash=item3ab09bd847:g:ymUAAOSwjVVV3nVm).

**Attention !**  
Le code est en LUA et nécessite donc d'avoir les ESP8266 avec le firmware nodemcu.

## Principe

Un esp va servir de serveur, c'est à dire qu'il va :

1. Déclarer son propre point d'accès wifi;
2. Instancier un serveur HTTP;
3. Attendre une requête HTTP et produire une action en conséquence de cette requête.

Le deuxième esp va lui servir de client, c'est à dire qu'il va :

1. Essayer de se connecter sur le point d'accès wifi du serveur (pendant 1 min, led verte clignotante);
2. Allumer la led verte pour indiquer que la connexion au serveur est établie;
3. Attendre un changement d'état du port GPIO_2 (la cellule IR);
4. Envoyer une requête HTTP au serveur avec l'état du port GPIO_2;

## Schémas

![Schéma client](/images/scheme-client.png)

![Schéma serveur](/images/scheme-server.png)

## Code

[Client](https://github.com/Wifsimster/soft-ap-client) | [Serveur](https://github.com/Wifsimster/soft-ap)

## Réalisation

![Image client](/images/image_client.jpg)

![Image serveur](/images/image_server.jpg)
