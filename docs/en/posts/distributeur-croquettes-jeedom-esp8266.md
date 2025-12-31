---
title: Cat food dispenser under Jeedom via ESP8266
date: 2016-04-14
description: "To avoid THE daily problem: 'feeding the hungry cat', I built a dispenser connected to Jeedom. This dispenser consists of a simple 12v motor actuated by a double relay and controlled by an ESP8266."
tags:
  - ESP8266
  - NodeMCU
  - Jeedom
  - DIY
---

## Introduction

To avoid THE daily problem: "feeding the hungry cat", I built a dispenser connected to Jeedom.

This dispenser consists of a simple 12v motor actuated by a double relay and controlled by an ESP8266.

## Prerequisites

To build this setup, you will need:

- 1 [ESP8266](http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ);
- 1 [LF33CV](http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g) regulator (5v to 3.3v);
- 1 [1kΩ](http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472) resistor (pull-up);
- 1 [double relay](http://www.ebay.com/itm/1pcs-5V-2-Channel-Relay-Module-for-Arduino-PIC-ARM-DSP-AVR-Electronic-/400985229770?hash=item5d5c9509ca:g:cJgAAOxy86RSY-Jq) module (5v).

## Principle

The dispenser consists of a 12v motor that rotates a threaded rod to which a tray is attached.

The tray is locked in rotation by two thin rods at the base of the dispenser.

Consequently, depending on the rotation direction of the motor, the tray goes down or up.

A larger diameter tube surrounds everything to collect the food and pours it at the base through a spout.

The dispenser is connected to Jeedom via an ESP8266 and actuates the double relay on HTTP request.

![Dispenser 1](/images/cat_feeder.jpg)

![Dispenser 2](/images/cat_feeder_02.jpg)

![Dispenser 3](/images/cat_feeder_03.jpg)

## Wiring

![Relay diagram](/images/relay_command.png)

## Code

[Github](https://github.com/Wifsimster/distributeur-lua)

## Jeedom

Create a script to communicate with the esp8266 of the dispenser:

![Jeedom script](/images/cat_feeder_jeedom.png)

Create a virtual to interact with the previous script:

![Jeedom virtual](/images/cat_feeder_virtual.png)

Create a scenario to automate food distribution:

![Jeedom scenario](/images/cat_feeder_scenari.png)

## Result

![Dashboard](/images/cat_feeder_dash.png)

<iframe src="//www.youtube.com/embed/_gSTuAhnkl0" frameborder="0" allowfullscreen></iframe>
