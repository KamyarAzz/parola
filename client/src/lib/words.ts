import {lessons, words, wordTopics} from "../data/words";
import type {Word, WordGroup, WordGrouping, WordQuestion} from "../types";

const QUESTIONS_PER_TEST = 10;

export const allWordsGroup: WordGroup = {
  id: "words-all",
  label: "Lezioni 1–8",
  title: "All words",
  description: "A mix from every lesson you've studied",
  words,
};

export function lessonGroups(): WordGroup[] {
  return lessons.map((lesson) => ({
    id: `words-lesson-${lesson.number}`,
    label: `Lezione ${lesson.number}`,
    title: lesson.title,
    description: lesson.summary,
    words: words.filter((w) => w.lesson === lesson.number),
  }));
}

export function topicGroups(): WordGroup[] {
  return wordTopics.map((topic) => ({
    id: `words-topic-${topic.id}`,
    label: topic.italian,
    title: topic.title,
    description: "",
    words: words.filter((w) => w.topic === topic.id),
  }));
}

export function wordGroups(grouping: WordGrouping) {
  return grouping === "lesson" ? lessonGroups() : topicGroups();
}

export function getWordGroup(id: string | undefined) {
  if (id === allWordsGroup.id) return allWordsGroup;
  return [...lessonGroups(), ...topicGroups()].find((g) => g.id === id);
}

/** "1, 2 and 5": the lessons a group's words come from. */
export function lessonList(group: WordGroup) {
  const numbers = [...new Set(group.words.map((w) => w.lesson))];
  if (numbers.length === 1) return `Lezione ${numbers[0]}`;
  const last = numbers.pop();
  return `Lezioni ${numbers.join(", ")} and ${last}`;
}

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Three wrong answers, from the same group when it has enough words. */
function distractors(answer: string, pool: string[]) {
  const others = shuffle([...new Set(pool)].filter((v) => v !== answer));
  return others.slice(0, 3);
}

/**
 * A short multiple-choice test, alternating Italian → English
 * and English → Italian.
 */
export function wordQuestions(group: WordGroup): WordQuestion[] {
  return shuffle(group.words)
    .slice(0, QUESTIONS_PER_TEST)
    .map((word, i) => {
      const lang = i % 2 === 0 ? "it" : "en";
      const key: keyof Word = lang === "it" ? "en" : "it";
      const pool = (group.words.length >= 4 ? group.words : words).map(
        (w) => w[key],
      );
      return {
        id: `${group.id}-${i}`,
        kind: "word",
        prompt: lang === "it" ? word.it : word.en,
        lang,
        options: shuffle([word[key], ...distractors(word[key], pool)]),
        answer: word[key],
      };
    });
}
