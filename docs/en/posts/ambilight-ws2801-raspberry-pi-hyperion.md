---
title: Ambi-like with WS2801 strip, Raspberry Pi and Hyperion
date: 2014-07-09
description: Building a DIY Ambi-like system with a 50 LED WS2801 strip, a Raspberry Pi and Hyperion software to reproduce Philips Ambilight effect.
tags:
  - Ambilight
  - WS2801
  - Raspberry-Pi
  - DIY
---

## Introduction

The [Ambilight](http://en.wikipedia.org/wiki/Ambilight) system from Philips has been catching my eye for too long, so I decided to build an Ambilight system [DIY](http://fr.wikipedia.org/wiki/Do_it_yourself) style. There's no shortage of projects and tutorials on the web, many people have tried it and some software is now very complete (Hyperion to name one).

## Materials

For the hardware, I chose a 50 LED strip, a 5v 8A power supply and a jack power connector.

- 1 strip of 50 [WS2801 LEDs](http://www.ebay.fr/itm/50PCS-WS2801-RGB-Full-Color-12mm-Pixels-digital-Addressable-LED-String-DC-5V-/121159316753?pt=US_Car_Lighting&hash=item1c35a87511) for 21€;
- 1 [5V 8A](http://www.ebay.fr/itm/5V-8A-Power-supply-AC-to-DC-Adapter-for-WS2811-WS2801-HL8806-LED-String-Light-/121153648301?hash=item1c3551f6ad&pt=US_Lighting_Parts_and_Accessories) power supply for 12€;
- 1 jack power connector ([single unit 3€](http://www.amazon.fr/gp/product/B006WJL7Y6/ref=oh_details_o00_s00_i00?ie=UTF8&psc=1) or [10 for 7€](http://www.amazon.fr/gp/product/B008H2HLUA/ref=oh_details_o08_s00_i00?ie=UTF8&psc=1)).

## Prototype

I started by building a frame with MDF pieces that I had no use for. It's light, easy to work with but quickly weakened with holes given the thickness.

![Prototype 1](/images/IMG_20140706_1353301.jpg)

![Prototype 2](/images/IMG_20140706_1353481.jpg)

![Prototype 3](/images/IMG_20140706_1532031.jpg)

![Prototype 4](/images/IMG_20140706_1648501.jpg)

![Prototype 5](/images/IMG_20140707_0843401.jpg)

## Connection with Raspberry Pi

The connection with the Raspberry Pi is relatively simple, as you can see in the diagram below.

Since LEDs are sensitive to voltage, it's preferable to power them with an external power supply connected in parallel to the 5v GPIO port.

![Connection diagram](/images/diagram1.png)

## Hyperion Installation

The easiest way to use Hyperion is to use [Raspbian](http://www.raspberrypi.org/downloads/) on your Raspberry Pi. If you absolutely want to run on another OS, I refer you to the Hyperion wiki which explains the additional procedure to follow [here](https://github.com/tvdzwan/hyperion/wiki/installation).

First, installation of a few libraries is necessary to run Hyperion on your Raspberry Pi.

```bash
sudo apt-get update 
sudo apt-get install libqtcore4 libqtgui4 libqt4-network libusb-1.0-0 libprotobuf7 ca-certificates
```

Then download and deploy Hyperion.

```bash
wget -N https://raw.github.com/tvdzwan/hyperion/master/bin/install_hyperion.sh
sudo sh ./install_hyperion.sh
```

Note that Hyperion will automatically start on the next Raspberry Pi boot.

You can then test by simply turning your strip red.

```bash
hyperion-remote --priority 50 --color red --duration 5000
```

If you want to disable Hyperion automatic startup.

```bash
sudo /sbin/initctl stop hyperion
rm /etc/init/hyperion.conf
```

For information, I couldn't get my Edimax usb/wifi connector to work on Raspbmc while it worked perfectly on my Raspbian, so I resolved to connect my Raspberry Pi via RJ45.

There is a free Android application to remotely control the Hyperion server, available on the [store](https://play.google.com/store/apps/details?id=nl.hyperion.hyperionfree).

## Hyperion Configuration

Hyperion has a very well-made configuration software called [HyperCon](https://github.com/tvdzwan/hyperion/wiki/configuration), which allows you to manage all LEDs (position, colors, lighting, size, …). All possibilities are detailed in the previous link.

HyperCon will generate a hyperion.config.json file to place by default in /etc.

![HyperCon](/images/hypercon_mainscreen_011-1050x565.jpg)

## Steel Frame

My MDF frame not being very resistant, I bought some steel angles, which I cut and then painted. The result is much better, the whole thing is solid, light and holds much better to the TV.

![Steel frame 1](/images/IMG_20140707_2149471.jpg)

![Steel frame 2](/images/IMG_20140707_2347261.jpg)

![Steel frame 3](/images/IMG_20140708_0757471.jpg)

![Steel frame 4](/images/IMG_20140707_2301481.jpg)

![Steel frame 5](/images/IMG_20140708_0758191.jpg)

## Configuration with XBMC

I struggled for a while before getting my XBMC on my media center (Windows) to communicate with the Hyperion server on the Raspberry Pi.

The only solution (at the moment) I found is to use the XBMC Boblight addon which makes communication between XBMC and Hyperion over the network possible.

I tested the Hyperion addon for XBMC but couldn't establish a connection…

## Videos

<iframe src="//www.youtube.com/embed/OVBgoJScQIA" frameborder="0" allowfullscreen></iframe>

<iframe src="//www.youtube.com/embed/4Ka4kQxznlQ" frameborder="0" allowfullscreen></iframe>
