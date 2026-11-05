// Česta pitanja po lokaciji (prikazuju se na stranici lokacije, uz FAQ schema podatke).
// Svako mesto ima svoja pitanja – ne kopirati ista pitanja na sve stranice.
import type { Pitanje } from './usluge';

export const pitanjaLokacija: Record<string, Pitanje[]> = {
  'stari-banovci': [
    { pitanje: 'Da li ste stvarno iz Starih Banovaca?', odgovor: 'Da. Sedište i kamion su nam u Starim Banovcima, u ulici Milana Bolanovića, pa za intervenciju u Banovcima ne dolazimo iz Beograda ni iz drugog grada.' },
    { pitanje: 'Da li dolazite i do vikend naselja uz Dunav?', odgovor: 'Da, dolazimo i do vikend naselja i puteva uz obalu Dunava. Pošaljite nam lokaciju preko Vibera ili WhatsApp-a da vas lakše pronađemo.' },
    { pitanje: 'Gde možete da odvezete vozilo iz Banovaca?', odgovor: 'Do servisa koji vi izaberete – u Banovcima, Pazovi, Batajnici, Zemunu ili Beogradu – ili do vaše kuće. Po dogovoru vozimo i dalje, po Srbiji i Evropi.' },
  ],
  'novi-banovci': [
    { pitanje: 'Da li radite i noću u Novim Banovcima?', odgovor: 'Da, radimo 0–24h, svakog dana, uključujući vikende i praznike.' },
    { pitanje: 'Šta ako mi auto stane na putu između Novih Banovaca i Batajnice?', odgovor: 'Uključite sva četiri pokazivača pravca i pozovite 063 55 85 81. Recite smer i približno mesto, ili nam pošaljite lokaciju preko Vibera ili WhatsApp-a.' },
    { pitanje: 'Da li šlepujete i motore?', odgovor: 'Da. Prevozimo automobile, kombije i motore, kao i neispravna i havarisana vozila.' },
  ],
  batajnica: [
    { pitanje: 'Da li dolazite na autoput kod Batajnice?', odgovor: 'Da, deo autoputa Beograd–Novi Sad kod Batajnice nam je redovno usput. Pri pozivu recite smer (ka Beogradu ili ka Novom Sadu) i najbliži izlaz.' },
    { pitanje: 'Da li radite i u industrijskoj zoni u Batajnici?', odgovor: 'Da, šlepujemo vozila iz industrijske zone, sa parkinga firmi i iz dvorišta.' },
    { pitanje: 'Možete li da prevezete auto iz Batajnice do servisa u Beogradu?', odgovor: 'Da, vozimo do bilo kog servisa ili ovlašćenog zastupnika u Beogradu, ili do adrese koju vi odredite.' },
  ],
  'nova-pazova': [
    { pitanje: 'Da li iz Nove Pazove prevozite i kombije?', odgovor: 'Da. Uz automobile prevozimo i kombije i laka dostavna vozila, kao i motore.' },
    { pitanje: 'Auto mi je u dvorištu i ne pali. Možete li da ga odvezete?', odgovor: 'Da, vozilo ne mora da bude na ulici – dolazimo i u dvorište, ako kamion može da priđe. Ako niste sigurni, pošaljite nam sliku preko Vibera ili WhatsApp-a.' },
    { pitanje: 'Da li pokrivate industrijsku zonu u Novoj Pazovi?', odgovor: 'Da, dolazimo u industrijsku zonu i na prilazne puteve, kao i na magistralni put i autoput pored Nove Pazove.' },
  ],
  'stara-pazova': [
    { pitanje: 'Pokrivate li sela u opštini Stara Pazova?', odgovor: 'Da, radimo u celoj opštini – Stara i Nova Pazova, Stari i Novi Banovci, Belegiš, Surduk, Golubinci, Krnješevci i Vojka.' },
    { pitanje: 'Možete li da prevezete traktor ili poljoprivrednu mašinu?', odgovor: 'Da, prevozimo traktore, poljoprivredne mašine i manju mehanizaciju koja staje na platformu. Pre dolaska nam recite tip i približnu težinu mašine.' },
    { pitanje: 'Kako da vam pošaljem lokaciju?', odgovor: 'Preko Vibera ili WhatsApp-a na 063 55 85 81 – podelite trenutnu lokaciju i odmah znamo gde se nalazite.' },
  ],
  indjija: [
    { pitanje: 'Da li dolazite na autoput kod Inđije?', odgovor: 'Da, intervenišemo na autoputu Beograd–Novi Sad, na deonici od Beograda do Inđije. Pri pozivu recite smer i najbliži izlaz.' },
    { pitanje: 'Možete li da odvezete auto iz Inđije u Novi Sad?', odgovor: 'Da, po dogovoru vozimo vozilo do servisa u Novom Sadu, Beogradu ili bilo gde u Srbiji.' },
    { pitanje: 'Da li dolazite i u sela oko Inđije?', odgovor: 'Da, dolazimo i u okolna sela opštine Inđija. Pri pozivu nam recite tačno mesto ili pošaljite lokaciju.' },
  ],
  'belegis-surduk-slankamen': [
    { pitanje: 'Da li dolazite do vikendica uz Dunav?', odgovor: 'Da, dolazimo do vikend naselja i puteva uz Dunav u Belegišu, Surduku i Slankamenu. Lokacija preko Vibera ili WhatsApp-a nam mnogo pomaže da vas brzo nađemo.' },
    { pitanje: 'Kojim putem dolazite?', odgovor: 'Putem uz Dunav iz Starih Banovaca, bez obilaska kroz Beograd ili Pazovu.' },
    { pitanje: 'Možete li da odvezete vozilo do Beograda?', odgovor: 'Da, vozimo do servisa u Pazovi, Inđiji ili Beogradu, ili do adrese koju vi odredite.' },
  ],
  zemun: [
    { pitanje: 'Da li dolazite i u staro jezgro Zemuna?', odgovor: 'Da, dolazimo i u uže ulice starog Zemuna. Ako je pristup težak, recite nam unapred da procenimo kako da priđemo vozilu.' },
    { pitanje: 'Da li vozite do ovlašćenih servisa?', odgovor: 'Da, vozilo vozimo do servisa ili ovlašćenog zastupnika koga vi izaberete, u Zemunu, na Novom Beogradu ili dalje.' },
    { pitanje: 'Radite li vikendom i praznicima?', odgovor: 'Da, radimo 0–24h, svakog dana u godini.' },
  ],
  'novi-beograd': [
    { pitanje: 'Da li dolazite u blokove i na parkinge?', odgovor: 'Da, šlepujemo vozila iz svih blokova, sa ulica i parkinga. Recite nam broj bloka i ulicu, ili pošaljite lokaciju.' },
    { pitanje: 'Šta ako mi auto stane na autoputu kroz Novi Beograd?', odgovor: 'Uključite sva četiri pokazivača pravca, obucite prsluk i postavite trougao ako je bezbedno, pa se sklonite van kolovoza. Pozovite nas i recite smer i najbliži izlaz ili most.' },
    { pitanje: 'Možete li da prevezete auto sa Novog Beograda van Srbije?', odgovor: 'Da, po dogovoru prevozimo vozila po celoj Srbiji i Evropi.' },
  ],
  beograd: [
    { pitanje: 'Dolazite li u sve delove Beograda?', odgovor: 'Najčešće radimo u Zemunu, Novom Beogradu, Batajnici i Surčinu, a po dogovoru dolazimo i u ostale delove grada. Pozovite i recite gde se nalazite.' },
    { pitanje: 'Da li prevozite vozila iz Beograda u druge gradove?', odgovor: 'Da, iz Beograda prevozimo vozila u druge gradove Srbije i u inostranstvo.' },
    { pitanje: 'Da li prevozite oldtajmere?', odgovor: 'Da, oldtajmere prevozimo na platformi, uz pažljivo utovarivanje i vezivanje vozila.' },
  ],
  'zemun-polje': [
    { pitanje: 'Da li dolazite u Altinu i Kamendin?', odgovor: 'Da, radimo u celom Zemun Polju – u Altini, Kamendinu i Plavim horizontima.' },
    { pitanje: 'Šta ako mi vozilo stane na Batajničkom drumu?', odgovor: 'Uključite sva četiri pokazivača pravca i, ako možete, sklonite se sa kolovoza. Pozovite nas i recite smer i približno mesto, na primer kod koje raskrsnice ili radnje se nalazite.' },
    { pitanje: 'Gde možete da odvezete auto?', odgovor: 'Do servisa u Zemun Polju, Zemunu ili Batajnici, ili do adrese koju vi odredite.' },
  ],
  ugrinovci: [
    { pitanje: 'Da li dolazite u Grmovac i Busije?', odgovor: 'Da, pored Ugrinovaca dolazimo i u Grmovac, Busije i okolna vikend naselja.' },
    { pitanje: 'Kako da vas navedem ako ne znam tačnu adresu?', odgovor: 'Pošaljite nam trenutnu lokaciju preko Vibera ili WhatsApp-a na 063 55 85 81 – tako vas nalazimo i tamo gde ulice nemaju jasne brojeve.' },
    { pitanje: 'Da li šlepujete vozila posle udesa?', odgovor: 'Da, prevozimo i havarisana vozila koja ne mogu da se kreću, do servisa ili adrese koju vi odredite.' },
  ],
  surcin: [
    { pitanje: 'Da li dolazite kod aerodroma Nikola Tesla?', odgovor: 'Da, dolazimo na puteve oko aerodroma. Na parkinge i zone sa kontrolisanim ulazom dolazimo kada je ulaz za šlep dozvoljen.' },
    { pitanje: 'Pokrivate li Jakovo, Bečmen, Boljevce i Progar?', odgovor: 'Da, radimo u celoj opštini Surčin.' },
    { pitanje: 'Možete li da odvezete auto iz Surčina u Srem?', odgovor: 'Da, vozimo do servisa u Pazovi, Banovcima ili Inđiji, kao i na Novi Beograd, u Zemun ili bilo gde u Srbiji.' },
  ],
  dobanovci: [
    { pitanje: 'Da li dolazite na petlju Dobanovci i obilaznicu?', odgovor: 'Da, dolazimo na prilaze petlji i na obilaznicu oko Beograda. Pri pozivu recite smer i najbliži izlaz ili kilometar.' },
    { pitanje: 'Da li šlepujete kombije iz industrijske zone?', odgovor: 'Da, prevozimo kombije i laka dostavna vozila koja staju na platformu, kao i automobile.' },
    { pitanje: 'Radite li noću?', odgovor: 'Da, radimo 0–24h, svakog dana, uključujući vikende i praznike.' },
  ],
  vojka: [
    { pitanje: 'Da li iz Vojke prevozite traktore?', odgovor: 'Da, prevozimo traktore i poljoprivredne mašine koje staju na platformu. Pre dolaska nam recite tip i približnu težinu mašine.' },
    { pitanje: 'Da li dolazite preko Beograda?', odgovor: 'Ne, iz Banovaca dolazimo preko Nove Pazove, bez obilaska kroz Beograd.' },
    { pitanje: 'Gde vozite vozilo iz Vojke?', odgovor: 'Do servisa u Novoj ili Staroj Pazovi, u Inđiji ili Beogradu, ili do adrese koju vi odredite.' },
  ],
  'autoput-beograd-novi-sad': [
    { pitanje: 'Šta da kažem kada pozovem?', odgovor: 'Recite da li idete ka Beogradu ili ka Novom Sadu, i najbliži izlaz (npr. Batajnica, Pazova, Inđija) ili kilometar sa table pored puta. Najlakše je da nam pošaljete lokaciju preko Vibera ili WhatsApp-a.' },
    { pitanje: 'Gde vozite vozilo sa autoputa?', odgovor: 'Do servisa koji vi izaberete ili do vaše adrese – u Beogradu, Sremu, Novom Sadu ili dalje po Srbiji.' },
    { pitanje: 'Da li dolazite noću i vikendom?', odgovor: 'Da, na autoput izlazimo 0–24h, svakog dana.' },
  ],
};
