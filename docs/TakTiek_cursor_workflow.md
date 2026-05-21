# Cursor Instructie — STATUS.md & Git Workflow

> **Voor:** Cursor (en eventueel toekomstige AI-assistenten in deze repo)
> **Doel:** STATUS.md als levend handover-document onderhouden tussen sessies in Cursor en Claude
> **Plaatsing:** kopieer relevante delen naar `.cursorrules` of project rules in Cursor settings
> **Laatst bijgewerkt:** 21 mei 2026

---

## Achtergrond — waarom dit document bestaat

Dit project wordt gebouwd in **twee soorten sessies**:

1. **Cursor-sessies** — feitelijk bouwwerk: code schrijven, fixes doorvoeren, builds draaien. Eigenaar: Marten + Cursor.
2. **Claude-sessies** — strategisch werk: nieuwe specs, copy, designkeuzes, reviews. Eigenaar: Marten + Claude.

Tussen die sessies door bestaat het project alleen als git-repository. **STATUS.md is het overdrachtsdocument** tussen sessies. Het wordt gelezen door:

- Marten zelf, als geheugensteun
- Claude, bij het begin van elke nieuwe sessie (Marten plakt de URL)
- Toekomstige Cursor-instanties, als context-anchor

Zonder STATUS.md raakt elke nieuwe sessie tien minuten kwijt aan "wat hebben we ook alweer besloten". Met STATUS.md begint elke sessie productief.

---

## Hoofdregels voor Cursor

### Regel 1 — STATUS.md wordt **alleen aan het eind van een sessie** bijgewerkt

Niet tijdens. Niet na elke commit. Aan het eind, één keer, samenvattend.

Tijdens een sessie:
- Code-commits zo vaak als nuttig (per logische feature, fix, of werkstuk)
- STATUS.md raak je niet aan
- Commit-berichten kort maar betekenisvol (zie "Commit-conventies" hieronder)

Aan het eind van een sessie:
- Cursor scant wat er sinds de vorige sessie is gebeurd
- Cursor stelt updates voor aan STATUS.md
- Marten controleert/wijzigt
- Eén afsluitende commit: `chore(status): sessie [datum] — [kort kenmerk]`
- Push

### Regel 2 — Push aan einde sessie, niet tussendoor

Pushen tussendoor is verleidelijk maar veroorzaakt twee problemen:
- Marten ziet partial states als hij tussendoor de repo bekijkt
- Claude (bij review) ziet code zonder bijgewerkte STATUS.md

Eén afsluitende push per sessie, met daarin alle code-commits + de STATUS-update.

**Uitzondering:** als een sessie wordt onderbroken (Marten moet weg) en de staat is werkend, mag een tussentijdse push met `wip:` prefix. Bij hervatting wordt die wip-commit niet teruggedraaid, alleen aangevuld.

### Regel 3 — STATUS.md heeft een **vaste structuur** die niet verbroken wordt

Zie het template hieronder. Toevoegingen aan secties: ja. Hele secties verwijderen of hernoemen: nee, tenzij Marten dat expliciet vraagt.

Reden: het document wordt door meerdere agents gelezen die patronen leren. Verandert de structuur, raken die patronen verstoord en moet iedereen opnieuw lezen.

### Regel 4 — Decision log is **strikt feitelijk, niet promotioneel**

Het decision log registreert keuzes die afwijken van eerdere specs of die toekomstige gebruikers/agents zouden kunnen verbazen. Het format is:

```
- **[datum] — [wie]** — [wat veranderde] — [waarom] — [impact]
```

**Wel:**
- "Leeftijd verlaagd naar 7-12 omdat 5-6 jarigen in de pilot te jong bleken"
- "Next.js 16 ipv 14 — Cursor's keuze tijdens setup, geen issues tot nu toe"

**Niet:**
- "We hebben de geweldige beslissing genomen om..."
- "Een belangrijke verbetering was..."

Toon: kort, neutraal, technisch correct. Alsof iemand het over drie maanden moet kunnen lezen zonder context.

### Regel 5 — Privacy-checklist is **niet optioneel** en wordt **wekelijks** gecontroleerd

De privacy-belofte aan ouders is concreet (zie `docs/TakTiek_PAGE_LAYOUTS.md` → privacy-touchpoints). Elke item op de checklist moet één van vier statussen hebben:

