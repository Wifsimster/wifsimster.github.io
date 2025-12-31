---
title: Display values on an I2C screen via ESP8266
date: 2016-04-15
description: This article highlights the use of an I2C OLED screen and an ESP8266 to display values from an MQTT broker.
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
---

## Introduction

This article highlights the use of an I2C OLED screen and an ESP8266 to display values from an MQTT broker.

## Prerequisites

To build this setup, you will need:

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 [I2C 128×64 OLED](http://www.ebay.com/itm/0-96-I2C-IIC-SPI-Serial-128X64-White-OLED-LCD-LED-Display-Module-for-Arduino-/201428440360?hash=item2ee6121528:g:MOYAAOSwv0tVeD0N) screen;
- 1 [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) regulator (5v to 3.3v);
- 1 [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) resistor (pull-up);
- 2 [4.7kΩ](http://www.ebay.com/itm/100PCS-4-7K-4K7-Ohms-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071125870?hash=item3ab09c236e:g:k9EAAOSwjVVV3n3n) resistors.

**Warning!**  
The code is in LUA and therefore requires the ESP8266 to have the nodemcu firmware.

## Wiring

![I2C Diagram](/images/i2c_display_scheme.png)

## Code

[Github](https://github.com/Wifsimster/i2c-display-mqtt)

## Principle

The principle is as follows:

1. The ESP creates an MQTT client with a unique id;
2. It connects to the MQTT broker;
3. The client subscribes to a specific topic where the desired data is published;
4. The ESP displays the data on the screen for the first time;
5. Then each time the MQTT broker receives new data on this topic, our client updates the data on the screen.

## Result

![I2C Screen](/images/i2c_display.jpg)
