export type Pitanje = { pitanje: string; odgovor: string };

export type Usluga = {
  slug: string;
  naziv: string;
  kratko: string;
  title: string;
  description: string;
  h1: string;
  uvod: string;
  sekcije: { naslov: string; tekst: string[] }[];
  lista: { naslov: string; stavke: string[] };
  pitanja: Pitanje[];
  slika: 'bok' | 'automobil' | 'karavan' | 'havarija' | 'banovci';
};

export const usluge: Usluga[] = [
  {
    slug: 'slepanje-vozila',
    naziv: 'Šlepanje vozila',
    kratko: 'Automobili, kombiji i motori posle kvara ili udesa – prevozimo ih do servisa, kuće ili otpada.',
    title: 'Šlepanje vozila 0–24h | Šlep Stojanović Stari Banovci',
    description:
      'Šlepanje automobila, kombija i motora posle kvara ili udesa, 0–24h. Stari Banovci, Pazova, Batajnica, Zemun, Beograd. Pozovite 063 55 85 81.',
    h1: 'Šlepanje vozila 0–24h',
    uvod:
      'Vozilo vam je stalo, neće da upali ili je oštećeno u udesu? Dolazimo šlep vozilom sa platformom, utovarujemo ga i prevozimo tamo gde vam treba – do servisa, do kuće ili do otpada.',
    sekcije: [
      {
        naslov: 'Kako izgleda šlepanje',
        tekst: [
          'Pozovete nas na 063 55 85 81 i kažete gde se nalazite i šta se desilo sa vozilom. Ako ne znate tačnu adresu, pošaljite lokaciju preko Vibera ili WhatsApp-a.',
          'Vozilo utovarujemo na platformu i pričvršćujemo ga, pa se prevozi bez vožnje na sopstvenim točkovima. Tako se dodatno ne opterećuju menjač ni kočnice.',
        ],
      },
      {
        naslov: 'Šlepanje posle udesa',
        tekst: [
          'Prevozimo i havarisana vozila koja ne mogu da se kreću. Vozilo možemo odvesti u servis, na parking ili na adresu koju vi odredite.',
        ],
      },
    ],
    lista: {
      naslov: 'Šta prevozimo',
      stavke: [
        'Putnička vozila – limuzine, hečbek, karavan, SUV',
        'Kombi vozila i laka dostavna vozila',
        'Motocikle i skutere',
        'Neispravna i havarisana vozila',
        'Neregistrovana vozila',
        'Vozila do servisa ili na tehnički pregled',
      ],
    },
    pitanja: [
      {
        pitanje: 'Da li šlepujete neregistrovana vozila?',
        odgovor: 'Da. Neregistrovano vozilo prevozimo na platformi, pa nije potrebno da bude registrovano za vožnju.',
      },
      {
        pitanje: 'Da li mogu da se vozim u šlep vozilu?',
        odgovor: 'Da, u kabini ima mesta za vozača vozila koje prevozimo.',
      },
    ],
    slika: 'karavan',
  },
  {
    slug: 'pomoc-na-putu',
    naziv: 'Pomoć na putu 0–24h',
    kratko: 'Kvar na putu ili autoputu, danju i noću, svakog dana u nedelji.',
    title: 'Pomoć na putu 0–24h | Šlep Stojanović – Srem i Beograd',
    description:
      'Pomoć na putu 0–24h, svakog dana. Kvar na putu ili autoputu Beograd–Novi Sad? Pozovite Šlep Stojanović: 063 55 85 81 (Viber, WhatsApp).',
    h1: 'Pomoć na putu 0–24h',
    uvod:
      'Kvar ne bira vreme. Dostupni smo 24 sata dnevno, 7 dana u nedelji – i radnim danom i vikendom, i noću i praznikom.',
    sekcije: [
      {
        naslov: 'Šta da radite kada vam stane vozilo',
        tekst: [
          'Sklonite vozilo što dalje od kolovoza, ako je moguće. Uključite sva četiri pokazivača pravca i postavite sigurnosni trougao.',
          'Obucite fluorescentni prsluk pre nego što izađete iz vozila. Na autoputu se sklonite iza zaštitne ograde.',
          'Pozovite nas na 063 55 85 81 ili pošaljite lokaciju preko Vibera ili WhatsApp-a.',
        ],
      },
      {
        naslov: 'Pomoć na autoputu',
        tekst: [
          'Stari Banovci su blizu autoputa Beograd–Novi Sad, pa dežuramo i na tom delu puta – od Beograda prema Inđiji.',
        ],
      },
    ],
    lista: {
      naslov: 'Kada nas zovu',
      stavke: [
        'Vozilo neće da upali',
        'Kvar motora ili menjača',
        'Pukla guma ili oštećen točak',
        'Saobraćajna nezgoda',
        'Vozilo sletelo sa puta',
        'Kvar na autoputu',
      ],
    },
    pitanja: [
      {
        pitanje: 'Da li radite noću i vikendom?',
        odgovor: 'Da. Radimo 0–24h, svakog dana u godini, uključujući vikende i praznike.',
      },
      {
        pitanje: 'Kako da vam pošaljem lokaciju?',
        odgovor: 'Najlakše preko Vibera ili WhatsApp-a na broj 063 55 85 81 – opcija „Pošalji lokaciju".',
      },
    ],
    slika: 'havarija',
  },
  {
    slug: 'transport-mehanizacije',
    naziv: 'Transport tereta i mehanizacije',
    kratko: 'Prevoz manje mehanizacije, mašina i tereta na platformi.',
    title: 'Transport tereta i mehanizacije | Šlep Stojanović',
    description:
      'Prevoz manje mehanizacije, mašina i tereta na platformi – Srem, Beograd, cela Srbija i Evropa. Šlep Stojanović, 063 55 85 81.',
    h1: 'Transport tereta i mehanizacije',
    uvod:
      'Osim vozila, na platformi prevozimo i manju mehanizaciju, mašine i drugi teret – po Sremu, Beogradu, Srbiji i Evropi.',
    sekcije: [
      {
        naslov: 'Šta možemo da prevezemo',
        tekst: [
          'Pozovite nas i recite šta treba da se preveze, koliko je teško i koliko je veliko. Odmah ćemo vam reći da li teret može na našu platformu.',
        ],
      },
    ],
    lista: {
      naslov: 'Primeri tereta',
      stavke: [
        'Manja građevinska mehanizacija',
        'Poljoprivredne mašine manjih dimenzija',
        'Viljuškari',
        'Prikolice i kamp prikolice',
        'Čamci na prikolici',
        'Paletni i drugi teret',
      ],
    },
    pitanja: [
      {
        pitanje: 'Kako da znam da li moj teret može da se preveze?',
        odgovor: 'Pozovite nas ili pošaljite sliku tereta preko Vibera ili WhatsApp-a, uz okvirne dimenzije i težinu.',
      },
    ],
    slika: 'banovci',
  },
  {
    slug: 'prevoz-srbija-evropa',
    naziv: 'Prevoz po Srbiji i Evropi',
    kratko: 'Međugradski prevoz vozila i dovoz automobila iz inostranstva.',
    title: 'Prevoz vozila po Srbiji i Evropi | Šlep Stojanović',
    description:
      'Prevoz vozila po celoj Srbiji i Evropi – dovoz automobila iz inostranstva i međugradski šlep. Šlep Stojanović, Stari Banovci: 063 55 85 81.',
    h1: 'Prevoz vozila po Srbiji i Evropi',
    uvod:
      'Ne radimo samo lokalno. Vozila prevozimo po celoj Srbiji i po Evropi – od međugradskog šlepa do dovoza automobila iz inostranstva.',
    sekcije: [
      {
        naslov: 'Dovoz automobila iz inostranstva',
        tekst: [
          'Kupili ste automobil u inostranstvu ili vam je vozilo ostalo u kvaru van Srbije? Dogovorite sa nama prevoz – preuzimamo vozilo i dovozimo ga na adresu koju odredite.',
          'Za prevoz iz inostranstva javite nam se unapred, da dogovorimo termin i papire potrebne za prelazak granice.',
        ],
      },
      {
        naslov: 'Međugradski prevoz po Srbiji',
        tekst: [
          'Prevozimo vozila između gradova u Srbiji – do servisa u drugom gradu, posle kupovine vozila ili pri selidbi.',
        ],
      },
    ],
    lista: {
      naslov: 'Najčešće rute',
      stavke: [
        'Srem i Beograd ↔ cela Srbija',
        'Dovoz vozila iz zemalja EU',
        'Zemlje regiona',
        'Vraćanje vozila ostalog u kvaru u inostranstvu',
      ],
    },
    pitanja: [
      {
        pitanje: 'Da li prevozite vozila iz Nemačke, Austrije i drugih zemalja?',
        odgovor: 'Da, prevozimo vozila iz zemalja Evrope. Javite nam se unapred da dogovorimo termin.',
      },
    ],
    slika: 'automobil',
  },
];
