---
title: Chacon DIO First outlet control via Raspberry Pi
date: 2014-02-25
description: "First home automation article: controlling Chacon DIO First outlets via a Raspberry Pi and a 433MHz transmitter."
tags:
  - Raspberry-Pi
  - DIY
---

Hello,

This is my first home automation article and also my first build.

This article is based on the following two articles:

- [How to control dio devices with a raspberry pi](http://www.homautomation.org/2013/10/09/how-to-control-di-o-devices-with-a-raspberry/);
- [Raspberry Pi 12 – Allumer des prises à distance](http://blog.idleman.fr/raspberry-pi-12-allumer-des-prises-distance/).

## Introduction

I've been having fun integrating [S.A.R.A.H.](http://encausse.wordpress.com/s-a-r-a-h/) into the house via a home media center for some time.  
For information, S.A.R.A.H. allows communication with all connected objects in the house via HTTP request using voice.

I acquired three [Chacon DIO First](http://www.amazon.fr/prises-avec-t%C3%A9l%C3%A9commande-canaux-Chacon/dp/B005LKMAW0/ref=sr_1_1?ie=UTF8&qid=1393325060&sr=8-1&keywords=chacon+dio) outlets with remote control for 30€ and a [433MHz receiver/transmitter](http://www.amazon.fr/gp/product/B00G23NW6S/ref=oh_details_o03_s00_i00?ie=UTF8&psc=1) kit for 3.45€ on Amazon, about a week ago.

I already had a Raspberry Pi, I don't think it's very difficult to find, it's so widespread now!

![Chacon](/images/chacon.jpeg)

## Principle & Operation

Chacon DIO First outlets work via 433MHz radio frequency.  
The principle is very simple, reproduce the data emitted by the remote control via the 433MHz transmitter coupled to the Raspberry Pi.

The remote control communicates with the outlets via the Easy Home protocol, this protocol composes the signal in 32 bits as follows:

- First 26 bits corresponding to the remote control identifier;
- 27th bit corresponding to the group number (not important here);
- 28th bit corresponding to the outlet state (ON=1 & OFF=0);
- 29th to 32nd bits corresponding to the outlet number to be controlled.

For better explanation, I refer you to [Idleman 10](http://blog.idleman.fr/raspberry-pi-10-commander-le-raspberry-pi-par-radio/)'s tutorial on the Raspberry Pi.

## Assembly

If you've never played with the Raspberry Pi GPIO ports, here's the setup to adopt to make the 433MHz transmitter work.

![Raspberry Pi Diagram](/images/RPi-copie-1024x742.jpg)

You can see in the setup the transmitter but also the receiver, it's not useful for what we want to do here.

For the tip, a three-pin PC fan cable works perfectly for the 433MHz transmitter ;)

You can solder a conductor wire at the antenna location (Ant) on the transmitter of 17.3cm, if you want to ensure good communication with the outlets.

![433MHz Transmitter](/images/rf433k-300x225.jpg)

## Software

Then we move to the software level on the Raspberry Pi.

First of all, you need to install the WiringPi library, which simplifies GPIO port access:

Git installation

```bash
sudo apt-get install git-core
```

Raspbian update

```bash
sudo apt-get update
sudo apt-get upgrade
```

Retrieve WiringPi from Git

```bash
git clone git://git.drogon.net/wiringPi
```

Retrieve latest WiringPi updates

```bash
cd wiringPi
git pull origin
```

Build WiringPi library

```bash
cd wiringPi
./build
```

The code to control the outlets is to be retrieved from [Idleman](http://projet.idleman.fr/domopi/data/hcc/hcc.zip)'s site (thanks to him).

In this zip you'll find a web interface and the C code allowing Chacon outlet control. We won't deal with the web interface in this article.  
The important file is therefore radioEmission, if you want to play with the code, you can open (and modify) the radioEmission.cpp file and recompile the radioEmission file using the following command:

```bash
g++ radioEmission.cpp -o radioEmission -lwiringPi
```