- `[ ]` — Niet geïmplementeerd
- `[~]` — Gedeeltelijk
- `[x]` — Geïmplementeerd en geverifieerd
- `[!]` — Geïmplementeerd maar bekend issue (verwijst naar issue/comment)

Bij elke STATUS-update: minimaal scannen. Bij feature-werk dat raakt aan formulieren, portal, of data-opslag: actief verifiëren.

Wat **niet** mag: een item op `[x]` zetten zonder dat het ook echt zo gebouwd is. Dit document is geen wensenlijst — het is een staat.

---

## STATUS.md template

Kopieer onderstaande template integraal naar `STATUS.md` op **repo root** (`taktiek-site/STATUS.md` momenteel — overweeg verplaatsing naar `TakTiek/STATUS.md` als de root-`TakTiek/` ooit een eigen git-repo wordt).

````markdown
# TakTiek — Projectstatus

> **Doelgroep van dit document:** Marten + AI-assistenten (Claude, Cursor, toekomstige tools).
> **Update-frequentie:** aan einde elke werk-sessie.
> **Onderhoud:** Cursor schrijft, Claude reviewt bij sessie-start, Marten heeft eindverantwoordelijkheid.

---

## 🎯 Sessie-info

| Veld | Waarde |
|------|--------|
| Laatst bijgewerkt | [datum] |
| Laatste sessie-type | [Cursor / Claude / handmatig Marten] |
| Laatste commit | `[hash]` — [korte beschrijving] |
| Volgende geplande actie | [wat staat er op de rol] |

---

## 📍 Waar staan we?

**Fase:** [Dummy / MVP / Beta / Live]

**Eén-zin status:** [Wat is op dit moment de toestand van het project, in één zin]

**Wat werkt:** [Bullet list, max 5 punten — wat is af en getest]

**Wat is volgende:** [Bullet list, max 3 punten — wat staat eerstvolgend op de rol]

---

## 🏗️ Architectuur (samenvatting)

```
TakTiek/                          ← workspace root
├── STATUS.md                     ← dit bestand
├── docs/                         ← strategische specs (van Claude-sessies)
│   ├── TakTiek_cursor_handover.md
│   ├── TakTiek_PAGE_LAYOUTS.md
│   ├── TakTiek_content.md
│   ├── TakTiek_photography.md
│   └── ...
└── taktiek-site/                 ← Next.js app (git repo)
    ├── app/                      ← routes
    ├── components/
    ├── content/nl.json           ← UI-copy NL
    ├── lib/
    └── public/images/
```

**Tech-stack actueel:**
- Next.js [versie], App Router, TypeScript
- Tailwind [versie]
- next-intl voor i18n (locale vast `nl`)
- [eventuele extra packages]

**Wat er nog niet is:**
- Supabase / database
- Echte authenticatie
- E-mail / notificaties
- EN-locale actief
- Echte foto's (nu placeholders)

---

## 📋 Decision Log

> **Format:** `- **[datum] — [wie]** — [wat] — [waarom] — [impact]`
> **Doel:** keuzes traceren die afwijken van specs of toekomstige agents zouden verbazen.

### 2026-05-21

- **2026-05-21 — Cursor** — Next.js 16 ipv 14 gekozen — niet bewust besloten, default bij setup — geen issues, opletten bij Vercel-deploy
- **2026-05-21 — Cursor** — Tailwind 4 ipv 3 — idem — opletten met config-syntax
- **2026-05-21 — Marten** — Leeftijd verlaagd naar 7-12 (was 5-12 in spec) — [redenen Marten] — content/nl.json bijwerken, FAQ aanpassen
- **2026-05-21 — Cursor** — Reeks-inschrijving ipv losse sessies — past beter bij TakTiek's pedagogisch model — datamodel afwijking van spec, zie `lib/mock-data.ts`
- **2026-05-21 — Cursor** — `middleware.ts` verwijderd — veroorzaakte 404 op alle routes — bij EN-toggle opnieuw evalueren of nodig is

### [datum komende sessies — chronologisch toevoegen]

---

## 🔒 Privacy Checklist

> **Bron:** `docs/TakTiek_PAGE_LAYOUTS.md` § privacy-touchpoints
> **Status-legenda:** `[ ]` niet · `[~]` gedeeltelijk · `[x]` af · `[!]` issue
> **Laatste controle:** [datum]

### Publieke site

- [ ] Trust-sectie op home aanwezig (tussen Practical en CTA)
- [ ] `/vertrouwen`-pagina bestaat met 4 principes uitgewerkt
- [ ] Privacyverklaring op `/privacyverklaring` met placeholder voor verwerkingsverantwoordelijke
- [ ] Footer-link "Hoe we omgaan met gegevens" aanwezig

