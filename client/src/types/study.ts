/** Types shared by the words and verbs sections */

export interface Lesson {
  number: number;
  title: string;
  /** What the lesson covers, in English */
  summary: string;
}

/** Anything that belongs to a Nuovo Espresso 1 lesson */
export interface LessonItem {
  lesson: number;
}

/** A set of items to study and practise: one lesson, one category or all. */
export interface StudySet<T> {
  /** Also the practice id, e.g. "words-lesson-3" */
  id: string;
  /** Small label above the title, e.g. "Lezione 3" */
  label: string;
  title: string;
  description: string;
  items: T[];
}

/** A way to split items into sets, e.g. "By lesson" */
export interface GroupingOption<T extends string> {
  value: T;
  label: string;
}

/** Anything the practice screen can run: a topic, word set or verb set. */
export interface PracticeSet {
  id: string;
  title: string;
  italian?: string;
  /** Page to go back to when leaving the test */
  home: string;
  /** Text for the link back to `home`, e.g. "Back to words" */
  homeLabel: string;
}
