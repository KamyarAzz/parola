import type {LessonItem, StudySet} from "./study";

/** dialogue: you play one side; text: a short piece of writing; drill: separate sentences on one structure */
export type ScenarioFormat = "dialogue" | "text" | "drill";

export interface ScenarioFormatInfo {
  id: ScenarioFormat;
  title: string;
  italian: string;
}

/** Someone else's line, shown as context before yours */
export interface CueStep {
  speaker: string;
  it: string;
  en: string;
}

/**
 * A line you have to write. `it` holds accepted answers as patterns:
 * (…) is optional and [a|b] means either, e.g. "(Io) [sono|mi chiamo] Anna."
 * The first pattern, without its optional parts, is the model answer.
 */
export interface LineStep {
  en: string;
  it: string[];
  /** A nudge shown under the prompt, e.g. "Use the formal Lei" */
  hint?: string;
}

export type ScenarioStep = CueStep | LineStep;

export interface Scenario extends LessonItem {
  id: string;
  format: ScenarioFormat;
  title: string;
  italian: string;
  /** The situation, in English */
  intro: string;
  steps: ScenarioStep[];
}

export type SentenceGrouping = "lesson" | "format";

export type ScenarioGroup = StudySet<Scenario>;
