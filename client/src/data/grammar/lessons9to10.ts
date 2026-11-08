import type {GrammarPoint} from "../../types";
import {gap} from "./exercise";

export const grammarLessons9to10: GrammarPoint[] = [
  // Lezione 9
  {
    id: "reflexive-verbs",
    lesson: 9,
    category: "verbs",
    title: "Reflexive verbs",
    italian: "I verbi riflessivi",
    summary:
      "Verbs in -arsi, -ersi, -irsi take mi, ti, si, ci, vi, si before the verb. After potere, dovere, volere the pronoun can join the infinitive: voglio riposarmi = mi voglio riposare. Not the same as si for people in general (lesson 8): lei si alza is about her.",
    table: [
      ["", "alzarsi", "mettersi", "vestirsi"],
      ["io", "mi alzo", "mi metto", "mi vesto"],
      ["tu", "ti alzi", "ti metti", "ti vesti"],
      ["lui / lei", "si alza", "si mette", "si veste"],
      ["noi", "ci alziamo", "ci mettiamo", "ci vestiamo"],
      ["voi", "vi alzate", "vi mettete", "vi vestite"],
      ["loro", "si alzano", "si mettono", "si vestono"],
    ],
    examples: [
      {
        it: "La mattina mi alzo alle sette.",
        en: "In the morning I get up at seven.",
      },
      {
        it: "Il fine settimana voglio riposarmi.",
        en: "At the weekend I want to rest.",
      },
      {
        it: "Anna si sveglia alle sei e si veste.",
        en: "Anna wakes up at six and gets dressed.",
      },
      {
        it: "Ci divertiamo molto alle feste.",
        en: "We have a lot of fun at parties.",
      },
    ],
    exercises: [
      gap("La mattina ___ alzo alle sette.", ["mi", "ti", "si", "ci"]),
      gap("A che ora ___ svegli, Marco?", ["ti", "mi", "si", "vi"]),
      gap("Noi ___ divertiamo molto.", ["ci", "vi", "si", "mi"]),
      gap("I bambini si ___ da soli. (vestirsi)", [
        "vestono",
        "vestiamo",
        "veste",
        "vestite",
      ]),
      gap("Sabato voglio ___. (riposarsi, io)", [
        "riposarmi",
        "riposarsi",
        "mi riposare",
        "riposarti",
      ]),
      gap("Anna ___ fa la doccia la sera.", ["si", "ci", "mi", "ti"]),
    ],
  },
  {
    id: "adverbs",
    lesson: 9,
    category: "nouns",
    title: "Adverbs in -mente",
    italian: "Gli avverbi",
    summary:
      "Feminine adjective + -mente: tranquilla → tranquillamente. After -le / -re drop the e: facile → facilmente. bene and male are their own words: buono describes a thing, bene describes how you do something.",
    table: [
      ["adjective", "adverb"],
      ["tranquillo", "tranquillamente"],
      ["naturale", "naturalmente"],
      ["regolare", "regolarmente"],
      ["elegante", "elegantemente"],
      ["buono", "bene"],
      ["cattivo", "male"],
    ],
    examples: [
      {
        it: "Normalmente mi alzo presto.",
        en: "Normally I get up early.",
      },
      {it: "Luca cucina bene.", en: "Luca cooks well."},
      {
        it: "Parlo tranquillamente con tutti.",
        en: "I talk calmly with everyone.",
      },
    ],
    exercises: [
      gap("Vado ___ in palestra. (regolare)", [
        "regolarmente",
        "regolaremente",
        "regolare",
        "regolamente",
      ]),
      gap("Il sabato faccio colazione ___. (tranquillo)", [
        "tranquillamente",
        "tranquillomente",
        "tranquillo",
        "tranquillemente",
      ]),
      gap("Marco parla ___ l'italiano.", ["bene", "buono", "buona", "bello"]),
      gap("Questa pizza è molto ___.", ["buona", "bene", "buono", "bena"]),
      gap("___ mi sveglio alle sei. (normale)", [
        "Normalmente",
        "Normalemente",
        "Normale",
        "Normalamente",
      ]),
    ],
  },
  {
    id: "time-expressions",
    lesson: 9,
    category: "phrases",
    title: "How often and when",
    italian: "Espressioni di tempo",
    summary:
      "una volta / due volte al giorno, alla settimana, al mese. tutti i giorni = ogni giorno (ogni takes a singular noun). tutto il giorno = all day. Order the day with prima, poi, dopo.",
    examples: [
      {
        it: "Vado in palestra due volte alla settimana.",
        en: "I go to the gym twice a week.",
      },
      {
        it: "Prima mi faccio la doccia, poi faccio colazione.",
        en: "First I have a shower, then I have breakfast.",
      },
      {
        it: "Bevo un caffè tre volte al giorno.",
        en: "I drink coffee three times a day.",
      },
    ],
    exercises: [
      gap("Bevo un caffè tre volte ___ giorno.", ["al", "il", "nel", "a"]),
      gap("Gioco a tennis una volta ___ settimana.", [
        "alla",
        "la",
        "nella",
        "al",
      ]),
      gap("___ mattine vado a correre.", [
        "Tutte le",
        "Ogni",
        "Tutti i",
        "Tutta la",
      ]),
      gap("Vado in ufficio ___ giorno.", [
        "ogni",
        "tutti",
        "tutto i",
        "ogni i",
      ]),
      gap("Prima mi lavo, ___ mi vesto.", ["poi", "prima", "mai", "sempre"]),
    ],
  },
  {
    id: "wishes",
    lesson: 9,
    category: "phrases",
    title: "Best wishes",
    italian: "Fare gli auguri",
    summary:
      "buon + masculine noun, buona + feminine, buone + feminine plural: buon compleanno, buona Pasqua, buone feste. Good luck is in bocca al lupo, and the answer is crepi!",
    table: [
      ["occasion", "you say"],
      ["birthday", "Buon compleanno! / Tanti auguri!"],
      ["Christmas", "Buon Natale!"],
      ["Easter", "Buona Pasqua!"],
      ["New Year", "Buon anno!"],
      ["holidays", "Buone feste! / Buone vacanze!"],
      ["exam, interview", "In bocca al lupo! – Crepi!"],
      ["wedding, new job", "Congratulazioni!"],
    ],
    examples: [
      {it: "Tanti auguri, Giulia!", en: "Happy birthday, Giulia!"},
      {
        it: "Buon Natale e buon anno!",
        en: "Merry Christmas and happy New Year!",
      },
      {
        it: "– Domani ho un esame. – In bocca al lupo! – Crepi!",
        en: "– I have an exam tomorrow. – Good luck! – Thanks!",
      },
    ],
    exercises: [
      gap("___ compleanno!", ["Buon", "Buona", "Buone", "Buono"]),
      gap("___ Pasqua a tutti!", ["Buona", "Buon", "Buone", "Buoni"]),
      gap("___ vacanze!", ["Buone", "Buona", "Buon", "Buoni"]),
      gap("Domani hai l'esame? In bocca al ___!", [
        "lupo",
        "cane",
        "gatto",
        "mare",
      ]),
    ],
  },

  // Lezione 10
  {
    id: "possessives",
    lesson: 10,
    category: "nouns",
    title: "My, your, his…",
    italian: "Gli aggettivi possessivi",
    summary:
      "The possessive agrees with the thing owned, not the owner: suo / sua = his or her. It usually comes with the article: la mia casa, i tuoi amici. loro never changes.",
    table: [
      ["", "masc.", "fem.", "masc. pl.", "fem. pl."],
      ["my", "il mio", "la mia", "i miei", "le mie"],
      ["your", "il tuo", "la tua", "i tuoi", "le tue"],
      ["his / her", "il suo", "la sua", "i suoi", "le sue"],
      ["our", "il nostro", "la nostra", "i nostri", "le nostre"],
      ["your (pl.)", "il vostro", "la vostra", "i vostri", "le vostre"],
      ["their", "il loro", "la loro", "i loro", "le loro"],
    ],
    examples: [
      {it: "Paolo e la sua ragazza.", en: "Paolo and his girlfriend."},
      {it: "Anna e il suo ragazzo.", en: "Anna and her boyfriend."},
      {it: "La nostra casa è in centro.", en: "Our house is in the centre."},
    ],
    exercises: [
      gap("Ecco ___ casa. (my)", ["la mia", "il mio", "mia", "le mie"]),
      gap("Paolo vive con ___ ragazza. (his)", [
        "la sua",
        "il suo",
        "la loro",
        "sua",
      ]),
      gap("Anna è uscita con ___ amici. (her)", [
        "i suoi",
        "le sue",
        "i loro",
        "i sui",
      ]),
      gap("Ragazzi, dove sono ___ libri? (your)", [
        "i vostri",
        "i tuoi",
        "le vostre",
        "il vostro",
      ]),
      gap("Marco e Sara vendono ___ macchina. (their)", [
        "la loro",
        "la sua",
        "le loro",
        "loro",
      ]),
    ],
  },
  {
    id: "possessives-family",
    lesson: 10,
    category: "articles",
    title: "My mother, my brothers",
    italian: "Possessivi e parentela",
    summary:
      "No article with one family member: mia madre, tuo fratello. Use the article in the plural (i miei fratelli), with loro (la loro figlia) and usually with mamma and papà. i miei = my parents.",
    table: [
      ["no article", "with article"],
      ["mio padre", "i miei genitori"],
      ["tua sorella", "le tue sorelle"],
      ["sua zia", "la loro zia"],
      ["nostro figlio", "la mia mamma"],
    ],
    examples: [
      {
        it: "Mia sorella vive a Roma con i suoi figli.",
        en: "My sister lives in Rome with her children.",
      },
      {
        it: "I miei genitori abitano a Napoli.",
        en: "My parents live in Naples.",
      },
      {it: "Come si chiama tuo padre?", en: "What's your father's name?"},
      {it: "La loro figlia è medico.", en: "Their daughter is a doctor."},
    ],
    exercises: [
      gap("___ madre è insegnante. (my)", ["Mia", "La mia", "Il mio", "Mio"]),
      gap("___ fratelli abitano a Milano. (my)", [
        "I miei",
        "Miei",
        "Le mie",
        "Mie",
      ]),
      gap("Come si chiama ___ padre? (your)", [
        "tuo",
        "il tuo",
        "tua",
        "la tua",
      ]),
      gap("Ecco i ragazzi con ___ nonna. (their)", [
        "la loro",
        "loro",
        "la sua",
        "sua",
      ]),
      gap("Domenica pranzo da ___. (my parents)", [
        "i miei",
        "miei",
        "le mie",
        "mio",
      ]),
    ],
  },
  {
    id: "reflexive-past",
    lesson: 10,
    category: "verbs",
    title: "Reflexive verbs in the past",
    italian: "Passato prossimo dei riflessivi",
    summary:
      "Reflexive verbs always use essere, so the participle agrees: mi sono alzato / alzata, si sono sposati.",
    table: [
      ["", "sposarsi"],
      ["io", "mi sono sposato / sposata"],
      ["tu", "ti sei sposato / sposata"],
      ["lui / lei", "si è sposato / sposata"],
      ["noi", "ci siamo sposati / sposate"],
      ["voi", "vi siete sposati / sposate"],
      ["loro", "si sono sposati / sposate"],
    ],
    examples: [
      {
        it: "Mio fratello si è sposato a giugno.",
        en: "My brother got married in June.",
      },
      {
        it: "Stamattina mi sono alzata alle sei.",
        en: "This morning I (f) got up at six.",
      },
      {
        it: "Vi siete divertiti alla festa?",
        en: "Did you have fun at the party?",
      },
    ],
    exercises: [
      gap("Stamattina mi ___ alzato tardi.", ["sono", "ho", "è", "sei"]),
      gap("Giulia si è ___ alle sei. (svegliarsi)", [
        "svegliata",
        "svegliato",
        "svegliati",
        "svegliate",
      ]),
      gap("Marco e Anna si sono ___ l'anno scorso. (sposarsi)", [
        "sposati",
        "sposato",
        "sposata",
        "sposate",
      ]),
      gap("Ragazzi, vi ___ divertiti alla festa?", [
        "siete",
        "avete",
        "sono",
        "siamo",
      ]),
      gap("Ieri io e Sara ___ siamo riposate.", ["ci", "si", "vi", "mi"]),
    ],
  },
  {
    id: "relative-superlative",
    lesson: 10,
    category: "nouns",
    title: "The youngest, the oldest",
    italian: "Il superlativo relativo",
    summary:
      "il / la / i / le + noun + più + adjective (+ di): la sorella più giovane, la città più grande d'Italia. Not to be confused with -issimo, which means 'very': grandissima.",
    examples: [
      {
        it: "Luca è il fratello più giovane.",
        en: "Luca is the youngest brother.",
      },
      {
        it: "Roma è la città più grande d'Italia.",
        en: "Rome is the biggest city in Italy.",
      },
      {
        it: "Mia nonna è la più anziana della famiglia.",
        en: "My grandmother is the oldest in the family.",
      },
    ],
    exercises: [
      gap("Sara è la cugina ___ simpatica di tutte.", [
        "più",
        "molto",
        "tanto",
        "di",
      ]),
      gap("Mio nonno è il ___ anziano della famiglia.", [
        "più",
        "molto",
        "tanto",
        "di",
      ]),
      gap("È il ristorante più caro ___ città.", [
        "della",
        "di",
        "in",
        "nella",
      ]),
      gap("Roma è una città ___. (very big)", [
        "grandissima",
        "più grande",
        "la più grande",
        "grandissimo",
      ]),
    ],
  },
  {
    id: "visiting-people",
    lesson: 10,
    category: "phrases",
    title: "Visiting people",
    italian: "Andare / venire a trovare",
    summary:
      "To visit a person is andare a trovare (you go) or venire a trovare (they come to you). visitare is for places: visitare un museo.",
    examples: [
      {
        it: "Domenica vado a trovare mia nonna.",
        en: "On Sunday I'm going to see my grandmother.",
      },
      {
        it: "Quando vieni a trovarci?",
        en: "When are you coming to see us?",
      },
      {
        it: "A Firenze abbiamo visitato gli Uffizi.",
        en: "In Florence we visited the Uffizi (a place: visitare).",
      },
    ],
    exercises: [
      gap("Domenica vado ___ trovare i miei.", ["a", "di", "per", "da"]),
      gap("Quando ___ a trovarmi a Roma? (you come)", [
        "vieni",
        "vai",
        "visiti",
        "trovi",
      ]),
      gap("Ieri sono ___ a trovare mia zia. (I went)", [
        "andato",
        "venuto",
        "visitato",
        "trovato",
      ]),
      gap("A Firenze abbiamo ___ gli Uffizi.", [
        "visitato",
        "trovato",
        "andato a trovare",
        "venuto",
      ]),
    ],
  },
];