### Aanmeldformulier (`/aanmelden`)

- [ ] Privacy-balkje boven het formulier zichtbaar
- [ ] "Waarom"-tooltip bij elk veld
- [ ] Bijzonderheden-veld optioneel, met expliciete uitleg "wie ziet dit"
- [ ] Twee aparte consent-checkboxes (privacy verplicht, foto-toestemming opt-in)
- [ ] Success-modal toont "Wat gebeurt er nu met deze gegevens?"
- [ ] Geen geboortedatum gevraagd (alleen leeftijd)
- [ ] Geen BSN, diagnose, schoolnaam verplicht

### Portal

- [ ] Login-pagina toont: "Je ziet hier alleen de gegevens van je eigen kind(eren)"
- [ ] `/portal` toont alleen eigen gezin (geen ledenlijst, geen andere ouders)
- [ ] `/portal/mijn-kind` heeft "verwijderen"-knop prominent in eigen visuele zone
- [ ] `/portal/mijn-kind` verwijder-confirmation noemt expliciet wat verwijderd wordt
- [ ] `/portal/instellingen` toont toestemmingen individueel intrekbaar
- [ ] `/portal/instellingen` heeft data-export knop

### Data-architectuur (voor wanneer Supabase erin komt)

- [ ] Gevoeligheidsdata in aparte tabel (`medical_notes`), niet in `signups`
- [ ] RLS op `parent_id` voor alle ouder-faciliterende tabellen
- [ ] RLS op `session_id` voor `medical_notes` (alleen begeleiders van die sessie)
- [ ] Hard delete bij "verwijderen" — geen soft-delete
- [ ] Data-export endpoint geeft volledige JSON van wat opgeslagen is voor die ouder

---

## 📦 Mapstructuur (gedetailleerd)

```
taktiek-site/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (portal)/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/
│   ├── ui/
│   ├── content/
│   └── portal/
├── content/
│   ├── nl.json
│   └── en.json (placeholder)
├── lib/
│   ├── mock-data.ts
│   ├── portal-store.ts
│   ├── use-portal-store.ts
│   └── i18n.ts
└── public/
    ├── images/
    │   ├── placeholder/
    │   └── team/
    └── logo/
```

---

## 🚀 Lokaal draaien

```bash
cd taktiek-site
npm install
npm run dev
```

