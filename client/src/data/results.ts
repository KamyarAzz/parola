import type {AnswerRecord, TestResult} from "../types";

// Sample history until the server is ready.
// Builds a result with `total` answers, the first `wrong` of them incorrect.
// `details` replaces the first answers with real mistakes to show on the review screen.
function sample(
  id: string,
  topicId: string,
  finishedAt: string,
  total: number,
  wrong: number,
  durationSec: number,
  details: AnswerRecord[] = [],
): TestResult {
  const answers: AnswerRecord[] = Array.from({length: total}, (_, i) => details[i] ?? {
    questionId: `${id}-${i}`,
    kind: "choice",
    prompt: "",
    given: "",
    expected: "",
    correct: i >= wrong,
  });
  return {id, topicId, finishedAt, durationSec, answers};
}

const foodMistakes: AnswerRecord[] = [
  {
    questionId: "food-3",
    kind: "translate",
    prompt: "Il conto, per favore.",
    given: "The count please",
    expected: "The bill please",
    correct: false,
  },
  {
    questionId: "food-2",
    kind: "choice",
    prompt: "Vorrei ___ acqua frizzante.",
    given: "un",
    expected: "un'",
    correct: false,
  },
];

export const sampleResults: TestResult[] = [
  sample("r-food-1016", "food", "2026-10-16T09:12:00Z", 12, 2, 402, foodMistakes),
  sample("r-past-1015", "past", "2026-10-15T18:40:00Z", 12, 6, 490),
  sample("r-art-1014", "articles", "2026-10-14T08:05:00Z", 12, 1, 295),
  sample("r-travel-1012", "travel", "2026-10-12T19:22:00Z", 12, 5, 451),
  sample("r-greet-1011", "greetings", "2026-10-11T07:58:00Z", 12, 0, 228),
  sample("r-shop-1009", "shopping", "2026-10-09T20:10:00Z", 12, 5, 419),
  sample("r-present-1008", "present", "2026-10-08T12:30:00Z", 12, 3, 322),
  sample("r-num-1006", "numbers", "2026-10-06T17:45:00Z", 12, 4, 365),
];
