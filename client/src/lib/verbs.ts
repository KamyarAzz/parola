import {lessonRange} from "../data/lessons";
import {pronouns, verbs, verbTypes} from "../data/verbs";
import type {
  ChoiceQuestion,
  Verb,
  VerbGroup,
  VerbGrouping,
  VerbType,
} from "../types";
import {
  QUESTIONS_PER_TEST,
  categorySets,
  distractors,
  lessonSets,
  shuffle,
} from "./studySets";

const endings: Record<
  Exclude<VerbType, "reflexive" | "irregular">,
  string[]
> = {
  are: ["o", "i", "a", "iamo", "ate", "ano"],
  ere: ["o", "i", "e", "iamo", "ete", "ono"],
  ire: ["o", "i", "e", "iamo", "ite", "ono"],
  isc: ["isco", "isci", "isce", "iamo", "ite", "iscono"],
};

export const reflexivePronouns = ["mi", "ti", "si", "ci", "vi", "si"];

/** Present tense forms, io → loro. */
export function presentForms(verb: Verb): string[] {
  if (verb.forms) return verb.forms;
  if (verb.type === "irregular") return [];
  if (verb.type === "reflexive") {
    // alzarsi → alzare → mi alzo, ti alzi…
    const it = `${verb.it.slice(0, -3)}re`;
    const type = it.slice(-3) as "are" | "ere" | "ire";
    return presentForms({...verb, it, type}).map(
      (form, person) => `${reflexivePronouns[person]} ${form}`,
    );
  }
  const stem = verb.it.slice(0, -3);
  return endings[verb.type].map((ending) => {
    if (!ending.startsWith("i")) return stem + ending;
    // cercare → cerchi, cerchiamo
    if (verb.type === "are" && /[cg]$/.test(stem)) return `${stem}h${ending}`;
    // mangiare → mangi, mangiamo
    if (stem.endsWith("i")) return stem.slice(0, -1) + ending;
    return stem + ending;
  });
}

export function verbTypeTag(type: VerbType) {
  return verbTypes.find((t) => t.id === type)?.tag ?? "";
}

export const allVerbsGroup: VerbGroup = {
  id: "verbs-all",
  label: `Lezioni ${lessonRange}`,
  title: "All verbs",
  description: "Every verb from the lessons you've studied",
  items: verbs,
};

const byLesson = lessonSets("verbs", verbs);
const byType = categorySets("verbs-type", verbTypes, verbs, (v) => v.type);

export function verbGroups(grouping: VerbGrouping) {
  return [allVerbsGroup, ...(grouping === "lesson" ? byLesson : byType)];
}

export function getVerbGroup(id: string | undefined) {
  if (id === allVerbsGroup.id) return allVerbsGroup;
  return [...byLesson, ...byType].find((g) => g.id === id);
}

/** "Noi ___ (parlare)." with the other forms of the verb as wrong answers. */
export function verbQuestions(group: VerbGroup): ChoiceQuestion[] {
  const pairs = group.items.flatMap((verb) =>
    pronouns.map((_, person) => ({verb, person})),
  );
  return shuffle(pairs)
    .slice(0, QUESTIONS_PER_TEST)
    .map(({verb, person}, i) => {
      const forms = presentForms(verb);
      const answer = forms[person];
      const pronoun = pronouns[person];
      return {
        id: `${group.id}-${i}`,
        kind: "choice",
        item: {
          section: "verbs",
          lesson: verb.lesson,
          id: `verb:${verb.it}`,
          label: verb.it,
        },
        sentence: `${pronoun[0].toUpperCase()}${pronoun.slice(1)} ___ (${verb.it}).`,
        options: shuffle([answer, ...distractors(answer, forms)]),
        answer,
        explanation: `${verb.it} (${verb.en}): ${pronoun} ${answer}.`,
      };
    });
}
