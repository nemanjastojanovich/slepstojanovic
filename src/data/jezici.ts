// Parovi stranica srpski <-> engleski (za hreflang i dugme SR/EN).
export type Jezik = 'sr' | 'en';

export const parovi: { sr: string; en: string }[] = [
  { sr: '/', en: '/en' },
  { sr: '/lokacije/autoput-beograd-novi-sad', en: '/en/highway-towing' },
  { sr: '/usluge/prevoz-srbija-evropa', en: '/en/car-transport-europe' },
];

const normalizuj = (p: string) => {
  const s = p.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '');
  return s === '' ? '/' : s;
};

export const nadjiPar = (putanja: string) => {
  const p = normalizuj(putanja);
  return parovi.find((x) => x.sr === p || x.en === p);
};

export const jezikPutanje = (putanja: string): Jezik => (normalizuj(putanja).startsWith('/en') ? 'en' : 'sr');
