import {lessonRange} from "../data/lessons";
import {words, wordTopics} from "../data/words";
import type {Word, WordGroup, WordGrouping, WordQuestion} from "../types";
import {
  QUESTIONS_PER_TEST,
  categorySets,
  distractors,
  lessonSets,
  shuffle,
} from "./studySets";
import {search} from "./search";

export const allWordsGroup: WordGroup = {
  id: "words-all",
  label: `Lezioni ${lessonRange}`,
  title: "All words",
  description: "Every word from the lessons you've studied",
  items: words,
};

const byLesson = lessonSets("words", words);
const byTopic = categorySets("words-topic", wordTopics, words, (w) => w.topic);

export function wordGroups(grouping: WordGrouping) {
  return [allWordsGroup, ...(grouping === "lesson" ? byLesson : byTopic)];
}

/** Words whose Italian or English matches the query. */
export const searchWords = (query: string) =>
  search(words, query, (w) => [w.it, w.en]);

export function getWordGroup(id: string | undefined) {
  if (id === allWordsGroup.id) return allWordsGroup;
  return [...byLesson, ...byTopic].find((g) => g.id === id);
}

/**
 * A short multiple-choice test, alternating Italian → English
 * and English → Italian.
 */
export function wordQuestions(group: WordGroup): WordQuestion[] {
  return shuffle(group.items)
    .slice(0, QUESTIONS_PER_TEST)
    .map((word, i) => {
      const lang = i % 2 === 0 ? "it" : "en";
      const key: keyof Word = lang === "it" ? "en" : "it";
      // Wrong answers come from the same group when it has enough words
      const pool = (group.items.length >= 4 ? group.items : words).map(
        (w) => w[key],
      );
      return {
        id: `${group.id}-${i}`,
        kind: "word",
        item: {
          section: "words",
          lesson: word.lesson,
          id: `word:${word.it}`,
          label: word.it,
        },
        prompt: lang === "it" ? word.it : word.en,
        lang,
        options: shuffle([word[key], ...distractors(word[key], pool)]),
        answer: word[key],
      };
    });
}