Open URL uit terminal (meestal http://localhost:3000).
**Altijd vanuit `taktiek-site/`** starten — anders Turbopack-root issues en 404.

```bash
npm run build   # moet slagen vóór elke push naar main
```

---

## 🛣️ Routes overzicht

| Route | Status | Privacy-touchpoint |
|-------|--------|-------------------|
| `/` | [status] | Trust-sectie ([status]) |
| `/over` | [status] | — |
| `/team` | [status] | — |
| `/aanpak` | [status] | — |
| `/vertrouwen` | [status] | Hele pagina ([status]) |
| `/vragen` | [status] | — |
| `/aanmelden` | [status] | Formulier ([status]) |
| `/privacyverklaring` | [status] | — |
| `/inloggen` | [status] | Disclosure ([status]) |
| `/portal` | [status] | Eigen-data-only ([status]) |
| `/portal/agenda` | [status] | — |
| `/portal/mededelingen` | [status] | — |
| `/portal/mijn-kind` | [status] | Verwijder-knop ([status]) |
| `/portal/instellingen` | [status] | Toestemmingen ([status]) |
| `/coming-soon` | [status] | — |

---

## ⚠️ Bekende valkuilen

> Voor toekomstige agents en voor Marten in een nieuwe sessie.

1. **Server niet vanuit `taktiek-site/` gestart** → 404 op alle routes
2. **Oude dev-server op andere poort** → `Ctrl+C`, opnieuw `npm run dev`
3. **`.next` corrupt** → `rm -rf .next` en opnieuw builden
4. **Git-commits alleen vanuit `taktiek-site/`** — wijzigingen in `../docs/` worden niet automatisch meegenomen
5. **Demo-state** — inschrijving en mijn-kind verwijderen zijn client-state, geen echte persistentie

---

## 📚 Referentie-documenten

Specs die hierop van toepassing zijn (in `docs/`):

| Document | Wat erin staat |
|----------|---------------|
| `TakTiek_cursor_handover.md` | Build-instructies, mapstructuur, fasering |
| `TakTiek_PAGE_LAYOUTS.md` | Per pagina secties, componenten, privacy-touchpoints |
| `TakTiek_content.md` | Alle UI-copy, i18n-ready |
| `TakTiek_photography.md` | Fotografie-richtlijn |
| `TakTiek_team_bios_briefing.md` | Team-bio's voor koude redactie-chat |
| `TakTiek_portrait_prompt_template.md` | AI-portret prompt template |

**Bij conflict tussen spec en code:** code wint, spec wordt bijgewerkt. Reden: code is wat er is, spec is wat bedoeld was. Specs zijn levende documenten, geen contracts.

---

## 📞 Contact / context

- **Doelgroep:** ouders, kind 7-12, Weert / Nederweert
- **Locatie sessies (mock):** Keenterhart, Weert
- **Max 12 kinderen per reeks** (mock `maxSpots`)
- **Eigenaar repo:** Marten Köpp
- **Strategische adviseur (AI):** Claude (via claude.ai)
- **Bouwer (AI):** Cursor (via Cursor IDE)

---

*Einde STATUS.md*
````

---

## Cursor commit-conventies

Volg [Conventional Commits](https://www.conventionalcommits.org) lichtgewicht:

```
feat:     nieuwe functionaliteit (gebruiker-zichtbaar)
fix:      bugfix (gebruiker-zichtbaar)
refactor: code-verbetering zonder gedragsverandering
style:    visuele/CSS aanpassingen
chore:    onderhoud, deps, config
docs:     documentatie-only
wip:      tussentijdse push, onderbroken sessie
```

Voorbeelden:
- `feat(portal): voeg series enrollment toe aan agenda`
- `fix(home): hero accent kleur klopt niet in dark mode`
- `chore(status): sessie 21-05 — agenda + privacy-checklist update`

**Scope is optioneel maar geadviseerd:** `(home)`, `(portal)`, `(formulier)`, `(config)`, `(status)`.

---

## Wat Cursor NIET moet doen

1. **STATUS.md tijdens een sessie bijwerken bij elke commit** — alleen aan einde.
2. **Eigenhandig spec-documenten in `docs/` aanpassen zonder daar in decision log melding van te maken.** Specs zijn van Claude-sessies; aanpassen mag, maar niet stilletjes.
3. **Privacy-checklist items op `[x]` zetten zonder echte verificatie.** Bij twijfel: `[~]` met korte uitleg in commit-bericht.
4. **Pushen zonder dat `npm run build` succesvol is.** Broken main is broken handover.
5. **Force-pushen naar main.** Nooit. Bij geschiedenis-issues: Marten betrekken.
6. **Marten's keuzes "corrigeren" zonder overleg.** Als iets in decision log staat dat technisch beter anders kan, vermeld het in een aparte sectie "Cursor's observaties", niet door de keuze om te draaien.

---

## Voor Claude (bij sessie-start)

Als Marten een Claude-sessie opent en de werk-context is dit project:

1. Claude leest STATUS.md (Marten plakt URL of inhoud)
2. Claude checkt de decision log voor nieuwe entries sinds vorige Claude-sessie
3. Claude noemt eventuele afwijkingen van eerdere specs expliciet — niet om te corrigeren maar om te bevestigen dat ze gezien zijn
4. Claude vraagt aan einde sessie: "Welke entry moet ik voorstellen voor het decision log?" — Marten beslist of het erin komt

---

## Aanpak voor implementatie

**Stap 1:** Cursor leest dit document.

**Stap 2:** Cursor herstructureert huidige STATUS.md volgens template hierboven. Bestaande inhoud wordt verdeeld over de juiste secties. Niets gaat verloren.

**Stap 3:** Cursor vult decision log met retrospectieve entries voor keuzes die al gemaakt zijn (Next 16, Tailwind 4, leeftijd 7-12, reeks-inschrijving, middleware verwijderd).

**Stap 4:** Cursor loopt privacy-checklist door en zet statussen.

**Stap 5:** Commit als `docs(status): herstructuur STATUS.md volgens workflow-instructie` en push.

**Stap 6:** Marten controleert. Claude reviewt bij volgende sessie.

---

*Einde Cursor-instructie. Plaats relevante delen in `.cursorrules` of project rules. Bewaar deze volledige file in `docs/TakTiek_cursor_workflow.md` voor toekomstige referentie.*
