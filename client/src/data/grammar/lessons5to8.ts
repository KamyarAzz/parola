import type {GrammarPoint} from "../../types";
import {gap} from "./exercise";

export const grammarLessons5to8: GrammarPoint[] = [
  // Lezione 5
  {
    id: "c-e-ci-sono",
    lesson: 5,
    category: "phrases",
    title: "There is / there are",
    italian: "C'è / ci sono",
    summary: "c'è + one thing, ci sono + more than one.",
    examples: [
      {it: "In camera c'è il frigobar.", en: "There's a minibar in the room."},
      {it: "Non ci sono asciugamani.", en: "There are no towels."},
    ],
    exercises: [
      gap("In camera ___ un frigobar.", ["c'è", "ci sono", "è", "sono"]),
      gap("In albergo ___ due piscine.", ["ci sono", "c'è", "sono", "è"]),
      gap("Non ___ asciugamani in bagno.", ["ci sono", "c'è", "è", "ha"]),
      gap("Scusi, ___ un parcheggio qui vicino?", [
        "c'è",
        "ci sono",
        "è",
        "ha",
      ]),
    ],
  },
  {
    id: "modal-verbs",
    lesson: 5,
    category: "verbs",
    title: "Can, must, want",
    italian: "Potere, dovere, volere",
    summary:
      "Conjugate the modal verb, then add the second verb in the infinitive.",
    table: [
      ["", "potere", "dovere", "volere"],
      ["io", "posso", "devo", "voglio"],
      ["tu", "puoi", "devi", "vuoi"],
      ["lui / lei", "può", "deve", "vuole"],
      ["noi", "possiamo", "dobbiamo", "vogliamo"],
      ["voi", "potete", "dovete", "volete"],
      ["loro", "possono", "devono", "vogliono"],
    ],
    examples: [{it: "Posso pagare con la carta?", en: "Can I pay by card?"}],
    exercises: [
      gap("___ prenotare una camera? (can I)", [
        "Posso",
        "Devo",
        "Voglio",
        "Puoi",
      ]),
      gap("Domani ___ partire presto. (I must)", [
        "devo",
        "posso",
        "voglio",
        "deve",
      ]),
      gap("Noi ___ una camera doppia. (want)", [
        "vogliamo",
        "volete",
        "vuole",
        "vogliono",
      ]),
      gap("Scusi, ___ ripetere? (can you, polite)", [
        "può",
        "puoi",
        "posso",
        "potete",
      ]),
    ],
  },
  {
    id: "dates",
    lesson: 5,
    category: "phrases",
    title: "Dates",
    italian: "Le date",
    summary:
      "il + number + month (il 3 maggio). The 1st is il primo. From… to… = dal… al…",
    examples: [
      {it: "Arrivo il 10 giugno.", en: "I arrive on 10 June."},
      {it: "Dal 3 al 6 maggio.", en: "From 3 to 6 May."},
    ],
    exercises: [
      gap("Oggi è ___ 3 maggio.", ["il", "lo", "la", "al"]),
      gap("___ primo gennaio è festa.", ["Il", "Lo", "La", "L'"]),
      gap("Il ___ gennaio è Capodanno.", ["primo", "uno", "prima", "unico"]),
      gap("Resto ___ 5 al 9 agosto.", ["dal", "il", "al", "nel"]),
    ],
  },

  // Lezione 6
  {
    id: "articulated-prepositions",
    lesson: 6,
    category: "prepositions",
    title: "Preposition + the",
    italian: "Preposizioni articolate",
    summary:
      "a, da, di, in, su join with il, lo, la… into one word: a + il = al.",
    table: [
      ["", "il", "lo", "l'", "la", "i", "gli", "le"],
      ["a", "al", "allo", "all'", "alla", "ai", "agli", "alle"],
      ["da", "dal", "dallo", "dall'", "dalla", "dai", "dagli", "dalle"],
      ["di", "del", "dello", "dell'", "della", "dei", "degli", "delle"],
      ["in", "nel", "nello", "nell'", "nella", "nei", "negli", "nelle"],
      ["su", "sul", "sullo", "sull'", "sulla", "sui", "sugli", "sulle"],
    ],
    examples: [
      {
        it: "La farmacia è vicino alla stazione.",
        en: "The pharmacy is near the station.",
      },
    ],
    exercises: [
      gap("La farmacia è vicino ___ stazione.", [
        "alla",
        "al",
        "nella",
        "della",
      ]),
      gap("Stasera vado ___ cinema.", ["al", "alla", "allo", "nel"]),
      gap("Abito vicino ___ ospedale.", ["all'", "al", "allo", "alla"]),
      gap("Il libro è ___ tavolo. (on the)", ["sul", "sulla", "nel", "al"]),
    ],
  },
  {
    id: "place-prepositions",
    lesson: 6,
    category: "prepositions",
    title: "Where things are",
    italian: "Preposizioni di luogo",
    summary: "accanto a, di fronte a, vicino a, lontano da, tra… e…",
    examples: [
      {
        it: "La banca è accanto alla posta.",
        en: "The bank is next to the post office.",
      },
    ],
    exercises: [
      gap("La banca è accanto ___ posta.", ["alla", "dalla", "della", "la"]),
      gap("Il parco è lontano ___ centro.", ["dal", "al", "del", "nel"]),
      gap("La chiesa è ___ il museo e il teatro.", [
        "tra",
        "accanto",
        "vicino",
        "di fronte",
      ]),
      gap("Il bar è di fronte ___ stazione.", ["alla", "della", "dalla", "la"]),
    ],
  },
  {
    id: "adjective-agreement",
    lesson: 6,
    category: "nouns",
    title: "Adjective endings",
    italian: "Accordo dell'aggettivo",
    summary:
      "Adjectives match the noun: -o / -a / -i / -e. Adjectives in -e only change to -i.",
    table: [
      ["", "singular", "plural"],
      ["masc.", "un ponte antico", "due ponti antichi"],
      ["fem.", "una piazza antica", "due piazze antiche"],
      ["-e", "una città grande", "due città grandi"],
    ],
    examples: [
      {it: "Verona è una città tranquilla.", en: "Verona is a quiet city."},
    ],
    exercises: [
      gap("Roma è una città ___. (antico)", [
        "antica",
        "antico",
        "antiche",
        "antichi",
      ]),
      gap("Ci sono due palazzi ___. (moderno)", [
        "moderni",
        "moderne",
        "moderno",
        "moderna",
      ]),
      gap("Le piazze sono ___. (grande)", [
        "grandi",
        "grande",
        "grandie",
        "grando",
      ]),
      gap("È un museo ___. (interessante)", [
        "interessante",
        "interessanto",
        "interessanti",
        "interessanta",
      ]),
    ],
  },

  // Lezione 7
  {
    id: "past-with-avere",
    lesson: 7,
    category: "verbs",
    title: "Past tense with avere",
    italian: "Passato prossimo con avere",
    summary:
      "avere + past participle. -are → -ato, -ere → -uto, -ire → -ito. Most verbs use avere.",
    table: [
      ["", "mangiare"],
      ["io", "ho mangiato"],
      ["tu", "hai mangiato"],
      ["lui / lei", "ha mangiato"],
      ["noi", "abbiamo mangiato"],
      ["voi", "avete mangiato"],
      ["loro", "hanno mangiato"],
    ],
    examples: [
      {
        it: "Ieri ho lavorato fino alle sette.",
        en: "Yesterday I worked until seven.",
      },
    ],
    exercises: [
      gap("Ieri ___ mangiato la pizza.", ["ho", "sono", "hai", "abbiamo"]),
      gap("Tu ___ dormito bene?", ["hai", "ha", "sei", "ho"]),
      gap("Abbiamo ___ un museo. (visitare)", [
        "visitato",
        "visitito",
        "visituto",
        "visitata",
      ]),
      gap("Marco ha ___ fino a tardi. (dormire)", [
        "dormito",
        "dormato",
        "dormuto",
        "dormita",
      ]),
    ],
  },
  {
    id: "past-with-essere",
    lesson: 7,
    category: "verbs",
    title: "Past tense with essere",
    italian: "Passato prossimo con essere",
    summary:
      "Verbs of moving or staying (andare, venire, partire, arrivare, tornare, stare, essere) use essere, and the participle agrees: andato / andata / andati / andate.",
    table: [
      ["", "andare"],
      ["io", "sono andato / andata"],
      ["tu", "sei andato / andata"],
      ["lui / lei", "è andato / andata"],
      ["noi", "siamo andati / andate"],
      ["voi", "siete andati / andate"],
      ["loro", "sono andati / andate"],
    ],
    examples: [{it: "Anna è partita ieri.", en: "Anna left yesterday."}],
    exercises: [
      gap("Anna è ___ a Roma.", ["andata", "andato", "andati", "andare"]),
      gap("Noi ___ partiti alle otto.", ["siamo", "abbiamo", "sono", "siete"]),
      gap("I ragazzi sono ___ tardi. (tornare)", [
        "tornati",
        "tornato",
        "tornate",
        "tornata",
      ]),
      gap("Ieri Paolo ___ andato al mare.", ["è", "ha", "sono", "hai"]),
    ],
  },
  {
    id: "irregular-participles",
    lesson: 7,
    category: "verbs",
    title: "Irregular participles",
    italian: "Participi irregolari",
    summary: "Learn these by heart: they don't follow -ato / -uto / -ito.",
    table: [
      ["verb", "participle"],
      ["fare", "fatto"],
      ["prendere", "preso"],
      ["vedere", "visto"],
      ["leggere", "letto"],
      ["scrivere", "scritto"],
      ["bere", "bevuto"],
      ["mettere", "messo"],
      ["essere / stare", "stato"],
      ["venire", "venuto"],
    ],
    examples: [
      {
        it: "Ho preso il treno delle otto.",
        en: "I took the eight o'clock train.",
      },
    ],
    exercises: [
      gap("Ho ___ un caffè. (prendere)", [
        "preso",
        "prenduto",
        "prendato",
        "presto",
      ]),
      gap("Hai ___ il film? (vedere)", ["visto", "veduto", "vidato", "vesto"]),
      gap("Cosa avete ___ ieri? (fare)", ["fatto", "faciuto", "fato", "fatte"]),
      gap("Ho ___ una mail a Luca. (scrivere)", [
        "scritto",
        "scrivuto",
        "scriveto",
        "scrissuto",
      ]),
    ],
  },

  // Lezione 8
  {
    id: "partitive",
    lesson: 8,
    category: "articles",
    title: "Some: del, della…",
    italian: "Il partitivo",
    summary:
      "di + article means 'some': del pane, dello zucchero, dell'olio, della frutta, dei pomodori, delle uova.",
    examples: [
      {
        it: "Vorrei del pane e delle uova.",
        en: "I'd like some bread and some eggs.",
      },
    ],
    exercises: [
      gap("Vorrei ___ pane.", ["del", "dello", "della", "dei"]),
      gap("Compro ___ uova.", ["delle", "degli", "dei", "della"]),
      gap("Ci sono ___ pomodori in frigo?", ["dei", "delle", "degli", "del"]),
      gap("Metto ___ olio nell'insalata.", ["dell'", "del", "dello", "della"]),
    ],
  },
  {
    id: "quantities",
    lesson: 8,
    category: "phrases",
    title: "Quantities",
    italian: "Le quantità",
    summary:
      "Amount + di + food, no article: un chilo di mele, un etto (100 g) di prosciutto.",
    examples: [
      {
        it: "Due etti di prosciutto, per favore.",
        en: "200 grams of ham, please.",
      },
      {it: "Una bottiglia di vino rosso.", en: "A bottle of red wine."},
    ],
    exercises: [
      gap("Un chilo ___ mele, per favore.", ["di", "delle", "da", "a"]),
      gap("Mezzo ___ di pane.", ["chilo", "litro", "etto", "pezzo"]),
      gap("Due ___ di prosciutto. (200 g)", [
        "etti",
        "chili",
        "litri",
        "pacchi",
      ]),
      gap("Un ___ di latte.", ["litro", "chilo", "etto", "vasetto"]),
    ],
  },
  {
    id: "direct-pronouns",
    lesson: 8,
    category: "pronouns",
    title: "It / them: lo, la, li, le",
    italian: "Pronomi diretti",
    summary:
      "They replace the object and go before the verb: Il pane? Lo compro io.",
    table: [
      ["", "masc.", "fem."],
      ["it", "lo", "la"],
      ["them", "li", "le"],
    ],
    examples: [
      {
        it: "La frutta? La prendo al mercato.",
        en: "The fruit? I get it at the market.",
      },
    ],
    exercises: [
      gap("Il pane? ___ compro io.", ["Lo", "La", "Li", "Le"]),
      gap("La frutta? ___ prendo al mercato.", ["La", "Lo", "Le", "Li"]),
      gap("I pomodori? ___ metto nell'insalata.", ["Li", "Le", "Lo", "La"]),
      gap("Le mele? ___ mangio ogni giorno.", ["Le", "Li", "La", "Lo"]),
    ],
  },
];
