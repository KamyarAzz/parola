import {grammarPoints} from "../data/grammar";
import {lessons} from "../data/lessons";
import {scenarios} from "../data/sentences";
import {verbs} from "../data/verbs";
import {words} from "../data/words";
import type {LessonContent, LessonItem, LessonTest} from "../types";
import {freshPracticeId} from "./generator";

const inLesson =
  (number: number) =>
  <T extends LessonItem>(item: T) =>
    item.lesson === number;

export const getLesson = (number: number) =>
  lessons.find((lesson) => lesson.number === number);

/** The words, verbs and grammar of one lesson. */
export function lessonContent(number: number): LessonContent | undefined {
  const lesson = getLesson(number);
  if (!lesson) return undefined;
  const ofLesson = inLesson(number);
  return {
    lesson,
    words: words.filter(ofLesson),
    verbs: verbs.filter(ofLesson),
    grammar: grammarPoints.filter(ofLesson),
  };
}

/** "30 words · 5 verbs · 3 grammar topics" */
export const lessonCounts = ({words, verbs, grammar}: LessonContent) =>
  `${words.length} words · ${verbs.length} verbs · ${grammar.length} grammar topics`;

/** The tests for a lesson, from the quickest to the hardest. */
export function lessonTests(number: number): LessonTest[] {
  const dialogues = scenarios.filter(inLesson(number)).length;
  return [
    {
      practiceId: `words-lesson-${number}`,
      title: "Words",
      description: "Match Italian and English",
    },
    {
      practiceId: `verbs-lesson-${number}`,
      title: "Verbs",
      description: "Choose the right form",
    },
    {
      practiceId: `grammar-lesson-${number}`,
      title: "Grammar",
      description: "Fill the gaps",
    },
    ...(dialogues
      ? [
          {
            practiceId: `sentences-lesson-${number}`,
            title: "Dialogues & texts",
            description: "Write the lines in Italian",
          },
        ]
      : []),
    {
      practiceId: freshPracticeId(number),
      title: "Fresh sentences",
      description: "New sentences every time",
    },
  ];
}
