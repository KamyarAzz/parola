export type WordTopicId =
  | "greetings"
  | "countries"
  | "numbers"
  | "work"
  | "food"
  | "free-time"
  | "time"
  | "hotel"
  | "city"
  | "holidays"
  | "shopping";

export interface Word {
  it: string;
  en: string;
  /** Nuovo Espresso 1 lesson that introduces the word */
  lesson: number;
  topic: WordTopicId;
}

export interface Lesson {
  number: number;
  title: string;
  /** What the lesson covers, in English */
  summary: string;
}

export interface WordTopic {
  id: WordTopicId;
  title: string;
  italian: string;
}

export type WordGrouping = "lesson" | "topic";

/** A set of words to study and practise: one lesson, one topic or all. */
export interface WordGroup {
  /** Also the practice id, e.g. "words-lesson-3" */
  id: string;
  /** Small label above the title, e.g. "Lezione 3" */
  label: string;
  title: string;
  description: string;
  words: Word[];
}

/** Anything the practice screen can run: a topic or a word group. */
export interface PracticeSet {
  id: string;
  title: string;
  italian?: string;
  /** Page to go back to when leaving the test */
  home: string;
}
