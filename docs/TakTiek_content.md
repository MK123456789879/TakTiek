# TakTiek — Content Document

> **Versie:** Draft 1 (dummy site)
> **Datum:** 21 mei 2026
> **Status:** Concept — voor review door team TakTiek
> **Taal-strategie:** NL is bron, EN-toggle volgt. Alle teksten genest onder `nl.*` zodat een `en.*` later 1-op-1 kan worden bijgevoegd.

---

## Hoe dit document te gebruiken

Dit is de **single source of truth voor copy**. Niet voor visueel ontwerp (dat komt in `PAGE_LAYOUTS.md`) en niet voor gedrag/interactie (dat komt in de componenten zelf).

Elke sectie heeft een **stabiele key** in backticks — die key wordt straks letterlijk de i18n-sleutel. Voorbeeld: `home.hero.title` wordt in code `t('home.hero.title')`.

Placeholders zien er zo uit: `[PLACEHOLDER: korte beschrijving]`. Die moeten ingevuld worden voordat de site live gaat — niet voor de dummy.

Bio's en gevoelige formuleringen zijn als concept geschreven. **Lees ze als startpunt, niet als eindversie.** Iedere persoon herschrijft zijn/haar eigen bio.

---

## 1. Globaal (`global.*`)

```yaml
global:
  brand_name: "TakTiek"
  brand_tagline: "Een plek voor nieuwsgierige denkers"
  brand_subline: "Wekelijkse peergroup voor (vermoedelijk) meer- en hoogbegaafde kinderen in Weert en Nederweert"

nav:
  home: "Home"
  about: "Over TakTiek"
  team: "Het team"
  approach: "Onze aanpak"
  faq: "Vragen"
  signup: "Aanmelden"
  login: "Inloggen"

footer:
  contact_label: "Contact"
  contact_email: "peergrouptaktiek@gmail.com"
  contact_fb: "TakTiek op Facebook"
  origin_note: "TakTiek is voortgekomen uit de oudergemeenschap HB Ouders Weert / Nederweert."
  privacy_link: "Privacyverklaring"
  copyright: "© 2026 TakTiek"
```

> **Toelichting op `origin_note`:** dit volgt jouw keuze "losstaand, mag benoemd worden". Eén regel in de footer, geen prominente positie. Verwijst niet door naar MHB-site (komt later).

---

## 2. Home (`home.*`)

```yaml
home:
  hero:
    title: "Ontdekken wat je nog niet kunt — samen met wie je begrijpt"
    subtitle: "TakTiek is een wekelijkse peergroup voor kinderen die meer aankunnen dan hun klas hen biedt. Geen extra schoolwerk. Wel ruimte voor ideeën, samenwerking en plezier."
    cta_primary: "Meld je kind aan"
    cta_secondary: "Lees meer over onze aanpak"

  intro:
    heading: "Wat is TakTiek?"
    body: |
      TakTiek is een ontmoetingsplek voor kinderen tussen 5 en 12 jaar die anders denken — sneller, dieper, of gewoon anders dan de meeste leeftijdsgenoten. Eens per week komen ze bij elkaar in het Keenterhart in Weert om samen te spelen, te bouwen en te bedenken.

      Wij geloven dat verbinding met ontwikkelingsgelijken minstens zo belangrijk is als cognitieve uitdaging. Daarom is TakTiek geen plusklas en geen bijles. Het is een plek om gewoon kind te zijn — tussen kinderen die je begrijpen.

  pillars:
    heading: "Wat we belangrijk vinden"
    items:
      - title: "Ontmoeten"
        body: "Kinderen leren kinderen kennen die op een vergelijkbare manier in de wereld staan."
      - title: "Samen denken"
        body: "Geen frontale lessen. We werken aan opdrachten waarbij overleg, creativiteit en verschillende perspectieven nodig zijn."
      - title: "Ruimte voor jezelf"
        body: "Wie even rust nodig heeft, mag dat nemen. Wie wil rennen, mag dat ook. Zelfregulatie is welkom, geen probleem."
      - title: "Bouwen aan vaardigheden"
        body: "Door het maken van eigen spellen ontdekken kinderen hoe ze problemen aanpakken, samenwerken en doorzetten."

  practical_strip:
    heading: "Praktisch"
    items:
      - label: "Voor wie"
        value: "Kinderen 5–12 jaar"
      - label: "Wanneer"
        value: "Wekelijks op vrijdagmiddag"
      - label: "Waar"
        value: "Keenterhart, Weert"
      - label: "Groepsgrootte"
        value: "Maximaal 12 kinderen"

  cta_block:
    heading: "Klaar om je kind aan te melden?"
    body: "Er zijn een beperkt aantal plekken per ronde. Aanmelden kost je vijf minuten."
    cta: "Aanmeldformulier openen"
```

