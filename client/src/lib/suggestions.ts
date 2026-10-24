import {lessons} from "../data/lessons";
import type {
  LastPractice,
  LessonProgress,
  Suggestion,
  TestResult,
} from "../types";
import {weakItems} from "./focus";
import {freshPracticeId} from "./generator";
import {getPracticeSet} from "./practiceSets";
import {
  MIN_ANSWERS,
  areaLabel,
  rankedAreas,
  sectionOf,
  sectionTitle,
} from "./progress";
import {formatDate, scoreOf} from "./results";
import {REVIEW_ID} from "./review";

/** Below this, an area is worth going over again. */
const NEEDS_REVIEW = 70;

/** Weak items needed before suggesting a test of just those. */
const ENOUGH_FOR_REVIEW = 3;

/** The latest test, to start the same practice again. */
export function lastPractice(results: TestResult[]): LastPractice | null {
  const [latest] = results;
  const set = latest && getPracticeSet(latest.topicId);
  if (!set) return null;
  const section = sectionOf(latest.topicId);
  const score = scoreOf(latest).percent;
  return {
    practiceId: latest.topicId,
    title: set.title,
    detail: [
      section ? sectionTitle(section) : set.italian,
      `${score}% on ${formatDate(latest.finishedAt)}`,
    ].join(" · "),
    score,
  };
}

/** The first lesson section you haven't practised yet. */
function nextNew(progress: LessonProgress[]): Suggestion | null {
  for (const lesson of progress) {
    const fresh = lesson.sections.find((s) => s.answered === 0);
    if (fresh) {
      return {
        id: `new-${fresh.section}-${lesson.lesson}`,
        kind: "new",
        title: `Start ${areaLabel(fresh)}`,
        detail: `${lesson.title}: read it through, then test yourself`,
        to: `/${fresh.section}/${fresh.section}-lesson-${lesson.lesson}`,
      };
    }
  }
  return null;
}

/** Up to three next steps, from what needs work to what's new. */
export function suggestions(
  results: TestResult[],
  progress: LessonProgress[],
): Suggestion[] {
  const list: (Suggestion | null)[] = [];

  const weak = weakItems(results);
  if (weak.length >= ENOUGH_FOR_REVIEW) {
    list.push({
      id: "mistakes",
      kind: "mistakes",
      title: "Practise your weak spots",
      detail: `${weak.length} things you got wrong recently, in one test`,
      to: `/practice/${REVIEW_ID}`,
    });
  }

  const weakest = rankedAreas(progress).at(-1);
  if (weakest && (weakest.accuracy ?? 100) < NEEDS_REVIEW) {
    list.push({
      id: `review-${weakest.section}-${weakest.lesson}`,
      kind: "review",
      title: `Review ${areaLabel(weakest)}`,
      detail: `${weakest.accuracy}% in your recent answers`,
      to: `/practice/${weakest.section}-lesson-${weakest.lesson}`,
    });
  }

  list.push(nextNew(progress));

  // Fresh sentences from the furthest lesson you've practised enough
  const reached = progress.filter((l) =>
    l.sections.some((s) => s.answered >= MIN_ANSWERS),
  );
  const lesson = reached.at(-1)?.lesson ?? lessons[0].number;
  list.push({
    id: `fresh-${lesson}`,
    kind: "fresh",
    title: "Fresh sentences",
    detail: `New sentences from Lezione ${lesson}, different every time`,
    to: `/practice/${freshPracticeId(lesson)}`,
  });

  return list.filter((s): s is Suggestion => s !== null).slice(0, 3);
}
