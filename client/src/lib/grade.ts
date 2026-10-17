import type {AnswerRecord, Question} from "../types";

/**
 * Checks the learner's response. `picked` is used for translate questions,
 * `selected` for choice questions.
 */
export function gradeAnswer(
  question: Question,
  picked: number[],
  selected: string | null,
): AnswerRecord {
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
    prompt: question.sentence,
    given: selected ?? "",
    expected: question.answer,
    correct: selected === question.answer,
  };
}

export function skippedAnswer(question: Question): AnswerRecord {
  return {...gradeAnswer(question, [], null), given: "", correct: false};
}

export function questionLabel(kind: Question["kind"]) {
  return kind === "translate" ? "Translate" : "Fill the gap";
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
