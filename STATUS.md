# TakTiek — Projectstatus

> **Doelgroep van dit document:** Marten + AI-assistenten (Claude, Cursor, toekomstige tools).
> **Update-frequentie:** aan einde elke werk-sessie.
> **Onderhoud:** Cursor schrijft, Claude reviewt bij sessie-start, Marten heeft eindverantwoordelijkheid.

---

## Sessie-info

| Veld | Waarde |
|------|--------|
| Laatst bijgewerkt | 21 mei 2026 |
| Laatste sessie-type | Cursor |
| Laatste commit | `7e614a9` — chore(status): sessie-info bijgewerkt na workflow-adoptie |
| Volgende geplande actie | Supabase + echte auth, of content/placeholders invullen vóór livegang |

**Repo:** https://github.com/MK123456789879/TakTiek  
**Git-root:** `taktiek-site/` (SSH push werkt; `gh` CLI optioneel apart inloggen)

---

## Waar staan we?

**Fase:** Dummy / demo

**Eén-zin status:** Volledige Next.js dummy-site met publieke pagina’s, aanmeldformulier, ouderportaal en agenda met inschrijving per themareeks — alles client-side mock, geen database.

**Wat werkt:**

- Alle publieke routes + design system (Tailwind 4, tokens, Fredoka/Inter)
- Aanmelden met validatie, privacy-balk, tooltips, dubbele consent
- Portal: dashboard, agenda (kalender + lijst), mededelingen, mijn kind, instellingen
- Reeks-inschrijving (`portal-store`) + maandkalender
- `npm run build` slaagt; deploybaar op Vercel

**Wat is volgende:**

1. Supabase-schema + RLS + echte persistentie
2. Google OAuth / magic link voor portal
3. Placeholders invullen (privacyverklaring verwerkingsverantwoordelijke, foto’s, FAQ kosten)

---

## Architectuur (samenvatting)

```
TakTiek/                          ← workspace root (geen .git)
├── STATUS.md                     ← sync-kopie van repo-STATUS (handmatig)
├── TakTiek_*.md                  ← originele specs (niet in git)
└── taktiek-site/                 ← Next.js app (git repo)
    ├── STATUS.md                 ← dit bestand (bron van waarheid)
    ├── .cursor/rules/            ← Cursor workflow-regels
    ├── app/
    │   ├── (public)/
    │   ├── (auth)/
    │   ├── (portal)/
    │   ├── page.tsx              ← home (niet onder (public)/)
    │   └── layout.tsx
    ├── components/
    ├── content/nl.json
    ├── lib/
    │   ├── mock-data.ts
    │   ├── portal-store.ts
    │   └── use-portal-store.ts
    ├── i18n/request.ts
    └── docs/
```

**Tech-stack actueel:**

- Next.js 16.2.6, App Router, TypeScript
- Tailwind CSS 4
- next-intl (locale vast `nl` via `i18n/request.ts`; geen `middleware.ts`)
- react-hook-form + zod
- clsx, tailwind-merge

**Wat er nog niet is:**

- Supabase / database
- Echte authenticatie (nu demo-knop op `/inloggen`)
- E-mail / notificaties
- EN-locale actief (`content/en.json` is placeholder)
- Echte foto’s (SVG-placeholders in `public/images/placeholder/`)

---

## Decision Log

> **Format:** `- **[datum] — [wie]** — [wat] — [waarom] — [impact]**`
> **Doel:** keuzes traceren die afwijken van specs of toekomstige agents zouden verbazen.

### 2026-05-21

