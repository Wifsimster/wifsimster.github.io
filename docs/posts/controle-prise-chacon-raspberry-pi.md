---
title: Contrôle de prise Chacon DIO First via Raspberry Pi
date: 2014-02-25
description: Premier article de domotique : contrôle de prises Chacon DIO First via un Raspberry Pi et un émetteur 433MHz.
tags:
  - Raspberry-Pi
  - DIY
---

Bonjour,

C'est donc mon premier article de domotique et également mon premier montage.

Cette article s'appuie sur les deux articles suivant :

- [How to control dio devices with a raspberry pi](http://www.homautomation.org/2013/10/09/how-to-control-di-o-devices-with-a-raspberry/);
- [Raspberry Pi 12 – Allumer des prises à distance](http://blog.idleman.fr/raspberry-pi-12-allumer-des-prises-distance/).

## Introduction

J'ai commencé depuis quelques temps à m'amuser à intégrer [S.A.R.A.H.](http://encausse.wordpress.com/s-a-r-a-h/) dans la maison via un media center maison.  
Pour information, S.A.R.A.H. permet de communiquer avec l'ensemble des objets connectés de la maison via requête HTTP à l'aide de la voix.

J'ai fait l'acquisition de trois prises [Chacon DIO First](http://www.amazon.fr/prises-avec-t%C3%A9l%C3%A9commande-canaux-Chacon/dp/B005LKMAW0/ref=sr_1_1?ie=UTF8&qid=1393325060&sr=8-1&keywords=chacon+dio) avec télécommande pour 30€ et d'un kit [récepteur/émetteur 433MHz](http://www.amazon.fr/gp/product/B00G23NW6S/ref=oh_details_o03_s00_i00?ie=UTF8&psc=1) pour 3.45€ sur Amazon, il y a de ça une semaine.

Je possédais déjà un Raspberry Pi, je ne pense pas que ce soit très difficile à trouver, tellement c'est répandu maintenant !

![Chacon](/images/chacon.jpeg)

## Principe & fonctionnement

Les prises Chacon DIO First fonctionne via radio fréquence en 433MHz.  
Le principe est tout simple, reproduire les donnés émises par la télécommande via l'émétteur 433MHz couplé au Raspberry Pi.

La télécommande communique avec les prises via le protocole Easy Home, ce protocole compose le signal sous 32 bits ainsi :

- 26 premiers bits correspondant à l'identifiant de la télécommande;
- 27 ème bit correspondant au numéro du groupe (non importante ici);
- 28 ème bit correspondant à l'état de la prise (ON=1 & OFF=0);
- 29 à 32 èmes bits correspondant au numéro de la prise à commandée.

Pour de meilleure explication, je vous réfère au tutoriel d'[Idleman 10](http://blog.idleman.fr/raspberry-pi-10-commander-le-raspberry-pi-par-radio/) sur le Raspberry Pi.

## Montage

Si vous n'avez jamais jouer avec les ports GPIO du Raspberry Pi voici le montage à adopté pour faire fonctionner l'émetteur 433MHz.

![Schéma Raspberry Pi](/images/RPi-copie-1024x742.jpg)

Vous pouvez voir sur le montage l'émetteur mais également le récepteur, ce n'est pas utile pour ce que l'on veut faire ici.

Pour l'astuce, un câble de ventilateur PC à trois pins convient parfaitement pour l'émetteur 433MHz ;)

Vous pouvez souder un fil conducteur à l'emplacement réservé à l'antenne (Ant) sur l'émetteur de 17,3cm, si vous voulez vous assurez de la bonne communication avec les prises.

![Émetteur 433MHz](/images/rf433k-300x225.jpg)

## Logiciel

On passe ensuite au niveau logiciel sur le Raspberry Pi.

Il vous faut avant tout chose installer la librairie WiringPi, permettant de simplifier l'accès aux ports GPIO:

Installation de git

```bash
sudo apt-get install git-core
```

Mise à jour de Raspbian

```bash
sudo apt-get update
sudo apt-get upgrade
```

Récupération de WiringPi sur Git

```bash
git clone git://git.drogon.net/wiringPi
```

Récupération des dernières modifications de WiringPi

```bash
cd wiringPi
git pull origin
```

Construction de la librairie WiringPi

```bash
cd wiringPi
./build
```

Le code pour contrôler les prises est à récupéré sur le site d'[Idleman](http://projet.idleman.fr/domopi/data/hcc/hcc.zip) (merci à lui).

Dans ce zip se trouve, une interface web et le code C permettant le contrôle des prises Chacon. On ne s'occupera pas de l'interface web dans cette article.  
Le fichier important est donc radioEmission, si vous voulez jouer avec le code, vous pouvez ouvrir (et modifier) le fichier radioEmission.cpp et recompiler le fichie radioEmission à l'aide de la commande suivante :

```bash
g++ radioEmission.cpp -o radioEmission -lwiringPi
```
