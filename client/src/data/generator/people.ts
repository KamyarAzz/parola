import type {Adjective, Gender, Noun, Subject} from "../../types";

export const names: {name: string; g: Gender}[] = [
  {name: "Marco", g: "m"},
  {name: "Luca", g: "m"},
  {name: "Paolo", g: "m"},
  {name: "Davide", g: "m"},
  {name: "Giulia", g: "f"},
  {name: "Anna", g: "f"},
  {name: "Sara", g: "f"},
  {name: "Laura", g: "f"},
];

/** Two people as one plural subject (loro). */
export const pairs: {it: string; en: string; g: Gender}[] = [
  {it: "Marco e Anna", en: "Marco and Anna", g: "m"},
  {it: "Luca e Paolo", en: "Luca and Paolo", g: "m"},
  {it: "Giulia e Sara", en: "Giulia and Sara", g: "f"},
];

/** Pronoun subjects; named people are added from `names`. */
export const pronounSubjects: Subject[] = [
  {en: "I", name: null, person: 0, gender: null},
  {en: "you", name: null, person: 1, gender: null},
  {en: "we", name: null, person: 3, gender: null},
  {en: "they", name: null, person: 5, gender: null},
];

export const nationalities: Adjective[] = [
  {en: "Italian", forms: ["italiano", "italiana", "italiani", "italiane"]},
  {en: "German", forms: ["tedesco", "tedesca", "tedeschi", "tedesche"]},
  {en: "English", forms: ["inglese", "inglese", "inglesi", "inglesi"]},
  {en: "French", forms: ["francese", "francese", "francesi", "francesi"]},
  {en: "Spanish", forms: ["spagnolo", "spagnola", "spagnoli", "spagnole"]},
  {en: "American", forms: ["americano", "americana", "americani", "americane"]},
  {en: "Swiss", forms: ["svizzero", "svizzera", "svizzeri", "svizzere"]},
];

export const cities = [
  {it: "Roma", en: "Rome"},
  {it: "Milano", en: "Milan"},
  {it: "Firenze", en: "Florence"},
  {it: "Napoli", en: "Naples"},
  {it: "Venezia", en: "Venice"},
  {it: "Torino", en: "Turin"},
  {it: "Bologna", en: "Bologna"},
  {it: "Londra", en: "London"},
  {it: "Parigi", en: "Paris"},
  {it: "Berlino", en: "Berlin"},
  {it: "Madrid", en: "Madrid"},
];

export const languages = [
  {it: "italiano", en: "Italian"},
  {it: "inglese", en: "English"},
  {it: "tedesco", en: "German"},
  {it: "francese", en: "French"},
  {it: "spagnolo", en: "Spanish"},
];

/** Jobs: masculine and feminine form, English with its article. */
export const jobs: {m: string; f: string; en: string}[] = [
  {m: "insegnante", f: "insegnante", en: "a teacher"},
  {m: "medico", f: "medico", en: "a doctor"},
  {m: "impiegato", f: "impiegata", en: "an office worker"},
  {m: "cameriere", f: "cameriera", en: "a waiter"},
  {m: "commesso", f: "commessa", en: "a shop assistant"},
  {m: "architetto", f: "architetto", en: "an architect"},
  {m: "giornalista", f: "giornalista", en: "a journalist"},
  {m: "studente", f: "studentessa", en: "a student"},
];

/** People and things for "This is a… / These are the…" (lesson 1 articles). */
export const basicNouns: Noun[] = [
  {it: "amico", pl: "amici", g: "m", en: "friend (m)", enPl: "friends (m)"},
  {it: "amica", pl: "amiche", g: "f", en: "friend (f)", enPl: "friends (f)"},
  {
    it: "studente",
    pl: "studenti",
    g: "m",
    en: "student (m)",
    enPl: "students (m)",
  },
  {it: "libro", pl: "libri", g: "m", en: "book", enPl: "books"},
  {it: "zaino", pl: "zaini", g: "m", en: "backpack", enPl: "backpacks"},
  {it: "casa", pl: "case", g: "f", en: "house", enPl: "houses"},
  {it: "scuola", pl: "scuole", g: "f", en: "school", enPl: "schools"},
  {it: "ufficio", pl: "uffici", g: "m", en: "office", enPl: "offices"},
  {it: "ragazza", pl: "ragazze", g: "f", en: "girl", enPl: "girls"},
  {it: "ragazzo", pl: "ragazzi", g: "m", en: "boy", enPl: "boys"},
];
