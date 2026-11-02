import bok from '../assets/slike/slep-stojanovic-kamion-bok.jpg';
import automobil from '../assets/slike/slep-stojanovic-prevoz-automobila.jpg';
import karavan from '../assets/slike/slep-stojanovic-slepovanje-karavana.jpg';
import havarija from '../assets/slike/slep-stojanovic-slepovanje-havarisanog-vozila.jpg';
import banovci from '../assets/slike/slep-stojanovic-kamion-stari-banovci.jpg';
import logo from '../assets/slike/logo-slep-stojanovic.jpg';

export const slike = {
  bok: { src: bok, alt: 'Šlep vozilo Šlep Stojanović sa brojem telefona 063 55 85 81' },
  automobil: { src: automobil, alt: 'Prevoz automobila na platformi šlep vozila Šlep Stojanović' },
  karavan: { src: karavan, alt: 'Šlepanje belog karavana – Šlep Stojanović' },
  havarija: { src: havarija, alt: 'Šlepanje neispravnog automobila na platformi' },
  banovci: { src: banovci, alt: 'Šlep vozilo Šlep Stojanović u Starim Banovcima' },
};

export const logoSlika = logo;

export const galerija = [slike.automobil, slike.karavan, slike.havarija, slike.bok, slike.banovci];
