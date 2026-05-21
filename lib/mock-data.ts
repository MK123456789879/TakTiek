export const mockParent = {
  name: "Sanne",
  email: "sanne.demo@example.com",
  phone: "06-12345678",
};

export const mockChild = {
  name: "Jules",
  age: 8,
  schoolGroup: "Groep 5",
  attendance: "Ja, alle sessies",
  careNotes: "Soms even rust nodig na drukke momenten.",
  consentPhoto: true,
};

export type SessionStatus = "confirmed" | "pending" | "cancelled";

export type SessionSeries = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  maxSpots: number;
  spotsTaken: number;
  location: string;
  enrollmentOpen: boolean;
};

export type MockSession = {
  id: string;
  seriesId: string;
  date: string;
  dateLabel: string;
  theme: string;
  location: string;
  notes: string;
  status: SessionStatus;
};

export const mockSeries: SessionSeries[] = [
  {
    id: "spellen-2026-q2",
    title: "Spellen: spelen en zelf maken",
    description:
      "Kinderen spelen verschillende soorten spellen, ontdekken hoe ze in elkaar zitten, en werken toe naar het ontwerpen van een eigen spel. Aan het eind een spellenmiddag voor ouders en peers.",
    startDate: "2026-05-22",
    endDate: "2026-06-26",
    maxSpots: 12,
    spotsTaken: 9,
    location: "Keenterhart, Weert",
    enrollmentOpen: true,
  },
  {
    id: "verkennen-2026-q3",
    title: "Verkennen & bouwen (binnenkort)",
    description: "Nieuwe themareeks start na de zomer. Inschrijving opent later.",
    startDate: "2026-09-05",
    endDate: "2026-11-28",
    maxSpots: 12,
    spotsTaken: 0,
    location: "Keenterhart, Weert",
    enrollmentOpen: false,
  },
];

export const mockSessions: MockSession[] = [
  {
    id: "1",
    seriesId: "spellen-2026-q2",
    date: "2026-05-22",
    dateLabel: "Vrijdag 22 mei 2026",
    theme: "Kennismaking en eerste spelletjes",
    location: "Keenterhart, Weert",
    notes: "We leren elkaar kennen via spel",
    status: "confirmed",
  },
  {
    id: "2",
    seriesId: "spellen-2026-q2",
    date: "2026-05-29",
    dateLabel: "Vrijdag 29 mei 2026",
    theme: "Hoe werkt een spel? — Spelmechanieken ontdekken",
    location: "Keenterhart, Weert",
    notes: "Verschillende soorten spellen verkennen",
    status: "confirmed",
  },
  {
    id: "3",
    seriesId: "spellen-2026-q2",
    date: "2026-06-05",
    dateLabel: "Vrijdag 5 juni 2026",
    theme: "Ontwerpen — eerste ideeën voor een eigen spel",
    location: "Keenterhart, Weert",
    notes: "Inspiratiemiddag",
    status: "confirmed",
  },
  {
    id: "4",
    seriesId: "spellen-2026-q2",
    date: "2026-06-12",
    dateLabel: "Vrijdag 12 juni 2026",
    theme: "Bouwen — prototype maken",
    location: "Keenterhart, Weert",
    notes: "Materiaal wordt voorzien",
    status: "pending",
  },
  {
    id: "5",
    seriesId: "spellen-2026-q2",
    date: "2026-06-19",
    dateLabel: "Vrijdag 19 juni 2026",
    theme: "Testen — speel elkaars spel",
    location: "Keenterhart, Weert",
    notes: "Feedback geven en ontvangen",
    status: "confirmed",
  },
  {
    id: "6",
    seriesId: "spellen-2026-q2",
    date: "2026-06-26",
    dateLabel: "Vrijdag 26 juni 2026",
    theme: "Spellenmiddag — open voor ouders en peers",
    location: "Keenterhart, Weert",
    notes: "Ouders en broertjes/zusjes welkom",
    status: "confirmed",
  },
];

export function getSeriesById(id: string): SessionSeries | undefined {
  return mockSeries.find((s) => s.id === id);
}

export function getSessionsForSeries(seriesId: string): MockSession[] {
  return mockSessions.filter((s) => s.seriesId === seriesId);
}

export type MockAnnouncement = {
  id: string;
  date: string;
  title: string;
  body: string;
  author: string;
  read: boolean;
};

export const mockAnnouncements: MockAnnouncement[] = [
  {
    id: "1",
    date: "20 mei 2026",
    title: "Eerste sessie staat klaar",
    body: "Vrijdag 22 mei zijn we voor het eerst samen. Komt jullie kind ook? Stuur even bericht dan weten we het zeker.",
    author: "Helen",
    read: false,
  },
  {
    id: "2",
    date: "18 mei 2026",
    title: "Welkom bij TakTiek",
    body: "Fijn dat jullie meedoen. Hieronder staan een paar praktische zaken voor de eerste keer.",
    author: "Alessandro",
    read: true,
  },
];
