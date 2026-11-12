// Svi podaci o firmi na jednom mestu. Menjaš ovde -> menja se na celom sajtu.
export const firma = {
  ime: 'Šlep Stojanović',
  podnaslov: 'Stari Banovci',
  poslovnoIme: 'NEMANJA STOJANOVIĆ PR ŠLEP SLUŽBA ŠLEP STOJANOVIĆ STARI BANOVCI',
  telefon: '063 55 85 81',
  telefonLink: 'tel:+38163558581',
  viberLink: 'viber://chat?number=%2B38163558581',
  whatsappLink: 'https://wa.me/38163558581',
  telefonMedjunarodni: '+381 63 558 581',
  email: 'slepstojanovic@gmail.com',
  adresa: {
    ulica: 'Milana Bolanovića 31',
    postanskiBroj: '22305',
    mesto: 'Stari Banovci',
    opstina: 'Stara Pazova',
    drzava: 'RS',
  },
  geo: { lat: 44.9796426, lng: 20.2714594 },
  // Google mapa sa profilom firme (Share → Embed a map). raspon = širina prikaza u metrima.
  googleMapaEmbed: (raspon = 21666) =>
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${raspon}!2d20.25085981685692!3d44.97967863654568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64a4469f91597fdd%3A0xfc77f2ed21f11abd!2zxaBMRVAgU1RPSkFOT1ZJxIY!5e0!3m2!1sen!2srs!4v1793803148645!5m2!1sen!2srs`,
  maticniBroj: '68851378',
  pib: '116043823',
  radnoVreme: '0–24h, svakog dana',
  mreze: {
    instagram: 'https://www.instagram.com/slep_stojanovic_banovci/',
    facebook: 'https://www.facebook.com/profile.php?id=61595969494710',
    googleMape: 'https://maps.app.goo.gl/jqt9Lnk99i9VzrLC9',
    googleRecenzija: 'https://g.page/r/Cb0a8SHt8nf8EBM/review',
  },
  sajt: 'https://slepstojanovic.rs',
  // Umami statistika (cloud.umami.is) – upiši Website ID. Dok je prazno, praćenje je isključeno.
  umamiId: 'ed19fa1f-f108-4751-a3ac-fabfc0d6b78a',
  // Google tag (Google Ads) – iz Google Ads → Set up with a Google Tag.
  googleTag: 'GTM-P7DG8PVC',
};
