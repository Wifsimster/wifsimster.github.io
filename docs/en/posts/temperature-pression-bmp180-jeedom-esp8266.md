---
title: Temperature and pressure (BMP180) under Jeedom via ESP8266
date: 2016-01-13
description: Setup of a BMP180 sensor with an ESP8266 to retrieve temperature and pressure under Jeedom.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
---

## Materials

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 [BMP180](http://www.ebay.fr/itm/BMP180-Replace-BMP085-Digital-Barometric-Pressure-Sensor-Board-Module-Arduino-IE-/281807948504?hash=item419d100ad8:g:rJIAAOSwVL1WApmE) sensor (temperature and pressure);
- 1 [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) regulator (5v to 3.3v);
- 1 [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) resistor (pull-up).

## Wiring

![BMP180](/images/bmp180.png)

## Jeedom

Create a virtual device.

![BMP180 Jeedom](/images/bmp180_jeedom.png)

Make sure to note the IDs of the two information (temperature and pressure), here 535 and 536. These two IDs are to be inserted in the HTTP request to send to Jeedom.

## Code

[HTTP version](https://github.com/Wifsimster/bmp180/)

[MQTT version](https://github.com/Wifsimster/bmp180-mqtt)

## Result

![BMP180 Result](/images/bmp180_res.png)
