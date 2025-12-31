---
title: Ambi-like with 240 WS2812B LEDs and a Teensy 2.0
date: 2014-10-06
description: Building an Ambi-like system with a 4m strip composed of 240 WS2812B LEDs and a Teensy 2.0 to reproduce the computer's video stream on the LEDs.
tags:
  - Ambilight
  - WS2812B
  - Teensy
  - DIY
---

## Introduction

I finished building my desk with integrated PC a few weeks ago. I had to add some colors to it!

So I built a new Ambi-like with a 4m strip composed of 240 WS2812B LEDs, that's 60 LEDs per meter, unlike my old TV Ambi-like which only had 50 WS2801 LEDs.

I took the opportunity to switch to Arduino-like (instead of a Raspberry Pi), on the advice of several people, my choice fell on a Teensy 2.0 sold by [PJRC](http://www.pjrc.com/store/teensy.html) which allows easy control of an Ambi-like system.

The main goal here is to be able to reproduce the computer's video stream on the LEDs, we'll see that it's also possible to capture sound and also set dynamic ambient colors.

## Why this hardware choice?

An Ambi-like system is usually done with WS2801 LEDs because they are addressable unlike WS2811/WS2812 LEDs. I admit I bought this strip on impulse (the number of LEDs per meter attracted me) without checking compatibility with current Ambi-like systems… But I like challenges and especially new things :)

![WS2812 Strip](/images/strip_rgb_ws28121.jpg)

For the controller choice, I had already played with a Raspberry Pi previously, so I wanted to try the adventure on another device. An Arduino fits the need very well, it's small, has low power consumption and there are several dedicated Ambi-like systems. So I ordered a Teensy 2.0 which is even smaller than an Arduino Uno and has greater computing power (this will prove important given that my LEDs are not addressable).

![Teensy 2.0](/images/teensy_2.jpg)

## Programming

So I discovered Arduino programming thanks to this Teensy 2.0. To be honest with some C knowledge, it's relatively simple!

There is dedicated development software for Arduino, [download here](http://arduino.cc/en/Main/Software), by default Arduino doesn't support Teensy, so you need to download and install the [Teensyduino](https://www.pjrc.com/teensy/td_download.html) 'patch' on your Arduino installation.

It natively includes development libraries, to use according to the function you want to give to your system.

Here, we want to control our LED strip via our computer through the Teensy. For this we will use two competing software named [Ambibox](http://www.ambibox.ru/en/index.php/Main_Page) and [Prismatik](http://lightpack.tv/downloads).

These two software can work by communicating with an [Adalight](http://www.adafruit.com/products/461) system (embedded on the Teensy).

The problem is that Adalight is developed to work with 2801 LEDs. After a few hours of research, I managed to find an [Adalight fork](https://code.google.com/p/adalight-ws2812/source/browse/0.9?spec=svn2&r=2) working with WS2812 LEDs.

This Adalight fork unfortunately relies on an old FastSPI_LED2 library (allowing to control WS2811/WS2812 LEDs), which has evolved and is now called FastLED (available in the Arduino editor).

So I solved my problem by slightly modifying the fork code to use the latest version of the FastLED library, my version available on [Github](https://github.com/Wifsimster/adalight_ws2812) (last update 22/11/2015).

I won't explain how to load the program on the Teensy, it's very simple and based on the same principle as any Arduino, for more information, [see here](http://www.pjrc.com/teensy/loader_vista.html).

## Assembly

I simply cut strips for each screen length, making sure to respect the arrow direction of the strip (for the signal).

I connected each strip end to end with three wires soldered on each side and connected my 5v 8A power supply at the input and output of the strip (prefer multiple power points on your strip).

![Assembly 1](/images/IMG_20140921_1522391-1050x590.jpg)

As you can see below, I connected the three wires of the strip to the VCC, GRD B1 ports of the Teensy 2.0. The B1 port is configurable in my version of Adalight.

![Assembly 2](/images/IMG_20140921_1523001.jpg)

## Communication with Adalight

Adalight is very widespread and increasingly recognized by Ambilight software. So I tested the two most known at the moment, Prismatik and Ambibox!

![Communication](/images/IMG_20140921_1531451-1050x590.jpg)

## Update - 22/11/2015

Following my move, I had to get back into Teensy programming and I just took the opportunity to update my Adalight version.

The biggest problem I had after all this time (and a new Windows installation) is Prismatik configuration!

Remember to properly install the drivers for your Teensy, the drivers are embedded in the [Teensyduino](https://www.pjrc.com/teensy/td_download.html) 'patch' (see at the beginning of the article) and then retrieve the port in your Windows device management.

![Devices](/images/periph.png)
