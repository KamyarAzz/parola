export type Level = "A1" | "A2" | "B1";

export type TopicCategory = "Vocabulary" | "Grammar";

export interface Topic {
  id: string;
  title: string;
  italian: string;
  category: TopicCategory;
  level: Level;
  /** 0–100 */
  mastery: number;
  needsReview?: boolean;
}

export interface TranslateQuestion {
  id: string;
  kind: "translate";
  /** Italian sentence to translate */
  prompt: string;
  /** Word bank, already in display order */
  words: string[];
  /** Correct answer as words from the bank, in order */
  answer: string[];
}

export interface ChoiceQuestion {
  id: string;
  kind: "choice";
  /** Italian sentence with "___" marking the gap */
  sentence: string;
  options: string[];
  answer: string;
  explanation: string;
}

export type Question = TranslateQuestion | ChoiceQuestion;

export interface AnswerRecord {
  questionId: string;
  kind: Question["kind"];
  prompt: string;
  given: string;
  expected: string;
  correct: boolean;
}

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
