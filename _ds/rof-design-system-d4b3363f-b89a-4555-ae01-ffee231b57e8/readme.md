# ROF Design System

**Rapport Onderwysfonds (ROF)** — 'n onafhanklike, nie-winsgewende Suid-Afrikaanse onderwysfonds wat sedert 2003 **rentevrye leningsbeurse** aan verdienstelike toekomstige onderwysers gee. Gegradueerdes betaal terug sodra hulle werk, en elke terugbetaling word in die volgende student herbelê. Die organisasie is 'n geregistreerde NPO (003-455) en openbare weldaadsorganisasie (PBO 930004538), wat skenkings Artikel 18A-aftrekbaar maak.

Die produk is **Afrikaans** — alle UI-teks, etikette en foutboodskappe in hierdie stelsel is in Afrikaans, en dit is die verstek vir enige nuwe werk.

## Bronne wat verskaf is

| Bron | Wat dit bevat |
| --- | --- |
| `uploads/ROF Webwerf UI-kit.html` | **Die grondwaarheid.** 'n Alleenstaande bundelaar-uitvoer van rof.org.za se React-komponentbiblioteek. Die werklike bronkode sit in ingebedde `<script type="__bundler/manifest">`-JSON, nie in die sigbare merkstelling nie; dit is uitgepak en direk in hierdie stelsel oorgeplaas. |
| `uploads/ROF_Design_System_Prompt.md` | Skriftelike opdrag met die tokenwaardes en komponentlys (bevestig teenoor die bundel — alles stem ooreen). |
| `uploads/ROF-logo.png` · `ROF-logo-wite.png` · `ROF-logo-swart.png` | Die handgetekende ROF-woordmerk in kleur, wit en swart. |
| `uploads/ROF_ou_logo.svg` | Die **ou** ROF-logo (bewaar as `assets/rof-ou-logo.svg`; word nie in nuwe werk gebruik nie). |
| rof.org.za | Die lewende webwerf. Nie geskraap nie — alle waardes kom uit die bundel. |

Geen Figma-lêer, kodebasis of skyfietemplaat is verskaf nie. Daar is dus **geen skyfies (`Slides`) in hierdie stelsel** — moenie dit aflei nie; vra vir 'n templaat as dit nodig is.

## Produkte

Een oppervlak is gedefinieer: **rof.org.za**, die publieke webwerf met vyf bladsye (Tuis, Studente, Skenk, Vennote, Impak). Sien `ui_kits/webwerf/`. Daar is geen mobiele app, admin-paneel of dokumentasie-webwerf in die bron nie.

---

## Content fundamentals

**Taal.** Afrikaans deurgaans, met Suid-Afrikaanse konvensies: `R38m`, `R1 500` (spasie as duisendskeier), `4 212`, `p.j.`, `Rek.`, `Verw:`. Instansiename word volledig uitgeskryf ("Noordwes-Universiteit", "Universiteit van die Vrystaat").

**Aanspreekvorm.** Direk **"jy/jou"** vir studente en donateurs; **"ons"** vir ROF. Nooit "u" nie — dit maak die fonds koud en burokraties. Voorbeelde uit die bron: *"Jou toekoms begin met 'n kans."*, *"Ons kontak jou binne 14 dae."*, *"Kom ons gesels."*

**Vibe.** Warm, konkreet, vertroubaar. Die stelsel praat in feite en syfers eerder as adjektiewe: *"R500 per maand dek 'n jaar se handboeke vir een student."* — nie *"jou vrygewige bydrae maak 'n reuse verskil"* nie. Elke belofte kom met 'n verifieerbare getal of 'n meganisme.

**Kernboodskap-pilare** (herhaal deur die bron):
- *Vandag se student. Môre se onderwyser.* (voetskrif)
- *Elke onderwyser wat ons ondersteun, verander honderde lewens.*
- *Jou belegging word verantwoordelik bestuur en lewer meetbare impak.*
- Die fonds is 'n **sirkel**, nie 'n geskenk nie: uitbetaal → terugbetaal → herbelê.

**Kassie.** Sinskas ("Doen aansoek vir 'n ROF-leningsbeurs"). Twee uitsonderings: knoppie-etikette gebruik hoofletter-per-woord ("Doen Aansoek", "Skenk Nou", "Word 'n Vennoot"), en mono-etikette is volledig hoofletters ("GEREELDE VRAE", "SEDERT 2003").

