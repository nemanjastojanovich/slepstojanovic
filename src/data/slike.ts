import bok from '../assets/slike/slep-stojanovic-kamion-bok.jpg';
import automobil from '../assets/slike/slep-stojanovic-prevoz-automobila.jpg';
import karavan from '../assets/slike/slep-stojanovic-slepovanje-karavana.jpg';
import havarija from '../assets/slike/slep-stojanovic-slepovanje-havarisanog-vozila.jpg';
import banovci from '../assets/slike/slep-stojanovic-kamion-stari-banovci.jpg';
import noviSad from '../assets/slike/slep-stojanovic-nocni-prevoz-indjija-novi-sad.jpg';
import nocna from '../assets/slike/slep-stojanovic-nocna-intervencija-karavan.jpg';
import platforma from '../assets/slike/slep-stojanovic-slep-vozilo-platforma.jpg';
import pazovaUtovar from '../assets/slike/slep-stojanovic-utovar-autoput-stara-pazova.jpg';
import noviPazarPrevoz from '../assets/slike/slep-stojanovic-prevoz-vozila-beograd-novi-pazar.jpg';
import noviPazarIstovar from '../assets/slike/slep-stojanovic-istovar-novi-pazar.jpg';
import nbg from '../assets/slike/slep-stojanovic-novi-beograd-blok-70.jpg';
import nbgUtovar from '../assets/slike/slep-stojanovic-novi-beograd-blok-70-utovar.jpg';
import kanal from '../assets/slike/slep-stojanovic-indjija-izvlacenje-iz-kanala-1.jpg';
import kanalUtovar from '../assets/slike/slep-stojanovic-indjija-izvuceno-vozilo-1.jpg';
import kombiUgrinovci from '../assets/slike/slep-stojanovic-ugrinovci-kombi.jpg';
import logo from '../assets/slike/logo-slep-stojanovic.jpg';

type Slika = { src: ImageMetadata; alt: string; opis?: string };

export const slike = {
  bok: { src: bok, alt: 'Šlep vozilo Šlep Stojanović sa brojem telefona 063 55 85 81' },
  automobil: { src: automobil, alt: 'Prevoz automobila na platformi šlep vozila Šlep Stojanović' },
  karavan: { src: karavan, alt: 'Šlepanje belog karavana – Šlep Stojanović' },
  havarija: { src: havarija, alt: 'Šlepanje neispravnog automobila na platformi' },
  banovci: { src: banovci, alt: 'Šlep vozilo Šlep Stojanović u Starim Banovcima' },
  noviSad: {
    src: noviSad,
    alt: 'Noćni prevoz automobila u kvaru od Inđije do Novog Sada – Šlep Stojanović',
    opis: 'Noćna intervencija: kvar kod Inđije, vozilo prevezeno do Novog Sada.',
  },
  nocna: {
    src: nocna,
    alt: 'Noćno šlepanje karavana na platformi šlep vozila Šlep Stojanović',
    opis: 'Noćno šlepanje karavana – radimo 0–24h.',
  },
  platforma: {
    src: platforma,
    alt: 'Šlep vozilo sa platformom Šlep Stojanović iz Starih Banovaca',
    opis: 'Naše šlep vozilo sa platformom, Stari Banovci.',
  },
  pazovaUtovar: {
    src: pazovaUtovar,
    alt: 'Utovar Škode Yeti na šlep vozilo na autoputu kod Stare Pazove – Šlep Stojanović',
    opis: 'Utovar na autoputu kod Stare Pazove – vozilo ide za Novi Pazar.',
  },
  noviPazarPrevoz: {
    src: noviPazarPrevoz,
    alt: 'Međugradski prevoz vozila na relaciji Beograd – Novi Pazar, Šlep Stojanović',
    opis: 'Međugradski prevoz vozila: Beograd – Novi Pazar.',
  },
  noviPazarIstovar: {
    src: noviPazarIstovar,
    alt: 'Istovar Škode Yeti u Novom Pazaru posle međugradskog prevoza – Šlep Stojanović',
    opis: 'Istovar u Novom Pazaru.',
  },
  nbg: {
    src: nbg,
    alt: 'Šlepanje automobila sa Novog Beograda, Blok 70, do Starih Banovaca – Šlep Stojanović',
    opis: 'Novi Beograd, Blok 70 → Stari Banovci.',
  },
  nbgUtovar: {
    src: nbgUtovar,
    alt: 'Automobil utovaren na platformu šlep vozila na Novom Beogradu – Šlep Stojanović',
    opis: 'Utovar na Novom Beogradu, uveče po kiši.',
  },
  kanal: {
    src: kanal,
    alt: 'Izvlačenje automobila iz kanala sa vodom u Inđiji – Šlep Stojanović',
    opis: 'Inđija: izvlačenje automobila iz kanala pod vodom, noću.',
  },
  kanalUtovar: {
    src: kanalUtovar,
    alt: 'Automobil izvučen iz kanala i utovaren na šlep vozilo u Inđiji – Šlep Stojanović',
    opis: 'Isto vozilo, izvučeno i utovareno na platformu.',
  },
  kombiUgrinovci: {
    src: kombiUgrinovci,
    alt: 'Šlepanje pokvarenog kombija od isključenja sa autoputa kod Ikarbusa do Ugrinovaca – Šlep Stojanović',
    opis: 'Kombi u kvaru: isključenje sa autoputa kod Ikarbusa → Ugrinovci.',
  },
} satisfies Record<string, Slika>;

export const logoSlika = logo;

export const galerija: Slika[] = [
  slike.kanal,
  slike.kombiUgrinovci,
  slike.nbg,
  slike.pazovaUtovar,
  slike.kanalUtovar,
  slike.noviPazarIstovar,
  slike.nbgUtovar,
  slike.noviSad,
  slike.noviPazarPrevoz,
  slike.nocna,
  slike.platforma,
  slike.automobil,
  slike.karavan,
  slike.havarija,
  slike.bok,
  slike.banovci,
];
