import {getTopic} from "../data/topics";
import type {LevelOption, Topic} from "../types";

export function filterTopics(
  topics: Topic[],
  level: LevelOption,
  query: string,
) {
  const q = query.trim().toLowerCase();
  return topics.filter(
    (t) =>
      (level === "All" || t.level === level) &&
      (!q || `${t.title} ${t.italian} ${t.category}`.toLowerCase().includes(q)),
  );
}

/** Highest or lowest mastery among topics the learner has started. */
export function strongestTopic(topics: Topic[]) {
  return started(topics).reduce<Topic | undefined>(
    (best, t) => (!best || t.mastery > best.mastery ? t : best),
    undefined,
  );
}

export function weakestTopic(topics: Topic[]) {
  return started(topics).reduce<Topic | undefined>(
    (worst, t) => (!worst || t.mastery < worst.mastery ? t : worst),
    undefined,
  );
}

function started(topics: Topic[]) {
  return topics.filter((t) => t.mastery > 0);
}

/** "Greetings & Basics · 92%" */
export function topicSummary(topic: Topic | undefined) {
  return topic ? `${topic.title} · ${topic.mastery}%` : "–";
}

export function topicTitle(topicId: string) {
  return getTopic(topicId)?.title ?? topicId;
}

export function topicStatus(topic: Topic) {
  if (topic.needsReview) {
    return {label: "Needs review", className: "text-warn-ink"};
  }
  if (topic.mastery >= 80) return {label: "Strong", className: "text-brand"};
  if (topic.mastery === 0) return {label: "New", className: "text-ink"};
  return {label: "In progress", className: "text-muted"};
}
