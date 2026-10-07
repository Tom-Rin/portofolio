# Persoonsportfolio — plan

**Doel:** een eigen, **bold & onderscheidende** persoonsportfolio als **data scientist**, gemaakt in HTML/CSS.
Geen generieke AI-template — eenDistinctief point-of-view (editorial / document-gevoel).

---

## 1. Identiteit & rollen

- **Naam (placeholder):** `[Naam]` — de gebruiker vult dit zelf in (of ik vul het nu in).
- **Rol (gerekend):** **data scientist** — én designer/maker van de eigen site.
- **Taal:** alles volledig in het **Nederlands**, in **simpele / jargonvrije** taal.
  - De leek snapt direct wat elk project inhoudt.
  - Voor **experts** is bij elk project een aparte "uitleg voor experts"-section met diepgang.

## 2. Design

- **Concept:** *open-source editorial* — document-/editorial-uitstraling met **sterke typografie**.
- **Palette (6 kleuren):**
  - paper `#faf8f3` — basisachtergrond
  - ink `#16191d` — tekst
  - line `#e4e0d8` — lijnen/afdelingen
  - signatuur-accent **teal `#10b297`** — de **enige** krachtige kleur (held, niet rood/rode knap)
  - (bedoeld) één lichte extra warmte + base-toon
- **Typeface:** **DM Serif Display** (koppen) + **Inter** (tekst) + **JetBrains Mono** (klein "craft"-detail).
- **Geen** generieke AI-tells: warm-cream, terracotta, acidgroen, kartonnen SaaS-cards, ALL-CAPS-blauwe titelbalk, '→'-knoppen, geremde beweging.
- **Reduced-motion:** respecteerprefers-reduced-motion (geremde/vervangende animaties).
- **Bold** door: veel wit/lichte ruimte, grote serif-koppen, een strakke raster/drukgevoel, en de teal-signatuur die écht opvalt.

## 3. Structuur (HTML + CSS, geen JS)

- `css/style.css` — tokens, design-system, responsive (mobiel-first), reduced-motion.
- `index.html` — hero (`[Naam]`, data scientist tagline, CTA's), overzicht "recent projecten".
- `over-mij.html` — achtergrond/erkenning.
- `projects.html` — overzichtkaartjes naar detailpagina's.
- `contact.html` — dummy LinkedIn-link (gebruiker vervangt later zelf).
- Per project: een **duidelijk kopieerbare HTML-sjabloonblok** + tekst + afbeeldingen (één map per project).

### Simple vs Expert
- Bij elk project een `simple / expert` toggle in het DOM (`<details>/<summary>`, geen JS).
- Teal Balk als visuele indicator; **tekst** (geen code) verklaart wat het project bewijst.

### Afbeeldingen
- **Geen placeholder-afbeeldingen bouwen** — de `img/`-map blijft leeg tot eigen beelden erin komen.
- Kaarten tonen vanaf begin al **tekst** (titel + regel), dus ze zien er nooit "lege template" uit.

---

## 4. Voorbeeldprojecten

- Er **mogen 2 dummy-voorbeeldprojecten** komen.
  - Een eerste met **meer diepgang** (product/diepgang).
  - Een tweede met **twee expliciete links** naar gerelateerde projecten/inzichten.
- Alle twee met **simple- + expert-uitleg** conform het Simple/Expert-systeem.

---

## 5. Voorgestelde bestandslijst

```
portofolio/
├── css/style.css
├── index.html
├── over-mij.html
├── projects.html
├── contact.html
├── projects/_TEMPLATE.html
├── projects/product-1.html     (dummy voorbeeld 1)
├── projects/product-2.html     (dummy voorbeeld 2)
├── img/        (leeg tot eigen beelden toegevoegd worden)
└── README.md
```

## 6. Openstaande keuzes om te bevestigen

1. **Naam placeholder:** `[Naam]` nu laten, of nu invullen?
2. **Accentkleur:** teal `#10b297` vasthouden, of alternatief?
3. **Dummy-projecten:** nu bouwen of eerst template + lege kaarten?
4. Plan als bestand schrijven naar `C:\Users\ToRin\.opencode\plan`?
5. Extra optie: footer met privacy-/cookies-kноп?
