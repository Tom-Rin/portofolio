# Persoonsportfolio — plan

**Doel:** Een eigen, **bold & onderscheidende** persoonsportfolio voor een **data scientist**, uitgevoerd als een "open-source editorial" — een document-achtige ervaring die zich onderscheidt van generieke SaaS-websites.

---

## 1. Identiteit & Rollen
- **Naam:** `[Naam]` (Placeholder blijft behouden).
- **Rol:** Data Scientist & Designer/Maker.
- **Taal:** Nederlands, simpel en jargonvrij voor de leek; technische diepgang voor experts.

## 2. Design Tokens (Gevat door skills.md)
*Design gericht op een distinctief "editorial" gevoel zonder AI-clichés.*

### Kleurenpalet (Tokens)
- **Paper (Basis):** `#fcfbf7` — Een zeer lichte, bijna neutrale tint om de "warm-cream tell" te vermijden.
- **Ink (Tekst):** `#1a1c1e` — Diep antraciet/zwart voor maximale leesbaarheid.
- **Line (Structuur):** `#e4e0d8` — Voor subtiele scheidingen en rasterlijnen.
- **Signatuur (Accent):** `#10b297` (Teal) — De enige krachtige kleur, gebruikt voor interactie en belangrijke headers.

### Typografie
- **Display (Koppen):** *DM Serif Display* — Karaktervol, autoritair en typisch voor een editorial look.
- **Body (Tekst):** *Inter* — Strak, modern en zeer leesbaar.
- **Technical (Details):** *JetBrains Mono* — Voor code-fragmenten of kleine "craft" details.

### Layout & Principes
- **Concept:** "Document-first". Veel witte ruimte, grote koppen, sterke focus op tekst.
- **Geen AI-clichés:** Geen ronde kaarten met zachte schaduwen (SaaS-cards), geen terracotta accenten, geen `→` knoppen.
- **Motion:** Respecteert `prefers-reduced-motion`. Subtiele reveals, geen "fade-and-slide" op elk element.
- **Responsive:** Mobiel-first benadering waarbij de leesbaarheid van de "publicatie" behouden blijft.

---

## 3. Structuur & Architectuur
- `css/style.css` — Bevat de tokens, design-system en responsive grid.
- `index.html` — Hero section (`[Naam]`, tagline), "Recent Projecten" overzicht.
- `over-mij.html` — Achtergrond (inhoud wordt door gebruiker ingevuld).
- `projects.html` — Overzicht van projecten, gecategoriseerd in drie groepen.
- `contact.html` — Contactinformatie & links.
- `projects/_TEMPLATE.html` — Het basis-HTML blok voor alle projectpagina's.

### Project Categorisering
Projecten worden gepresenteerd in drie duidelijke secties:
1. **Data Engineering** (bijv. pipelines, ETL, opslagarchitectuur)
2. **AI Engineering** (bijv. LLM's, agentic workflows, fine-tuning)
3. **Coding** (bijv. CLI-tools, libraries, algoritmische tools)

### Simple vs Expert Systeem
Elk project gebruikt de `<details>` en `<summary>` tags:
- **Simple:** Focus op de "wat" en "waarom" — een heldere samenvatting van de waarde/impact.
- **Expert:** Focus op de "hoe" — technische details, architectuurkeuzes en diepgang.

---

## 4. Dummy Projecten (Voorbeelden)

### Project A (AI Engineering)
- **Titel:** "Context-Aware Document Agent"
- **Simple:** Een systeem dat honderden PDF-documenten doorzoekt om specifieke vragen te beantwoorden met bronvermelding.
- **Expert:** Implementatie van RAG (Retrieval-Augmented Generation) met een hybride zoekalgoritme en een custom vector-database indexing strategie.
- **Link naar:** Project B (Data Engineering).

### Project B (Data Engineering)
- **Titel:** "Real-time Stream Processor"
- **Simple:** Een systeem dat live data van sensoren verwerkt en direct visualiseert.
- **Expert:** Gebruik van Kafka voor message queuing, Spark Streaming voor verwerking en een schaalbare Postgres-opslag.
- **Link naar:** Project A (AI Engineering).

---

## 5. Roadmap
1. **Fase 1: Foundation** — Opzetten van de folderstructuur en `style.css` met de design tokens.
2. **Fase 2: Template** — Bouwen van `_TEMPLATE.html` en de basislayout van `projects.html`.
3. **Fase 3: Content** — Invoeren van de categorisering en de twee dummy-projecten.
4. **Fase 4: Finalisatie** — Review tegen `skills.md` en finetunen van de typografie en spacing.