**Lengte.** Opskrifte 3–8 woorde met 'n reëlbreuk waar die ritme dit vra, en die tweede helfte dikwels in rooi kursief (`<em style="color:var(--accent)">`). Lei-paragrawe een tot twee sinne, maks 56ch. Kaartteks 2–3 reëls. Mono-etikette twee tot vier woorde.

**Aksies.** Altyd dieselfde drie, altyd in dieselfde orde: **Doen Aansoek** (primary) · **Skenk Nou** (secondary) · **Word 'n Vennoot** (tertiary). Skakels sê wat volg: "Lees meer verhale", "Laai impakverslag af", "Skryf in".

**Foute en wenke.** Volledige sinne met 'n punt: *"Hierdie veld is verpligtend."* Wenke verduidelik hoekom ons vra: *"Ons stuur jou Artikel 18A-sertifikaat hierheen."* Sperdatums staan in die titel van 'n `Alert`, gevolg deur die gevolg: *"Onvolledige aansoeke word nie oorweeg nie."*

**Emoji: nooit.** Daar is geen enkele emoji in die bron nie. Die enigste "ikoon"-karakters is teksgliewe: `→` (skakels en knoppies), `←`, `·` (metadata-skeier), `×` (modaal-sluit) en `✓` as 'n SVG-merkie in `Checkbox`.

---

## Visual foundations

**Palet.** Drie families dra alles: **ROF-rooi** (`#C41E2A`) as die enigste merkkleur, **houtskool** (`#1C1B19`) as ink en inverse vlak, en 'n **warm romerige neutrale** reeks (`#F4F0E8` bladsy) wat die hele stelsel warm hou. Aksente is streng beperk: goud `#C9A227` vir mylstene, groen `#2F7A4F` vir sukses, vlootblou `#1B3A5B` **net** vir verslae en datavisualisering, `#B3261E` vir foute. Geen gradiënte, geen bloupers, geen kleur buite hierdie lys.

**Kontras.** Rooi op room haal ongeveer 4.4:1 — dit is **net vir vertoongrootte teks (22px+)** en knoppie-vulling. Lopende teks is altyd houtskool (`--text-body`, 10.6:1). Wit op rooi is 4.9:1 en veilig vir knoppie-etikette. Sien `guidelines/colors-contrast.card.html`.

**Tipografie.** Drie families, streng verdeel:
- **Playfair Display** (serif) vir alle vertoning en opskrifte — 92px display tot 28px h3, tracking −0.025em tot −0.02em. Ook vir groot getalle (`StatCard`) en aanhalings.
- **Manrope** (sans) vir alle UI en liggaamsteks — 19/16/13.5px, gewigte 400–800. Knoppies is 700; kaarttitels 800.
- **IBM Plex Mono** vir etikette en metadata — 11px, hoofletters, tracking +0.16em (die `.rof-label`-klas).

**Vorm.** Klein radiusse: 2px (keuseblokkie), 3px (velde), **4px (alle kaarte en vlakke)**, 8px (selde). **Alle knoppies en pille is 999px** — dit is die enkele mees kenmerkende vorm-eienskap van die stelsel. Die kontras tussen skerp 4px kaarte en volledig ronde knoppies is opsetlik.

**Hoogte.** ROF skei vlakke met **lyne, nie skaduwees nie**: 1px `#E0DACD` random elke kaart. `--shadow-raised` bestaan maar word amper nooit gebruik nie; `--shadow-overlay` (`0 24px 60px rgba(28,27,25,.22)`) kom **net** by die modaal voor. Die skerm is `rgba(28,27,25,0.55)`.

**Kaarte.** 4px radius, 1px lyn, geen skaduwee, 32px binnespasie (`--space-6`). Vier vlakke: wit, room, inverse (houtskool) en aksent (rooi). Binne 'n ry word vlakke gemeng — hoogstens een inverse en een aksent — sodat die ritme nie eentonig raak nie.

**Agtergronde.** Plat kleurvlakke. Geen beeldagtergronde, geen texture, geen gradiënte, geen volbloed-fotobanne in die bron. Waar 'n foto hoort, staan 'n **diagonale streep-plekhouer** (`repeating-linear-gradient(135deg, rgba(196,30,42,0.09) 0 10px, transparent 10px 20px)`) met 'n mono-etiket wat die beeld en verhouding noem. Die kop is die enigste deurskynende oppervlak: `rgba(244,240,232,0.92)` met `backdrop-filter: blur(10px)`, vasgeplak bo.

