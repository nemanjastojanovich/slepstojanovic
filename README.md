# slepstojanovic.rs – sajt (Astro)

## Pokretanje na računaru

Potreban je Node.js 20 ili noviji (https://nodejs.org – LTS verzija).

```bash
cd slepstojanovic
npm install      # prvi put – instalira Astro i pakete
npm run dev      # pregled na http://localhost:4321 (osvežava se dok menjaš kod)
npm run build    # pravi gotov sajt u folderu dist/
npm run preview  # pregled gotovog sajta iz dist/
```

## Gde se šta menja

| Šta | Fajl |
| --- | --- |
| Telefon, adresa, PIB, mreže | `src/data/firma.ts` |
| Tekstovi usluga | `src/data/usluge.ts` |
| Tekstovi lokacija | `src/data/lokacije.ts` |
| Česta pitanja (opšta) | `src/data/pitanja.ts` |
| Slike i alt tekstovi | `src/assets/slike/` + `src/data/slike.ts` |
| Boje i fontovi | `src/styles/global.css` |
| SEO (title, meta, schema) | `src/components/Seo.astro`, `src/data/schema.ts` |
| Meni | `src/components/Header.astro` |

Nova lokacija = novi objekat u `lokacije.ts` → stranica, link u futeru, sitemap i schema se prave sami.
Svaka lokacija mora imati svoj tekst (ne kopirati isti tekst sa drugim imenom mesta).

## Objavljivanje (Cloudflare Pages)

1. Postavi projekat na GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → poveži GitHub repo.
3. Build command: `npm run build`, output folder: `dist`.
4. Custom domain: `slepstojanovic.rs`.
5. Google Search Console: dodaj domen i pošalji `https://slepstojanovic.rs/sitemap-index.xml`.

## Pre objave proveriti

- [ ] Tekstovi usluga i lokacija (da li sve što piše stvarno radimo)
- [ ] O nama – dopisati ličnu priču (TODO u `src/pages/o-nama.astro`)
- [ ] Politika privatnosti
- [ ] PageSpeed Insights i Rich Results Test posle objave
