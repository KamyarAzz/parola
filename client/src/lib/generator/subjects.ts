import {names, pairs, pronounSubjects} from "../../data/generator/people";
import {verbs} from "../../data/verbs";
import type {EnglishVerb, Subject, Verb} from "../../types";
import {pick} from "../random";
import {presentForms} from "../verbs";

const italianPronouns = ["io", "tu", "lui", "noi", "voi", "loro"];

const namedSubjects: Subject[] = names.map(({name, g}) => ({
  en: name,
  name,
  person: 2,
  gender: g,
}));

const pairSubjects: Subject[] = pairs.map(({it, en, g}) => ({
  en,
  name: it,
  person: 5,
  gender: g,
}));

/** Anyone: I, you, a name, we, they, or two people. */
export const anySubject = () =>
  pick([
    ...pronounSubjects,
    ...namedSubjects,
    ...namedSubjects,
    ...pairSubjects,
  ]);

/** One person: I, you or a name. */
export const oneSubject = () =>
  pick([...pronounSubjects.filter((s) => s.person < 3), ...namedSubjects]);

/** A single named person. */
export const somebody = () => pick(namedSubjects);

/** The subject as it starts an Italian answer: a name, or an optional pronoun. */
export const itSubject = (subject: Subject) =>
  subject.name ?? `(${italianPronouns[subject.person]})`;

/** The English verb that goes with the subject: "plays" for he/she. */
export const enVerb = (subject: Subject, verb: EnglishVerb) =>
  subject.person === 2 ? verb.third : verb.base;

/** "am / are / is" for the subject. */
export const enBe = (subject: Subject) =>
  subject.person === 0 ? "am" : subject.person === 2 ? "is" : "are";

/** Present tense of any verb, using the verbs list for irregular ones. */
export function present(infinitive: string, person: Subject["person"]) {
  const known = verbs.find((v) => v.it === infinitive);
  const type = infinitive.slice(-3) as "are" | "ere" | "ire";
  const verb: Verb = known ?? {it: infinitive, en: "", lesson: 0, type};
  return presentForms(verb)[person];
}

/** Capitalises the first letter of an English prompt. */
export const sentence = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
