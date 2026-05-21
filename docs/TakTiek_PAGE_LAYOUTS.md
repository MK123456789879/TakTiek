# TakTiek — Page Layouts

> **Versie:** Draft 1
> **Datum:** 21 mei 2026
> **Status:** Spec voor Cursor-implementatie
> **Bron-documenten:** `TakTiek_content.md`, `TakTiek_homepage.jsx`, `TakTiek_photography.md`

---

## Doel van dit document

Per pagina specificeert dit document:
- **Secties** — welke blokken op de pagina staan, in welke volgorde
- **Componenten** — welke herbruikbare componenten gebruikt worden
- **Image slots** — waar foto's komen, welk type, welk formaat
- **States** — loading, empty, error, success
- **Privacy-touchpoints** — waar het vertrouwens-ontwerp landt

Layouts zijn beschrijvend, niet code. De `TakTiek_homepage.jsx` is de visuele referentie voor styling-tokens, spacing en patronen.

---

## Site-architectuur

### Routes

```
/                          → Home
/over                      → Over TakTiek
/team                      → Het team
/aanpak                    → Onze aanpak
/vertrouwen                → Privacy als principe (publieke pagina)
/vragen                    → FAQ
/aanmelden                 → Aanmeldformulier
/privacyverklaring         → Juridische privacyverklaring
/contact                   → Contact (optioneel — kan ook footer-only)

/inloggen                  → Login
/portal                    → Portal home (dashboard)
/portal/agenda             → Agenda
/portal/mededelingen       → Mededelingen
/portal/mijn-kind          → Profielbeheer kind
/portal/instellingen       → Account & toestemming
```

### Component-inventaris

**Layout-componenten:**
- `<SiteShell>` — wrapper met nav + footer voor publieke pagina's
- `<PortalShell>` — wrapper met andere nav voor ingelogde pagina's
- `<Container>` — max-width: 1200px, padding standaardisatie
- `<Section>` — verticaal ritme van secties (padding: 80–110px)

**Inhoudelijke componenten:**
- `<Hero>` — variant per pagina (home, content, portal)
- `<Eyebrow>` — kleine label-tekst boven heading
- `<PillarCard>` — de gekleurde kaarten op home
- `<TrustItem>` — privacy-principe met marker
- `<TeamMemberCard>` — portret + bio
- `<ScheduleCard>` — sessie in agenda
- `<AnnouncementCard>` — mededeling
- `<FormField>` — invoerveld met label, helptekst, "waarom" tooltip
- `<ConsentCheckbox>` — checkbox met verplichte/optionele indicator

**UI-componenten:**
- `<Button>` — primary (coral), secondary (ink underline), tertiary (purple)
- `<Tag>` — kleine label-pill in een DS-kleur
- `<Tooltip>` — voor de "waarom vragen we dit"-uitleg bij formuliervelden

### Globale states

Alle pagina's hebben:
- **Loading**: skeleton voor textblokken, blur-up voor images
- **Error**: vriendelijke foutmelding met retry-button + contactlink
- **Empty**: geldt vooral voor portal — "nog geen mededelingen"-illustratie
- **Offline**: kleine banner bovenaan "je bent offline, sommige info kan verouderd zijn"

---

## Page 1 — Home (`/`)

> Zie `TakTiek_homepage.jsx` voor de visuele uitwerking. Hieronder de spec.

### Secties (in volgorde)

1. **Nav** (sticky)
2. **Hero** — eyebrow, heading, sub, dubbele CTA, illustratie
3. **Pillars** — vier gekleurde kaarten met de waarden
4. **Practical strip** — voor-wie / wanneer / waar / groep
5. **Trust** — vier privacy-principes
6. **CTA-blok** — paarse kaart met aanmeld-link
7. **Footer**

### Image slots — Home

