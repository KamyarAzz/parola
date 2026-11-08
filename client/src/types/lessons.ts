import type {GrammarPoint} from "./grammar";
import type {Lesson} from "./study";
import type {Verb} from "./verbs";
import type {Word} from "./words";

/** Everything one lesson teaches, in the order to study it. */
export interface LessonContent {
  lesson: Lesson;
  words: Word[];
  verbs: Verb[];
  grammar: GrammarPoint[];
}

/** A test to take after studying a lesson. */
export interface LessonTest {
  /** Id for /practice/:topicId */
  practiceId: string;
  title: string;
  description: string;
}
