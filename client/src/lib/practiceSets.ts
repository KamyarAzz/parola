import {getQuestions} from "../data/questions";
import {getTopic} from "../data/topics";
import type {PracticeSet, Question} from "../types";
import {getWordGroup, wordQuestions} from "./words";

/** Finds what a practice id points to: a word group or a topic. */
export function getPracticeSet(
  id: string | undefined,
): PracticeSet | undefined {
  const group = getWordGroup(id);
  if (group) {
    return {
      id: group.id,
      title: group.title,
      italian: group.label,
      home: `/words/${group.id}`,
    };
  }
  const topic = getTopic(id);
  return topic && {...topic, home: "/"};
}

export function getPracticeQuestions(id: string): Question[] {
  const group = getWordGroup(id);
  return group ? wordQuestions(group) : getQuestions(id);
}
