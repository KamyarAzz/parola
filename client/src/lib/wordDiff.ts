import {lcsTable, normalize, stripAccents} from "./sentenceCheck";

export interface DiffWord {
  text: string;
  /** False when the word is wrong, missing or extra */
  ok: boolean;
}

const key = (word: string) => stripAccents(normalize(word));

/**
 * Marks which words of the learner's sentence and of the answer match,
 * keeping the original spelling and punctuation for display. Accents are
 * ignored, so "e" for "è" is not marked wrong.
 */
export function wordDiff(given: string, expected: string) {
  const a = given.split(/\s+/).filter(Boolean);
  const b = expected.split(/\s+/).filter(Boolean);
  const table = lcsTable(a.map(key), b.map(key));
  const givenOk = new Array<boolean>(a.length).fill(false);
  const expectedOk = new Array<boolean>(b.length).fill(false);

  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (key(a[i]) === key(b[j])) {
      givenOk[i++] = true;
      expectedOk[j++] = true;
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }

  return {
    given: a.map((text, n): DiffWord => ({text, ok: givenOk[n]})),
    expected: b.map((text, n): DiffWord => ({text, ok: expectedOk[n]})),
  };
}
