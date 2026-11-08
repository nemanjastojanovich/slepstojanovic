// Sva mesta koja pokrivamo (isto kao područje usluge na Google profilu).
// Za mesta sa svojom stranicom vidi lokacije.ts – ovde je samo spisak.
export const podrucje: { naslov: string; naslovEn: string; mesta: string[] }[] = [
  {
    naslov: 'Opština Stara Pazova',
    naslovEn: 'Stara Pazova municipality',
    mesta: ['Stari Banovci', 'Novi Banovci', 'Nova Pazova', 'Stara Pazova', 'Belegiš', 'Surduk', 'Golubinci', 'Krnješevci', 'Vojka'],
  },
  {
    naslov: 'Opština Inđija',
    naslovEn: 'Inđija municipality',
    mesta: ['Inđija', 'Beška', 'Maradik', 'Krčedin', 'Ljukovo', 'Novi Karlovci', 'Čortanovci', 'Jarkovci', 'Stari Slankamen', 'Novi Slankamen', 'Slankamenački Vinogradi'],
  },
  {
    naslov: 'Pećinci i Ruma',
    naslovEn: 'Pećinci and Ruma',
    mesta: ['Simanovci', 'Popinci', 'Putinci', 'Dobrinci'],
  },
  {
    naslov: 'Beograd',
    naslovEn: 'Belgrade',
    mesta: ['Batajnica', 'Zemun Polje', 'Ugrinovci', 'Zemun', 'Novi Beograd', 'Surčin', 'Dobanovci', 'ostali delovi Beograda'],
  },
  {
    naslov: 'Novi Sad',
    naslovEn: 'Novi Sad',
    mesta: ['Novi Sad (po dogovoru)'],
  },
];

// Za schema podatke (bez dopisa u zagradi).
export const svaMesta = [
  ...new Set(
    podrucje
      .flatMap((g) => g.mesta)
      .filter((m) => !m.startsWith('ostali'))
      .map((m) => m.replace(/ \(.*\)$/, '')),
  ),
  'Beograd',
];

// Za schema podatke: svako mesto sa opštinom/gradom kojem pripada.
const oblast: Record<string, string> = {
  'Opština Stara Pazova': 'Opština Stara Pazova',
  'Opština Inđija': 'Opština Inđija',
  'Pećinci i Ruma': 'Srem',
  Beograd: 'Grad Beograd',
  'Novi Sad': 'Grad Novi Sad',
};

export const mestaSchema = podrucje.flatMap((g) =>
  g.mesta
    .filter((m) => !m.startsWith('ostali'))
    .map((m) => ({
      '@type': 'Place',
      name: m.replace(/ \(.*\)$/, ''),
      containedInPlace: { '@type': 'AdministrativeArea', name: oblast[g.naslov] ?? g.naslov },
    })),
);
