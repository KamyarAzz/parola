import type {GrammarExercise} from "../../types";

/** Short way to write a fill-the-gap exercise. The answer is listed first. */
export function gap(
  sentence: string,
  [answer, ...wrong]: string[],
  explanation?: string,
): GrammarExercise {
  return {sentence, options: [answer, ...wrong], answer, explanation};
}
