import {scenarioFormats, scenarios} from "../data/sentences";
import type {
  CueStep,
  LineStep,
  Scenario,
  ScenarioGroup,
  ScenarioStep,
  SentenceGrouping,
  SentenceQuestion,
} from "../types";
import {expandAnswers} from "./sentencePatterns";
import {
  QUESTIONS_PER_TEST,
  categorySets,
  lessonSets,
  shuffle,
} from "./studySets";

const NUMBERS_HINT = "Write the numbers in words";

export const isCue = (step: ScenarioStep): step is CueStep => "speaker" in step;

export const allScenariosGroup: ScenarioGroup = {
  id: "sentences-all",
  label: "Lezioni 1–8",
  title: "All situations",
  description: "Every dialogue, text and drill from the lessons you've studied",
  items: scenarios,
};

const byLesson = lessonSets("sentences", scenarios);
const byFormat = categorySets(
  "sentences-type",
  scenarioFormats,
  scenarios,
  (s) => s.format,
);

export function scenarioGroups(grouping: SentenceGrouping) {
  return [allScenariosGroup, ...(grouping === "lesson" ? byLesson : byFormat)];
}

export function getScenarioGroup(id: string | undefined) {
  if (id === allScenariosGroup.id) return allScenariosGroup;
  return [...byLesson, ...byFormat].find((g) => g.id === id);
}

/** Practice id for one scenario, e.g. "sentences-scenario-at-the-bar". */
export const scenarioPracticeId = (scenario: Scenario) =>
  `sentences-scenario-${scenario.id}`;

export function getScenario(practiceId: string | undefined) {
  return scenarios.find((s) => scenarioPracticeId(s) === practiceId);
}

export function scenarioFormatTag(scenario: Scenario) {
  return scenarioFormats.find((f) => f.id === scenario.format)?.italian ?? "";
}

/** The model answer for a line. */
export const modelAnswer = (line: LineStep) => expandAnswers(line.it)[0];

/** Words without punctuation; capitals that only start a sentence are dropped. */
function bareWords(sentence: string) {
  const words = sentence.split(/\s+/);
  return words.map((word, i) => {
    const bare = word.replace(/[.,!?;:]+$/, "");
    const startsSentence = i === 0 || /[.!?]$/.test(words[i - 1]);
    return startsSentence ? bare.charAt(0).toLowerCase() + bare.slice(1) : bare;
  });
}

/** The model answer's words plus a few from elsewhere in the scenario. */
function tilesFor(line: LineStep, scenario: Scenario) {
  const words = bareWords(modelAnswer(line));
  const others = scenario.steps
    .filter((step): step is LineStep => !isCue(step) && step !== line)
    .flatMap((step) => bareWords(modelAnswer(step)))
    .filter((w) => !words.includes(w));
  return shuffle([...words, ...shuffle([...new Set(others)]).slice(0, 3)]);
}

/** One question per line, each with the cue that came right before it. */
function linesOf(scenario: Scenario): SentenceQuestion[] {
  return scenario.steps.flatMap((step, i) => {
    if (isCue(step)) return [];
    const before = scenario.steps[i - 1];
    return [
      {
        id: `${scenario.id}-${i}`,
        kind: "sentence",
        prompt: step.en,
        answers: expandAnswers(step.it),
        cue: before && isCue(before) ? before : undefined,
        hint: step.hint ?? (/\d/.test(step.en) ? NUMBERS_HINT : undefined),
        tiles: tilesFor(step, scenario),
      },
    ];
  });
}

/** A whole scenario, in order, so it reads as a dialogue or text. */
export const scenarioQuestions = (scenario: Scenario) => linesOf(scenario);

/** Lines from across a group, mixed. */
export function groupSentenceQuestions(group: ScenarioGroup) {
  return shuffle(group.items.flatMap(linesOf)).slice(0, QUESTIONS_PER_TEST);
}
