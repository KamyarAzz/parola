import type {GeneratedLine, Gender, SentenceTemplate} from "../../types";
import {sentence} from "./subjects";

/** A generated line: the English is capitalised, answers are patterns. */
export const line = (
  en: string,
  it: string | string[],
  hint?: string,
): GeneratedLine => ({
  en: sentence(en),
  it: Array.isArray(it) ? it : [it],
  hint,
});

export const template = (
  id: string,
  lesson: number,
  make: SentenceTemplate["make"],
): SentenceTemplate => ({id, lesson, make});

/** "a book", "an office". */
export const enA = (word: string) =>
  `${/^[aeiou]/i.test(word) ? "an" : "a"} ${word}`;

/** he / she for a person, as English and as an Italian pronoun. */
export const heShe = (g: Gender) =>
  g === "f" ? {en: "she", it: "lei"} : {en: "he", it: "lui"};

/** Either of two orders, e.g. a time phrase at the start or the end. */
export const eitherOrder = (first: string, second: string) =>
  `[${first} ${second}|${second} ${first}]`;
