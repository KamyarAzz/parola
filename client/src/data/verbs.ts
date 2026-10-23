import type {GroupingOption, Verb, VerbGrouping, VerbTypeInfo} from "../types";

export const pronouns = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

export const verbTypes: VerbTypeInfo[] = [
  {
    id: "are",
    title: "Regular -are verbs",
    italian: "Verbi in -are",
    tag: "-are",
  },
  {
    id: "ere",
    title: "Regular -ere verbs",
    italian: "Verbi in -ere",
    tag: "-ere",
  },
  {
    id: "ire",
    title: "Regular -ire verbs",
    italian: "Verbi in -ire",
    tag: "-ire",
  },
  {
    id: "isc",
    title: "-ire verbs with -isc-",
    italian: "Verbi in -isc-",
    tag: "-isc-",
  },
  {
    id: "irregular",
    title: "Irregular verbs",
    italian: "Verbi irregolari",
    tag: "irregolare",
  },
];

export const verbGroupings: GroupingOption<VerbGrouping>[] = [
  {value: "lesson", label: "By lesson"},
  {value: "type", label: "By type"},
];

// Verbs from Nuovo Espresso 1, lessons 1–8. Regular verbs are conjugated in
// lib/verbs.ts; irregular ones list their present tense forms.
export const verbs: Verb[] = [
  // Lezione 1
  {
    it: "essere",
    en: "to be",
    lesson: 1,
    type: "irregular",
    forms: ["sono", "sei", "è", "siamo", "siete", "sono"],
  },
  {
    it: "chiamarsi",
    en: "to be called",
    lesson: 1,
    type: "irregular",
    forms: [
      "mi chiamo",
      "ti chiami",
      "si chiama",
      "ci chiamiamo",
      "vi chiamate",
      "si chiamano",
    ],
  },
  {it: "parlare", en: "to speak", lesson: 1, type: "are"},

  // Lezione 2
  {
    it: "avere",
    en: "to have",
    lesson: 2,
    type: "irregular",
    forms: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
  },
  {
    it: "stare",
    en: "to be / to stay",
    lesson: 2,
    type: "irregular",
    forms: ["sto", "stai", "sta", "stiamo", "state", "stanno"],
  },
  {
    it: "fare",
    en: "to do / to make",
    lesson: 2,
    type: "irregular",
    forms: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
  },
  {it: "lavorare", en: "to work", lesson: 2, type: "are"},
  {it: "abitare", en: "to live", lesson: 2, type: "are"},
  {it: "studiare", en: "to study", lesson: 2, type: "are"},

  // Lezione 3
  {it: "prendere", en: "to take / to have", lesson: 3, type: "ere"},
  {it: "mangiare", en: "to eat", lesson: 3, type: "are"},
  {
    it: "bere",
    en: "to drink",
    lesson: 3,
    type: "irregular",
    forms: ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
  },
  {it: "pagare", en: "to pay", lesson: 3, type: "are"},

  // Lezione 4
  {it: "leggere", en: "to read", lesson: 4, type: "ere"},
  {it: "dormire", en: "to sleep", lesson: 4, type: "ire"},
  {it: "giocare", en: "to play", lesson: 4, type: "are"},
  {it: "guardare", en: "to watch", lesson: 4, type: "are"},
  {it: "ascoltare", en: "to listen", lesson: 4, type: "are"},
  {it: "finire", en: "to finish", lesson: 4, type: "isc"},
  {it: "preferire", en: "to prefer", lesson: 4, type: "isc"},
  {
    it: "andare",
    en: "to go",
    lesson: 4,
    type: "irregular",
    forms: ["vado", "vai", "va", "andiamo", "andate", "vanno"],
  },
  {
    it: "uscire",
    en: "to go out",
    lesson: 4,
    type: "irregular",
    forms: ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
  },

  // Lezione 5
  {
    it: "potere",
    en: "can / to be able to",
    lesson: 5,
    type: "irregular",
    forms: ["posso", "puoi", "può", "possiamo", "potete", "possono"],
  },
  {
    it: "dovere",
    en: "must / to have to",
    lesson: 5,
    type: "irregular",
    forms: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
  },
  {
    it: "volere",
    en: "to want",
    lesson: 5,
    type: "irregular",
    forms: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
  },
  {it: "prenotare", en: "to book", lesson: 5, type: "are"},
  {it: "partire", en: "to leave", lesson: 5, type: "ire"},
  {it: "capire", en: "to understand", lesson: 5, type: "isc"},

  // Lezione 6
  {
    it: "venire",
    en: "to come",
    lesson: 6,
    type: "irregular",
    forms: ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
  },
  {
    it: "sapere",
    en: "to know",
    lesson: 6,
    type: "irregular",
    forms: ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
  },
  {it: "cercare", en: "to look for", lesson: 6, type: "are"},
  {it: "girare", en: "to turn", lesson: 6, type: "are"},
  {it: "attraversare", en: "to cross", lesson: 6, type: "are"},

  // Lezione 7
  {it: "arrivare", en: "to arrive", lesson: 7, type: "are"},
  {it: "tornare", en: "to come back", lesson: 7, type: "are"},
  {it: "visitare", en: "to visit", lesson: 7, type: "are"},
  {it: "vedere", en: "to see", lesson: 7, type: "ere"},
  {it: "scrivere", en: "to write", lesson: 7, type: "ere"},

  // Lezione 8
  {it: "comprare", en: "to buy", lesson: 8, type: "are"},
  {it: "mettere", en: "to put", lesson: 8, type: "ere"},
  {it: "spendere", en: "to spend", lesson: 8, type: "ere"},
  {it: "offrire", en: "to offer", lesson: 8, type: "ire"},
  {
    it: "dare",
    en: "to give",
    lesson: 8,
    type: "irregular",
    forms: ["do", "dai", "dà", "diamo", "date", "danno"],
  },
];
