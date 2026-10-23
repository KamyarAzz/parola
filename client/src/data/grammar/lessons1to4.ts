import type {GrammarPoint} from "../../types";
import {gap} from "./exercise";

export const grammarLessons1to4: GrammarPoint[] = [
  // Lezione 1
  {
    id: "subject-pronouns",
    lesson: 1,
    category: "pronouns",
    title: "Subject pronouns & Lei",
    italian: "Pronomi soggetto",
    summary:
      "The verb ending already shows who, so io, tu… are usually dropped. Use Lei (3rd person) to be polite.",
    table: [
      ["", "essere", "stare"],
      ["io", "sono", "sto"],
      ["tu", "sei", "stai"],
      ["lui / lei / Lei", "è", "sta"],
      ["noi", "siamo", "stiamo"],
      ["voi", "siete", "state"],
      ["loro", "sono", "stanno"],
    ],
    examples: [
      {it: "Ciao Marco, come stai?", en: "Hi Marco, how are you?"},
      {it: "Buongiorno signora, come sta?", en: "Good morning, how are you?"},
    ],
    exercises: [
      gap("Ciao Luca, come ___?", ["stai", "sta", "state", "sto"]),
      gap(
        "Buongiorno dottore, come ___?",
        ["sta", "stai", "stanno", "sto"],
        "Polite Lei takes the lui/lei form: come sta?",
      ),
      gap("Signora, Lei di dove ___?", ["è", "sei", "siete", "sono"]),
      gap("Anna e Paolo ___ italiani.", ["sono", "siamo", "siete", "è"]),
    ],
  },
  {
    id: "negation",
    lesson: 1,
    category: "phrases",
    title: "Saying no",
    italian: "La negazione",
    summary: "Put non right before the verb. No on its own answers a question.",
    examples: [
      {it: "Non sono francese.", en: "I'm not French."},
      {it: "No, non parlo tedesco.", en: "No, I don't speak German."},
    ],
    exercises: [
      gap("Io ___ parlo inglese.", ["non", "no", "nessun", "né"]),
      gap("Marco ___ è spagnolo, è italiano.", ["non", "no", "mai", "né"]),
      gap("Sei tedesca? ___, sono austriaca.", ["No", "Non", "Nessuno", "Né"]),
      gap("Loro non ___ di Roma.", ["sono", "è", "siamo", "sei"]),
    ],
  },
  {
    id: "nationality-adjectives",
    lesson: 1,
    category: "nouns",
    title: "Nationalities",
    italian: "Aggettivi di nazionalità",
    summary:
      "-o adjectives change for women (italiano → italiana). -e adjectives stay the same (inglese).",
    table: [
      ["", "he", "she"],
      ["-o / -a", "italiano", "italiana"],
      ["-e", "inglese", "inglese"],
    ],
    examples: [
      {it: "Maria è italiana.", en: "Maria is Italian."},
      {it: "John e Kate sono inglesi.", en: "John and Kate are English."},
    ],
    exercises: [
      gap("Maria è ___.", ["italiana", "italiano", "italiani", "italiane"]),
      gap("John è ___.", ["inglese", "inglesa", "ingleso", "inglesi"]),
      gap("Carmen è ___.", ["spagnola", "spagnolo", "spagnole", "spagnoli"]),
      gap("Pierre è ___.", ["francese", "francesa", "franceso", "francesi"]),
    ],
  },

  // Lezione 2
  {
    id: "indefinite-article",
    lesson: 2,
    category: "articles",
    title: "A / an",
    italian: "Articolo indeterminativo",
    summary:
      "un for most masculine words, uno before s + consonant or z, una for feminine, un' for feminine + vowel.",
    table: [
      ["", "masculine", "feminine"],
      ["most words", "un libro", "una casa"],
      ["vowel", "un ufficio", "un'amica"],
      ["s + cons., z", "uno studente", "una studentessa"],
    ],
    examples: [{it: "Lavoro in un ufficio.", en: "I work in an office."}],
    exercises: [
      gap("Lavoro in ___ ufficio.", ["un", "uno", "una", "un'"]),
      gap("Marco è ___ studente.", ["uno", "un", "una", "un'"]),
      gap("Anna insegna in ___ scuola.", ["una", "un", "uno", "un'"]),
      gap("Questa è ___ amica di Paolo.", ["un'", "un", "uno", "una"]),
    ],
  },
  {
    id: "present-regular",
    lesson: 2,
    category: "verbs",
    title: "Present tense endings",
    italian: "Il presente regolare",
    summary: "Drop -are / -ere / -ire and add the ending for the person.",
    table: [
      ["", "-are", "-ere", "-ire"],
      ["io", "-o", "-o", "-o"],
      ["tu", "-i", "-i", "-i"],
      ["lui / lei", "-a", "-e", "-e"],
      ["noi", "-iamo", "-iamo", "-iamo"],
      ["voi", "-ate", "-ete", "-ite"],
      ["loro", "-ano", "-ono", "-ono"],
    ],
    examples: [
      {
        it: "Abito a Roma e lavoro in banca.",
        en: "I live in Rome and work in a bank.",
      },
    ],
    exercises: [
      gap("Noi ___ a Napoli. (abitare)", [
        "abitiamo",
        "abitano",
        "abitate",
        "abito",
      ]),
      gap("Tu ___ inglese? (parlare)", ["parli", "parla", "parlo", "parlate"]),
      gap("Loro ___ il treno. (prendere)", [
        "prendono",
        "prendano",
        "prendete",
        "prende",
      ]),
      gap("Voi ___ fino a tardi? (dormire)", [
        "dormite",
        "dormete",
        "dormate",
        "dormono",
      ]),
    ],
  },
  {
    id: "a-in-places",
    lesson: 2,
    category: "prepositions",
    title: "Where you live: a / in",
    italian: "Abitare a / in",
    summary: "a + city, in + country, region or street.",
    examples: [
      {it: "Abito a Napoli, in Italia.", en: "I live in Naples, in Italy."},
      {it: "Abito in via Dante.", en: "I live in Via Dante."},
    ],
    exercises: [
      gap("Abito ___ Milano.", ["a", "in", "di", "da"]),
      gap("Lavoro ___ Germania.", ["in", "a", "di", "da"]),
      gap("Sono di Roma, ma vivo ___ Londra.", ["a", "in", "di", "da"]),
      gap("Il mio ufficio è ___ via Garibaldi.", ["in", "a", "di", "su"]),
    ],
  },

  // Lezione 3
  {
    id: "definite-article",
    lesson: 3,
    category: "articles",
    title: "The (singular)",
    italian: "Articolo determinativo",
    summary:
      "il for most masculine words, lo before s + consonant or z, la for feminine, l' before any vowel.",
    table: [
      ["", "masculine", "feminine"],
      ["most words", "il conto", "la birra"],
      ["vowel", "l'espresso", "l'acqua"],
      ["s + cons., z", "lo zucchero", "la spremuta"],
    ],
    examples: [{it: "Il conto, per favore.", en: "The bill, please."}],
    exercises: [
      gap("___ conto, per favore.", ["Il", "Lo", "La", "L'"]),
      gap("Mi passi ___ zucchero?", ["lo", "il", "la", "l'"]),
      gap("___ acqua è fredda.", ["L'", "La", "Lo", "Il"]),
      gap("Per me ___ birra, grazie.", ["la", "il", "lo", "l'"]),
    ],
  },
  {
    id: "plural-nouns",
    lesson: 3,
    category: "nouns",
    title: "Plurals",
    italian: "Il plurale",
    summary:
      "-o → -i, -a → -e, -e → -i. Words ending in an accent or foreign words don't change.",
    table: [
      ["singular", "plural"],
      ["un cornetto", "due cornetti"],
      ["una birra", "due birre"],
      ["un bicchiere", "due bicchieri"],
      ["un caffè", "due caffè"],
    ],
    examples: [
      {
        it: "Due cappuccini e due cornetti.",
        en: "Two cappuccinos and two croissants.",
      },
    ],
    exercises: [
      gap("Due ___, per favore. (cornetto)", [
        "cornetti",
        "cornette",
        "cornetto",
        "cornettos",
      ]),
      gap("Tre ___ fresche. (birra)", ["birre", "birri", "birra", "birras"]),
      gap("Due ___ di vino. (bicchiere)", [
        "bicchieri",
        "bicchiere",
        "bicchiera",
        "bicchiari",
      ]),
      gap("Due ___ macchiati. (caffè)", ["caffè", "caffi", "caffèi", "caffe"]),
    ],
  },
  {
    id: "plural-articles",
    lesson: 3,
    category: "articles",
    title: "The (plural)",
    italian: "Articoli plurali",
    summary: "il → i, lo / l' (masc.) → gli, la / l' (fem.) → le.",
    table: [
      ["singular", "plural"],
      ["il panino", "i panini"],
      ["lo spaghetto, l'antipasto", "gli spaghetti, gli antipasti"],
      ["la pizza, l'aranciata", "le pizze, le aranciate"],
    ],
    examples: [{it: "Gli spaghetti sono buoni.", en: "The spaghetti is good."}],
    exercises: [
      gap("___ panini sono freschi.", ["I", "Gli", "Le", "Lo"]),
      gap("___ spaghetti sono al pomodoro.", ["Gli", "I", "Le", "Lo"]),
      gap("___ aranciate sono fredde.", ["Le", "Gli", "I", "La"]),
      gap("Prendiamo ___ antipasti misti.", ["gli", "i", "le", "l'"]),
    ],
  },

  // Lezione 4
  {
    id: "mi-piace",
    lesson: 4,
    category: "phrases",
    title: "I like: mi piace",
    italian: "Mi piace / mi piacciono",
    summary: "piace + one thing or a verb, piacciono + more than one thing.",
    table: [
      ["", "use with"],
      ["mi piace", "il cinema, leggere"],
      ["mi piacciono", "i libri, gli spaghetti"],
    ],
    examples: [
      {it: "Ti piace ballare?", en: "Do you like dancing?"},
      {it: "Non mi piacciono i film gialli.", en: "I don't like crime films."},
    ],
    exercises: [
      gap("Mi ___ il cinema.", ["piace", "piacciono", "piaccio", "piacere"]),
      gap("Ti ___ i libri gialli?", ["piacciono", "piace", "piaci", "piacete"]),
      gap("Non mi ___ ballare.", ["piace", "piacciono", "piaccio", "piaci"]),
      gap("Mi ___ molto gli spaghetti.", [
        "piacciono",
        "piace",
        "piacete",
        "piacere",
      ]),
    ],
  },
  {
    id: "days-frequency",
    lesson: 4,
    category: "phrases",
    title: "Days & how often",
    italian: "Giorni e frequenza",
    summary:
      "il lunedì = every Monday, lunedì = this Monday. sempre, spesso go after the verb; mai needs non.",
    examples: [
      {
        it: "Il sabato gioco sempre a tennis.",
        en: "On Saturdays I always play tennis.",
      },
      {it: "Non guardo mai la TV.", en: "I never watch TV."},
    ],
    exercises: [
      gap("___ sabato vado sempre in piscina. (every Saturday)", [
        "Il",
        "Lo",
        "La",
        "Al",
      ]),
      gap("Non vado ___ al cinema.", ["mai", "sempre", "spesso", "non"]),
      gap("Lavoro ___ lunedì al venerdì.", ["dal", "da", "il", "al"]),
      gap("Gioco ___ a calcio, due volte a settimana.", [
        "spesso",
        "mai",
        "niente",
        "nessuno",
      ]),
    ],
  },
  {
    id: "telling-time",
    lesson: 4,
    category: "phrases",
    title: "Telling the time",
    italian: "Che ore sono?",
    summary:
      "È l'una / è mezzogiorno, otherwise sono le + number. At = alle (all'una).",
    table: [
      ["", "in Italian"],
      ["1:00", "è l'una"],
      ["3:15", "sono le tre e un quarto"],
      ["7:30", "sono le sette e mezza"],
      ["at 8:00", "alle otto"],
    ],
    examples: [
      {it: "Il film comincia alle nove.", en: "The film starts at nine."},
    ],
    exercises: [
      gap("___ le tre e un quarto.", ["Sono", "È", "Ci sono", "Ha"]),
      gap("___ l'una e mezza.", ["È", "Sono", "C'è", "Ha"]),
      gap("Arrivo ___ otto.", ["alle", "a", "le", "dalle"]),
      gap("Pranzo ___ una.", ["all'", "alle", "a", "l'"]),
    ],
  },
];
