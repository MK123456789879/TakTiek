# TakTiek — Cursor Handover

> **Voor:** Marten, om naar Cursor over te dragen
> **Datum:** 21 mei 2026
> **Doel:** Van drie design-documenten naar een werkende dummy in Next.js 14
> **Geschatte tijd in Cursor:** 1-2 sessies van een paar uur, afhankelijk van interruptie

---

## Bron-documenten

Plaats deze in `/docs/` in de repo zodat ze raadpleegbaar zijn vanuit Cursor:

1. `TakTiek_content.md` — alle copy, gestructureerd voor i18n
2. `TakTiek_PAGE_LAYOUTS.md` — per pagina secties, componenten, states
3. `TakTiek_photography.md` — fotografie-richtlijn
4. `TakTiek_homepage.jsx` — visuele referentie homepage (niet kopiëren — herinterpretatie)
5. `taktieklogo.svg` — logo source

---

## Tech-stack (samenvatting)

- **Framework**: Next.js 14, App Router, TypeScript
- **Styling**: Tailwind CSS + CSS variables voor design tokens
- **Fonts**: Fredoka (display) + Inter (body), via `next/font/google`
- **i18n**: next-intl (lichte, App Router-compatible setup)
- **Images**: `next/image` met lokale `/public/images/`
- **Forms**: react-hook-form + zod voor validatie
- **Mock data**: lokale TypeScript-bestanden voor dummy-content
- **Backend**: GEEN voor de dummy. Login is mock, formulier slaat niets op.

---

## Setup-volgorde (aanbevolen)

### Fase 0 — Project setup (30 min)

```bash
npx create-next-app@latest taktiek-site --typescript --tailwind --app
cd taktiek-site
npm install next-intl react-hook-form zod @hookform/resolvers
```

Daarna:

1. Plaats `taktieklogo.svg` in `/public/logo/`
2. Plaats alle 4 docs in `/docs/`
3. Maak `/public/images/placeholder/` aan
4. Configureer `next.config.js` voor images en i18n

### Fase 1 — Design system (45 min)

**Doel**: Tokens beschikbaar maken in Tailwind + globale CSS.

1. **`tailwind.config.ts`** — voeg de TakTiek-kleuren toe:
   ```typescript
   colors: {
     teal: '#05A7A7',
     coral: '#F25F4E',
     lime: '#A8C734',
     purple: '#623D92',
     cream: '#FDFBF5',
     ink: {
       DEFAULT: '#1F1B2E',
       soft: '#5A5468',
       muted: '#8B8696',
     },
   }
   ```

2. **`app/globals.css`** — CSS-variabelen voor wat Tailwind niet dekt (schaduwen, radii, custom values uit homepage.jsx).

3. **Fonts** in `app/layout.tsx`:
   ```typescript
   import { Fredoka, Inter } from 'next/font/google';
   const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700'] });
   const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
   ```

4. **Logo component** (`components/Logo.tsx`) — inline SVG, niet `<img src=...>`, zodat kleuren matchen met DS-tokens en hij scherp blijft op alle resoluties.

### Fase 2 — Content infrastructuur (30 min)

**Doel**: copy uit `TakTiek_content.md` omzetten naar JSON, klaar voor i18n.

