// Svaka lokacija ima svoj, poseban tekst – ne kopirati isti tekst sa drugim imenom mesta.
export type Lokacija = {
  slug: string;
  mesto: string; // nominativ: "Stari Banovci"
  uMestu: string; // lokativ: "u Starim Banovcima"
  title: string;
  description: string;
  tekst: string[];
  okolina: string[];
  grupa: 'Srem' | 'Beograd' | 'Autoput';
};

export const lokacije: Lokacija[] = [
  {
    slug: 'stari-banovci',
    mesto: 'Stari Banovci',
    uMestu: 'u Starim Banovcima',
    title: 'Šlep služba Stari Banovci 0–24h | Šlep Stojanović',
    description:
      'Šlep služba i pomoć na putu u Starim Banovcima, 0–24h. Lokalna šlep služba sa sedištem u Banovcima. Pozovite 063 55 85 81.',
    tekst: [
      'Stari Banovci su naša baza – ovde živimo i odavde polazimo na svaku intervenciju. Za vas to znači da šlep ne dolazi iz Beograda, nego iz vašeg mesta.',
      'Šlepujemo vozila sa svih ulica u Banovcima, sa obale Dunava i vikend naselja, kao i sa puteva prema Novoj Pazovi i Batajnici.',
    ],
    okolina: ['Novi Banovci', 'Nova Pazova', 'Belegiš', 'Batajnica'],
    grupa: 'Srem',
  },
  {
    slug: 'novi-banovci',
    mesto: 'Novi Banovci',
    uMestu: 'u Novim Banovcima',
    title: 'Šlep služba Novi Banovci 0–24h | Šlep Stojanović',
    description:
      'Šlep služba u Novim Banovcima – šlepovanje vozila i pomoć na putu 0–24h. Komšijska šlep služba iz Starih Banovaca: 063 55 85 81.',
    tekst: [
      'Novi Banovci su odmah do Starih Banovaca, gde nam je sedište – praktično smo komšije. Zato smo prvi izbor kada vam vozilo stane u Novim Banovcima.',
      'Prevozimo vozila do servisa u Banovcima, Pazovi, Batajnici ili Zemunu, ili do adrese koju vi odredite.',
    ],
    okolina: ['Stari Banovci', 'Nova Pazova', 'Batajnica'],
    grupa: 'Srem',
  },
  {
    slug: 'batajnica',
    mesto: 'Batajnica',
    uMestu: 'u Batajnici',
    title: 'Šlep služba Batajnica 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Batajnica – šlepovanje vozila i pomoć na putu 0–24h, i na autoputu Beograd–Novi Sad. Pozovite Šlep Stojanović: 063 55 85 81.',
    tekst: [
      'Batajnica je prvo naselje Beograda na putu iz Banovaca, pa nam je ovaj deo grada stalno usput. Dolazimo u Batajnicu, Zemun Polje i industrijsku zonu.',
      'Pomažemo i na delu autoputa Beograd–Novi Sad kod Batajnice, gde se kvarovi često dešavaju u gustom saobraćaju.',
    ],
    okolina: ['Zemun', 'Novi Banovci', 'Stari Banovci', 'Nova Pazova'],
    grupa: 'Beograd',
  },
  {
    slug: 'nova-pazova',
    mesto: 'Nova Pazova',
    uMestu: 'u Novoj Pazovi',
    title: 'Šlep služba Nova Pazova 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Nova Pazova – šlepovanje automobila, kombija i motora, pomoć na putu 0–24h. Šlep Stojanović iz Banovaca: 063 55 85 81.',
    tekst: [
      'Nova Pazova je naš najbliži veći grad, a magistralni put i autoput prolaze tik uz nju. Šlepujemo vozila iz samog grada, iz industrijske zone i sa prilaznih puteva.',
      'Vozilo možemo odvesti do servisa u Pazovi, ili dalje – u Beograd, Novi Sad ili bilo gde u Srbiji.',
    ],
    okolina: ['Stara Pazova', 'Stari Banovci', 'Novi Banovci', 'Batajnica'],
    grupa: 'Srem',
  },
  {
    slug: 'stara-pazova',
    mesto: 'Stara Pazova',
    uMestu: 'u Staroj Pazovi',
    title: 'Šlep služba Stara Pazova 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Stara Pazova – šlep i pomoć na putu 0–24h u celoj opštini Stara Pazova. Šlep Stojanović, Stari Banovci: 063 55 85 81.',
    tekst: [
      'Stara Pazova je centar naše opštine, a Banovci su deo nje. Radimo u celoj opštini Stara Pazova – od samog grada do svih okolnih sela.',
      'Šlepujemo vozila iz grada, sa puteva prema Inđiji i Novoj Pazovi i sa autoputa koji prolazi pored Stare Pazove.',
    ],
    okolina: ['Nova Pazova', 'Inđija', 'Stari Banovci', 'Belegiš'],
    grupa: 'Srem',
  },
  {
    slug: 'indjija',
    mesto: 'Inđija',
    uMestu: 'u Inđiji',
    title: 'Šlep služba Inđija 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Inđija – šlepovanje vozila i pomoć na putu 0–24h, Inđija i autoput prema Novom Sadu. Šlep Stojanović: 063 55 85 81.',
    tekst: [
      'Inđija je na istom autoputu kao i Pazova, pa do vas stižemo direktno autoputem. Radimo u Inđiji i okolnim selima.',
      'Ako vam vozilo stane na autoputu kod Inđije, pozovite nas – prevešćemo ga do servisa u Inđiji, Pazovi, Beogradu ili Novom Sadu.',
    ],
    okolina: ['Stara Pazova', 'Slankamen', 'Surduk'],
    grupa: 'Srem',
  },
  {
    slug: 'belegis-surduk-slankamen',
    mesto: 'Belegiš, Surduk i Slankamen',
    uMestu: 'u Belegišu, Surduku i Slankamenu',
    title: 'Šlep služba Belegiš, Surduk, Slankamen 0–24h | Šlep Stojanović',
    description:
      'Šlep služba za Belegiš, Surduk, Stari i Novi Slankamen – šlepovanje i pomoć na putu 0–24h. Šlep Stojanović iz Starih Banovaca: 063 55 85 81.',
    tekst: [
      'Podunavska sela uz Dunav – Belegiš, Surduk, Stari Slankamen i Novi Slankamen – nalaze se na putu koji ide iz Starih Banovaca uz reku. Zato do njih dolazimo direktno, bez obilaska kroz Beograd.',
      'Šlepujemo vozila iz sela, sa vikend naselja i sa puteva uz Dunav, i prevozimo ih do servisa u Pazovi, Inđiji ili Beogradu.',
    ],
    okolina: ['Stari Banovci', 'Stara Pazova', 'Inđija'],
    grupa: 'Srem',
  },
  {
    slug: 'zemun',
    mesto: 'Zemun',
    uMestu: 'u Zemunu',
    title: 'Šlep služba Zemun 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Zemun – šlepovanje vozila i pomoć na putu 0–24h u Zemunu, Zemun Polju i okolini. Šlep Stojanović: 063 55 85 81.',
    tekst: [
      'Zemun je na našem putu ka Beogradu, preko Batajnice. Radimo u celom Zemunu – od starog jezgra do Zemun Polja, Ugrinovaca i Altine.',
      'Prevozimo vozila do servisa i ovlašćenih zastupnika u Zemunu i na Novom Beogradu.',
    ],
    okolina: ['Novi Beograd', 'Batajnica', 'Beograd'],
    grupa: 'Beograd',
  },
  {
    slug: 'novi-beograd',
    mesto: 'Novi Beograd',
    uMestu: 'na Novom Beogradu',
    title: 'Šlep služba Novi Beograd 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Novi Beograd – šlepovanje automobila i pomoć na putu 0–24h. Šlep Stojanović: 063 55 85 81 (Viber, WhatsApp).',
    tekst: [
      'Na Novom Beogradu radimo u svim blokovima, na bulevarima i na auto-putu kroz grad. Šlepujemo vozila sa ulica, parkinga i iz garaža na otvorenom.',
      'Vozila sa Novog Beograda vozimo do servisa u Beogradu, ali i dalje – po Sremu, Srbiji i Evropi.',
    ],
    okolina: ['Zemun', 'Beograd', 'Batajnica'],
    grupa: 'Beograd',
  },
  {
    slug: 'beograd',
    mesto: 'Beograd',
    uMestu: 'u Beogradu',
    title: 'Šlep služba Beograd 0–24h | Šlep Stojanović',
    description:
      'Šlep služba Beograd – šlepovanje vozila, pomoć na putu i prevoz po Srbiji i Evropi, 0–24h. Šlep Stojanović: 063 55 85 81.',
    tekst: [
      'Pored Zemuna, Novog Beograda i Batajnice, dolazimo i u ostale delove Beograda. Pozovite nas i recite gde se nalazite.',
      'Iz Beograda prevozimo vozila i u druge gradove Srbije i u inostranstvo.',
    ],
    okolina: ['Zemun', 'Novi Beograd', 'Batajnica'],
    grupa: 'Beograd',
  },
  {
    slug: 'autoput-beograd-novi-sad',
    mesto: 'Autoput Beograd–Novi Sad',
    uMestu: 'na autoputu Beograd–Novi Sad',
    title: 'Šlep na autoputu Beograd–Novi Sad 0–24h | Šlep Stojanović',
    description:
      'Kvar na autoputu Beograd–Novi Sad? Šlep i pomoć na putu 0–24h na deonici Beograd – Batajnica – Pazova – Inđija. Pozovite 063 55 85 81.',
    tekst: [
      'Sedište nam je u Starim Banovcima, blizu autoputa Beograd–Novi Sad. Najčešće intervenišemo na deonici od Beograda, preko Batajnice i Pazove, do Inđije.',
      'Ako vam vozilo stane na autoputu: uključite sva četiri pokazivača pravca, obucite prsluk, postavite trougao i sklonite se iza zaštitne ograde. Zatim nas pozovite i recite smer i približno mesto (najbliži izlaz ili kilometar).',
    ],
    okolina: ['Batajnica', 'Nova Pazova', 'Stara Pazova', 'Inđija'],
    grupa: 'Autoput',
  },
];

export const nadjiLokaciju = (mesto: string) => lokacije.find((l) => l.mesto === mesto || l.mesto.includes(mesto));
