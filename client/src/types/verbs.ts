import type {LessonItem, StudySet} from "./study";

/** Regular endings (-are, -ere, -ire, -ire with -isc-) or its own forms */
export type VerbType = "are" | "ere" | "ire" | "isc" | "irregular";

export interface Verb extends LessonItem {
  /** Infinitive, e.g. "parlare" */
  it: string;
  en: string;
  type: VerbType;
  /** Present tense io → loro; only needed for irregular verbs */
  forms?: string[];
}

export interface VerbTypeInfo {
  id: VerbType;
  title: string;
  italian: string;
  /** Short badge text, e.g. "-are" */
  tag: string;
}

export type VerbGrouping = "lesson" | "type";

export type VerbGroup = StudySet<Verb>;