1. **`/content/nl.json`** — alle copy uit het content-document, één-op-één omgezet naar JSON-keys.
2. **`/content/en.json`** — placeholder met dezelfde keys, value `"[TODO: translate]"` of leeg.
3. **i18n setup** met next-intl. Verwijzing: [next-intl App Router docs](https://next-intl.dev/docs/getting-started/app-router).
4. **Taalwissel-component** in nav (rechts), maar voorlopig alleen NL actief. EN-toggle disabled met tooltip "Coming soon" — zodat de UI-positie al vast staat.

### Fase 3 — Layout shells (45 min)

**Doel**: SiteShell (nav + footer publiek) en PortalShell (nav portal).

1. **`components/layout/SiteShell.tsx`** — sticky nav, content slot, footer
2. **`components/layout/PortalShell.tsx`** — andere nav (uitloggen, geen "aanmelden"), portal-footer (verkort)
3. **`components/layout/Nav.tsx`** — verantwoordelijk voor logo + links + CTA
4. **`components/layout/Footer.tsx`** — vier kolommen, voortgekomen-uit-noot

Test: een lege `app/page.tsx` met `<SiteShell>` rendert nav + footer.

### Fase 4 — Homepage (60 min)

**Doel**: de homepage uit `TakTiek_homepage.jsx` herbouwen als Next.js page met losse componenten.

Volg de homepage als referentie maar bouw als losse componenten:

- `components/home/Hero.tsx`
- `components/home/PillarGrid.tsx` met `components/home/PillarCard.tsx`
- `components/home/PracticalStrip.tsx`
- `components/home/TrustSection.tsx` met `components/home/TrustItem.tsx`
- `components/home/CTACard.tsx`

Alle teksten via `useTranslations('home')` uit next-intl.

### Fase 5 — Publieke content-pagina's (90 min)

Per pagina volg `TakTiek_PAGE_LAYOUTS.md`:

1. `/over` — Over TakTiek (met 1 sfeerfoto)
2. `/team` — Team (met 5 portretten — stock placeholders)
3. `/aanpak` — Aanpak (2 sfeerfoto's)
4. `/vertrouwen` — Privacy als principe
5. `/vragen` — FAQ accordion
6. `/privacyverklaring` — Juridische verklaring met sticky TOC

Bij elke pagina:
- Eigen `Hero`-variant maar consistente eyebrow + heading-stijl
- Maak component herbruikbaar als hij twee keer voorkomt, niet eerder (no premature abstraction)

### Fase 6 — Foto's plaatsen (60 min)

**Volg `TakTiek_photography.md`:**

1. Open Unsplash met de zoektermen uit het photography-doc
2. Voor elke slot uit het document: download 2-3 opties (`team-helen-01.jpg`, `team-helen-02.jpg`...)
3. Plaats in `/public/images/placeholder/`
4. Maak `README.md` in die folder met bronvermelding per foto
5. Gebruik `next/image` met `priority` voor above-the-fold, anders lazy
6. Code-commentaar `// PLACEHOLDER — vervangen vóór livegang. Bron: Unsplash/{fotograaf}`

### Fase 7 — Aanmeldformulier (90 min)

**Dit is de privacy-kritieke pagina.** Bouw zorgvuldig.

1. **`/aanmelden/page.tsx`** met:
   - Privacy-balkje boven het formulier
   - Stappen-formulier (alles op één pagina, maar visueel in 5 secties)
   - `FormField` component met label, helptekst, "waarom"-tooltip
   - `ConsentCheckbox` component met verplicht/optioneel-indicator

2. **Validatie** met zod-schema. Alle "waarom"-teksten uit content doc.

3. **Submit**: GEEN backend. Log naar console, toon success modal met "Dit is een demo — er is niets opgeslagen."

4. **Tooltip-component** (`components/ui/Tooltip.tsx`):
   - Desktop: hover/focus toont tooltip
   - Mobile: altijd zichtbaar onder label in lichte grijs
   - Toegankelijk via toetsenbord (aria-describedby)

### Fase 8 — Portal (mock) (120 min)

**Routes:** `/inloggen`, `/portal`, `/portal/agenda`, `/portal/mededelingen`, `/portal/mijn-kind`, `/portal/instellingen`

**Mock-login**:
- `/inloggen` heeft één knop "Inloggen als demo-ouder" die direct naar `/portal` navigeert
- Geen Supabase, geen auth-flow, geen sessie-management
- Wel: een fictief gezin in lokale TypeScript-data (`/lib/mock-data.ts`)

**Inhoud van de mock-data:**

```typescript
// /lib/mock-data.ts
export const mockParent = {
  name: 'Sanne',
  email: 'sanne.demo@example.com',
};

export const mockChild = {
  name: 'Jules',
  age: 8,
  schoolGroup: 'Groep 5',
};

export const mockSessions = [
  { date: '2026-05-22', theme: 'Kennismaking en eerste spelletjes', location: 'Keenterhart, Weert' },
  // ... 5 meer uit content doc
];

export const mockAnnouncements = [
  // ... uit content doc
];
```

**Bouw eerst** `/portal` (dashboard), daarna agenda, mededelingen, mijn-kind, instellingen.

**Voor "mijn-kind"-pagina**: zorg dat de "Verwijderen"-knop functioneel werkt op de mock (toont confirmation modal, "verwijdert" lokaal de mock-data, redirect naar bevestigingspagina). Dit demonstreert het privacy-principe.

### Fase 9 — Polish (60 min)

- **Toegankelijkheid check**: keyboard navigatie, focus states, semantische HTML, alt-teksten
- **Responsive check**: alle breakpoints uit homepage.jsx toegepast
- **Loading states**: skeleton voor sections die data laden (al is het mock)
- **404-pagina**: `not-found.tsx` met TakTiek-stijl
- **Meta tags**: titles per pagina, OG image (logo op cream achtergrond)
- **Favicon**: gebaseerd op de "T" uit het logo

---

## Anti-patronen om te vermijden

**Niet doen:**
- Echte Supabase / Auth opzetten voor de dummy — verspild werk, en privacy-risico (echte data in dummy = nee)
- De homepage.jsx letterlijk kopiëren — herinterpreteer als losse Next.js componenten
- Tailwind volledig vermijden ten gunste van CSS modules — Tailwind + CSS vars werkt prima samen
- i18n uitstellen "tot later" — kost je later veel meer werk
- Foto's hotlinken vanuit Unsplash/Pexels — moeten lokaal staan, anders breekt het bij offline-pitch
- Een mega-`globals.css` met alle styling — Tailwind is de bedoeling, globals.css alleen voor tokens en reset

**Wel doen:**
- Componenten klein houden — splitst zodra logica > visueel
- Content uit JSON, niet inline strings — i18n hoeft niet meer dan een vertaal-toevoeging
- Code-commentaar bij placeholders, prominent (`// PLACEHOLDER:` heeft search-vriendelijke vorm)
- Git-commits per fase — handover punten

---

## Specifieke aandachtspunten

### Logo-component

Embed het hele SVG inline in `<Logo />`-component. Geen `<img src>`. Reden:
- Kleuren kunnen via CSS aangepast (bv. monochrome variant voor footer of een dark mode)
- Scherp op elke resolutie
- Geen extra HTTP-request

Voorbeeld:
```typescript
export function Logo({ variant = 'color', className }: LogoProps) {
  return (
    <svg viewBox="0 0 922.6 236.84" className={className} role="img" aria-label="TakTiek">
      {/* paths uit taktieklogo.svg */}
    </svg>
  );
}
```

### Privacy-touchpoints checklist

Voor elke pagina, check of de relevante touchpoints aanwezig zijn:

- [ ] Home — Trust-sectie tussen Practical en CTA
- [ ] Aanmelden — "waarom"-tooltip bij elk veld
- [ ] Aanmelden — twee aparte consent-checkboxes (privacy verplicht, foto optioneel)
- [ ] Aanmelden — succesmodal met "Wat gebeurt er nu met deze gegevens?"
- [ ] Login — kleine tekst "Je ziet hier alleen de gegevens van je eigen kind(eren)"
- [ ] Portal — alleen eigen gezin zichtbaar, geen ledenlijst
- [ ] Mijn-kind — verwijderknop prominent in eigen visuele zone
- [ ] Instellingen — toestemmingen individueel intrekbaar
- [ ] Instellingen — data-export knop (mag in mock een fake JSON downloaden)

### Wat *niet* in deze dummy hoort

- Cookie banner (komt later, vereist analytics-keuze)
- Echte e-mail-versturing
- Echte authenticatie
- Echte database
- Echte foto's van kinderen
- Echte teamleden-portretten

---

## Acceptatiecriteria (klaar wanneer...)

- [ ] Alle 14 pagina's uit page layouts werken en zijn navigeerbaar
- [ ] Logo is overal scherp en in de juiste kleuren
- [ ] Mobiel responsive op alle pagina's
- [ ] Toetsenbord-navigatie werkt op formulier
- [ ] Privacy-touchpoints uit checklist aanwezig
- [ ] Mock-login → portal → mijn-kind → verwijderen werkt als demo-flow
- [ ] Placeholder-foto's zichtbaar met code-commentaar
- [ ] README.md in root beschrijft hoe te starten en wat dummy/echt is
- [ ] Vercel-deploy mogelijk (geen broken builds)

---

## Pitch-strategie (wanneer site af is)

Voorstel volgorde voor het laten zien aan team:

1. **Eerst homepage** — vraag of de toon klopt
2. **Dan Vertrouwen-pagina** — check of privacy-aanpak resoneert
3. **Dan aanmeldformulier** — laat de "waarom"-tooltips zien, en de twee consent-checkboxes
4. **Dan portal mijn-kind** — laat de verwijder-knop zien
5. **Dan teampagina** — vraag of iedereen z'n eigen bio wil herschrijven en eigen portret wil aanleveren

Hou de discussie over "wie is verwerkingsverantwoordelijke" uit deze eerste pitch — laat het ontwerp eerst landen. De juridische vraag komt vanzelf zodra mensen zien dat het serieus is.

---

## Volgende stappen na deze dummy

Geen onderdeel van deze handover, maar voor context:

- **Volgende sprint**: backend opzetten (Supabase EU-regio, Row Level Security)
- **Daarna**: echte auth-flow (Google OAuth + magic link)
- **Daarna**: echte mail-versturing (Resend)
- **Daarna**: echte foto's vervangen
- **Laatst**: privacy-juridisch laten reviewen (kan via Studio Kauw's eigen verwerkingsregister of een AVG-adviseur)

Pas dan live.

---

## Vragen tijdens implementatie

Open issues om in Cursor mee te nemen of voor de pitch te bespreken:

1. **Wachtwoord vergeten op login-pagina** — link aanwezig, target nog niet bepaald. Voor dummy: linkt naar een "Coming soon"-pagina.
2. **Welk e-mailadres in de footer voor "Privacy vragen"** — nu `peergrouptaktiek@gmail.com`, maar voor AVG-rechten apart adres aanrader.
3. **Domeinkeuze** — `taktiekweert.nl` zoals op flyer? Of `taktiek.nl` als beschikbaar? Niet kritiek voor dummy.
4. **Open Graph image** — logo op cream, met tagline. Tagline pas zodra besloten.
