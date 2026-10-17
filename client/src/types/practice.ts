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
