import type {TestResult} from "../types";

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
