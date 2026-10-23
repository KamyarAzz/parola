import type {LessonItem, StudySet} from "./study";

export type GrammarCategoryId =
  "articles" | "nouns" | "verbs" | "prepositions" | "pronouns" | "phrases";

export interface GrammarCategory {
  id: GrammarCategoryId;
  title: string;
  italian: string;
}

export interface GrammarExample {
  it: string;
  en: string;
}

/** A fill-the-gap exercise; the sentence marks the gap with "___". */
export interface GrammarExercise {
  sentence: string;
  options: string[];
  answer: string;
  /** Shown after a wrong answer; falls back to the point's summary */
  explanation?: string;
}

/** One short grammar topic, e.g. "Indefinite article". */
export interface GrammarPoint extends LessonItem {
  id: string;
  category: GrammarCategoryId;
  title: string;
  italian: string;
  /** The rule in one or two short sentences */
  summary: string;
  /** Optional table; the first row is the header */
  table?: string[][];
  examples: GrammarExample[];
  exercises: GrammarExercise[];
}

export type GrammarGrouping = "lesson" | "category";

export type GrammarGroup = StudySet<GrammarPoint>;
