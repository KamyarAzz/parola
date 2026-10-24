import type {AnswerRecord, PracticeResponse, Question} from "../types";
import {checkSentence} from "./sentenceCheck";

const noResponse: PracticeResponse = {picked: [], selected: null, text: ""};

function grade(
  question: Question,
  {selected, text}: PracticeResponse,
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
  return {
    questionId: question.id,
    kind: question.kind,
    prompt: question.kind === "choice" ? question.sentence : question.prompt,
    given: selected ?? "",
    expected: question.answer,
    correct: selected === question.answer,
  };
}

/** Checks the learner's response against the question's answer. */
export function gradeAnswer(
  question: Question,
  response: PracticeResponse,
): AnswerRecord {
  return {...grade(question, response), item: question.item};
}

export function skippedAnswer(question: Question): AnswerRecord {
  const record = gradeAnswer(question, noResponse);
  return {...record, given: "", correct: false, note: undefined};
}

const labels: Record<Question["kind"], string> = {
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
