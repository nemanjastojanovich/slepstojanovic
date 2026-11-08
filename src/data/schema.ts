import { firma } from './firma';
import type { Pitanje } from './usluge';
import { svaMesta } from './podrucje';

const id = `${firma.sajt}/#firma`;

export const schemaFirma = () => ({
  '@context': 'https://schema.org',
  '@type': ['AutomotiveBusiness', 'EmergencyService'],
  '@id': id,
  name: firma.ime,
  legalName: firma.poslovnoIme,
  url: firma.sajt,
  logo: `${firma.sajt}/apple-touch-icon.png`,
  image: `${firma.sajt}/og-image.jpg`,
  telephone: firma.telefonMedjunarodni,
  email: firma.email,
  vatID: firma.pib,
  taxID: firma.pib,
  address: {
    '@type': 'PostalAddress',
    streetAddress: firma.adresa.ulica,
    postalCode: firma.adresa.postanskiBroj,
    addressLocality: firma.adresa.mesto,
    addressRegion: firma.adresa.opstina,
    addressCountry: firma.adresa.drzava,
  },
  geo: { '@type': 'GeoCoordinates', latitude: firma.geo.lat, longitude: firma.geo.lng },
  hasMap: firma.mreze.googleMape,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [...svaMesta, 'Srbija', 'Evropa'],
  sameAs: [firma.mreze.instagram, firma.mreze.facebook, firma.mreze.googleMape],
});

export const schemaUsluga = (
  naziv: string,
  opis: string,
  url: string,
  podrucje: string[] = ['Srem', 'Beograd', 'Srbija', 'Evropa'],
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: naziv,
  description: opis,
  url,
  serviceType: naziv,
  provider: { '@id': id },
  areaServed: podrucje,
});

export const schemaPitanja = (pitanja: Pitanje[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pitanja.map((p) => ({
    '@type': 'Question',
    name: p.pitanje,
    acceptedAnswer: { '@type': 'Answer', text: p.odgovor },
  })),
});

export type Mrvica = { naziv: string; url: string };

export const schemaMrvice = (mrvice: Mrvica[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: mrvice.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: m.naziv,
    item: new URL(m.url, firma.sajt).href,
  })),
});
