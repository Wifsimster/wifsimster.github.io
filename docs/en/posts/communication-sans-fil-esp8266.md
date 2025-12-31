---
title: Independent wireless communication via two ESP8266
date: 2016-04-15
description: The challenge of this project is to create your own wireless communication. In this specific case, a wifi and autonomous communication.
tags:
  - ESP8266
  - NodeMCU
---

## Introduction

The challenge of this project is to create your own wireless communication. In this specific case, a wifi and autonomous communication, meaning without an access point from a router (or other box). The final goal is to connect an IR presence detection cell (located outside) to an alarm (inside the house).

## Prerequisites

I assume that:

- presence detection on the IR cell triggers a high state on a GPIO input;
- the alarm will be activated via a high state on a GPIO output.

You will need:

- 2 [ESP8266](http://www.ebay.com/itm/ESP8266-Serial-WIFI-Wireless-Transceiver-Module-Send-Receive-LWIP-Support-AP-STA-/171653455849?hash=item27f757dfe9:g:KDkAAOSw-W5Uwh9z);
- 2 [LF33CV](http://www.ebay.com/itm/LF33CV-Original-New-ST-Transistor-/400409071685?hash=item5d3a3d9045:g:pF4AAMXQk-FRE8mt) regulators;
- 2 [1KΩ](http://www.ebay.com/itm/1000PCS-1K-1K-Ohm-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071106631?hash=item3ab09bd847:g:ymUAAOSwjVVV3nVm) resistors.

**Warning!**  
The code is in LUA and therefore requires the ESP8266 to have the nodemcu firmware.

## Principle

One ESP will serve as a server, meaning it will:

1. Declare its own wifi access point;
2. Instantiate an HTTP server;
3. Wait for an HTTP request and perform an action based on that request.

The second ESP will serve as a client, meaning it will:

1. Try to connect to the server's wifi access point (for 1 min, green LED blinking);
2. Turn on the green LED to indicate that the connection to the server is established;
3. Wait for a state change on GPIO_2 port (the IR cell);
4. Send an HTTP request to the server with the GPIO_2 port state;

## Diagrams

![Client diagram](/images/scheme-client.png)

![Server diagram](/images/scheme-server.png)

## Code

[Client](https://github.com/Wifsimster/soft-ap-client) | [Server](https://github.com/Wifsimster/soft-ap)

## Realization

![Client image](/images/image_client.jpg)

![Server image](/images/image_server.jpg)
