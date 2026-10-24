import {scenarioFormats, scenarios} from "../data/sentences";
import type {
  CueStep,
  LineStep,
  PractisedItem,
  Scenario,
  ScenarioGroup,
  ScenarioStep,
  SentenceGrouping,
  SentenceQuestion,
} from "../types";
import {sentenceQuestion} from "./sentenceQuestion";
import {expandAnswers} from "./sentencePatterns";
import {
  QUESTIONS_PER_TEST,
  categorySets,
  lessonSets,
  shuffle,
} from "./studySets";

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

/** Progress for a situation is tracked per situation, not per line. */
export const scenarioItem = (scenario: Scenario): PractisedItem => ({
  section: "sentences",
  lesson: scenario.lesson,
  id: `scenario:${scenario.id}`,
  label: scenario.title,
});

/** One question per line, each with the cue that came right before it. */
function linesOf(scenario: Scenario): SentenceQuestion[] {
  const lines = scenario.steps.filter((step): step is LineStep => !isCue(step));
  const models = lines.map(modelAnswer);
  return scenario.steps.flatMap((step, i) => {
    if (isCue(step)) return [];
    const before = scenario.steps[i - 1];
    const others = models.filter((_, n) => lines[n] !== step);
    const cue = before && isCue(before) ? before : undefined;
    const item = scenarioItem(scenario);
    return [sentenceQuestion(`${scenario.id}-${i}`, step, others, item, cue)];
  });
}

/** A whole scenario, in order, so it reads as a dialogue or text. */
export const scenarioQuestions = (scenario: Scenario) => linesOf(scenario);

/** Lines from across a group, mixed. */
export function groupSentenceQuestions(group: ScenarioGroup) {
  return shuffle(group.items.flatMap(linesOf)).slice(0, QUESTIONS_PER_TEST);
}
