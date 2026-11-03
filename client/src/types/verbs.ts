import type {LessonItem, StudySet} from "./study";

/** Regular endings (-are, -ere, -ire, -ire with -isc-), reflexive, or its own forms */
export type VerbType =
  "are" | "ere" | "ire" | "isc" | "reflexive" | "irregular";

export interface Verb extends LessonItem {
  /** Infinitive, e.g. "parlare" */
  it: string;
  en: string;
  type: VerbType;
  /**
   * Present tense io → loro; only needed for irregular verbs and reflexive
   * ones without regular endings (farsi, trasferirsi)
   */
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
