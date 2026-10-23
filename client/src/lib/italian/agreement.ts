import type {Adjective, Gender, Subject} from "../../types";

/** The adjective form for a gender and number. */
export function agree(adjective: Adjective, g: Gender, plural = false) {
  const [m, f, mp, fp] = adjective.forms;
  if (plural) return g === "f" ? fp : mp;
  return g === "f" ? f : m;
}

/** Plural subjects: noi, voi, loro. */
export const isPlural = (subject: Subject) => subject.person >= 3;

/**
 * The form that agrees with a subject, as an answer pattern.
 * When English doesn't show the gender (I, you, we), both are accepted.
 */
export function agreeWith(adjective: Adjective, subject: Subject) {
  const plural = isPlural(subject);
  if (subject.gender) return agree(adjective, subject.gender, plural);
  const male = agree(adjective, "m", plural);
  const female = agree(adjective, "f", plural);
  return male === female ? male : `[${male}|${female}]`;
}

/** Forms of a regular -o / -a adjective or participle: "andat" → andato… */
export const regular = (stem: string, en = ""): Adjective => ({
  en,
  forms: [`${stem}o`, `${stem}a`, `${stem}i`, `${stem}e`],
});

/** Forms of an -e adjective: "ingles" → inglese, inglesi. */
export const inE = (stem: string, en = ""): Adjective => ({
  en,
  forms: [`${stem}e`, `${stem}e`, `${stem}i`, `${stem}i`],
});
