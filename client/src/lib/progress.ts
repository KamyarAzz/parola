import {grammarPoints} from "../data/grammar";
import {lessons} from "../data/lessons";
import {sections} from "../data/sections";
import {scenarios} from "../data/sentences";
import {verbs} from "../data/verbs";
import {words} from "../data/words";
import type {
  AnswerRecord,
  LessonProgress,
  Section,
  SectionProgress,
  TestResult,
} from "../types";
import {lessonOfSet} from "./studySets";

/** Accuracy only counts this many of the latest answers, so it can improve. */
const RECENT_ANSWERS = 50;

/** Fewer answers than this aren't enough to call an area strong or weak. */
export const MIN_ANSWERS = 8;

export interface TaggedAnswer extends AnswerRecord {
  section?: Section;
  lesson?: number;
  /** When the test was finished (ISO) */
  at: string;
}

/** "verbs-lesson-3" → "verbs". */
export function sectionOf(practiceId: string): Section | undefined {
  return sections.find((s) => practiceId.startsWith(`${s.id}-`))?.id;
}

export const sectionTitle = (section: Section) =>
  sections.find((s) => s.id === section)?.title ?? section;

/** "Verbs · Lezione 3". */
export const areaLabel = ({section, lesson}: SectionProgress) =>
  `${sectionTitle(section)} · Lezione ${lesson}`;

/**
 * Every answer, newest first, with its section and lesson. Answers saved
 * before items were tracked take them from their test's id when it has one.
 */
export function taggedAnswers(results: TestResult[]): TaggedAnswer[] {
  return results.flatMap((result) =>
    result.answers.map((answer) => ({
      ...answer,
      at: result.finishedAt,
      section: answer.item?.section ?? sectionOf(result.topicId),
      lesson: answer.item?.lesson ?? lessonOfSet(result.topicId),
    })),
  );
}

const itemsIn: Record<Section, (lesson: number) => number> = {
  words: (l) => words.filter((w) => w.lesson === l).length,
  verbs: (l) => verbs.filter((v) => v.lesson === l).length,
  grammar: (l) => grammarPoints.filter((p) => p.lesson === l).length,
  sentences: (l) => scenarios.filter((s) => s.lesson === l).length,
};

export const percent = (part: number, whole: number) =>
  whole ? Math.round((part / whole) * 100) : null;

function sectionProgress(
  answers: TaggedAnswer[],
  section: Section,
  lesson: number,
): SectionProgress {
  const mine = answers.filter(
    (a) => a.section === section && a.lesson === lesson,
  );
  const recent = mine.slice(0, RECENT_ANSWERS);
  // Fresh sentences don't count towards situations practised
  const items = mine
    .map((a) => a.item?.id)
    .filter((id) => id && !id.startsWith("fresh:"));
  return {
    section,
    lesson,
    answered: mine.length,
    accuracy: percent(recent.filter((a) => a.correct).length, recent.length),
    practised: new Set(items).size,
    total: itemsIn[section](lesson),
  };
}

/** Each lesson with how each section of it is going. */
export function lessonProgress(results: TestResult[]): LessonProgress[] {
  const answers = taggedAnswers(results);
  return lessons.map((lesson) => ({
    lesson: lesson.number,
    title: lesson.title,
    sections: sections.map((s) =>
      sectionProgress(answers, s.id, lesson.number),
    ),
  }));
}

/** Areas with enough answers to judge, best first. */
export function rankedAreas(progress: LessonProgress[]) {
  return progress
    .flatMap((l) => l.sections)
    .filter((s) => s.answered >= MIN_ANSWERS && s.accuracy !== null)
    .sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0));
}

/** Tests finished in the last seven days. */
export function testsThisWeek(results: TestResult[], now = Date.now()) {
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  return results.filter((r) => Date.parse(r.finishedAt) >= weekAgo).length;
}

/** Answers and recent accuracy for each section across all lessons. */
export function sectionScores(results: TestResult[]) {
  const answers = taggedAnswers(results);
  return sections.map((section) => {
    const mine = answers.filter((a) => a.section === section.id);
    const recent = mine.slice(0, RECENT_ANSWERS * 2);
    return {
      section,
      answered: mine.length,
      accuracy: percent(recent.filter((a) => a.correct).length, recent.length),
    };
  });
}

export type SectionScore = ReturnType<typeof sectionScores>[number];
