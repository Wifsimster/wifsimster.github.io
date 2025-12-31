---
title: Température et pression (BMP180) sous Jeedom via un ESP8266
date: 2016-01-13
description: Mise en place d'un capteur BMP180 avec un ESP8266 pour récupérer la température et la pression sous Jeedom.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
---

## Matériel

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 capteur [BMP180](http://www.ebay.fr/itm/BMP180-Replace-BMP085-Digital-Barometric-Pressure-Sensor-Board-Module-Arduino-IE-/281807948504?hash=item419d100ad8:g:rJIAAOSwVL1WApmE) (température et pression);
- 1 régulateur [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) (5v vers 3.3v);
- 1 résistance [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) (pull-up).

## Câblage

![BMP180](/images/bmp180.png)

## Jeedom

Créer un device virtuel.

![BMP180 Jeedom](/images/bmp180_jeedom.png)

Veuillez à bien noter les ID de deux informations (température et pression), ici 535 et 536. Ces deux ID sont à insérer dans la requête HTTP à envoyer à Jeedom.

## Code

[HTTP version](https://github.com/Wifsimster/bmp180/)

[MQTT version](https://github.com/Wifsimster/bmp180-mqtt)

## Résultat

![BMP180 Résultat](/images/bmp180_res.png)
