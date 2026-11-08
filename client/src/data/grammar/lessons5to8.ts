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
      {it: "In albergo c'è una piscina.", en: "There's a pool in the hotel."},
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
    examples: [
      {it: "Posso pagare con la carta?", en: "Can I pay by card?"},
      {
        it: "Domani devo partire presto.",
        en: "Tomorrow I have to leave early.",
      },
      {it: "Vogliamo una camera doppia.", en: "We want a double room."},
      {it: "Puoi ripetere, per favore?", en: "Can you repeat that, please?"},
    ],
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
      {it: "Il primo maggio è festa.", en: "The 1st of May is a holiday."},
    ],
    exercises: [
      gap("Oggi è ___ 3 maggio.", ["il", "lo", "la", "al"]),
      gap("___ primo gennaio è festa.", ["Il", "Lo", "La", "L'"]),
      gap("Il ___ gennaio è Capodanno.", ["primo", "uno", "prima", "unico"]),
      gap("Resto ___ 5 al 9 agosto.", ["dal", "il", "al", "nel"]),
    ],
  },
  {
    id: "ordinal-numbers",
    lesson: 5,
    category: "nouns",
    title: "First, second, third",
    italian: "I numeri ordinali",
    summary:
      "primo, secondo, terzo… decimo. They agree like adjectives: la prima volta, il terzo piano.",
    table: [
      ["1°", "primo", "6°", "sesto"],
      ["2°", "secondo", "7°", "settimo"],
      ["3°", "terzo", "8°", "ottavo"],
      ["4°", "quarto", "9°", "nono"],
      ["5°", "quinto", "10°", "decimo"],
    ],
    examples: [
      {
        it: "La camera è al terzo piano.",
        en: "The room is on the third floor.",
      },
      {
        it: "Gennaio è il primo mese dell'anno.",
        en: "January is the first month of the year.",
      },
      {
        it: "È la prima volta che vengo in Italia.",
        en: "It's the first time I've come to Italy.",
      },
    ],
    exercises: [
      gap("La camera è al ___ piano. (3rd)", [
        "terzo",
        "tre",
        "terza",
        "terzio",
      ]),
      gap("È la ___ volta che vengo a Roma. (1st)", [
        "prima",
        "primo",
        "una",
        "uno",
      ]),
      gap("Marzo è il ___ mese dell'anno.", [
        "terzo",
        "quarto",
        "secondo",
        "tre",
      ]),
      gap("Abito al ___ piano. (5th)", [
        "quinto",
        "cinque",
        "quinta",
        "cinquesimo",
      ]),
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
      {it: "Stasera vado al cinema.", en: "Tonight I'm going to the cinema."},
      {it: "Il libro è sul tavolo.", en: "The book is on the table."},
      {
        it: "Torno dall'ufficio alle sei.",
        en: "I come back from the office at six.",
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
      {
        it: "Il parco è lontano dal centro.",
        en: "The park is far from the centre.",
      },
      {
        it: "Il bar è di fronte al museo.",
        en: "The bar is opposite the museum.",
      },
      {
        it: "La chiesa è tra la banca e il teatro.",
        en: "The church is between the bank and the theatre.",
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
      {
        it: "A Roma ci sono molti palazzi antichi.",
        en: "In Rome there are lots of old buildings.",
      },
      {
        it: "Le piazze sono grandi e belle.",
        en: "The squares are big and beautiful.",
      },
      {it: "È un ristorante elegante.", en: "It's an elegant restaurant."},
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
  {
    id: "ci-there",
    lesson: 6,
    category: "pronouns",
    title: "Ci: there",
    italian: "Il ci locativo",
    summary:
      "ci replaces a place you've just named, so you don't repeat it. It goes before the verb: – Vai spesso al cinema? – Sì, ci vado ogni sabato.",
    examples: [
      {
        it: "– Vai a Bologna? – Sì, ci vado domani.",
        en: "– Are you going to Bologna? – Yes, I'm going there tomorrow.",
      },
      {
        it: "Roma è bellissima, ci torno ogni anno.",
        en: "Rome is beautiful, I go back there every year.",
      },
      {
        it: "– Andate spesso al mare? – No, non ci andiamo mai.",
        en: "– Do you often go to the seaside? – No, we never go there.",
      },
    ],
    exercises: [
      gap("– Vai spesso in palestra? – Sì, ___ vado il lunedì.", [
        "ci",
        "la",
        "ne",
        "lo",
      ]),
      gap("– Quando vieni al corso? – ___ vengo domani.", [
        "Ci",
        "Lo",
        "Ne",
        "Mi",
      ]),
      gap("– Andate al mare? – No, non ___ andiamo.", ["ci", "lo", "ne", "vi"]),
      gap("Firenze? ___ abito da tre anni.", ["Ci", "La", "Ne", "Li"]),
    ],
  },
  {
    id: "molto",
    lesson: 6,
    category: "nouns",
    title: "Molto: very or a lot of",
    italian: "Molto",
    summary:
      "Before an adjective or after a verb, molto means 'very' or 'a lot' and never changes. Before a noun it means 'a lot of' and agrees: molto traffico, molta gente, molti negozi, molte chiese.",
    table: [
      ["", "masc.", "fem."],
      ["singular", "molto traffico", "molta gente"],
      ["plural", "molti negozi", "molte chiese"],
      ["+ adjective", "molto bello", "molto bella"],
    ],
    examples: [
      {
        it: "A Bologna ci sono molti musei.",
        en: "In Bologna there are a lot of museums.",
      },
      {it: "La città è molto vivace.", en: "The city is very lively."},
      {it: "Mi piace molto questa città.", en: "I like this city a lot."},
    ],
    exercises: [
      gap("A Bologna ci sono ___ negozi.", [
        "molti",
        "molto",
        "molte",
        "molta",
      ]),
      gap("In centro c'è ___ gente.", ["molta", "molto", "molte", "molti"]),
      gap("Le piazze sono ___ belle.", ["molto", "molte", "molti", "molta"]),
      gap("Ci sono ___ cose da vedere.", ["molte", "molto", "molti", "molta"]),
      gap("Mi piace ___ questa città.", ["molto", "molta", "molti", "molte"]),
    ],
  },
  {
    id: "c-e-dov-e",
    lesson: 6,
    category: "phrases",
    title: "Is there a…? Where is the…?",
    italian: "C'è un…? / Dov'è il…?",
    summary:
      "c'è + un / una when you don't know if there is one: C'è una farmacia qui vicino? dov'è + il / la when you know it's there: Dov'è la stazione?",
    examples: [
      {
        it: "Scusi, c'è una banca qui vicino?",
        en: "Excuse me, is there a bank near here?",
      },
      {it: "Scusi, dov'è il Duomo?", en: "Excuse me, where is the cathedral?"},
      {
        it: "C'è un supermercato in questa via?",
        en: "Is there a supermarket in this street?",
      },
    ],
    exercises: [
      gap("Scusi, ___ una farmacia qui vicino?", [
        "c'è",
        "dov'è",
        "è",
        "ci sono",
      ]),
      gap("Scusi, ___ la stazione?", ["dov'è", "c'è", "ci sono", "dove sono"]),
      gap("C'è ___ supermercato in questa via?", ["un", "il", "lo", "la"]),
      gap("Dov'è ___ museo archeologico?", ["il", "un", "uno", "una"]),
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
      {it: "Hai mangiato bene?", en: "Did you eat well?"},
      {
        it: "Sabato abbiamo visitato un museo.",
        en: "On Saturday we visited a museum.",
      },
      {it: "Marco ha dormito fino a tardi.", en: "Marco slept late."},
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
    examples: [
      {it: "Anna è partita ieri.", en: "Anna left yesterday."},
      {it: "Marco è andato al mare.", en: "Marco went to the seaside."},
      {it: "Siamo arrivati alle otto.", en: "We arrived at eight."},
      {it: "Le ragazze sono tornate tardi.", en: "The girls came back late."},
    ],
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
      {it: "Hai visto il film?", en: "Did you see the film?"},
      {it: "Cosa avete fatto ieri?", en: "What did you do yesterday?"},
      {
        it: "Ho letto un libro e ho scritto una mail.",
        en: "I read a book and wrote an email.",
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
  {
    id: "absolute-superlative",
    lesson: 7,
    category: "nouns",
    title: "Very: -issimo",
    italian: "Il superlativo assoluto",
    summary:
      "molto bello = bellissimo: drop the last vowel and add -issimo / -issima / -issimi / -issime. Some adverbs do it too: tardissimo, benissimo.",
    table: [
      ["molto…", "-issimo"],
      ["molto bello", "bellissimo"],
      ["molto breve", "brevissimo"],
      ["molto stanche", "stanchissime"],
      ["molto tardi", "tardissimo"],
    ],
    examples: [
      {
        it: "Abbiamo fatto un giro bellissimo in barca.",
        en: "We took a really beautiful boat trip.",
      },
      {
        it: "Ho fatto colazione tardissimo.",
        en: "I had breakfast really late.",
      },
      {it: "La spiaggia è bellissima.", en: "The beach is really beautiful."},
    ],
    exercises: [
      gap("La spiaggia è ___. (molto bella)", [
        "bellissima",
        "bellissimo",
        "bellisima",
        "molto bellissima",
      ]),
      gap("Siamo ___. (molto stanchi)", [
        "stanchissimi",
        "stanchissime",
        "stancissimi",
        "stanchissimo",
      ]),
      gap("Il viaggio è stato ___. (molto lungo)", [
        "lunghissimo",
        "lunghissima",
        "lungissimo",
        "lunghisimo",
      ]),
      gap("Le vacanze sono state ___. (molto brevi)", [
        "brevissime",
        "brevissimi",
        "brevissima",
        "brevisime",
      ]),
      gap("Ieri sono tornato ___. (very late)", [
        "tardissimo",
        "tardissima",
        "molto tardissimo",
        "tardisimo",
      ]),
    ],
  },
  {
    id: "qualche",
    lesson: 7,
    category: "articles",
    title: "Some, a few: qualche",
    italian: "Qualche",
    summary:
      "qualche means 'some' or 'a few' but always takes a singular noun: qualche nuvola (some clouds), qualche giorno (a few days).",
    examples: [
      {
        it: "Al nord c'è qualche temporale.",
        en: "In the north there are a few storms.",
      },
      {
        it: "Sono stato al mare qualche giorno.",
        en: "I spent a few days at the seaside.",
      },
      {it: "Ho comprato qualche libro.", en: "I bought a few books."},
    ],
    exercises: [
      gap("Domani c'è qualche ___. (clouds)", [
        "nuvola",
        "nuvole",
        "nuvolo",
        "nuvoli",
      ]),
      gap("Siamo rimasti a Napoli qualche ___. (days)", [
        "giorno",
        "giorni",
        "giorna",
        "giorne",
      ]),
      gap("Ho letto ___ libro in vacanza.", [
        "qualche",
        "qualchi",
        "qualcuni",
        "qualche dei",
      ]),
      gap(
        "Al sud ___ qualche temporale.",
        ["c'è", "ci sono", "sono", "ne"],
        "qualche takes a singular noun, so the verb is singular too: c'è.",
      ),
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
      {
        it: "Compro dello zucchero e dell'olio.",
        en: "I'm buying some sugar and some oil.",
      },
      {
        it: "Ci sono dei pomodori in frigo.",
        en: "There are some tomatoes in the fridge.",
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
      {it: "Un chilo di mele, per favore.", en: "A kilo of apples, please."},
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
      {it: "Il vino? Lo compro io.", en: "The wine? I'll buy it."},
      {
        it: "I pomodori? Li metto nell'insalata.",
        en: "The tomatoes? I put them in the salad.",
      },
      {
        it: "Le mele? Le mangio ogni giorno.",
        en: "Apples? I eat them every day.",
      },
    ],
    exercises: [
      gap("Il pane? ___ compro io.", ["Lo", "La", "Li", "Le"]),
      gap("La frutta? ___ prendo al mercato.", ["La", "Lo", "Le", "Li"]),
      gap("I pomodori? ___ metto nell'insalata.", ["Li", "Le", "Lo", "La"]),
      gap("Le mele? ___ mangio ogni giorno.", ["Le", "Li", "La", "Lo"]),
    ],
  },
  {
    id: "ne",
    lesson: 8,
    category: "pronouns",
    title: "Ne: some of it, some of them",
    italian: "Il pronome ne",
    summary:
      "With an amount, use ne instead of lo / la / li / le: – Quanto prosciutto vuole? – Ne prendo due etti. The amount comes after the verb.",
    table: [
      ["all of it", "an amount of it"],
      ["Il pane? Lo prendo.", "Il pane? Ne prendo mezzo chilo."],
      ["Le mele? Le compro io.", "Le mele? Ne compro un chilo."],
      ["Le uova? Le voglio.", "Le uova? Ne voglio sei."],
    ],
    examples: [
      {
        it: "– Quante uova vuole? – Ne vorrei sei.",
        en: "– How many eggs would you like? – I'd like six.",
      },
      {
        it: "– Quanto ne vuole? – Due etti.",
        en: "– How much would you like? – Two hundred grams.",
      },
      {
        it: "Il pane? Ne prendo mezzo chilo.",
        en: "The bread? I'll take half a kilo (of it).",
      },
    ],
    exercises: [
      gap("– Quanto prosciutto vuole? – ___ prendo due etti.", [
        "Ne",
        "Lo",
        "La",
        "Li",
      ]),
      gap("– Quante mele compri? – ___ compro un chilo.", [
        "Ne",
        "Le",
        "Li",
        "La",
      ]),
      gap("– Le mele? – ___ prendo tutte io.", ["Le", "Ne", "Li", "La"]),
      gap("Signora, quanto ___ vuole?", ["ne", "lo", "ci", "la"]),
      gap("– Hai delle uova? – Sì, ___ ho sei.", ["ne", "le", "li", "ci"]),
    ],
  },
  {
    id: "impersonal-si",
    lesson: 8,
    category: "pronouns",
    title: "Si: people in general",
    italian: "Il si impersonale",
    summary:
      "si + lui / lei form means 'people', 'you' or 'one': in Italia si mangia tardi. With a plural noun the verb is plural: si mangiano gli spaghetti.",
    examples: [
      {it: "In Italia si cena tardi.", en: "In Italy people have dinner late."},
      {
        it: "Gli spaghetti si mangiano con la forchetta.",
        en: "You eat spaghetti with a fork.",
      },
      {
        it: "Dopo pranzo si prende un caffè.",
        en: "After lunch people have a coffee.",
      },
    ],
    exercises: [
      gap("In Italia ___ mangia molta pasta.", ["si", "ci", "mi", "ne"]),
      gap("Dopo pranzo si ___ un caffè. (prendere)", [
        "prende",
        "prendono",
        "prendiamo",
        "prendere",
      ]),
      gap("Gli spaghetti si ___ con la forchetta. (mangiare)", [
        "mangiano",
        "mangia",
        "mangiamo",
        "mangiate",
      ]),
      gap("Come ___ dice 'thank you' in italiano?", ["si", "ci", "ti", "lo"]),
    ],
  },
];
