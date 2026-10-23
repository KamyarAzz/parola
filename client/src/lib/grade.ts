import type {AnswerRecord, PracticeResponse, Question} from "../types";
import {checkSentence} from "./sentenceCheck";

const noResponse: PracticeResponse = {picked: [], selected: null, text: ""};

/** Checks the learner's response against the question's answer. */
export function gradeAnswer(
  question: Question,
  {picked, selected, text}: PracticeResponse,
): AnswerRecord {
  if (question.kind === "sentence") {
    const result = checkSentence(text, question.answers);
    return {
      questionId: question.id,
      kind: question.kind,
      prompt: question.prompt,
      given: text.trim(),
      ...result,
    };
  }
  if (question.kind === "translate") {
    const given = picked.map((i) => question.words[i]).join(" ");
    const expected = question.answer.join(" ");
    return {
      questionId: question.id,
      kind: question.kind,
      prompt: question.prompt,
      given,
      expected,
      correct: given === expected,
    };
  }
  return {
    questionId: question.id,
    kind: question.kind,
    prompt: question.kind === "choice" ? question.sentence : question.prompt,
    given: selected ?? "",
    expected: question.answer,
    correct: selected === question.answer,
  };
}

export function skippedAnswer(question: Question): AnswerRecord {
  const record = gradeAnswer(question, noResponse);
  return {...record, given: "", correct: false, note: undefined};
}

const labels: Record<Question["kind"], string> = {
  translate: "Translate",
  choice: "Fill the gap",
  word: "Vocabulary",
  sentence: "Write it in Italian",
};

export function questionLabel(kind: Question["kind"]) {
  return labels[kind];
}

export type OptionState = "idle" | "selected" | "correct" | "wrong" | "dimmed";

/** How a multiple-choice option should look before and after checking. */
export function optionState(
  option: string,
  answer: string,
  selected: string | null,
  checked: boolean,
): OptionState {
  if (!checked) return option === selected ? "selected" : "idle";
  if (option === answer) return "correct";
  if (option === selected) return "wrong";
  return "dimmed";
}
