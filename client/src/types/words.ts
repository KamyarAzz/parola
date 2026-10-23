import type {LessonItem, StudySet} from "./study";

export type WordTopicId =
  | "greetings"
  | "countries"
  | "numbers"
  | "work"
  | "food"
  | "free-time"
  | "time"
  | "hotel"
  | "city"
  | "holidays"
  | "shopping";

export interface Word extends LessonItem {
  it: string;
  en: string;
  topic: WordTopicId;
}

export interface WordTopic {
  id: WordTopicId;
  title: string;
  italian: string;
}

export type WordGrouping = "lesson" | "topic";

export type WordGroup = StudySet<Word>;
