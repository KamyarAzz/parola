import {getQuestions} from "../data/questions";
import {getTopic} from "../data/topics";
import type {PracticeSet, Question, StudySet} from "../types";
import {getVerbGroup, verbQuestions} from "./verbs";
import {getWordGroup, wordQuestions} from "./words";

function fromStudySet<T>(
  set: StudySet<T>,
  section: "words" | "verbs",
): PracticeSet {
  return {
    id: set.id,
    title: set.title,
    italian: set.label,
    home: `/${section}/${set.id}`,
    homeLabel: `Back to ${section}`,
  };
}

/** Finds what a practice id points to: a word set, verb set or topic. */
export function getPracticeSet(
  id: string | undefined,
): PracticeSet | undefined {
  const wordGroup = getWordGroup(id);
  if (wordGroup) return fromStudySet(wordGroup, "words");
  const verbGroup = getVerbGroup(id);
  if (verbGroup) return fromStudySet(verbGroup, "verbs");
  const topic = getTopic(id);
  return topic && {...topic, home: "/", homeLabel: "Back to topics"};
}

export function getPracticeQuestions(id: string): Question[] {
  const wordGroup = getWordGroup(id);
  if (wordGroup) return wordQuestions(wordGroup);
  const verbGroup = getVerbGroup(id);
  if (verbGroup) return verbQuestions(verbGroup);
  return getQuestions(id);
}
