import {useResultsStore} from "../stores/resultsStore";
import type {PracticeSet, Question, StudySet} from "../types";
import {freshQuestions, getFreshGroup} from "./generator";
import {getGrammarGroup, grammarQuestions} from "./grammar";
import {
  getScenario,
  getScenarioGroup,
  groupSentenceQuestions,
  scenarioQuestions,
} from "./sentences";
import {REVIEW_ID, reviewQuestions} from "./review";
import {lessonOfSet} from "./studySets";
import {getVerbGroup, verbQuestions} from "./verbs";
import {getWordGroup, wordQuestions} from "./words";

/** A section's study sets: how to find one and build its test. */
interface Source {
  section: string;
  find: (id: string | undefined) => StudySet<unknown> | undefined;
  questions: (set: never) => Question[];
  /** Page to go back to, when it isn't the set's own page */
  home?: (set: StudySet<unknown>) => string;
}

/** Fresh sentences go back to their lesson's page, or to Sentences. */
const freshHome = (set: StudySet<unknown>) => {
  const lesson = lessonOfSet(set.id);
  return lesson ? `/sentences/sentences-lesson-${lesson}` : "/sentences";
};

const sources: Source[] = [
  {section: "words", find: getWordGroup, questions: wordQuestions},
  {section: "verbs", find: getVerbGroup, questions: verbQuestions},
  {section: "grammar", find: getGrammarGroup, questions: grammarQuestions},
  {
    section: "sentences",
    find: getScenarioGroup,
    questions: groupSentenceQuestions,
  },
  {
    section: "sentences",
    find: getFreshGroup,
    questions: freshQuestions,
    home: freshHome,
  },
];

function findSet(id: string | undefined) {
  for (const source of sources) {
    const set = source.find(id);
    if (set) return {source, set};
  }
}

/** Finds what a practice id points to: a study set, a situation or a review. */
export function getPracticeSet(
  id: string | undefined,
): PracticeSet | undefined {
  const found = findSet(id);
  if (found) {
    const {source, set} = found;
    return {
      id: set.id,
      title: set.title,
      italian: set.label,
      home: source.home?.(set) ?? `/${source.section}/${set.id}`,
      homeLabel: `Back to ${source.section}`,
    };
  }
  const scenario = getScenario(id);
  if (scenario) {
    return {
      id: id ?? "",
      title: scenario.title,
      italian: scenario.italian,
      home: `/sentences/sentences-lesson-${scenario.lesson}`,
      homeLabel: "Back to sentences",
    };
  }
  if (id === REVIEW_ID) {
    return {
      id,
      title: "Your weak spots",
      italian: "Ripasso",
      home: "/results",
      homeLabel: "Back to results",
    };
  }
}

export function getPracticeQuestions(id: string): Question[] {
  const found = findSet(id);
  if (found) return found.source.questions(found.set as never);
  const scenario = getScenario(id);
  if (scenario) return scenarioQuestions(scenario);
  if (id === REVIEW_ID) {
    return reviewQuestions(useResultsStore.getState().results);
  }
  return [];
}
