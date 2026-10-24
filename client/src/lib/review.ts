import {grammarPoints} from "../data/grammar";
import {scenarios} from "../data/sentences";
import {verbs} from "../data/verbs";
import {words} from "../data/words";
import type {Question, StudySet, TestResult} from "../types";
import {weakItems} from "./focus";
import {freshPracticeId, freshQuestions, getFreshGroup} from "./generator";
import {grammarQuestions} from "./grammar";
import {scenarioQuestions} from "./sentences";
import {QUESTIONS_PER_TEST, shuffle} from "./studySets";
import {verbQuestions} from "./verbs";
import {wordQuestions} from "./words";

export const REVIEW_ID = "review";

/** At most this many weak items go into one review test. */
const ITEMS_PER_REVIEW = 12;

/** A made-up set holding just the weak items of one section. */
const setOf = <T>(name: string, items: T[]): StudySet<T> => ({
  id: `${REVIEW_ID}-${name}`,
  label: "Ripasso",
  title: "Your weak spots",
  description: "",
  items,
});

/** A test built from the things you've got wrong recently. */
export function reviewQuestions(results: TestResult[]): Question[] {
  const ids = new Set(
    weakItems(results)
      .slice(0, ITEMS_PER_REVIEW)
      .map((w) => w.item.id),
  );
  const has = (id: string) => ids.has(id);

  const weakWords = words.filter((w) => has(`word:${w.it}`));
  const weakVerbs = verbs.filter((v) => has(`verb:${v.it}`));
  const weakPoints = grammarPoints.filter((p) => has(`grammar:${p.id}`));
  const weakScenarios = scenarios.filter((s) => has(`scenario:${s.id}`));
  const freshLessons = [...ids]
    .filter((id) => id.startsWith("fresh:"))
    .map((id) => Number(id.slice("fresh:".length)));

  const questions: Question[] = [
    ...(weakWords.length ? wordQuestions(setOf("words", weakWords)) : []),
    ...(weakVerbs.length ? verbQuestions(setOf("verbs", weakVerbs)) : []),
    ...(weakPoints.length
      ? grammarQuestions(setOf("grammar", weakPoints))
      : []),
    // Two lines from each weak situation or lesson of fresh sentences
    ...weakScenarios.flatMap((s) => shuffle(scenarioQuestions(s)).slice(0, 2)),
    ...freshLessons.flatMap((lesson) => {
      const group = getFreshGroup(freshPracticeId(lesson));
      return group ? freshQuestions(group).slice(0, 2) : [];
    }),
  ];
  return shuffle(questions).slice(0, QUESTIONS_PER_TEST);
}
