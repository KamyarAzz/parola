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

export interface WordQuestion {
  id: string;
  kind: "word";
  /** Single word or phrase to translate */
  prompt: string;
  /** Language of the prompt; the options are in the other one */
  lang: "it" | "en";
  options: string[];
  answer: string;
}

export type Question = TranslateQuestion | ChoiceQuestion | WordQuestion;

export interface AnswerRecord {
  questionId: string;
  kind: Question["kind"];
  prompt: string;
  given: string;
  expected: string;
  correct: boolean;
}