> **Designnote:** geen prijsblok op de home. Conform keuze "kosten komen later".

---

## 3. Over TakTiek (`about.*`)

```yaml
about:
  hero:
    eyebrow: "Over TakTiek"
    title: "Waarom we dit doen"

  story:
    heading: "Het verhaal achter TakTiek"
    body: |
      TakTiek is ontstaan uit gesprekken tussen ouders van meer- en hoogbegaafde kinderen in de regio Weert en Nederweert. We merkten dat het bestaande aanbod versnipperd is en dat veel kinderen — ook degenen die op school nog niet expliciet vastlopen — baat hebben bij contact met ontwikkelingsgelijken buiten de schoolcontext.

      Helen, initiatiefnemer van TakTiek, heeft ervaring met peergroups voor begaafde kinderen en wilde dit dichterbij huis vormgeven. In samenwerking met Speelotheek Weert en een groep betrokken ouders is daar deze eerste pilot uit ontstaan.

      TakTiek is voortgekomen uit de bredere oudergemeenschap HB Ouders Weert / Nederweert, maar staat als initiatief op zichzelf.

  doelstelling:
    heading: "Onze doelstelling"
    body: |
      TakTiek is een sociale peergroup voor (vermoedelijk) meer- en hoogbegaafde kinderen in de basisschoolleeftijd. We willen verbinding en contact tussen gelijkgestemde kinderen bevorderen.
    points:
      - "Het ontmoeten van ontwikkelingsgelijken"
      - "Sociale vorming"
      - "Emotionele vorming"
      - "Cognitieve uitdaging"
      - "Bevorderen van metacognitieve vaardigheden"

  not_for:
    heading: "Wat TakTiek níet is"
    body: |
      We willen helder zijn over de afbakening — dat helpt om verwachtingen goed te managen.
    items:
      - "Geen vervanging voor een diagnose- of zorgtraject"
      - "Geen plusklas of huiswerkbegeleiding"
      - "Geen therapeutische groep"
      - "Geen verlengstuk van het schoolprogramma"

  organization:
    heading: "Hoe het georganiseerd is"
    body: |
      TakTiek wordt geleid door Helen als initiatiefnemer en inhoudelijk verantwoordelijke. Een groep ouders ondersteunt bij begeleiding tijdens de sessies. Studio Kauw verzorgt vormgeving en communicatie. De activiteiten vinden plaats bij Speelotheek Weert in het Keenterhart, waar we ook samenwerken op het gebied van materiaal en programmering.

      Alle uren tijdens de pilot zijn vrijwillig. Eventuele inkomsten gaan terug naar het netwerk.
```

> **Toelichting:** dit zijn de feitelijke afspraken zoals ze in de notulen van 8 mei staan, in publieksvriendelijke taal. De juridische structuur (stichting? wie verwerkingsverantwoordelijke?) komt niet hier — die staat in de privacyverklaring.

---

## 4. Het team (`team.*`)

```yaml
team:
  hero:
    eyebrow: "Het team"
    title: "De mensen achter TakTiek"
    intro: "TakTiek wordt gedragen door ouders die zelf weten wat het is. Iedereen hier doet dit naast werk en gezin, omdat we geloven dat onze kinderen dit verdienen."

  members:
    - name: "Helen"
      role: "Initiatiefnemer & inhoud"
      bio_draft: |
        Helen is de drijvende kracht achter TakTiek. Ze heeft ervaring met peergroups voor begaafde kinderen en weet hoe je een veilige plek creëert waar kinderen zich kunnen ontwikkelen op hun eigen manier. Helen verzorgt de inhoudelijke opzet van de sessies en coördineert het programma.

    - name: "Alessandro"
      role: "Vormgeving & communicatie"
      bio_draft: |
        Alessandro is vader, ontwerper en mede-oprichter van de HB-oudergemeenschap in Weert. Vanuit zijn studio Studio Kauw helpt hij TakTiek met vormgeving, communicatie en de praktische opzet. Tijdens sessies is hij vaak aanwezig als begeleider.

    - name: "Marten"
      role: "Design & digitale tools"
      bio_draft: |
        Marten is vader, motion designer en applied AI engineer. Hij ondersteunt TakTiek met design, communicatie en digitale infrastructuur — denk aan deze website, social media en visuele identiteit. Op de achtergrond, maar betrokken.

    - name: "Rens"
      role: "Begeleider"
      bio_draft: |
        Rens is vader van Lenn en helpt mee als begeleider tijdens de wekelijkse sessies. Hij denkt mee over praktische zaken en is een vertrouwd gezicht voor de kinderen.

    - name: "Jessica"
      role: "Begeleider"
      bio_draft: |
        Jessica is ouder uit de community en ondersteunt het team als begeleider tijdens de sessies. Ze brengt rust en ervaring mee.

  footer_note: "Wil je een keer meelopen of meedenken? Stuur ons een berichtje via peergrouptaktiek@gmail.com."
```

