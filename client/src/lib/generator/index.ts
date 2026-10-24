import type {
  FreshSentenceGroup,
  GeneratedLine,
  PractisedItem,
  SentenceQuestion,
} from "../../types";
import {expandAnswers} from "../sentencePatterns";
import {sentenceQuestion} from "../sentenceQuestion";
import {QUESTIONS_PER_TEST, lessonSets, shuffle} from "../studySets";
import {lessons1to2} from "./templates/lessons1to2";
import {lessons3to4} from "./templates/lessons3to4";
import {lessons5to6} from "./templates/lessons5to6";
import {lessons7to8} from "./templates/lessons7to8";

export const sentenceTemplates = [
  ...lessons1to2,
  ...lessons3to4,
  ...lessons5to6,
  ...lessons7to8,
];

const byLesson: FreshSentenceGroup[] = lessonSets(
  "sentences-fresh",
  sentenceTemplates,
).map((set) => ({...set, title: `Fresh sentences: ${set.title}`}));

export const allFreshGroup: FreshSentenceGroup = {
  id: "sentences-fresh-all",
  label: "Lezioni 1–8",
  title: "Fresh sentences",
  description: "New sentences every time, from everything you've studied",
  items: sentenceTemplates,
};

export const freshGroups = [allFreshGroup, ...byLesson];

export function getFreshGroup(id: string | undefined) {
  return freshGroups.find((g) => g.id === id);
}

/** Practice id for one lesson's fresh sentences. */
export const freshPracticeId = (lesson?: number) =>
  lesson ? `sentences-fresh-lesson-${lesson}` : allFreshGroup.id;

/** Fresh sentences are tracked per lesson. */
const freshItem = (lesson: number): PractisedItem => ({
  section: "sentences",
  lesson,
  id: `fresh:${lesson}`,
  label: `Fresh sentences, Lezione ${lesson}`,
});

/** New lines, taking turns between the group's templates, with no repeats. */
function freshLines(group: FreshSentenceGroup) {
  const templates = shuffle(group.items);
  const lines: {line: GeneratedLine; lesson: number}[] = [];
  const prompts = new Set<string>();
  for (let i = 0; lines.length < QUESTIONS_PER_TEST && i < 200; i++) {
    const template = templates[i % templates.length];
    const line = template.make();
    if (prompts.has(line.en)) continue;
    prompts.add(line.en);
    lines.push({line, lesson: template.lesson});
  }
  return lines;
}

export function freshQuestions(group: FreshSentenceGroup): SentenceQuestion[] {
  const lines = freshLines(group);
  const models = lines.map(({line}) => expandAnswers(line.it)[0]);
  return lines.map(({line, lesson}, i) =>
    sentenceQuestion(
      `${group.id}-${i}`,
      line,
      models.filter((_, n) => n !== i),
      freshItem(lesson),
    ),
  );
}