- **Hero**: GEEN foto. Geometrische compositie met DS-kleuren plus drie "kinderquote"-cards. Dit is bewust — kinderfoto's in de hero zou privacy-claims tegenspreken.
- **Pillars**: geen images. Nummers 01-04 in DS-kleuren.
- **Practical**: geen images. Typografisch.
- **Trust**: geen images. Markers in DS-kleuren met line-icons.
- **CTA**: geen images. Decoratieve blobs.

Resultaat: home werkt volledig zonder foto's. Bewust, want toon = "rustig en helder, niet stockphoto-zee".

### Privacy-touchpoint
De Trust-sectie tussen Practical en CTA. Bezoeker leest: wat het is → voor wie → hoe wij met data omgaan → klik om aan te melden.

---

## Page 2 — Over TakTiek (`/over`)

### Secties

1. **Nav**
2. **Hero-content** — eyebrow "Over TakTiek" + heading "Waarom we dit doen"
3. **Story** — paragrafen over ontstaan, samenwerking, positionering
4. **Doelstelling** — heading + 5 bullets (Helens punten)
5. **Wat TakTiek niet is** — afbakening, 4 bullets in andere kleur
6. **Image: groepsfoto** — sfeerfoto, géén gezichten (zie photography doc)
7. **Organization** — paragraaf over hoe het is georganiseerd
8. **CTA naar team-pagina** — "Maak kennis met het team →"
9. **Footer**

### Image slots — Over

- **Slot 1 (`over-hero-image`)**: GEEN. Tekst is genoeg.
- **Slot 2 (`over-atmosphere`)**: 1 grote landschapsfoto, full-width binnen container. Type: sfeer. Subject: handen op tafel met spelmateriaal, of leeg lokaal voor een sessie, of detail van bordspel. **Géén kindergezichten.** Aspect ratio: 16:9 of 4:3. Caption optioneel.

### Layout-detail
"Wat TakTiek niet is" staat bewust ná de doelstelling én ná de sfeerfoto. De foto verzacht de toon vóór de afbakening komt — anders leest het defensief.

---

## Page 3 — Het team (`/team`)

### Secties

1. **Nav**
2. **Hero-content** — "De mensen achter TakTiek"
3. **Intro** — paragraaf over dat dit ouder-gedragen is
4. **Team grid** — 5 leden in raster
5. **Footer-CTA** — "Wil je meedoen of meedenken?"
6. **Footer**

### Image slots — Team

- **Slot per lid (`team-portrait-{naam}`)**: portretfoto. Volwassenen, eigen toestemming, gezicht in beeld is hier oké. Aspect ratio: 1:1 (vierkant) of 4:5 (portret). Stijl: natuurlijk, niet corporate, geen witte achtergrond. **Voor pitch-versie: stock-portretfoto's die passen bij persoon, met disclaimer in code-commentaar `// PLACEHOLDER — vervangen door eigen portret`.**

### Layout
Grid: 3 kolommen op desktop, 2 op tablet, 1 op mobile.
Kaart per lid:
- Portretfoto bovenaan
- Naam (Fredoka Bold)
- Rol (Inter, kleur DS-token afhankelijk van positie)
- Bio (2-3 zinnen)

Volgorde:
1. Helen (initiatiefnemer — eerste positie, prominent)
2. Alessandro (mede-organisator)
3. Marten (design)
4. Rens (begeleider)
5. Jessica (begeleider)

### Privacy-touchpoint
Onder elke teamfoto staat de rol expliciet ("Initiatiefnemer & inhoud", "Begeleider"). Dat helpt ouders begrijpen wie hun kind tijdens een sessie tegenkomt — vertrouwen door transparantie over wie aanwezig is.

---

## Page 4 — Onze aanpak (`/aanpak`)

### Secties

1. **Nav**
2. **Hero-content** — "Hoe een sessie eruitziet"
3. **Rhythm** — wekelijks ritme paragraaf
4. **Image slot: locatie sfeerfoto** — Keenterhart-ruimte of detail
5. **Theme** — uitleg over thema "Spellen"
6. **Method** — TASC-model in mensentaal, 4 bullets
7. **Image slot: sessie-sfeer** — handen, materiaal, opstelling
8. **Location** — over de samenwerking met Speelotheek
9. **CTA naar aanmelden**
10. **Footer**

