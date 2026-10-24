import type {PractisedItem} from "./progress";

interface QuestionBase {
  id: string;
  /** What the question practises, for progress and focus areas */
  item?: PractisedItem;
}

export interface ChoiceQuestion extends QuestionBase {
  kind: "choice";
  /** Italian sentence with "___" marking the gap */
  sentence: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface WordQuestion extends QuestionBase {
  kind: "word";
  /** Single word or phrase to translate */
  prompt: string;
  /** Language of the prompt; the options are in the other one */
  lang: "it" | "en";
  options: string[];
  answer: string;
}

/** Write a whole Italian sentence from an English prompt. */
export interface SentenceQuestion extends QuestionBase {
  kind: "sentence";
  /** English to put into Italian */
  prompt: string;
  /** Every accepted answer, already expanded; the first is the model */
  answers: string[];
  /** What the other person said just before, in a dialogue */
  cue?: {speaker: string; it: string; en: string};
  hint?: string;
  /** Word bank for the easier tile mode, already shuffled */
  tiles: string[];
}

export type Question = ChoiceQuestion | WordQuestion | SentenceQuestion;

export interface AnswerRecord {
  questionId: string;
  kind: Question["kind"];
  prompt: string;
  given: string;
  expected: string;
  correct: boolean;
  /** Extra feedback, e.g. a missing accent on an answer that still counts */
  note?: string;
  /** Missing on answers saved before items were tracked */
  item?: PractisedItem;
}

/** Everything the learner has entered for the current question. */
export interface PracticeResponse {
  /** Word bank indexes, in order (sentence tiles) */
  picked: number[];
  /** Chosen option (choice and word questions) */
  selected: string | null;
  /** Typed or tile-built sentence (sentence questions) */
  text: string;
}
