# TakTiek — projectstatus (voor Claude / AI-assistenten)

**Laatst bijgewerkt:** 21 mei 2026  
**Eigenaar-repo:** https://github.com/MK123456789879/TakTiek  
**Laatste commit:** `1927177` — dummy-site met portal-agenda en inschrijving per themareeks

---

## Wat is dit?

TakTiek is een Nederlandse peergroup-site voor ouders (kinderen 7–12). De **werkende app** staat in `taktiek-site/` (Next.js 16, App Router, TypeScript, Tailwind 4, next-intl). De map erboven bevat **bron-specs** (markdown/JSX) die tijdens de build zijn gekopieerd naar `taktiek-site/docs/`.

**Fase nu:** dummy/demo — geen echte backend, auth of database.

---

## Mapstructuur

```
TakTiek/                          ← workspace root (geen .git)
├── STATUS.md                     ← dit bestand
├── TakTiek_*.md                  ← originele specs (niet in git)
├── taktieklogo.svg
└── taktiek-site/                 ← **git repo** + Next.js app
    ├── app/                      ← routes
    ├── components/
    ├── content/nl.json           ← alle UI-copy (NL)
    ├── lib/mock-data.ts          ← sessies + themareeksen
    ├── lib/portal-store.ts       ← client state (profiel + inschrijvingen)
    └── docs/                     ← kopie specs
```

---

## Git & remote

| Item | Waarde |
|------|--------|
| Git-root | `taktiek-site/` alleen |
| Branch | `main` |
| Remote | `git@github.com:MK123456789879/TakTiek.git` |
| Push | SSH werkt; HTTPS/`gh` vereist aparte login |

Markdown in de bovenliggende `TakTiek/`-map staat **niet** in de remote — alleen wat in `taktiek-site/` gecommit is.

---

## Lokaal draaien

```bash
cd taktiek-site
npm install
npm run dev
```

Open de URL uit de terminal (meestal http://localhost:3000).  
**Altijd** vanuit `taktiek-site` starten — anders 404 of verkeerde Turbopack-root.

```bash
npm run build   # moet slagen vóór deploy
```

---

## Routes (dummy)

| Route | Status |
|-------|--------|
| `/` | Home |
| `/aanpak`, `/over`, `/team`, `/vertrouwen`, `/vragen` | Publiek |
| `/aanmelden` | Formulier → `console.log` |
| `/privacyverklaring` | Statisch |
| `/inloggen` | Demo-knop → portal |
| `/portal` | Dashboard |
| `/portal/agenda` | Kalender + reeks-inschrijving |
| `/portal/mededelingen` | Mock mededelingen |
| `/portal/mijn-kind` | Profiel + verwijder-demo |
| `/portal/instellingen` | Account/toestemmingen |
| `/coming-soon` | Placeholder |

---

## Wat is gebouwd (klaar)

### Publieke site
- Design tokens in `app/globals.css` (kleuren, radius, fonts)
- Alle publieke pagina’s + aanmeldformulier (Zod + react-hook-form)
- SVG-placeholders in `public/images/placeholder/` (geen externe downloads)
- i18n via next-intl plugin + `i18n/request.ts` (locale vast `nl`)
- **Geen** `middleware.ts` (veroorzaakte eerder 404 op alle routes)

### Portal
- Mock ouder/kind (`lib/mock-data.ts`)
- `portal-store.ts`: profiel, verwijderen, **inschrijving per themareeks**
- **Agenda** (`/portal/agenda`):
  - Hoofdweergave: maandkalender (`AgendaCalendar`) — alleen vrijdagen met sessies
  - Toggle Kalender | Lijst
  - `SeriesEnrollmentCard`: in-/uitschrijven hele reeks + bevestigingsmodal
  - `SessionDetailPanel` bij dagklik
  - Demo: Jules start ingeschreven voor `spellen-2026-q2`
- Dashboard: volgende **ingeschreven** sessie of CTA naar agenda

### Config-fixes (belangrijk voor agents)
- `next.config.ts`: `turbopack.root` + `outputFileTracingRoot` → monorepo/workspace-root issues
- Hero: geen ICU `{accent}` in één string — split keys in `nl.json`

---

## Wat nog niet bestaat

| Onderdeel | Opmerking |
|-----------|-----------|
| Supabase / Postgres | Handover beschrijft schema; niet geïmplementeerd |
| Echte auth | Google OAuth / magic link — nu demo-knop |
| E-mail / notificaties | — |
| EN-locale actief | `content/en.json` aanwezig, UI is NL-only |
| Echte foto’s | Vervang placeholders (zie `public/images/placeholder/README.md`) |
| `gh` CLI login | Optioneel; SSH-push werkt wel |

---

## Kernbestanden voor vervolgwerk

| Bestand | Rol |
|---------|-----|
| `lib/mock-data.ts` | `SessionSeries`, `MockSession`, announcements |
| `lib/portal-store.ts` | Enrollments, `getNextEnrolledSession()`, demo spots |
| `lib/use-portal-store.ts` | React `useSyncExternalStore` hook |
| `components/portal/AgendaCalendar.tsx` | Maandkalender |
| `components/portal/SeriesEnrollmentCard.tsx` | Reeks in-/uitschrijven |
| `content/nl.json` | Alle copy onder `portal.agenda`, `portal.dashboard`, … |
| `docs/TakTiek_cursor_handover.md` | Product/architectuur-handover |
| `docs/TakTiek_PAGE_LAYOUTS.md` | Layout-specificaties |

---

## Datamodel (agenda — huidige dummy)

```
SessionSeries (themareeks)
  └── MockSession[] (vrijdagen, status: confirmed | pending | cancelled)

portal-store.enrollments: Record<seriesId, "enrolled" | "none">
  → isChildEnrolledForSession(sessionId) afgeleid van reeks
```

Actieve reeks: `spellen-2026-q2` (6 sessies mei–juni 2026).  
Placeholder: `verkennen-2026-q3` (`enrollmentOpen: false`).

---

## Bekende valkuilen

1. **Server niet in `taktiek-site`** → 404 “Deze pagina bestaat niet”.
2. **Oude dev-server op andere poort** → stop met `Ctrl+C`, opnieuw `npm run dev`.
3. **`.next` corrupt** → `rm -rf .next` en opnieuw builden.
4. **Inschrijving is demo** — alleen client state + `console.log`; banner op agenda.
5. **Git-commit alleen in `taktiek-site/`** — wijzigingen in root-specs handmatig syncen naar `docs/` indien nodig.

---

## Aanbevolen volgende stappen

1. Supabase-schema + RLS (`session_series`, `sessions`, `series_enrollments`)
2. Google OAuth + sessie voor portal
3. Aanmeldformulier koppelen aan database
4. Echte foto’s i.p.v. SVG-placeholders
5. EN-toggle activeren (routing + `middleware` alleen als nodig en getest)

---

## Snelle demo-flow (pitch)

1. Home → 2. Vertrouwen → 3. Aanmelden → 4. Inloggen (demo-ouder) → 5. Portal agenda (kalender + reeks) → 6. Mijn kind (profiel/verwijderen)

---

## Contact / context

- Doelgroep: ouders, kind 7–12, Weert / Nederweert
- Locatie sessies (mock): Keenterhart, Weert
- Max 12 kinderen per reeks (mock `maxSpots`)
