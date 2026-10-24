export type Section = "words" | "verbs" | "grammar" | "sentences";

export interface SectionInfo {
  id: Section;
  title: string;
  /** Section page, e.g. "/words" */
  path: string;
  /** What its items are called, e.g. "situations" */
  unit: string;
}

/** What a question practises: a word, verb, grammar point or situation. */
export interface PractisedItem {
  section: Section;
  lesson: number;
  /** Unique across sections, e.g. "verb:parlare" */
  id: string;
  /** Shown in focus areas, e.g. "parlare" */
  label: string;
}

/** How one section of one lesson is going. */
export interface SectionProgress {
  section: Section;
  lesson: number;
  answered: number;
  /** 0–100, or null before any answers */
  accuracy: number | null;
  /** Different items practised, out of `total` in the lesson */
  practised: number;
  total: number;
}

export interface LessonProgress {
  lesson: number;
  title: string;
  sections: SectionProgress[];
}

/** A suggested next step on the home page. */
export interface Suggestion {
  id: string;
  kind: "review" | "mistakes" | "new" | "fresh";
  title: string;
  detail: string;
  /** Link target */
  to: string;
}

/** The last thing practised, to pick up again. */
export interface LastPractice {
  practiceId: string;
  title: string;
  detail: string;
  /** 0–100 */
  score: number;
}