- **2026-05-21 — Cursor** — Next.js 16 ipv 14 — default bij `create-next-app`, niet bewust gekozen in handover — geen build-issues; opletten bij Vercel/docs
- **2026-05-21 — Cursor** — Tailwind 4 ipv 3 — idem setup — andere config-syntax dan oudere voorbeelden
- **2026-05-21 — Marten** — Leeftijd 7–12 in copy (spec/content had 5–12) — pilotdoelgroep — `nl.json` en FAQ; formulier Zod staat nog `min(5)` → zie privacy `[~]`
- **2026-05-21 — Cursor** — Inschrijving per themareeks ipv per sessie — past bij pedagogisch model — `SessionSeries` + `portal-store.enrollments`
- **2026-05-21 — Cursor** — `middleware.ts` verwijderd — veroorzaakte 404 op alle routes — bij EN-toggle opnieuw evalueren
- **2026-05-21 — Cursor** — `turbopack.root` in `next.config.ts` — verkeerde workspace-root bij dev buiten `taktiek-site/` — altijd `cd taktiek-site` voor `npm run dev`
- **2026-05-21 — Cursor** — Home op `app/page.tsx` — `(public)/page.tsx` verwijderd om routing-conflict te vermijden — één home-route
- **2026-05-21 — Cursor** — STATUS.md workflow + privacy-checklist — `docs/TakTiek_cursor_workflow.md` — vaste structuur voor multi-agent handover

---

## Privacy Checklist

> **Bron:** `docs/TakTiek_PAGE_LAYOUTS.md` (privacy-touchpoints)
> **Status-legenda:** `[ ]` niet · `[~]` gedeeltelijk · `[x]` af · `[!]` issue
> **Laatste controle:** 21 mei 2026 (code-review dummy-fase)

### Publieke site

- [x] Trust-sectie op home aanwezig (tussen Practical en CTA) — `TrustSection` in `app/page.tsx`
- [x] `/vertrouwen`-pagina bestaat met 4 principes uitgewerkt
- [~] Privacyverklaring op `/privacyverklaring` — pagina + secties; **verwerkingsverantwoordelijke nog PLACEHOLDER** in `content/nl.json`
- [x] Footer-link "Hoe we omgaan met gegevens" — `global.footer.trust_link` → `/vertrouwen`

### Aanmeldformulier (`/aanmelden`)

- [x] Privacy-balkje boven het formulier zichtbaar
- [x] "Waarom"-tooltip bij elk veld — `FormField` + `Tooltip`
- [x] Bijzonderheden-veld optioneel, met uitleg wie dit ziet — `care_intro` / `care.why`
- [x] Twee aparte consent-checkboxes (privacy verplicht, foto opt-in)
- [x] Success-modal toont "Wat gebeurt er nu met deze gegevens?" — uitklapbaar panel
- [x] Geen geboortedatum gevraagd (alleen leeftijd)
- [~] Geen BSN, diagnose, schoolnaam verplicht — geen BSN/diagnose; schoolgroep optioneel; Zod `childAge` min nog 5 (copy zegt 7–12)

### Portal

- [x] Login-pagina toont: "Je ziet hier alleen de gegevens van je eigen kind(eren)"
- [x] `/portal` toont alleen eigen gezin (mock: één kind, geen ledenlijst)
- [x] `/portal/mijn-kind` heeft "verwijderen"-knop prominent in eigen visuele zone (coral sectie)
- [x] Verwijder-confirmation noemt expliciet wat verwijderd wordt
- [x] `/portal/instellingen` toont toestemmingen individueel intrekbaar
- [~] Data-export knop — UI + client-side JSON-download demo; geen server-endpoint

### Data-architectuur (voor wanneer Supabase erin komt)

- [ ] Gevoeligheidsdata in aparte tabel (`medical_notes`), niet in `signups`
- [ ] RLS op `parent_id` voor alle ouder-faciliterende tabellen
- [ ] RLS op `session_id` voor `medical_notes`
- [ ] Hard delete bij "verwijderen"
- [ ] Data-export endpoint volledige JSON server-side

---

## Mapstructuur (gedetailleerd)

