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
      {it: "Io sono di Milano, e tu?", en: "I'm from Milan, and you?"},
      {
        it: "Noi siamo studenti, loro sono insegnanti.",
        en: "We're students, they're teachers.",
      },
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
      {it: "Marco non è a casa.", en: "Marco isn't at home."},
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
      {
        it: "Juan è spagnolo, Carmen è spagnola.",
        en: "Juan is Spanish, Carmen is Spanish.",
      },
      {it: "Hans e Greta sono tedeschi.", en: "Hans and Greta are German."},
    ],
    exercises: [
      gap("Maria è ___.", ["italiana", "italiano", "italiani", "italiane"]),
      gap("John è ___.", ["inglese", "inglesa", "ingleso", "inglesi"]),
      gap("Carmen è ___.", ["spagnola", "spagnolo", "spagnole", "spagnoli"]),
      gap("Pierre è ___.", ["francese", "francesa", "franceso", "francesi"]),
    ],
  },

  {
    id: "definite-article",
    lesson: 1,
    category: "articles",
    title: "The: il, lo, la, l', i, gli, le",
    italian: "Articolo determinativo",
    summary:
      "Pick by gender, number and the first letter. lo / gli go before s + consonant, z, gn, ps, y; l' before a vowel.",
    table: [
      ["", "singular", "plural"],
      ["masc.", "il libro", "i libri"],
      ["masc. s + cons., z", "lo studente", "gli studenti"],
      ["masc. vowel", "l'amico", "gli amici"],
      ["fem.", "la casa", "le case"],
      ["fem. vowel", "l'amica", "le amiche"],
    ],
    examples: [
      {
        it: "Il conto e le birre, per favore.",
        en: "The bill and the beers, please.",
      },
      {it: "Gli studenti sono in classe.", en: "The students are in class."},
      {it: "Lo zaino è sul tavolo.", en: "The backpack is on the table."},
      {it: "L'amica di Anna è simpatica.", en: "Anna's friend is nice."},
    ],
    exercises: [
      gap("___ conto, per favore.", ["Il", "Lo", "La", "L'"]),
      gap("Mi passi ___ zucchero?", ["lo", "il", "la", "l'"]),
      gap("___ acqua è fredda.", ["L'", "La", "Lo", "Il"]),
      gap("___ panini sono freschi.", ["I", "Gli", "Le", "Lo"]),
      gap("___ studenti sono in classe.", ["Gli", "I", "Le", "Lo"]),
      gap("___ amici di Marco sono italiani.", ["Gli", "I", "Le", "L'"]),
      gap("___ ragazze sono di Roma.", ["Le", "La", "Gli", "I"]),
      gap("Prendiamo ___ antipasti misti.", ["gli", "i", "le", "l'"]),
    ],
  },
  {
    id: "indefinite-article",
    lesson: 1,
    category: "articles",
    title: "A / an: un, uno, una, un'",
    italian: "Articolo indeterminativo",
    summary:
      "un for masculine, uno before s + consonant or z, una for feminine, un' for feminine + vowel. No plural: use numbers or dei / delle (lesson 8).",
    table: [
      ["", "masculine", "feminine"],
      ["most words", "un libro", "una casa"],
      ["vowel", "un amico", "un'amica"],
      ["s + cons., z", "uno studente", "una studentessa"],
    ],
    examples: [
      {
        it: "Ho un amico e un'amica a Roma.",
        en: "I have a (male) friend and a (female) friend in Rome.",
      },
      {it: "Marco è uno studente.", en: "Marco is a student."},
      {
        it: "Vorrei una pizza e un'aranciata.",
        en: "I'd like a pizza and an orange soda.",
      },
    ],
    exercises: [
      gap("Lavoro in ___ ufficio.", ["un", "uno", "una", "un'"]),
      gap("Marco è ___ studente.", ["uno", "un", "una", "un'"]),
      gap("Anna insegna in ___ scuola.", ["una", "un", "uno", "un'"]),
      gap("Questa è ___ amica di Paolo.", ["un'", "un", "uno", "una"]),
      gap("Ho ___ zaino nuovo.", ["uno", "un", "una", "un'"]),
      gap("Vorrei ___ aranciata.", ["un'", "una", "un", "uno"]),
    ],
  },

  // Lezione 2
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
      {
        it: "Tu leggi il giornale ogni mattina?",
        en: "Do you read the paper every morning?",
      },
      {it: "Noi dormiamo fino alle otto.", en: "We sleep until eight."},
      {
        it: "Paolo e Sara parlano inglese.",
        en: "Paolo and Sara speak English.",
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
      {
        it: "Lavoro a Londra, ma abito in Inghilterra.",
        en: "I work in London, but I live in England.",
      },
    ],
    exercises: [
      gap("Abito ___ Milano.", ["a", "in", "di", "da"]),
      gap("Lavoro ___ Germania.", ["in", "a", "di", "da"]),
      gap("Sono di Roma, ma vivo ___ Londra.", ["a", "in", "di", "da"]),
      gap("Il mio ufficio è ___ via Garibaldi.", ["in", "a", "di", "su"]),
    ],
  },
  {
    id: "this-is",
    lesson: 2,
    category: "phrases",
    title: "Introducing someone",
    italian: "Questo è… / questa è…",
    summary:
      "questo è for a man, questa è for a woman. A friend of mine = un mio amico / una mia amica.",
    examples: [
      {
        it: "Questo è Marco, un mio amico.",
        en: "This is Marco, a friend of mine.",
      },
      {
        it: "Questa è Anna, una mia collega.",
        en: "This is Anna, a colleague of mine.",
      },
      {
        it: "Questo è il mio insegnante, Paolo.",
        en: "This is my teacher, Paolo.",
      },
    ],
    exercises: [
      gap("___ è Giulia, una mia amica.", [
        "Questa",
        "Questo",
        "Questi",
        "Queste",
      ]),
      gap("___ è Paolo, un mio collega.", [
        "Questo",
        "Questa",
        "Queste",
        "Questi",
      ]),
      gap("Ti presento Luca, ___ mio amico.", ["un", "una", "il", "uno"]),
      gap("Questa è Sara, ___ mia collega.", ["una", "un", "la", "uno"]),
    ],
  },

  // Lezione 3
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
      {it: "Un panino, due panini.", en: "One sandwich, two sandwiches."},
      {it: "Una pizza, tre pizze.", en: "One pizza, three pizzas."},
      {
        it: "Un caffè, due caffè.",
        en: "One coffee, two coffees (no change after an accent).",
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
      {it: "Mi piace molto la pizza.", en: "I really like pizza."},
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
    id: "me-too",
    lesson: 4,
    category: "pronouns",
    title: "Me too, me neither",
    italian: "A me, a te, a Lei",
    summary:
      "To agree or disagree about likes, use a me: anche a me (me too), neanche a me (me neither), a me sì / a me no.",
    table: [
      ["they say", "you agree", "you disagree"],
      ["Mi piace il jazz.", "Anche a me.", "A me no."],
      ["Non mi piace il jazz.", "Neanche a me.", "A me sì."],
    ],
    examples: [
      {
        it: "– Mi piace ballare. – Anche a me!",
        en: "– I like dancing. – Me too!",
      },
      {it: "A te piace il calcio?", en: "Do you like football?"},
      {
        it: "– Non mi piace il pesce. – Neanche a me.",
        en: "– I don't like fish. – Me neither.",
      },
    ],
    exercises: [
      gap("– Mi piace il cinema. – Anche ___ me!", ["a", "di", "per", "io"]),
      gap("– Non mi piace il tè. – ___ a me.", [
        "Neanche",
        "Anche",
        "Sì",
        "Sempre",
      ]),
      gap("– Mi piacciono i gatti. – A me ___. (I don't)", [
        "no",
        "sì",
        "neanche",
        "anche",
      ]),
      gap("– Non mi piace sciare. – A me ___! (I do)", [
        "sì",
        "no",
        "neanche",
        "anche",
      ]),
      gap("Signora, a ___ piace l'opera?", ["Lei", "te", "me", "lui"]),
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
      {
        it: "Lavoro dal lunedì al venerdì.",
        en: "I work from Monday to Friday.",
      },
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
      {
        it: "– Che ore sono? – Sono le tre e mezza.",
        en: "– What time is it? – It's half past three.",
      },
      {it: "È l'una e un quarto.", en: "It's a quarter past one."},
      {it: "Pranzo a mezzogiorno.", en: "I have lunch at noon."},
    ],
    exercises: [
      gap("___ le tre e un quarto.", ["Sono", "È", "Ci sono", "Ha"]),
      gap("___ l'una e mezza.", ["È", "Sono", "C'è", "Ha"]),
      gap("Arrivo ___ otto.", ["alle", "a", "le", "dalle"]),
      gap("Pranzo ___ una.", ["all'", "alle", "a", "l'"]),
    ],
  },
];
