---
title: Luminosité sous Jeedom via un ESP8266
date: 2016-04-15
description: Cet article met en avant la mise en place d'un capteur TSL2561 et d'un ESP8266 afin de récupérer la luminosité sous Jeedom. La communication des données se fera à travers un broker MQTT.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
---

## Introduction

Cet article met en avant la mise en place d'un capteur TSL2561 et d'un ESP8266 afin de récupérer la luminosité sous Jeedom.

La communication des données se fera à travers un broker MQTT.

## Prérequis

Pour réaliser ce montage, il vous faut :

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 capteur [TSL2561](http://www.ebay.fr/itm/TSL2561-Luminosity-Sensor-Breakout-infrared-Light-Sensor-integrating-sensor-/271789914195?hash=item3f47f0f853:g:bMIAAOSwNSxU8R-w);
- 1 régulateur [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) (5v vers 3.3v);
- 1 résistance [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) (pull-up).

**Attention !**  
Le code est en LUA et nécessite donc d'avoir l'ESP8266 avec le firmware nodemcu.

## Câblage

[En attente du capteur TSL2561 sous Fritzing]

## Code

[Github](https://github.com/Wifsimster/tsl2561-mqtt)

## Principe

Le principe est le suivant :

1. L'ESP créé un client MQTT avec un id unique;
2. Il se connecte au broker MQTT;
3. A chaque changement de valeur du capteur TSL2561, le client MQTT publie les données sur un topic particulier;
4. Le broker MQTT reçoit les données et les publie pour chaque client ayant souscrit à ce topic.

## Jeedom

Il vous faut tout d'abord installer le plugin gratuit MQTT dans Jeedom.

Dès lors que votre ESP8266 publiera sur le broker MQTT, le plugin Jeedom ajoutera automatiquement le device TSL2561 :

![TSL2561 MQTT](/images/tsl2561_mqtt.png)

![TSL2561 Device](/images/tsl2561_device.png)

## Résultat

![TSL2561 Jeedom](/images/tsl2561_jeedom.png)
