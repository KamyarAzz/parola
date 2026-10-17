import type {AnswerRecord} from "./practice";

export interface TestResult {
  id: string;
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
  topicId: string;
  /** 0–100 */
  accuracy: number;
  mistakes: number;
}
