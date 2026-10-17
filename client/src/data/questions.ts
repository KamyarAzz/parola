import type {Question} from "../types";

// Sample questions until the server is ready. Topics without their own set use `fallback`.
const byTopic: Record<string, Question[]> = {
  food: [
    {
      id: "food-1",
      kind: "translate",
      prompt: "Vorrei un caffè e un cornetto, per favore.",
      words: [
        "I",
        "a coffee",
        "please",
        "would like",
        "the",
        "and",
        "want",
        "a croissant",
        "tea",
      ],
      answer: ["I", "would like", "a coffee", "and", "a croissant", "please"],
    },
    {
      id: "food-2",
      kind: "choice",
      sentence: "Vorrei ___ acqua frizzante.",
      options: ["un", "un'", "uno", "una"],
      answer: "un'",
      explanation:
        "Acqua is feminine and starts with a vowel, so una shortens to un'.",
    },
    {
      id: "food-3",
      kind: "translate",
      prompt: "Il conto, per favore.",
      words: ["count", "The", "bill", "please", "menu", "a"],
      answer: ["The", "bill", "please"],
    },
    {
      id: "food-4",
      kind: "choice",
      sentence: "Per me ___ pizza margherita.",
      options: ["una", "un", "uno", "lo"],
      answer: "una",
      explanation:
        "Pizza is feminine singular and starts with a consonant: una pizza.",
    },
    {
      id: "food-5",
      kind: "translate",
      prompt: "Avete un tavolo per due?",
      words: ["Do", "have", "you", "a table", "two", "for", "three", "the"],
      answer: ["Do", "you", "have", "a table", "for", "two"],
    },
  ],
  articles: [
    {
      id: "art-1",
      kind: "choice",
      sentence: "___ ragazze sono italiane.",
      options: ["Le", "Gli", "La", "I"],
      answer: "Le",
      explanation:
        "Feminine plural nouns always take le. Gli is for masculine plurals before a vowel, s+consonant or z.",
    },
    {
      id: "art-2",
      kind: "choice",
      sentence: "___ studenti sono in classe.",
      options: ["I", "Gli", "Le", "Lo"],
      answer: "Gli",
      explanation:
        "Studenti is masculine plural and starts with s+consonant, so it takes gli.",
    },
    {
      id: "art-3",
      kind: "choice",
      sentence: "Ho comprato ___ zaino nuovo.",
      options: ["un", "uno", "una", "un'"],
      answer: "uno",
      explanation: "Masculine nouns starting with z or s+consonant take uno.",
    },
    {
      id: "art-4",
      kind: "translate",
      prompt: "Il libro è sul tavolo.",
      words: ["The", "book", "is", "on", "the table", "under", "a"],
      answer: ["The", "book", "is", "on", "the table"],
    },
  ],
};

const fallback: Question[] = [
  {
    id: "gen-1",
    kind: "translate",
    prompt: "Buongiorno, come stai?",
    words: ["Good morning", "how", "are", "you", "where", "is", "night"],
    answer: ["Good morning", "how", "are", "you"],
  },
  {
    id: "gen-2",
    kind: "choice",
    sentence: "Io ___ italiano.",
    options: ["parlo", "parli", "parla", "parlano"],
    answer: "parlo",
    explanation: "With io, regular -are verbs end in -o: io parlo.",
  },
  {
    id: "gen-3",
    kind: "translate",
    prompt: "Dov'è la stazione?",
    words: ["Where", "is", "the station", "when", "a train", "are"],
    answer: ["Where", "is", "the station"],
  },
  {
    id: "gen-4",
    kind: "choice",
    sentence: "Noi ___ a Roma.",
    options: ["abitiamo", "abito", "abitate", "abitano"],
    answer: "abitiamo",
    explanation: "With noi, -are verbs end in -iamo: noi abitiamo.",
  },
];

export function getQuestions(topicId: string): Question[] {
  return byTopic[topicId] ?? fallback;
}
