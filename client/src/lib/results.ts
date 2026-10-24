import type {TestResult} from "../types";
import {getPracticeSet} from "./practiceSets";
import {sectionOf, sectionTitle} from "./progress";

export function scoreOf(result: TestResult) {
  const correct = result.answers.filter((a) => a.correct).length;
  const total = result.answers.length;
  return {
    correct,
    total,
    percent: total ? Math.round((correct / total) * 100) : 0,
  };
}

export function formatDuration(totalSec: number) {
  const m = Math.floor(totalSec / 60);
  const s = Math.round(totalSec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

/* Text color class for a score: strong, middling or weak. */
export function scoreTone(percent: number) {
  if (percent >= 80) return "text-brand";
  if (percent >= 65) return "text-ink";
  return "text-warn-ink";
}

export function averageScore(results: TestResult[]) {
  if (!results.length) return 0;
  const sum = results.reduce((total, r) => total + scoreOf(r).percent, 0);
  return Math.round(sum / results.length);
}

/** Subtitle on the test complete / review screen. */
export function resultMessage(result: TestResult, justFinished: boolean) {
  if (!justFinished) return `Taken on ${formatDate(result.finishedAt)}`;
  if (scoreOf(result).percent >= 80) return "Nice work. Keep it up!";
  return "Your mistakes have been saved to your focus areas.";
}

/**
 * The name of what a test practised, with its section, since lesson sets
 * share the lesson's name: "Words · Buon appetito!".
 */
export function practiceTitle(practiceId: string) {
  const title = getPracticeSet(practiceId)?.title ?? practiceId;
  const section = sectionOf(practiceId);
  return section ? `${sectionTitle(section)} · ${title}` : title;
}
