import {lessons} from "../data/lessons";
import type {LessonItem, StudySet} from "../types";

/** One set per lesson, with ids like "verbs-lesson-3". */
export function lessonSets<T extends LessonItem>(
  prefix: string,
  items: T[],
): StudySet<T>[] {
  return lessons.map((lesson) => ({
    id: `${prefix}-lesson-${lesson.number}`,
    label: `Lezione ${lesson.number}`,
    title: lesson.title,
    description: lesson.summary,
    items: items.filter((item) => item.lesson === lesson.number),
  }));
}

/** One set per category (topic, verb type…), with ids like "words-topic-food". */
export function categorySets<T, C extends string>(
  prefix: string,
  categories: {id: C; title: string; italian: string}[],
  items: T[],
  categoryOf: (item: T) => C,
): StudySet<T>[] {
  return categories.map((category) => ({
    id: `${prefix}-${category.id}`,
    label: category.italian,
    title: category.title,
    description: "",
    items: items.filter((item) => categoryOf(item) === category.id),
  }));
}

/** The lesson number in a lesson set's id, e.g. "words-lesson-3" → 3. */
export function lessonOfSet(id: string) {
  const match = /-lesson-(\d+)$/.exec(id);
  return match ? Number(match[1]) : undefined;
}

/** "Lezioni 1, 2 and 5": the lessons a set's items come from. */
export function lessonList(set: StudySet<LessonItem>) {
  const numbers = [...new Set(set.items.map((item) => item.lesson))];
  if (numbers.length === 1) return `Lezione ${numbers[0]}`;
  const last = numbers.pop();
  return `Lezioni ${numbers.join(", ")} and ${last}`;
}

/** The set's own description, or the lessons it covers. */
export function setDescription(set: StudySet<LessonItem>) {
  return set.description || lessonList(set);
}

export function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Three wrong answers picked from `pool`. */
export function distractors(answer: string, pool: string[]) {
  const others = [...new Set(pool)].filter((v) => v !== answer);
  return shuffle(others).slice(0, 3);
}

export const QUESTIONS_PER_TEST = 10;
