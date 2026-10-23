import type {EnglishVerb} from "../../types";

/** Everyday activities for the present tense (lessons 2 and 4). */
export const activities: {verb: string; rest: string; en: EnglishVerb}[] = [
  {
    verb: "giocare",
    rest: "a tennis",
    en: {base: "play tennis", third: "plays tennis"},
  },
  {
    verb: "leggere",
    rest: "un libro",
    en: {base: "read a book", third: "reads a book"},
  },
  {
    verb: "guardare",
    rest: "la [TV|televisione]",
    en: {base: "watch TV", third: "watches TV"},
  },
  {
    verb: "ascoltare",
    rest: "(la) musica",
    en: {base: "listen to music", third: "listens to music"},
  },
  {
    verb: "andare",
    rest: "al cinema",
    en: {base: "go to the cinema", third: "goes to the cinema"},
  },
  {verb: "cucinare", rest: "", en: {base: "cook", third: "cooks"}},
  {
    verb: "dormire",
    rest: "fino a tardi",
    en: {base: "sleep late", third: "sleeps late"},
  },
  {
    verb: "uscire",
    rest: "con gli amici",
    en: {base: "go out with friends", third: "goes out with friends"},
  },
  {verb: "fare", rest: "sport", en: {base: "do sport", third: "does sport"}},
  {
    verb: "mangiare",
    rest: "al ristorante",
    en: {base: "eat at a restaurant", third: "eats at a restaurant"},
  },
  {
    verb: "andare",
    rest: "in bicicletta",
    en: {base: "ride a bike", third: "rides a bike"},
  },
  {verb: "ballare", rest: "", en: {base: "dance", third: "dances"}},
];

/** Things to do after potere / dovere / volere (lesson 5). */
export const modalActions: {it: string; en: string}[] = [
  {it: "prenotare una camera", en: "book a room"},
  {it: "pagare il conto", en: "pay the bill"},
  {it: "partire domani", en: "leave tomorrow"},
  {it: "studiare stasera", en: "study tonight"},
  {it: "lavorare sabato", en: "work on Saturday"},
  {it: "cambiare camera", en: "change room"},
  {it: "mangiare al ristorante", en: "eat at the restaurant"},
  {it: "arrivare presto", en: "arrive early"},
];

/** The modal verbs: Italian infinitive and English base / he-she form. */
export const modals: {verb: string; en: EnglishVerb}[] = [
  {verb: "potere", en: {base: "can", third: "can"}},
  {verb: "dovere", en: {base: "have to", third: "has to"}},
  {verb: "volere", en: {base: "want to", third: "wants to"}},
];

/**
 * Things that happened (lesson 7). Verbs with essere give the participle
 * stem, so it can agree: "andat" → andato, andata, andati, andate.
 */
export const pastEvents: {
  aux: "avere" | "essere";
  participle: string;
  rest: string;
  en: string;
  /** For questions and negatives: "Did you go…?", "didn't go" */
  enBase: string;
}[] = [
  {
    aux: "essere",
    participle: "andat",
    rest: "al mare",
    en: "went to the sea",
    enBase: "go to the sea",
  },
  {
    aux: "essere",
    participle: "andat",
    rest: "al cinema",
    en: "went to the cinema",
    enBase: "go to the cinema",
  },
  {
    aux: "essere",
    participle: "tornat",
    rest: "a casa",
    en: "came back home",
    enBase: "come back home",
  },
  {
    aux: "essere",
    participle: "stat",
    rest: "a casa",
    en: "stayed at home",
    enBase: "stay at home",
  },
  {
    aux: "essere",
    participle: "uscit",
    rest: "con gli amici",
    en: "went out with friends",
    enBase: "go out with friends",
  },
  {
    aux: "essere",
    participle: "partit",
    rest: "per le vacanze",
    en: "left on holiday",
    enBase: "leave on holiday",
  },
  {
    aux: "avere",
    participle: "mangiato",
    rest: "la pizza",
    en: "ate pizza",
    enBase: "eat pizza",
  },
  {
    aux: "avere",
    participle: "visto",
    rest: "un film",
    en: "saw a film",
    enBase: "see a film",
  },
  {
    aux: "avere",
    participle: "letto",
    rest: "un libro",
    en: "read a book",
    enBase: "read a book",
  },
  {
    aux: "avere",
    participle: "scritto",
    rest: "[una mail|un'email|una email]",
    en: "wrote an email",
    enBase: "write an email",
  },
  {
    aux: "avere",
    participle: "preso",
    rest: "il treno",
    en: "took the train",
    enBase: "take the train",
  },
  {
    aux: "avere",
    participle: "visitato",
    rest: "un museo",
    en: "visited a museum",
    enBase: "visit a museum",
  },
  {
    aux: "avere",
    participle: "lavorato",
    rest: "fino a tardi",
    en: "worked late",
    enBase: "work late",
  },
  {
    aux: "avere",
    participle: "fatto",
    rest: "la spesa",
    en: "did the shopping",
    enBase: "do the shopping",
  },
  {
    aux: "avere",
    participle: "giocato",
    rest: "a tennis",
    en: "played tennis",
    enBase: "play tennis",
  },
];

/** When something happened; "{n} days ago" is made separately. */
export const pastMarkers: {it: string; en: string}[] = [
  {it: "ieri", en: "yesterday"},
  {it: "ieri sera", en: "last night"},
  {it: "stamattina", en: "this morning"},
  {it: "l'altro ieri", en: "the day before yesterday"},
  {it: "[la settimana scorsa|la scorsa settimana]", en: "last week"},
  {it: "[l'anno scorso|lo scorso anno]", en: "last year"},
  {it: "sabato", en: "on Saturday"},
  {it: "domenica", en: "on Sunday"},
];

export const frequencies: {it: string; en: string; negative?: boolean}[] = [
  {it: "sempre", en: "always"},
  {it: "spesso", en: "often"},
  {it: "mai", en: "never", negative: true},
];
