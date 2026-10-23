import type {CueStep, SentenceQuestion} from "../types";
import {expandAnswers} from "./sentencePatterns";
import {shuffle} from "./studySets";

const NUMBERS_HINT = "Write the numbers in words";

/** Words without punctuation; capitals that only start a sentence are dropped. */
function bareWords(sentence: string) {
  const words = sentence.split(/\s+/);
  return words.map((word, i) => {
    const bare = word.replace(/[.,!?;:]+$/, "");
    const startsSentence = i === 0 || /[.!?]$/.test(words[i - 1]);
    return startsSentence ? bare.charAt(0).toLowerCase() + bare.slice(1) : bare;
  });
}

/** A line to write, hand-written or generated. */
interface LineToWrite {
  en: string;
  it: string[];
  hint?: string;
}

/**
 * Turns a line into a sentence question. `others` are model answers from
 * nearby lines, used for a few wrong tiles in the word bank.
 */
export function sentenceQuestion(
  id: string,
  line: LineToWrite,
  others: string[],
  cue?: CueStep,
): SentenceQuestion {
  const answers = expandAnswers(line.it);
  const words = bareWords(answers[0]);
  const extra = others.flatMap(bareWords).filter((w) => !words.includes(w));
  return {
    id,
    kind: "sentence",
    prompt: line.en,
    answers,
    cue,
    hint: line.hint ?? (/\d/.test(line.en) ? NUMBERS_HINT : undefined),
    tiles: shuffle([...words, ...shuffle([...new Set(extra)]).slice(0, 3)]),
  };
}
