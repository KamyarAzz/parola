import type {CueStep, LineStep} from "../../types";

/** Someone else's line in a dialogue. */
export function cue(speaker: string, it: string, en: string): CueStep {
  return {speaker, it, en};
}

/** A line the learner writes: English prompt, then accepted answer patterns. */
export function say(
  en: string,
  it: string | string[],
  hint?: string,
): LineStep {
  return {en, it: Array.isArray(it) ? it : [it], hint};
}