```
taktiek-site/
├── app/
│   ├── (public)/          aanmelden, over, team, …
│   ├── (auth)/inloggen/
│   ├── (portal)/portal/   dashboard, agenda, mijn-kind, …
│   ├── page.tsx           home
│   └── globals.css
├── components/
│   ├── layout/            SiteShell, PortalShell, Nav, Footer
│   ├── ui/                Button, FormField, Tag, Tooltip, …
│   ├── home/              Hero, TrustSection, …
│   ├── portal/            AgendaCalendar, SeriesEnrollmentCard, …
│   └── signup/            SignupForm
├── content/
│   ├── nl.json
│   └── en.json
├── lib/
│   ├── mock-data.ts
│   ├── portal-store.ts
│   ├── use-portal-store.ts
│   └── signup-schema.ts
└── public/images/placeholder/
```

---

## Lokaal draaien

```bash
cd taktiek-site
npm install
npm run dev
```

Open URL uit terminal (meestal http://localhost:3000).  
**Altijd vanuit `taktiek-site/`** — anders Turbopack-root issues en 404.

```bash
npm run build   # moet slagen vóór elke push naar main
```

---

## Routes overzicht

| Route | Status | Privacy-touchpoint |
|-------|--------|-------------------|
| `/` | Af | Trust-sectie [x] |
| `/over` | Af | — |
| `/team` | Af | — |
| `/aanpak` | Af | — |
| `/vertrouwen` | Af | Hele pagina [x] |
| `/vragen` | Af | — |
| `/aanmelden` | Af (demo `console.log`) | Formulier [x], leeftijd-min [~] |
| `/privacyverklaring` | Af | Verwerkingsverantw. [~] |
| `/inloggen` | Af (demo) | Disclosure [x] |
| `/portal` | Af | Eigen-data-only [x] |
| `/portal/agenda` | Af | Reeks-inschrijving + demo-banner |
| `/portal/mededelingen` | Af | — |
| `/portal/mijn-kind` | Af | Verwijder-knop [x] |
| `/portal/instellingen` | Af | Toestemmingen [x], export [~] |
| `/coming-soon` | Placeholder | — |

---

## Bekende valkuilen

1. **Server niet vanuit `taktiek-site/`** → 404 op alle routes
2. **Oude dev-server op andere poort** → `Ctrl+C`, opnieuw `npm run dev`
3. **`.next` corrupt** → `rm -rf .next` en opnieuw builden
4. **Git alleen in `taktiek-site/`** — wijzigingen in workspace-root `TakTiek/*.md` niet automatisch in remote
5. **Demo-state** — inschrijving, profiel, verwijderen: client-only (`portal-store`), geen persistentie
6. **Dubbele STATUS.md** — repo-versie is leidend; root-kopie syncen na sessie-einde

---

## Referentie-documenten

| Document | Wat erin staat |
|----------|----------------|
| `docs/TakTiek_cursor_workflow.md` | STATUS/git/privacy-proces voor Cursor + Claude |
| `docs/TakTiek_cursor_handover.md` | Build-instructies, fasering (Next 14 in spec; code is 16) |
| `docs/TakTiek_PAGE_LAYOUTS.md` | Per pagina secties, privacy-touchpoints |
| `docs/TakTiek_content.md` | UI-copy bron |
| `docs/TakTiek_photography.md` | Fotografie-richtlijn |

**Bij conflict tussen spec en code:** code wint voor implementatie; spec + decision log bijwerken.

---

## Datamodel (agenda — dummy)

```
SessionSeries → MockSession[] (vrijdagen)
portal-store.enrollments: Record<seriesId, "enrolled" | "none">
```

Actieve reeks: `spellen-2026-q2` (6 sessies). Placeholder: `verkennen-2026-q3` (`enrollmentOpen: false`).  
Demo: Jules start ingeschreven.

---

## Demo-flow (pitch)

Home → Vertrouwen → Aanmelden → Inloggen (demo-ouder) → Portal agenda → Mijn kind

---

## Contact / context

- **Doelgroep:** ouders, kind 7–12, Weert / Nederweert
- **Locatie sessies (mock):** Keenterhart, Weert
- **Max 12 kinderen per reeks** (`maxSpots`)
- **Eigenaar repo:** Marten Köpp / MK123456789879
- **Strategisch (AI):** Claude · **Bouw (AI):** Cursor

---

*Einde STATUS.md*
