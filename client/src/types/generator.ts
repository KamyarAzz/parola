import type {LessonItem, StudySet} from "./study";

export type Gender = "m" | "f";

/** An Italian noun with what's needed to pick articles and plurals. */
export interface Noun {
  it: string;
  /** Plural, when it's used in the plural somewhere */
  pl?: string;
  g: Gender;
  en: string;
  enPl?: string;
}

/** Adjective forms: masculine, feminine, masculine plural, feminine plural. */
export interface Adjective {
  en: string;
  forms: [m: string, f: string, mp: string, fp: string];
}

/** Who does something: a pronoun or a named person. */
export interface Subject {
  en: string;
  /** Italian name, or null for a pronoun the learner may drop */
  name: string | null;
  /** 0 = io … 5 = loro */
  person: 0 | 1 | 2 | 3 | 4 | 5;
  /** null when English doesn't say (I, you, we, they) */
  gender: Gender | null;
}

/** An English verb phrase: base form and the he/she form. */
export interface EnglishVerb {
  base: string;
  third: string;
}

/** One sentence to write: English prompt and accepted Italian patterns. */
export interface GeneratedLine {
  en: string;
  it: string[];
  hint?: string;
}

/** Makes a new sentence each time it is called. */
export interface SentenceTemplate extends LessonItem {
  id: string;
  make: () => GeneratedLine;
}

export type FreshSentenceGroup = StudySet<SentenceTemplate>;
