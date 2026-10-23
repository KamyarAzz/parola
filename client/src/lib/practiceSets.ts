import {getQuestions} from "../data/questions";
import {getTopic} from "../data/topics";
import type {PracticeSet, Question, StudySet} from "../types";
import {getGrammarGroup, grammarQuestions} from "./grammar";
import {
  getScenario,
  getScenarioGroup,
  groupSentenceQuestions,
  scenarioQuestions,
} from "./sentences";
import {getVerbGroup, verbQuestions} from "./verbs";
import {getWordGroup, wordQuestions} from "./words";

/** A section's study sets: how to find one and build its test. */
interface Source {
  section: string;
  find: (id: string | undefined) => StudySet<unknown> | undefined;
  questions: (set: never) => Question[];
}

const sources: Source[] = [
  {section: "words", find: getWordGroup, questions: wordQuestions},
  {section: "verbs", find: getVerbGroup, questions: verbQuestions},
  {section: "grammar", find: getGrammarGroup, questions: grammarQuestions},
  {
    section: "sentences",
    find: getScenarioGroup,
    questions: groupSentenceQuestions,
  },
];

function findSet(id: string | undefined) {
  for (const source of sources) {
    const set = source.find(id);
    if (set) return {source, set};
  }
}

/** Finds what a practice id points to: a study set, scenario or topic. */
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
      home: `/${source.section}/${set.id}`,
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
  const topic = getTopic(id);
  return topic && {...topic, home: "/", homeLabel: "Back to topics"};
}

export function getPracticeQuestions(id: string): Question[] {
  const found = findSet(id);
  if (found) return found.source.questions(found.set as never);
  const scenario = getScenario(id);
  if (scenario) return scenarioQuestions(scenario);
  return getQuestions(id);
}
