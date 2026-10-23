/** Lower case, plain apostrophes, no punctuation, single spaces. */
export function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.,!?;:¡¿"«»()…–—]/g, " ")
    .replace(/'\s+/g, "'")
    .replace(/(\d)\s+(?=\d)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripAccents(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const tokens = (text: string) => normalize(text).split(" ").filter(Boolean);
const plain = (text: string) => stripAccents(normalize(text));

function levenshtein(a: string, b: string) {
  let prev = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + cost);
    }
    prev = row;
  }
  return prev[b.length];
}

/** Length of the longest run of words the two share, in order. */
export function lcsTable(a: string[], b: string[]) {
  const table = Array.from({length: a.length + 1}, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      table[i][j] =
        a[i] === b[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }
  return table;
}

function wordDistance(a: string[], b: string[]) {
  return a.length + b.length - 2 * lcsTable(a, b)[0][0];
}

/** Words that only differ by accents, as the answer spells them. */
function accentNote(given: string, expected: string) {
  const words = tokens(given);
  const fixed = tokens(expected).filter((w, i) => w !== words[i]);
  return `Watch the accents: ${fixed.join(", ")}`;
}

/**
 * One misspelt word in an otherwise right sentence, e.g. "buongiormo".
 * A wrong last letter is never a typo: endings carry gender, number and person.
 */
function typoNote(given: string, expected: string) {
  const a = plain(given).split(" ");
  const b = plain(expected).split(" ");
  if (a.length !== b.length) return null;
  const wrong = b.flatMap((w, i) => (w === a[i] ? [] : [i]));
  if (wrong.length !== 1) return null;
  const i = wrong[0];
  if (b[i].length < 5 || levenshtein(a[i], b[i]) > 1) return null;
  if (a[i].at(-1) !== b[i].at(-1)) return null;
  const asWritten = (text: string) =>
    text.split(/\s+/)[i]?.replace(/[.,!?;:]+$/, "") ?? b[i];
  return `Small typo: it's “${asWritten(expected)}”, not “${asWritten(given)}”`;
}

export interface SentenceCheck {
  correct: boolean;
  /** The accepted answer closest to what was written */
  expected: string;
  note?: string;
}

/** Compares a written sentence with every accepted answer. */
export function checkSentence(given: string, answers: string[]): SentenceCheck {
  for (const answer of answers) {
    if (normalize(given) === normalize(answer)) {
      return {correct: true, expected: answer};
    }
  }
  for (const answer of answers) {
    if (plain(given) === plain(answer)) {
      return {
        correct: true,
        expected: answer,
        note: accentNote(given, answer),
      };
    }
  }
  for (const answer of answers) {
    const note = typoNote(given, answer);
    if (note) return {correct: true, expected: answer, note};
  }
  const words = plain(given).split(" ");
  const closest = answers.reduce((best, answer) =>
    wordDistance(words, plain(answer).split(" ")) <
    wordDistance(words, plain(best).split(" "))
      ? answer
      : best,
  );
  return {correct: false, expected: closest};
}
