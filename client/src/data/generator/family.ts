import type {Adjective, EnglishVerb, Noun} from "../../types";

/**
 * Daily routine with reflexive verbs (lessons 9 and 10). The participle is a
 * stem so it can agree with essere: "alzat" → alzato, alzata…
 */
export const routines: {
  verb: string;
  rest: string;
  en: EnglishVerb;
  enPast: string;
  participle: string;
}[] = [
  {
    verb: "svegliarsi",
    rest: "",
    en: {base: "wake up", third: "wakes up"},
    enPast: "woke up",
    participle: "svegliat",
  },
  {
    verb: "alzarsi",
    rest: "",
    en: {base: "get up", third: "gets up"},
    enPast: "got up",
    participle: "alzat",
  },
  {
    verb: "farsi",
    rest: "la doccia",
    en: {base: "have a shower", third: "has a shower"},
    enPast: "had a shower",
    participle: "fatt",
  },
  {
    verb: "vestirsi",
    rest: "",
    en: {base: "get dressed", third: "gets dressed"},
    enPast: "got dressed",
    participle: "vestit",
  },
];

/** Reflexive things you might want to do (lesson 9). */
export const restfulThings: {verb: string; rest: string; en: string}[] = [
  {verb: "riposarsi", rest: "", en: "rest"},
  {verb: "divertirsi", rest: "", en: "have fun"},
  {verb: "alzarsi", rest: "tardi", en: "get up late"},
  {verb: "farsi", rest: "una doccia", en: "have a shower"},
];

/** How often, from lesson 9; `first` ones open the sentence in both languages. */
export const routineFrequencies: {it: string; en: string; first?: boolean}[] = [
  {it: "[ogni giorno|tutti i giorni]", en: "every day"},
  {it: "[ogni mattina|tutte le mattine]", en: "every morning"},
  {it: "[di solito|normalmente]", en: "usually", first: true},
  {it: "una volta [alla|a] settimana", en: "once a week"},
  {it: "due volte [alla|a] settimana", en: "twice a week"},
];

/** Family members (lesson 10). */
export const relatives: Noun[] = [
  {it: "padre", g: "m", en: "father"},
  {it: "madre", g: "f", en: "mother"},
  {it: "fratello", pl: "fratelli", g: "m", en: "brother", enPl: "brothers"},
  {it: "sorella", pl: "sorelle", g: "f", en: "sister", enPl: "sisters"},
  {it: "nonno", g: "m", en: "grandfather"},
  {it: "nonna", g: "f", en: "grandmother"},
  {it: "zio", pl: "zii", g: "m", en: "uncle", enPl: "uncles"},
  {it: "zia", pl: "zie", g: "f", en: "aunt", enPl: "aunts"},
  {it: "cugino", pl: "cugini", g: "m", en: "cousin (m)", enPl: "cousins (m)"},
  {it: "cugina", pl: "cugine", g: "f", en: "cousin (f)", enPl: "cousins (f)"},
  {it: "figlio", pl: "figli", g: "m", en: "son", enPl: "children"},
  {it: "figlia", pl: "figlie", g: "f", en: "daughter", enPl: "daughters"},
  {it: "marito", g: "m", en: "husband"},
  {it: "moglie", g: "f", en: "wife"},
];

/** Possessive owners: English word and the four Italian forms. */
export const owners: Adjective[] = [
  {en: "my", forms: ["mio", "mia", "miei", "mie"]},
  {en: "your", forms: ["tuo", "tua", "tuoi", "tue"]},
  {en: "his", forms: ["suo", "sua", "suoi", "sue"]},
  {en: "her", forms: ["suo", "sua", "suoi", "sue"]},
  {en: "our", forms: ["nostro", "nostra", "nostri", "nostre"]},
  {en: "their", forms: ["loro", "loro", "loro", "loro"]},
];

/** For "the youngest / the oldest in the family". */
export const familySuperlatives: Adjective[] = [
  {en: "youngest", forms: ["giovane", "giovane", "giovani", "giovani"]},
  {
    en: "oldest",
    forms: [
      "[grande|vecchio|anziano]",
      "[grande|vecchia|anziana]",
      "[grandi|vecchi|anziani]",
      "[grandi|vecchie|anziane]",
    ],
  },
  {en: "tallest", forms: ["alto", "alta", "alti", "alte"]},
  {en: "nicest", forms: ["simpatico", "simpatica", "simpatici", "simpatiche"]},
];