> **Instructie aan teamleden:** elke `bio_draft` is een placeholder die ik op basis van de chat-context heb geschreven. **Iedereen herschrijft zijn/haar eigen bio.** Houd het op 2–3 zinnen, schrijf in derde persoon, en focus op wat je inbrengt voor TakTiek (niet je hele CV).

---

## 5. Onze aanpak (`approach.*`)

```yaml
approach:
  hero:
    eyebrow: "Onze aanpak"
    title: "Hoe een sessie eruitziet"

  rhythm:
    heading: "Wekelijks ritme"
    body: |
      Elke vrijdagmiddag komen we samen voor ongeveer anderhalf uur. We werken in één gemixte groep met kinderen van verschillende leeftijden. Dat is bewust: oudere kinderen leren begeleiden, jongere kinderen krijgen ruimte om mee te kijken en mee te doen op hun eigen niveau.

  theme:
    heading: "Het thema"
    body: |
      Elk blok van sessies werkt rond één centraal thema. Het eerste thema is **'Spellen: spelen en zelf maken'**. Kinderen spelen verschillende soorten spellen, ontdekken hoe ze in elkaar zitten, en werken toe naar het ontwerpen van een eigen spel. Aan het eind van het blok organiseren we een spellenmiddag waar ouders en peers worden uitgenodigd om te komen spelen wat de kinderen hebben gemaakt.

  method:
    heading: "Hoe we werken"
    body: |
      We gebruiken het TASC-model (Thinking Actively in a Social Context) als rode draad. Dat klinkt formeel, maar in de praktijk betekent het dat we kinderen helpen om bewust te worden van hóe ze problemen aanpakken — niet alleen wát ze maken.

      Concreet betekent dat:

    items:
      - "Veel ruimte voor eigen inbreng"
      - "Samenwerken in wisselende combinaties"
      - "Reflectie tussendoor — wat ging goed, wat anders?"
      - "Een rustige hoek voor wie even tijd voor zichzelf nodig heeft"

  location:
    heading: "Waar het gebeurt"
    body: |
      We zijn te gast in een ruimte van Speelotheek Weert in het Keenterhart. Dat betekent dat we toegang hebben tot een grote collectie spellen en speelgoed, en dat ouders gedurende de sessie in de naastgelegen ruimte koffie kunnen drinken.

      Elk kind dat meedoet wordt lid van de Speelotheek (€1 per jaar, symbolisch). Daarmee mogen kinderen ook buiten de sessies om spellen lenen.
```

---

## 6. Vragen / FAQ (`faq.*`)

