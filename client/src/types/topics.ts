export type Level = "A1" | "A2" | "B1";

/** A level filter value, including "All" */
export type LevelOption = Level | "All";

export type TopicCategory = "Vocabulary" | "Grammar";

export interface Topic {
  id: string;
  title: string;
  italian: string;
  category: TopicCategory;
  level: Level;
  /** 0–100 */
  mastery: number;
  needsReview?: boolean;
}

export interface ContinueLesson {
  topicId: string;
  title: string;
  /** Italian name and position, e.g. "Passato prossimo · set 3 of 6" */
  detail: string;
  /** 0–100 */
  progress: number;
}