### Image slots — Aanpak

- **Slot 1 (`approach-location`)**: foto van de ruimte in het Keenterhart, leeg of in opbouw. **Géén kinderen herkenbaar.**
- **Slot 2 (`approach-session`)**: detailfoto van een sessie. Top-down view van tafel met spelmateriaal, of zijaanzicht van handen die iets bouwen. **Géén gezichten in beeld.**

### Layout
Twee sferen-foto's verspreid over de pagina, tussen tekstblokken. Dat geeft visueel ritme en concretiseert de tekst.

---

## Page 5 — Vertrouwen (`/vertrouwen`)

> Dit is de uitgebreide versie van de Trust-sectie op de home — als publieke pagina vindbaar voor wie meer wil weten zonder direct de juridische verklaring te openen.

### Secties

1. **Nav**
2. **Hero-content** — "Hoe wij omgaan met de gegevens van je kind"
3. **Intro** — empathische opening (zie content doc)
4. **De vier principes uitgewerkt** — elk principe krijgt een eigen blokje met meer detail
5. **Verschil met privacyverklaring** — kort: "Dit is de gewone-taal-versie. De volledige verklaring vind je [hier]."
6. **Wat we doen als er iets misgaat** — kort over data-incident protocol
7. **Contact bij vragen**
8. **Footer**

### Image slots — Vertrouwen

**Geen images.** Bewust. Foto's op een privacy-pagina zouden afleiden van de claim.

### Privacy-touchpoint
De hele pagina ís de touchpoint. Voor wie verder wil lezen dan de homepage-strip.

---

## Page 6 — Vragen (`/vragen`)

### Secties

1. **Nav**
2. **Hero-content** — "Veelgestelde vragen"
3. **FAQ accordion** — vragen + antwoorden uit content doc
4. **CTA: "Andere vraag? Mail ons."**
5. **Footer**

### Image slots — Vragen

Geen images.

### Layout-detail
Accordion default-state: alle vragen dicht. Eerste vraag eventueel open om af te trappen.
Categorieën als headers binnen FAQ:
- Voor wie?
- Praktisch
- Geld & lidmaatschap
- Privacy & gegevens

---

## Page 7 — Aanmelden (`/aanmelden`)

> **Dit is de privacy-kritieke pagina.** Hier landt het Trust-ontwerp in concrete UX.

### Secties

1. **Nav** (verkorte versie, minder afleiding)
2. **Hero-content** — "Welkom bij TakTiek" + intro
3. **Privacy-balkje** — boven het formulier, kort: "We vragen alleen wat nodig is. Bij elk veld lees je waarom. [Lees meer over hoe we omgaan met je gegevens →]"
4. **Formulier** — gesegmenteerd in stappen
5. **Confirmation modal** — na submit
6. **Footer** (verkorte versie)

### Formulier-structuur

**Stap 1: Over je kind**
- Naam kind *(verplicht)* — *"Zodat we je kind kunnen aanspreken bij de eerste sessie."*
- Leeftijd *(verplicht)* — *"Zodat we de groep evenwichtig kunnen samenstellen. We vragen geen geboortedatum."*
- Schoolgroep *(optioneel)* — *"Handig voor het indelen van werkgroepjes, maar niet verplicht."*

**Stap 2: Over jou (ouder/verzorger)**
- Naam ouder *(verplicht)*
- E-mailadres *(verplicht)* — *"Voor de bevestiging en communicatie over sessies."*
- Telefoonnummer *(verplicht)* — *"Voor noodgevallen of laatste-minuut-afzegging."*

**Stap 3: Praktisch**
- Aanwezigheid *(verplicht)* — radio: alle sessies / om de week / anders
- Speelotheek-lidmaatschap *(verplicht)* — radio: ja / nee / weet niet