```yaml
faq:
  hero:
    eyebrow: "Vragen"
    title: "Veelgestelde vragen"

  items:
    - q: "Voor welke kinderen is TakTiek bedoeld?"
      a: "Voor kinderen van 5 tot en met 12 jaar waarvan je vermoedt dat ze meer- of hoogbegaafd zijn. Een formele diagnose is niet nodig om mee te doen."

    - q: "Hoe weet ik of TakTiek iets voor mijn kind is?"
      a: "Als je twijfelt, neem dan contact met ons op. We gaan graag met je in gesprek. Soms is dit de juiste plek, soms passen andere initiatieven beter — daar zijn we eerlijk over."

    - q: "Werken jullie met leeftijdsgroepen?"
      a: "Tijdens de pilot werken we met één gemixte groep. We hebben goede ervaringen met het samenbrengen van verschillende leeftijden, omdat kinderen elkaar onderling helpen en spiegelen. Naar de toekomst toe kijken we of een opdeling zinvol is."

    - q: "Wat als mijn kind niet alle sessies kan?"
      a: "Deeltijd-aanmelding is mogelijk. Tijdens de pilot kijken we per ronde wat haalbaar is. Meld het in het aanmeldformulier dan kijken we wat past."

    - q: "Wat kost het?"
      a: "[PLACEHOLDER: kostenstructuur — komt in een latere versie]"

    - q: "Wie begeleiden de sessies?"
      a: "Helen verzorgt de inhoud. Daarnaast zijn er per sessie meerdere ouders aanwezig als begeleider. Zie de teampagina voor wie wie is."

    - q: "Is dit een schoolinitiatief?"
      a: "Nee. TakTiek staat los van school. We werken wel samen met Speelotheek Weert."

    - q: "Wat gebeurt er met de gegevens die ik bij aanmelding deel?"
      a: "We gaan zorgvuldig om met je gegevens. In onze privacyverklaring lees je precies wat we verzamelen, waarom en hoe lang we het bewaren."
```

> **Toelichting:** kostenvraag staat erin (mensen zoeken er sowieso op) maar het antwoord is een placeholder. Dat is netter dan de vraag weglaten.

---

## 7. Aanmelden (`signup.*`)

```yaml
signup:
  hero:
    eyebrow: "Aanmelden"
    title: "Welkom bij TakTiek"
    intro: "Leuk dat je interesse hebt. Vul het formulier hieronder in — we nemen daarna contact op om de aanmelding te bevestigen."

  form_labels:
    section_child: "Over je kind"
    child_name: "Naam van je kind"
    child_age: "Leeftijd"
    child_school_group: "Schoolgroep (optioneel)"

    section_parent: "Over jou"
    parent_name: "Jouw naam"
    parent_email: "E-mailadres"
    parent_phone: "Telefoonnummer"

    section_practical: "Praktisch"
    attendance: "Kan je kind alle sessies aanwezig zijn?"
    attendance_options:
      - "Ja, alle sessies"
      - "Om de week (deeltijd)"
      - "Anders, namelijk:"
    speelotheek_member: "Is je kind al lid van Speelotheek Weert?"

    section_care: "Bijzonderheden"
    care_intro: "Zijn er dingen waar de begeleiders rekening mee moeten houden tijdens de sessies? Denk aan allergieën, gevoeligheden of zaken die helpen om je kind zich op zijn gemak te laten voelen. Vul alleen in wat je relevant vindt om te delen."
    care_field: "Bijzonderheden (optioneel)"

    consent_section: "Toestemming"
    consent_privacy: "Ik heb de privacyverklaring gelezen en geef toestemming voor de verwerking van deze gegevens zoals daarin beschreven."
    consent_photo: "Ik geef toestemming voor het maken van sfeerfoto's tijdens de sessies (zonder identificeerbaar in beeld zijnde gezichten van mijn kind te delen via openbare kanalen)."

    submit: "Aanmelding versturen"

  after_submit:
    heading: "Bedankt voor je aanmelding"
    body: "We hebben je aanmelding ontvangen. Binnen een paar dagen nemen we contact op om de deelname te bevestigen. Heb je in de tussentijd vragen? Mail ons op peergrouptaktiek@gmail.com."
```

> **Privacyontwerp in dit formulier — wat ik bewust doe:**
>
> 1. **Bijzonderheden zit in een aparte sectie, niet verplicht.** De uitlegtekst stuurt aan op minimale invulling. Geen vrije tekstvak met 500 tekens — wel met de invitering om alleen het relevante te delen.
> 2. **School-groep is optioneel** — niet nodig voor begeleiding, alleen handig voor groepering. Vraag alleen wat je nodig hebt.
> 3. **Twee aparte consent-vinkjes.** Privacy is verplicht, foto-toestemming is opt-in en separaat.
> 4. **Geen geboortedatum maar leeftijd.** Geboortedatum is meer identificerend dan nodig.
> 5. **In de dummy versie:** het formulier toont alleen wat ingevuld zóu worden. Op submit verschijnt een notice "Dit is een demo — er is niets opgeslagen."

---

## 8. Privacyverklaring (`privacy.*`)

