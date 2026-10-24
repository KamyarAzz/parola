import type {AnswerRecord} from "./practice";

export interface TestResult {
  id: string;
  /** Practice id, e.g. "verbs-lesson-3" (named before sections existed) */
  topicId: string;
  /** ISO date string */
  finishedAt: string;
  durationSec: number;
  answers: AnswerRecord[];
}

export interface FocusArea {
  id: string;
  title: string;
  detail: string;
  /** Practice set to work on it */
  practiceId: string;
  /** 0–100 */
  accuracy: number;
  mistakes: number;
}
