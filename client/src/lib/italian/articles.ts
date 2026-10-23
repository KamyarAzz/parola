import type {Gender, Noun} from "../../types";

const VOWEL = /^[aeiouàèéìòùh]/i;
// lo / gli: s + consonant, z, gn, ps, x, y
const LO = /^(s[^aeiouàèéìòù]|z|gn|ps|x|y)/i;

type Article = "il" | "lo" | "l'" | "la" | "i" | "gli" | "le";

/** Which "the" a word takes. */
export function articleFor(word: string, g: Gender, plural = false): Article {
  if (g === "f") {
    if (plural) return "le";
    return VOWEL.test(word) ? "l'" : "la";
  }
  if (LO.test(word) || VOWEL.test(word)) {
    if (plural) return "gli";
    return VOWEL.test(word) ? "l'" : "lo";
  }
  return plural ? "i" : "il";
}

/** Joins an article (or "dell'") to its word, with no space after an apostrophe. */
const join = (article: string, word: string) =>
  article.endsWith("'") ? article + word : `${article} ${word}`;

const nounWord = (noun: Noun, plural: boolean) =>
  plural ? (noun.pl ?? noun.it) : noun.it;

/** "il libro", "l'amica", "gli studenti". */
export function the(noun: Noun, plural = false) {
  const word = nounWord(noun, plural);
  return join(articleFor(word, noun.g, plural), word);
}

/** "un libro", "uno zaino", "una casa", "un'amica". */
export function a(noun: Noun) {
  if (noun.g === "f") return join(VOWEL.test(noun.it) ? "un'" : "una", noun.it);
  return join(LO.test(noun.it) && !VOWEL.test(noun.it) ? "uno" : "un", noun.it);
}

const prepStems = {a: "a", da: "da", di: "de", in: "ne", su: "su"};

const articleEndings: Record<Article, string> = {
  il: "l",
  lo: "llo",
  "l'": "ll'",
  la: "lla",
  i: "i",
  gli: "gli",
  le: "lle",
};

export type Preposition = keyof typeof prepStems;

/** a + il → al, di + l' → dell', in + la → nella, joined to the word. */
export function withPreposition(
  prep: Preposition,
  word: string,
  g: Gender,
  plural = false,
) {
  const article = articleFor(word, g, plural);
  return join(prepStems[prep] + articleEndings[article], word);
}

/** "al parco", "dell'olio", "nelle piazze". */
export function prepThe(prep: Preposition, noun: Noun, plural = false) {
  return withPreposition(prep, nounWord(noun, plural), noun.g, plural);
}