```yaml
privacy:
  hero:
    eyebrow: "Privacy"
    title: "Privacyverklaring"
    last_updated: "Laatst bijgewerkt: [PLACEHOLDER: datum]"

  intro: |
    Bij TakTiek vinden we het belangrijk dat je weet wat er met je gegevens gebeurt. In deze verklaring leggen we uit welke gegevens we verzamelen, waarvoor we ze gebruiken, hoe lang we ze bewaren en welke rechten je hebt.

  sections:
    - heading: "Wie is verantwoordelijk voor je gegevens?"
      body: |
        [PLACEHOLDER: naam en contactgegevens verwerkingsverantwoordelijke]

        Dit moet één duidelijke partij zijn. De opties die nu op tafel liggen:
        - Studio Kauw (Alessandro)
        - Stichting in oprichting "TakTiek"
        - Helen als natuurlijk persoon

        Deze keuze heeft juridische gevolgen — dit moet worden besproken voor de site live gaat.

    - heading: "Welke gegevens verzamelen we?"
      body: |
        Wanneer je je kind aanmeldt voor TakTiek, vragen we:
        - Naam en leeftijd van je kind
        - Jouw naam, e-mailadres en telefoonnummer
        - Eventuele schoolgroep (optioneel)
        - Of er bijzonderheden zijn waar we rekening mee moeten houden (optioneel)
        - Of je kind al lid is van Speelotheek Weert

    - heading: "Waarvoor gebruiken we deze gegevens?"
      body: |
        - Om contact met je op te nemen over de aanmelding
        - Om de groep samen te stellen en sessies te organiseren
        - Om begeleiders te informeren over bijzonderheden die relevant zijn voor de sessie
        - Om je te informeren over praktische zaken (afzegging, locatiewijziging, etc.)

        We gebruiken je gegevens **niet** voor marketing, niet voor doorverkoop, en niet voor doeleinden buiten TakTiek.

    - heading: "Gezondheidsgegevens"
      body: |
        Wanneer je in het aanmeldformulier informatie deelt over allergieën, gezondheid of gevoeligheden van je kind, beschouwen wij dat als bijzondere persoonsgegevens. We behandelen deze met extra zorg:

        - Deze gegevens zijn alleen toegankelijk voor de begeleiders die op de sessie aanwezig zijn waar het kind aan deelneemt.
        - Ze worden niet gedeeld met derden, ook niet binnen de bredere community.
        - Ze worden gescheiden bewaard van de overige aanmeldgegevens.

    - heading: "Hoe lang bewaren we je gegevens?"
      body: |
        Aanmeldgegevens bewaren we zolang je kind deelneemt aan TakTiek, plus één jaar daarna voor administratieve doeleinden. Daarna worden ze verwijderd. Je kunt eerder verwijdering aanvragen — zie hieronder.

    - heading: "Met wie delen we je gegevens?"
      body: |
        - **Begeleiders van TakTiek** — voor zover relevant voor hun begeleidende rol
        - **Speelotheek Weert** — alleen indien je kind lid wordt of is van de Speelotheek (naam en leeftijd)
        - **Niemand anders** — we delen geen gegevens met externe partijen, scholen of overheidsinstanties zonder jouw expliciete toestemming, tenzij wettelijk verplicht.

    - heading: "Jouw rechten"
      body: |
        Je hebt het recht om:
        - Je gegevens in te zien
        - Onjuiste gegevens te corrigeren
        - Je gegevens te laten verwijderen
        - Toestemming voor verwerking in te trekken
        - Een klacht in te dienen bij de Autoriteit Persoonsgegevens

        Voor al deze verzoeken kun je contact opnemen via peergrouptaktiek@gmail.com.

    - heading: "Vragen over deze verklaring"
      body: "Voor vragen over hoe wij met je gegevens omgaan, kun je contact opnemen via peergrouptaktiek@gmail.com."
```