**Beeldstyl (soos in die bron beskryf).** Warm fotografie van studente en onderwysers, natuurlike lig, rooi as klerekleur-aksent — nie koel, nie swart-wit, geen grein-filter. **Geen werklike beelde is verskaf nie**, dus is alle media plekhouers; niks is bygemaak nie.

**Beweging.** Suinig en funksioneel. 120ms / 200ms / 320ms met `cubic-bezier(0.2, 0, 0.2, 1)`. Slegs kleur-, rand- en skaduwee-oorgange word geanimeer (`--transition-interactive`) plus die `Switch`-knop se `translateX`. **Geen bons, geen inswaai-animasies, geen parallax, geen laai-skelette.**

**Hover.** Vulkleur word **donkerder**, nooit deursigtig nie: primary → `--rof-red-700`, secondary → `--charcoal-800`, tertiary → volle houtskool-omkeer, inverse → `--cream-100`. `Tag` en `IconButton ghost` gaan na `--cream-300`. Skakels wys 'n 2px onderstreep in `currentColor` op hover.

**Druk.** `transform: translateY(1px)` op `Button` — geen skaal, geen kleurverandering bykomend.

**Fokus.** `0 0 0 3px rgba(196,30,42,0.28)` plus 'n rooi 1.5px rand op velde. Nooit `outline: none` sonder 'n vervanging nie.

**Randdiktes.** 1px vir kaarte en skeiers, 1.5px vir velde en omlynde knoppies, 2px vir die reël bo `SectionHeading` en die aktiewe navigasie-onderstreep, 1.5px gestippel vir dokument-oplaai-sones.

**Uitleg.** 1240px maksimum houer, 32px kantlyn (20px mobiel), 12-kolom rooster met 24px gaping, 96px tussen afdelings (56px mobiel). Rye is `repeat(3|4, minmax(0,1fr))`. Enigste vasgeplakte element is die kop. Teksmaat: 70ch liggaam, 56ch lei.

**Deursigtigheid en versagting.** Net twee plekke: die romerige kop (0.92 + 10px blur) en die modaal-skerm. Teks word nooit met alfa gedemp nie — gebruik `--text-muted` (`#8A857C`).

---

## Iconography

**Daar is geen ikoonstelsel nie — en dit is opsetlik.** Die bron bevat geen ikoonfont, geen SVG-sprite, geen PNG-ikoonstel en geen CDN-ikoonbiblioteek nie. Wat wel gebruik word:

- **Teksgliewe as ikone:** `→` (elke `TextLink` en `Button iconAfter`), `←`, `↗`, `·` (metadata-skeier), `×` (modaal-sluit). Hulle erf die teksfont en -kleur.
- **Twee hand-geskrewe SVG's** wat werklik in die bronkode voorkom en dus behou is: die `Checkbox`-merkie (24×24 stroke-pad, `stroke-width 3.5`) en die gestreepte opwaartse **doedel-pyl** onder die tuisblad se oproep-tot-aksie (`stroke #C41E2A`, `stroke-width 4`, `stroke-dasharray 14 12`). Sien `guidelines/brand-doodles.card.html`.
- **Die keuselys-pyltjie** is twee CSS-gradiënt-driehoeke, nie 'n ikoon nie.
- **Geen emoji, ooit.**

Die skriftelike opdrag noem "eenvoudige lyn-ikone (grade-hoede, boeke, bankgeboue)" as deel van ROF se bemarkingsidentiteit, maar **daardie ikone is nie verskaf nie** en is nie nageboots nie. Vra vir die werklike stel voor jy ikone in nuwe werk gebruik. As 'n plekhouer onvermydelik is, gebruik 'n mono-etiket of 'n teksglief — nie 'n selfgetekende SVG nie.

**Logo's.** `assets/rof-logo.png` (kleur), `rof-logo-wit.png`, `rof-logo-swart.png` — die handgetekende ROF-woordmerk met sy eie doedel-strepe. Gebruik altyd die beeldlêer via die `Logo`-komponent; moet die merk nooit in tipe naboots nie. `assets/rof-ou-logo.svg` is die vorige merk, bewaar vir argiefgebruik.

---

## Fonts

