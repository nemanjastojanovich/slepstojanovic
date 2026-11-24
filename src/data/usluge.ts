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
  slika: 'bok' | 'automobil' | 'karavan' | 'havarija' | 'banovci' | 'madjarska';
};

export const usluge: Usluga[] = [
  {
    slug: 'slepanje-vozila',
    naziv: 'Šlepanje vozila',
    kratko: 'Automobili, kombiji, motori i oldtajmeri posle kvara ili udesa – prevozimo ih do servisa, kuće ili otpada.',
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
        'Vozila bez ključa, sa zaključanim volanom ili blokiranim točkovima',
        'Oldtajmere i vozila koja ne smeju da se vuku',
        'Vozila do servisa ili na tehnički pregled',
      ],
    },
    pitanja: [
      {
        pitanje: 'Da li šlepujete neregistrovana vozila?',
        odgovor: 'Da. Neregistrovano vozilo prevozimo na platformi, pa nije potrebno da bude registrovano za vožnju.',
      },
      {
        pitanje: 'Možete li da prevezete vozilo bez ključa?',
        odgovor:
          'Da. Vozilo sa zaključanim volanom, blokiranim menjačem ili ručnom kočnicom utovarujemo pomoću hidrauličnih kolica za točkove, bez oštećenja. Pri preuzimanju tražimo saobraćajnu dozvolu i ličnu kartu vlasnika.',
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
      'Pomoć na putu 0–24h, svakog dana. Kvar na putu ili autoputu? Pozovite Šlep Stojanović: 063 55 85 81 (Viber, WhatsApp).',
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
          'Stari Banovci su između dva autoputa, pa najbrže stižemo na autoput Beograd–Novi Sad (Batajnica, Pazova, Inđija) i na autoput Beograd–Zagreb (Dobanovci, Surčin, Šimanovci, Pećinci). Dolazimo i dalje – do Novog Sada, Rume, granice i po celoj Srbiji.',
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
        'Vozilo sletelo sa puta ili u kanal – izvlačimo ga vitlom',
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
    kratko: 'Prevoz traktora, poljoprivrednih mašina, mehanizacije i tereta na platformi.',
    title: 'Transport tereta, mehanizacije i traktora | Šlep Stojanović',
    description:
      'Prevoz traktora, poljoprivrednih mašina, mini bagera i mehanizacije na platformi – Srem, Beograd, Srbija i Evropa. Šlep Stojanović, 063 55 85 81.',
    h1: 'Transport tereta i mehanizacije',
    uvod:
      'Osim vozila, na platformi prevozimo i traktore, poljoprivredne mašine, mini bagere, mehanizaciju i drugi teret – po Sremu, Beogradu, Srbiji i Evropi.',
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
        'Mini bageri i građevinska mehanizacija',
        'Traktori i motokultivatori',
        'Poljoprivredne mašine',
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
    kratko: 'Šlepanje vozila u inostranstvo i iz inostranstva, međugradski prevoz po Srbiji.',
    title: 'Šlepanje vozila u inostranstvo i po Srbiji | Šlep Stojanović',
    description:
      'Šlepanje vozila u inostranstvo i iz inostranstva (Mađarska, Hrvatska, EU) i međugradski prevoz po Srbiji. Cena unapred. Šlep Stojanović: 063 55 85 81.',
    h1: 'Šlepanje vozila u inostranstvo i po Srbiji',
    uvod:
      'Ne radimo samo lokalno. Šlepujemo vozila u inostranstvo i iz inostranstva i prevozimo ih po celoj Srbiji – od međugradskog šlepa do dovoza automobila iz Evrope.',
    sekcije: [
      {
        naslov: 'Dovoz automobila iz inostranstva',
        tekst: [
          'Kupili ste automobil u inostranstvu ili vam je vozilo ostalo u kvaru van Srbije? Dogovorite sa nama prevoz – preuzimamo vozilo i dovozimo ga na adresu koju odredite.',
          'Za prevoz iz inostranstva javite nam se unapred, da dogovorimo termin i papire potrebne za prelazak granice.',
        ],
      },
      {
        naslov: 'Primer: iz Mađarske do Zemuna',
        tekst: [
          'Vozilo je stalo na putu ka Srbiji, oko 30 km posle graničnog prelaza Horgoš, kod Segedina. Preuzeli smo ga na pumpi, utovarili na platformu i iste noći bezbedno dovezli do Zemuna.',
          'Ako vam se vozilo pokvari u inostranstvu ili blizu granice (Horgoš, Kelebija, Batrovci), a treba da stigne do Beograda ili Srema, javite se – dogovaramo termin i cenu pre polaska.',
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
        'Mađarska, Hrvatska i zemlje regiona ↔ Beograd i Srem',
        'Granični prelazi Horgoš, Kelebija i Batrovci',
        'Dovoz vozila iz zemalja EU',
        'Vraćanje vozila ostalog u kvaru u inostranstvu',
      ],
    },
    pitanja: [
      {
        pitanje: 'Da li prevozite vozila iz Nemačke, Austrije i drugih zemalja?',
        odgovor: 'Da, prevozimo vozila iz zemalja Evrope. Javite nam se unapred da dogovorimo termin.',
      },
      {
        pitanje: 'Koliko košta šlepanje vozila u inostranstvo?',
        odgovor: 'Cena zavisi od ukupne kilometraže, putarina i prelaska granice. Pošaljite nam odakle i dokle treba da se preveze vozilo, pa vam kažemo tačnu cenu pre polaska.',
      },
    ],
    slika: 'madjarska',
  },
];