> **Belangrijke noot voor het team:** deze tekst is een **werkende concept-privacyverklaring**, maar GEEN juridisch gevalideerd document. Voor live-gang moet dit minimaal worden bekeken door iemand met AVG-kennis (Autoriteit Persoonsgegevens heeft templates, of via Studio Kauw's eigen verwerkingsregister).

---

## 9. Ingelogd gedeelte (`portal.*`)

```yaml
portal:
  login:
    heading: "Inloggen voor ouders"
    intro: "Welkom terug. Log in om de agenda en mededelingen te bekijken."
    email_label: "E-mailadres"
    password_label: "Wachtwoord"
    login_btn: "Inloggen"
    magic_link_btn: "Stuur me een inloglink per e-mail"
    google_btn: "Inloggen met Google"
    forgot: "Wachtwoord vergeten?"
    dummy_notice: "Dit is een demo. Klik op 'Inloggen' om de beveiligde omgeving te bekijken."

  dashboard:
    welcome: "Welkom terug, [voornaam ouder]"
    sections:
      - title: "Aankomende sessies"
        link: "Volledige agenda"
      - title: "Mededelingen"
        link: "Alle mededelingen"
      - title: "Mijn kind"
        link: "Gegevens beheren"

  agenda:
    heading: "Agenda"
    intro: "Hieronder vind je de geplande sessies. Klik op een sessie voor meer informatie."
    columns:
      - "Datum"
      - "Thema"
      - "Locatie"
      - "Bijzonderheden"

  agenda_dummy_sessions:
    - date: "Vrijdag 22 mei 2026"
      theme: "Kennismaking en eerste spelletjes"
      location: "Keenterhart, Weert"
      notes: "We leren elkaar kennen via spel"
    - date: "Vrijdag 29 mei 2026"
      theme: "Hoe werkt een spel? — Spelmechanieken ontdekken"
      location: "Keenterhart, Weert"
      notes: "Verschillende soorten spellen verkennen"
    - date: "Vrijdag 5 juni 2026"
      theme: "Ontwerpen — eerste ideeën voor een eigen spel"
      location: "Keenterhart, Weert"
      notes: "Inspiratiemiddag"
    - date: "Vrijdag 12 juni 2026"
      theme: "Bouwen — prototype maken"
      location: "Keenterhart, Weert"
      notes: "Materiaal wordt voorzien"
    - date: "Vrijdag 19 juni 2026"
      theme: "Testen — speel elkaars spel"
      location: "Keenterhart, Weert"
      notes: "Feedback geven en ontvangen"
    - date: "Vrijdag 26 juni 2026"
      theme: "Spellenmiddag — open voor ouders en peers"
      location: "Keenterhart, Weert"
      notes: "Ouders en broertjes/zusjes welkom"

  announcements:
    heading: "Mededelingen"
    dummy:
      - date: "20 mei 2026"
        title: "Eerste sessie staat klaar"
        body: "Vrijdag 22 mei zijn we voor het eerst samen. Komt jullie kind ook? Stuur even bericht dan weten we het zeker."
      - date: "18 mei 2026"
        title: "Welkom bij TakTiek"
        body: "Fijn dat jullie meedoen. Hieronder staan een paar praktische zaken voor de eerste keer."

  child_profile:
    heading: "Gegevens van mijn kind"
    intro: "Hier kun je de gegevens van je kind inzien en wijzigen. Wijzigingen worden direct verwerkt."
    sections:
      - "Naam en leeftijd"
      - "Contactgegevens ouder"
      - "Aanwezigheid"
      - "Bijzonderheden"
    delete_btn: "Aanmelding intrekken en gegevens verwijderen"
    delete_confirm: "Weet je zeker dat je de aanmelding wilt intrekken? Alle gegevens worden verwijderd."
```

> **Privacynote voor het portal:** in de echte implementatie ziet een ouder alleen de gegevens van het/de eigen kind(eren) — Supabase Row Level Security op `parent_id`. Geen ouderlijst, geen contactgegevens van andere ouders. In de dummy: één fictief gezin getoond.

---

## 10. 404 en foutpagina's (`errors.*`)

```yaml
errors:
  not_found:
    title: "Deze pagina bestaat niet"
    body: "Het kan zijn dat de link verlopen is. Ga terug naar de startpagina of neem contact op."
    cta: "Naar de startpagina"

  generic:
    title: "Er ging iets mis"
    body: "Sorry, er ging iets mis. Probeer het later opnieuw of neem contact op."
```

---

## Volgende stap

Wanneer deze copy in grote lijnen klopt, ga ik door naar **`PAGE_LAYOUTS.md`** — daarin staat per pagina welke secties op welke positie staan, welke componenten gebruikt worden, en welke states (loading, error, empty) elke component heeft. Pas dáárna bouw ik de visuele dummy.

**Vragen voor reviewronde 1 op dit document:**

1. Past de toon (warm, helder, niet schools) bij wat je wilt uitstralen?
2. Zijn er secties die ontbreken die je wel verwacht had?
3. Mis je teksten waar Helen of Alessandro per se input op zouden moeten geven voor we verder gaan?
4. Is de privacy-sectie te lang voor een dummy, of juist goed dat hij al uitgewerkt is?