**Stap 4: Bijzonderheden**
- Inleidende tekst: *"Zijn er dingen waar de begeleiders rekening mee moeten houden? Denk aan allergieën, gevoeligheden of dingen die helpen om je kind zich op zijn gemak te laten voelen. **Deze informatie wordt alleen gedeeld met de begeleiders van de sessies waar je kind aan deelneemt — niet met andere ouders, niet met de bredere community.** Vul alleen in wat je relevant vindt om te delen."*
- Bijzonderheden *(optioneel)* — textarea, max 500 tekens

**Stap 5: Toestemming**
- ☐ Ik heb de privacyverklaring gelezen en geef toestemming voor de verwerking van deze gegevens. *(verplicht)*
- ☐ Ik geef toestemming voor sfeerfoto's tijdens sessies, mits mijn kind niet identificeerbaar in beeld is op openbaar gedeelde foto's. *(optioneel)*

**Submit button**: "Aanmelding versturen →"

### Per-veld "waarom"-tooltip
Elk veld heeft een kleine `(?)`-icoon naast het label. Hover/tap toont de "waarom"-uitleg. Op mobile altijd zichtbaar onder het label in lichte grijs.

### Image slots — Aanmelden

**Geen images** in het formulier-gedeelte. Wel optioneel: één klein illustratie-element bovenaan om de pagina warm te maken. Geometrisch, niet fotografisch.

### States
- **Loading bij submit**: button toont spinner, "Bezig met versturen…"
- **Success**: modal met heading "Bedankt voor je aanmelding", body uit content doc, met daarbij **"Wat gebeurt er nu met deze gegevens?"** uitgeklapt-paneel — direct opnieuw bevestigen wat er gebeurt.
- **Error**: inline error per veld + algemene foutmelding bovenaan met "neem contact op als dit blijft gebeuren"

### Privacy-touchpoint
Letterlijk de hele pagina. Elke "waarom"-tooltip is een privacy-touchpoint. De toestemmings-checkboxes zijn twee aparte vinkjes, niet één combinatie.

---

## Page 8 — Privacyverklaring (`/privacyverklaring`)

### Secties

1. **Nav**
2. **Hero-content** — "Privacyverklaring" + "Laatst bijgewerkt: [datum]"
3. **Inhoudsopgave** — sticky aan zijkant op desktop
4. **Secties** — uit content doc, met heading-niveaus
5. **Contact bij vragen** — onderaan
6. **Footer**

### Layout
Tweekoloms op desktop: links sticky TOC, rechts content. Op mobile: TOC als collapsible bovenaan, dan content.

### Image slots
Geen.

---

## Page 9 — Login (`/inloggen`)

### Secties

1. **Minimal nav** — alleen logo
2. **Centered card**:
   - Heading "Welkom terug"
   - E-mail veld
   - Wachtwoord veld (of magic-link button)
   - Submit
   - Divider "of"
   - "Inloggen met Google" button
   - Link "Wachtwoord vergeten?"
3. **Footer** (verkorte versie)

### Privacy-touchpoint
Onder het formulier kleine tekst: *"Je ziet hier alleen de gegevens van je eigen kind(eren)."*

### Image slots
Optioneel: één klein decoratie-element. Geen foto's.

---

## Page 10 — Portal home (`/portal`)

### Secties

1. **Portal nav** — andere navigatie dan publiek (inclusief uitloggen)
2. **Welcome heading** — "Welkom terug, [voornaam ouder]"
3. **Quick stats** — 3 kaarten:
   - Aankomende sessie (datum + thema)
   - Aantal mededelingen (link)
   - Kind-naam (link naar profiel)
4. **Upcoming sessions** — eerstvolgende 3 sessies in compacte view
5. **Recent announcements** — laatste 2-3 mededelingen
6. **Footer** (verkorte versie)

