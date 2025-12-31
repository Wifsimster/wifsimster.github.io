---
title: Brightness under Jeedom via ESP8266
date: 2016-04-15
description: This article highlights the setup of a TSL2561 sensor and an ESP8266 to retrieve brightness under Jeedom. Data communication will be through an MQTT broker.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
---

## Introduction

This article highlights the setup of a TSL2561 sensor and an ESP8266 to retrieve brightness under Jeedom.

Data communication will be through an MQTT broker.

## Prerequisites

To build this setup, you will need:

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 [TSL2561](http://www.ebay.fr/itm/TSL2561-Luminosity-Sensor-Breakout-infrared-Light-Sensor-integrating-sensor-/271789914195?hash=item3f47f0f853:g:bMIAAOSwNSxU8R-w) sensor;
- 1 [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) regulator (5v to 3.3v);
- 1 [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) resistor (pull-up).

**Warning!**  
The code is in LUA and therefore requires the ESP8266 to have the nodemcu firmware.

## Wiring

[Waiting for TSL2561 sensor under Fritzing]

## Code

[Github](https://github.com/Wifsimster/tsl2561-mqtt)

## Principle

The principle is as follows:

1. The ESP creates an MQTT client with a unique id;
2. It connects to the MQTT broker;
3. On each value change of the TSL2561 sensor, the MQTT client publishes the data on a specific topic;
4. The MQTT broker receives the data and publishes it for each client that has subscribed to this topic.

## Jeedom

You must first install the free MQTT plugin in Jeedom.

Once your ESP8266 publishes on the MQTT broker, the Jeedom plugin will automatically add the TSL2561 device:

![TSL2561 MQTT](/images/tsl2561_mqtt.png)

![TSL2561 Device](/images/tsl2561_device.png)

## Result

![TSL2561 Jeedom](/images/tsl2561_jeedom.png)
