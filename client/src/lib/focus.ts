import type {FocusArea, PractisedItem, TestResult} from "../types";
import {percent, sectionTitle, taggedAnswers} from "./progress";

/** Focus areas look at this many of the latest answers. */
const RECENT_ANSWERS = 300;

/** Items below this accuracy still need work. */
const GOOD_ENOUGH = 80;

export interface WeakItem {
  item: PractisedItem;
  answered: number;
  mistakes: number;
  accuracy: number;
  /** The latest wrong answer, newest first */
  lastMistake: {given: string; expected: string};
}

/** Items you've got wrong recently, most mistakes first. */
export function weakItems(results: TestResult[]): WeakItem[] {
  const byItem = new Map<string, WeakItem>();
  for (const answer of taggedAnswers(results).slice(0, RECENT_ANSWERS)) {
    if (!answer.item) continue;
    const entry = byItem.get(answer.item.id) ?? {
      item: answer.item,
      answered: 0,
      mistakes: 0,
      accuracy: 0,
      lastMistake: {given: "", expected: ""},
    };
    entry.answered++;
    if (!answer.correct) {
      // Answers come newest first, so the first mistake is the latest
      if (!entry.mistakes) {
        entry.lastMistake = {given: answer.given, expected: answer.expected};
      }
      entry.mistakes++;
    }
    byItem.set(answer.item.id, entry);
  }
  return [...byItem.values()]
    .map((w) => ({
      ...w,
      accuracy: percent(w.answered - w.mistakes, w.answered) ?? 0,
    }))
    .filter((w) => w.mistakes > 0 && w.accuracy < GOOD_ENOUGH)
    .sort((a, b) => b.mistakes - a.mistakes || a.accuracy - b.accuracy);
}

/** The practice set to work on an item. */
export function practiceIdFor(item: PractisedItem) {
  if (item.id.startsWith("scenario:")) {
    return `sentences-scenario-${item.id.slice("scenario:".length)}`;
  }
  if (item.id.startsWith("fresh:")) {
    return `sentences-fresh-lesson-${item.lesson}`;
  }
  return `${item.section}-lesson-${item.lesson}`;
}

/** "Verbs · Lezione 2 · You wrote parlo, it's parli". */
function detailOf({item, lastMistake}: WeakItem) {
  const where = `${sectionTitle(item.section)} · Lezione ${item.lesson}`;
  // Whole sentences are too long to quote here
  if (item.section === "sentences") return where;
  const wrote = lastMistake.given ? `“${lastMistake.given}”` : "nothing";
  return `${where} · You wrote ${wrote}, it's “${lastMistake.expected}”`;
}

export function focusAreas(results: TestResult[], limit = 6): FocusArea[] {
  return weakItems(results)
    .slice(0, limit)
    .map((weak) => ({
      id: weak.item.id,
      title: weak.item.label,
      detail: detailOf(weak),
      practiceId: practiceIdFor(weak.item),
      accuracy: weak.accuracy,
      mistakes: weak.mistakes,
    }));
}