### Image slots — Portal home

- **Optioneel: één sfeerfoto** als header-banner. Subject: detail uit recente sessie (mits toestemming en zonder identificeerbare kinderen). Aspect ratio: 16:5 (wide banner).

### Privacy-touchpoint
**De hele portal is een privacy-touchpoint.** De gebruiker ziet:
- Alleen gegevens van eigen kind(eren)
- Geen ledenlijst, geen contactgegevens andere ouders
- Eigen e-mail bovenaan zichtbaar, met "is dit niet jij? Uitloggen"

### Layout-detail
Welcome card op subtiele cream/wit gradient. De stats-kaarten in DS-kleuren als accent, niet als achtergrond (anders te druk).

---

## Page 11 — Portal agenda (`/portal/agenda`)

### Secties

1. **Portal nav**
2. **Heading** — "Agenda"
3. **Toggle view** — kalenderweergave / lijstweergave
4. **Lijst of kalender** — alle aankomende sessies
5. **Archief** — verlopen sessies, collapsible
6. **Footer**

### ScheduleCard component
- Datum (groot, Fredoka)
- Thema (heading)
- Locatie (icoon + tekst)
- Bijzonderheden (klein, italic)
- Status badge: bevestigd / onder voorbehoud / afgelast

### Image slots
Geen. Optioneel: bij elke sessie een klein gekleurd accent-streepje in DS-kleur per thema.

---

## Page 12 — Portal mededelingen (`/portal/mededelingen`)

### Secties

1. **Portal nav**
2. **Heading + filter** — alles / ongelezen
3. **Lijst van mededelingen** — chronologisch, nieuwste boven
4. **Footer**

### AnnouncementCard
- Datum
- Titel (Fredoka)
- Body
- Eventueel attachment-link
- Auteur (vaak Helen of Alessandro)

### Image slots
Geen standaard. Mededelingen kunnen wel een optionele afbeelding bevatten (bv. een schetsje van een spel). Editorial discretion door auteur.

---

## Page 13 — Portal mijn kind (`/portal/mijn-kind`)

> **Hier zit de "verwijderen is een knop"-belofte concreet.**

### Secties

1. **Portal nav**
2. **Heading** — "Gegevens van mijn kind"
3. **Intro** — "Wijzigingen worden direct verwerkt."
4. **Sectie: Kind** — naam, leeftijd, schoolgroep (inline editable)
5. **Sectie: Contactgegevens** — ouder-velden (inline editable)
6. **Sectie: Aanwezigheid** — aanwezigheidsvoorkeur
7. **Sectie: Bijzonderheden** — met dezelfde "wie ziet dit"-uitleg als bij aanmelding
8. **Sectie: Toestemmingen** — toggles voor foto/communicatie-toestemming
9. **Sectie: Stoppen** — destructive zone:
   - **Knop: "Aanmelding intrekken en alle gegevens verwijderen"**
   - Confirmation modal die expliciet vermeldt wat verwijderd wordt
10. **Footer**

### Image slots
Geen.

### Privacy-touchpoint
De "Stoppen"-sectie is in een aparte visuele zone (lichte coral-tint achtergrond, of border-top in coral). Niet verstopt onderaan zonder visuele indicator. De knop staat er prominent, niet als kleine tekstlink.

---

## Page 14 — Portal instellingen (`/portal/instellingen`)

### Secties

1. **Portal nav**
2. **Heading** — "Account & toestemmingen"
3. **Account** — e-mail wijzigen, wachtwoord wijzigen
4. **Notificaties** — toggles voor e-mailmeldingen
5. **Toestemmingen** — overzicht alle gegeven toestemmingen + ingangsdatum, individueel intrekbaar
6. **Data export** — knop "Download al mijn gegevens als JSON"
7. **Verwijderen account** — destructive zone met confirmation flow
8. **Footer**

