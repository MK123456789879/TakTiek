# TakTiek — Fotografie-richtlijn

> **Versie:** Draft 1
> **Datum:** 21 mei 2026
> **Status:** Voor pitch-fase en vervangen door eigen werk later

---

## Waarom dit document bestaat

Fotografie bepaalt de toon van de site meer dan typografie of kleur dat doen. De keuze tussen "lachende kinderen aan tafel" en "handen die een spel bouwen" verschuift het hele karakter van TakTiek — van *kinderopvang* naar *maker space*, van *aanbod* naar *plek*.

Voor TakTiek zit hier een extra dimensie: de doelgroep is gevoelig voor stereotypering ("brain kid", "vroege bloeier"), en de ouders zijn alert op hoe MHB-kinderen worden afgebeeld. Generieke stockfotografie werkt hier niet.

Dit document beschrijft welke beeldtaal we kiezen, wat we vermijden, en hoe we werken in de pitch-fase versus de live-fase.

---

## Drie regels die door alles heen lopen

### Regel 1 — Geen kindergezichten op publieke pagina's

Geldt voor de hele publieke site (alle pagina's vóór login). Voor stockfotografie betekent dit:

- Wel: handen, ruggen, top-down shots, details, leeg ingerichte ruimtes
- Niet: portretten van kinderen, kinderen die direct in de camera kijken, herkenbare gezichten

Reden: TakTiek positioneert zichzelf als zorgvuldig met privacy. Kinderfoto's op de publieke site (ook stock) tegenspreken die belofte op het meest zichtbare niveau.

In de live-versie kunnen eigen foto's worden gebruikt met expliciete toestemming, en zelfs dan blijft de regel "geen identificeerbare gezichten openbaar" zoals in het aanmeldformulier-toestemmingsvinkje is verwoord.

### Regel 2 — Volwassenen mogen wel in beeld (team-pagina)

Team-portretten zijn een uitzondering. Dit zijn volwassenen die expliciet kiezen om als gezicht van TakTiek te functioneren. Hier moet wél een gezicht in beeld — anders voelt het kil en anoniem.

Voor pitch-fase: stockportretten gebruiken die qua leeftijd, sfeer en stijl matchen met de echte teamleden. In code-commentaar duidelijk markeren als placeholder.

### Regel 3 — Stijl is "documentair, niet redactioneel"

- Wel: natuurlijk licht, niet-geposeerd, beetje rommelig
- Niet: studiofotografie, hoge contrast retouche, perfecte composities
- Wel: warmte van het moment
- Niet: opvallende styling, designer-look

Referenties: Kinfolk-fotografie, Tiptoe, kindermerken die zich richten op "maker"-aesthetic. Niet: traditionele kinderboeken-fotografie, schoolbrochures, leukste-school-van-Nederland.

---

## Pitch-fase versus live-fase

### Pitch-fase (nu)

Doel: laten zien wat TakTiek wordt. Het team moet een sfeer kunnen voelen, niet de werkelijkheid letterlijk zien.

Bron: **Unsplash, Pexels, Pixabay**. Gratis, attributie-vriendelijk. Specifiek aanrader:
- [Unsplash](https://unsplash.com) — beste algemene kwaliteit
- [Pexels](https://www.pexels.com) — wat gevarieerder
- Zoektermen die werken: "wooden toys", "board game pieces", "children hands craft", "empty classroom", "table top game", "creative workshop hands"
- Zoektermen die niet werken: "happy children", "school kids", "gifted children" — leveren generieke stock

In de code-repository plaatsen onder `/public/images/placeholder/` met een **README erbij** dat zegt: "Deze foto's zijn placeholders voor pitch-fase. Vervangen door eigen werk vóór livegang. Bronvermelding voor pitch-versie niet nodig (Unsplash-licentie), wel voor live-versie als de foto's blijven."

### Live-fase (later)

Eigen fotografie. Aanrader: één sessie laten begeleiden door iemand met camera (kan een ouder zijn, kan iemand uit het netwerk zijn), met de volgende setup:

- Vooraf: toestemming per kind via het aanmeldformulier-vinkje
- Tijdens: focus op handen, materiaal, omgeving — niet op gezichten
- Achteraf: selectie maken waarop geen kind herkenbaar in beeld is
- Bewerking: minimaal — beetje warmte, geen filters

Niet één keer voor altijd: idealiter elk seizoen een korte sessie zodat het beeld actueel blijft.

---

## Per pagina — welke foto's, welke positie

### Home

**Slot count**: 0
**Reden**: De Trust-strip ("we zijn zorgvuldig") en de hero (geen kinderfoto) lopen synchroon. Foto's hier zouden de claim verzwakken. Geometrische compositie is genoeg.

### Over TakTiek

**Slot count**: 1 (sfeerfoto landschap)
**Positie**: tussen "Doelstelling" en "Wat TakTiek niet is", als visuele verzachting
**Aspect ratio**: 16:9 of 4:3
**Subject**:
- Optie A: Lege ruimte in het Keenterhart, ingericht met tafels en stoelen, klaar voor een sessie
- Optie B: Top-down detail van bordspel-onderdelen op een houten tafel
- Optie C: Twee paar handen die samen iets bouwen — armen in beeld, geen gezichten

**Pitch-keuze**: Optie B. Meest universeel toepasbaar, geen kinderen nodig, vertelt verhaal van "maken".

### Team

**Slot count**: 5 (één per teamlid)
**Aspect ratio**: 4:5 (portret) of 1:1
**Subject**: portret van volwassen persoon, natuurlijk licht, niet-corporate

**Per teamlid:**
- **Helen**: vrouw, midden 30-50, warm, ervaren uitstraling. Niet "lerares", wel "iemand die je vertrouwt met je kind"
- **Alessandro**: man, 30-45, creatief/ontwerper uitstraling
- **Marten**: man, 30-45, makers-uitstraling
- **Rens**: man, 30-50, vader-vibe, warm
- **Jessica**: vrouw, 30-50, rustige uitstraling

**Pitch-keuze**: gebruik 5 Unsplash-portretten die dit ruwweg matchen. **Code-commentaar boven elke `<Image>`: `// PLACEHOLDER — eigen portret invoegen voor livegang`.**

### Aanpak

**Slot count**: 2 (locatie + sessie-sfeer)

**Slot 1 — Locatie**
**Positie**: na "Wekelijks ritme", voor "Thema"
**Aspect ratio**: 16:9
**Subject**: ruimte in het Keenterhart, lege of ingerichte staat, daglicht door ramen

**Slot 2 — Sessie-sfeer**
**Positie**: na "Hoe we werken", voor "Waar het gebeurt"
**Aspect ratio**: 16:9
**Subject**: top-down of zij-view van handen die met materiaal werken — denken aan houten bouwstenen, kartonnen prototype, dobbelstenen op een tafel

### Vertrouwen, Vragen, Privacyverklaring, Login, Aanmelden

**Slot count**: 0

**Reden**: Foto's zouden afleiden van de inhoud. Op een privacy-pagina is "afwezigheid van foto's" zelf een signaal van zorgvuldigheid.

### Portal home (na login)

**Slot count**: 1 (optioneel header-banner)
**Positie**: bovenaan portal-home, onder de welcome-heading
**Aspect ratio**: 16:5 (smalle banner)
**Subject**: zelfde regels als publieke pagina's — géén identificeerbare kinderen, ook al is het achter login. Reden: ouders zien elkaars kinderen niet, dus ook hier geldt "kinderen zijn niet zichtbaar". Detail van materiaal of ruimte.

### Portal mededelingen

**Slot count**: variabel (optioneel per mededeling)
**Subject**: optioneel kan een mededeling een afbeelding bevatten — bijvoorbeeld een schetsje van een spelidee, een foto van materiaal dat is besteld. Editorial discretion. Standaard: tekst zonder afbeelding.

---

## Wat te vermijden — concrete anti-patronen

### Vermijd: "happy school kids"-stockfoto
- Lachende kinderen rond een tafel, hoogcontrast, geposeerd
- Reden: precies wat MHB-ouders associëren met de plekken waar het niet werkte

### Vermijd: hersenen, lampjes, schaakstukken, radertjes
- Helen heeft expliciet aangegeven hier weg van te willen
- Stereotypen die "hoogbegaafdheid" symboliseren in stockwereld

### Vermijd: glanzende corporate fotografie
- Witte achtergrond, perfecte styling
- Past niet bij "ouders die dit naast werk en gezin doen"

### Vermijd: kinderboek-illustraties als foto-vervanger
- Cartoonkinderen op de site werkt niet voor ouder-publiek
- Het logo en de geometrische blobs zijn de illustratielaag

### Vermijd: stockfoto van handshake, brainstorm met post-its, glimmende laptops
- Generiek "zakelijk" — past bij niets van wat TakTiek is

---

## Praktische werkwijze voor Cursor-fase

1. **Maak `/public/images/placeholder/` aan**
2. **Download per slot 2-3 opties van Unsplash**, niet één — gives the team something to react to in pitch
3. **Naamgeving**: `over-atmosphere-01.jpg`, `team-helen-placeholder.jpg`, etc.
4. **Resolutie**: 1600px breed voor landschap, 800x1000 voor portretten — genoeg voor retina, niet onnodig zwaar
5. **In code**: gebruik `next/image` met `priority` voor above-the-fold, `loading="lazy"` voor de rest
6. **Code-commentaar bij elk image**: `// PLACEHOLDER — vervangen vóór livegang. Bron: Unsplash/[fotograaf].`

---

## Toestemmingsstroom (live-fase, ter info)

Wanneer eigen fotografie wordt geïntroduceerd:

1. Toestemmingsvinkje in aanmeldformulier al aanwezig (in content doc).
2. Per fotosessie: bevestiging vooraf aan ouders.
3. Voorafgaand aan publicatie: selectie laten zien aan ouders van wie het kind in beeld zou kunnen zijn, ook bij niet-herkenbaar.
4. Bewaartermijn: foto's met (niet-herkenbare) kinderen worden niet gebruikt voor doeleinden buiten TakTiek-communicatie zonder hernieuwde toestemming.

Dit valt onder de privacy-belofte — niet alleen "we gebruiken zorgvuldig", maar concrete proces-stappen.

---

## Volgende stap

Lees `TakTiek_cursor_handover.md` voor concrete build-instructies om de site in Cursor op te zetten met deze richtlijnen.
