import {grammarCategories, grammarPoints} from "../data/grammar";
import type {ChoiceQuestion, GrammarGroup, GrammarGrouping} from "../types";
import {
  QUESTIONS_PER_TEST,
  categorySets,
  lessonSets,
  shuffle,
} from "./studySets";

export const allGrammarGroup: GrammarGroup = {
  id: "grammar-all",
  label: "Lezioni 1–8",
  title: "All grammar",
  description: "Every grammar point from the lessons you've studied",
  items: grammarPoints,
};

const byLesson = lessonSets("grammar", grammarPoints);
const byCategory = categorySets(
  "grammar-area",
  grammarCategories,
  grammarPoints,
  (p) => p.category,
);

export function grammarGroups(grouping: GrammarGrouping) {
  return [allGrammarGroup, ...(grouping === "lesson" ? byLesson : byCategory)];
}

export function getGrammarGroup(id: string | undefined) {
  if (id === allGrammarGroup.id) return allGrammarGroup;
  return [...byLesson, ...byCategory].find((g) => g.id === id);
}

/** Fill-the-gap questions drawn from every point in the group. */
export function grammarQuestions(group: GrammarGroup): ChoiceQuestion[] {
  const exercises = group.items.flatMap((point) =>
    point.exercises.map((exercise) => ({point, exercise})),
  );
  return shuffle(exercises)
    .slice(0, QUESTIONS_PER_TEST)
    .map(({point, exercise}, i) => ({
      id: `${group.id}-${i}`,
      kind: "choice",
      item: {
        section: "grammar",
        lesson: point.lesson,
        id: `grammar:${point.id}`,
        label: point.title,
      },
      sentence: exercise.sentence,
      options: shuffle(exercise.options),
      answer: exercise.answer,
      explanation: exercise.explanation ?? point.summary,
    }));
}