Playfair Display, Manrope en IBM Plex Mono is **Google Fonts-substitute** wat reeds in die verskafte bundel gebruik is — die bundel se eie kommentaar sê so: *"geen eie fontlêers verskaf nie"*. Die woff2-subsette is uit die bundel uitgepak na `assets/fonts/` (81 lêers) en die `@font-face`-reëls staan in `tokens/fonts.css`, dus werk die stelsel vanlyn.

> **As ROF gelisensieerde merkfonts het, stuur dit asseblief** — dan ruil ons `tokens/fonts.css` en die drie `--font-*`-tokens om sonder om enigiets anders te raak.

---

## Index

**Wortel**
- `styles.css` — die enkele invoerpunt vir verbruikers (net `@import`-reëls)
- `readme.md` — hierdie gids
- `SKILL.md` — Agent Skills-omslag vir aflaai/Claude Code
- `thumbnail.html` — die stelsel se tuisbladteël

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `base.css` (body-, opskrif-, skakel- en `.rof-label`-basisstyle)

**`assets/`** — `rof-logo.png` · `rof-logo-wit.png` · `rof-logo-swart.png` · `rof-ou-logo.svg` · `fonts/` (81 woff2-subsette)

**`guidelines/`** — 21 spesimenkaarte in vier groepe: *Colors* (merkrooi, houtskool, room, warm grys en lyne, beperkte aksente, kontras), *Type* (vertoon-serif, liggaam-sans, gewigte, etiket-mono, letterspasiëring), *Spacing* (spasieskaal, uitleg in gebruik, radiusse, hoogte, fokusring, beweging), *Brand* (woordmerk, merk + woordmerk, doedel-aksente, beeld-plekhouers)

**`components/`** — 19 komponente, elk met `.jsx`, `.d.ts` en `.prompt.md`, plus een spesimenkaart per gids:

| Groep | Komponente |
| --- | --- |
| `core/` | **Button** · **IconButton** · **TextLink** · **Logo** |
| `editorial/` | **Card** · **SectionHeading** · **PullQuote** · **StatCard** |
| `labels/` | **Badge** · **Tag** |
| `flow/` | **StepCard** · **StepProgress** |
| `forms/` | **Input** · **Select** · **Checkbox** · **RadioGroup** · **Switch** |
| `feedback/` | **Alert** · **Modal** |

Dit is presies die inventaris wat die bundel definieer — niks bygevoeg, niks weggelaat. Daar is **geen intentional additions** nie: geen Toast, Avatar, Tabs, Tooltip, Accordion of Breadcrumb, want die bron definieer hulle nie. Die "GV"-blokke op die studentebladsy is gewone `Card`-inhoud, nie 'n Accordion nie.

**`ui_kits/webwerf/`** — klik-deur herskepping van rof.org.za: `index.html` (skil + roetering), `Chrome.jsx`, `Home.jsx`, `Studente.jsx`, `Skenk.jsx`, `Vennote.jsx`, `Impak.jsx`, `README.md`.

**`templates/aansoek-bladsy/`** — `AansoekBladsy.dc.html`: die "Doen aansoek vir 'n ROF-leningsbeurs"-bladsy (hero, agt genommerde stappe, impaksyfers, sperdatum-oproep) volledig uit die stelsel se komponente opgebou. Dit is die templaat wat verbruikende projekte in die kieser sien.

## Gebruik

```html
<link rel="stylesheet" href="_ds/<gids>/styles.css">
<script src="_ds/<gids>/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, StatCard, SectionHeading } = window.ROFDesignSystem_d4b336;
</script>
```

## Do's en don'ts

**Doen**
- Hou die drie CTA's in orde: Doen Aansoek → Skenk Nou → Word 'n Vennoot.
- Skei vlakke met 1px lyne; laat skaduwees vir die modaal.
- Nommer afdelings met `SectionHeading` ("01", "02", "03").
- Skryf in Afrikaans, "jy/jou", met verifieerbare syfers.
- Meng kaartvlakke binne 'n ry; hou hoogstens een aksent-vlak per bladsy.

**Moenie**
- Rooi vir lopende teks op room gebruik nie (net 22px+).
- Radiusse groter as 8px op kaarte gebruik nie — of knoppies wat nie pille is nie.
- Skaduwees byvoeg om diepte te skep nie.
- Emoji, gradiënte of kleure buite die palet gebruik nie.
- Ikone self teken nie — vra vir ROF se stel.
- Nuwe komponentvariante uitvind nie sonder om te vra.