### Privacy-touchpoint
Hier zit AVG-rechten uitvoering geconcretiseerd: inzage (export), correctie (alle velden bewerkbaar), verwijdering (knop), toestemming intrekken (toggles per toestemming, niet alles-of-niets).

---

## Designsysteem-notes voor Cursor

### Tokens (CSS variables)

```css
--tt-teal: #05A7A7;
--tt-coral: #F25F4E;
--tt-lime: #A8C734;
--tt-purple: #623D92;
--tt-cream: #FDFBF5;
--tt-ink: #1F1B2E;
--tt-ink-soft: #5A5468;
--tt-ink-muted: #8B8696;
--tt-border: rgba(31, 27, 46, 0.08);
--tt-surface: #FFFFFF;

--font-display: 'Fredoka', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;

--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;

--shadow-sm: 0 2px 0 rgba(0,0,0,0.05);
--shadow-md: 0 4px 14px rgba(31, 27, 46, 0.08);
--shadow-lg: 0 12px 30px rgba(31, 27, 46, 0.08);
--shadow-coral: 0 6px 20px rgba(242, 95, 78, 0.28);

--section-padding-y: clamp(80px, 10vw, 110px);
--container-padding-x: 32px;
--container-max: 1200px;
```

### Kleurgebruik-regels

- **Coral**: primary CTAs, attention-getters
- **Teal**: secondary accents, info-tooltips, "praktisch"-zone
- **Lime**: positieve signalen, bevestigingen, "samenwerken"-zone
- **Purple**: trust-zone, premium CTA-blok, footer-accent
- **Ink**: alle tekst tenzij accent
- **Cream**: backgrounds tussen wit-secties

Eén DS-kleur per sectie als dominante accent. Niet vier kleuren tegelijk in één blok. De pijlers-grid op home is een uitzondering die de regel bevestigt.

### Spacing-ritme
- Tussen secties: `--section-padding-y` (80-110px verticaal)
- Tussen kaart-items binnen sectie: 24px
- Tussen heading en body in sectie-header: 16px
- Binnen kaart: 24-32px padding

---

## Mappenstructuur voor Cursor (suggestie)

```
/app
  /(public)
    /page.tsx                  → Home
    /over/page.tsx
    /team/page.tsx
    /aanpak/page.tsx
    /vertrouwen/page.tsx
    /vragen/page.tsx
    /aanmelden/page.tsx
    /privacyverklaring/page.tsx
  /(auth)
    /inloggen/page.tsx
  /(portal)
    /portal/page.tsx
    /portal/agenda/page.tsx
    /portal/mededelingen/page.tsx
    /portal/mijn-kind/page.tsx
    /portal/instellingen/page.tsx
  /layout.tsx
  /globals.css

/components
  /layout/SiteShell.tsx
  /layout/PortalShell.tsx
  /layout/Nav.tsx
  /layout/Footer.tsx
  /ui/Button.tsx
  /ui/Tag.tsx
  /ui/Tooltip.tsx
  /ui/FormField.tsx
  /ui/ConsentCheckbox.tsx
  /content/Hero.tsx
  /content/Eyebrow.tsx
  /content/PillarCard.tsx
  /content/TrustItem.tsx
  /content/TeamMemberCard.tsx
  /portal/ScheduleCard.tsx
  /portal/AnnouncementCard.tsx

/content
  /nl.json                     → All NL copy
  /en.json                     → Placeholder for EN (later)

/public
  /images
    /team/                     → Team portraits
    /atmosphere/               → Sfeerfoto's
    /placeholder/              → Pitch-fase stock
  /logo
    /taktiek-logo.svg

/lib
  /i18n.ts
  /supabase.ts                 → Later, voor portal
```

---

## Volgende stap

Lees `TakTiek_photography.md` voor de fotografie-richtlijn (welke stockfoto's bij welke pagina, wat te vermijden, hoe vervangen door eigen werk).

Lees daarna `TakTiek_cursor_handover.md` voor concrete build-instructies om dit in Cursor op te zetten.
