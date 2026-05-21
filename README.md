# TakTiek — dummy site

Wekelijkse peergroup-site voor TakTiek (Weert/Nederweert). Dit is een **demo** zonder echte backend, auth of database.

## Starten

```bash
cd taktiek-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Belangrijk:** start de server altijd vanuit de map `taktiek-site`, niet vanuit de bovenliggende `TakTiek`-map. Zie je overal “Deze pagina bestaat niet”, stop dan de oude server (`Ctrl+C`) en start opnieuw met `npm run dev` in `taktiek-site`.

## Dummy vs. echt

| Onderdeel | Dummy | Later |
|-----------|-------|-------|
| Aanmelden | `console.log` + succesmodal | Supabase |
| Inloggen | Knop "demo-ouder" → portal | Google OAuth + magic link |
| Portal | Lokale mock-data | Supabase + RLS |
| Foto's | SVG-placeholders in `public/images/placeholder/` | Eigen foto's (zie README daar) |

## Placeholder-foto's

Vervang de bestanden in `public/images/placeholder/` door je eigen `.jpg` of `.webp` — zie `public/images/placeholder/README.md`.

## Pitch-volgorde

1. Home → 2. Vertrouwen → 3. Aanmelden → 4. Portal mijn-kind (verwijderen) → 5. Team

## Documentatie

Bron-specs staan in `/docs/` (content, layouts, photography, handover).

## Build

```bash
npm run build
```

Deploybaar op Vercel.
