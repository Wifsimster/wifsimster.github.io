---
title: Affichage de valeurs sur un écran I2C via un ESP8266
date: 2016-04-15
description: Cet article met en avant l'utilisation d'un écran I2C OLED et d'un ESP8266 afin d'afficher des valeurs en provenance d'un broker MQTT.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
---

## Introduction

Cet article met en avant l'utilisation d'un écran I2C OLED et d'un ESP8266 afin d'afficher des valeurs en provenance d'un broker MQTT.

## Prérequis

Pour réaliser ce montage, il vous faut :

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 écran [I2C 128×64 OLED](http://www.ebay.com/itm/0-96-I2C-IIC-SPI-Serial-128X64-White-OLED-LCD-LED-Display-Module-for-Arduino-/201428440360?hash=item2ee6121528:g:MOYAAOSwv0tVeD0N);
- 1 régulateur [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) (5v vers 3.3v);
- 1 résistance [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) (pull-up);
- 2 résistances [4.7kΩ](http://www.ebay.com/itm/100PCS-4-7K-4K7-Ohms-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071125870?hash=item3ab09c236e:g:k9EAAOSwjVVV3n3n).

**Attention !**  
Le code est en LUA et nécessite donc d'avoir l'ESP8266 avec le firmware nodemcu.

## Câblage

![Schéma I2C](/images/i2c_display_scheme.png)

## Code

[Github](https://github.com/Wifsimster/i2c-display-mqtt)

## Principe

Le principe est le suivant :

1. L'ESP créé un client MQTT avec un id unique;
2. Il se connecte au broker MQTT;
3. Le client souscrit à un topic particulier où les données que l'on désire sont publiées;
4. L'ESP affiche une première fois les données à l'écran;
5. Puis à chaque fois que le broker MQTT reçoit des nouvelles données sur ce topic, notre client met à jour les données à l'écran.

## Résultat

![Écran I2C](/images/i2c_display.jpg)
