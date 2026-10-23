import {
  basicNouns,
  cities,
  jobs,
  languages,
  nationalities,
} from "../../../data/generator/people";
import {places} from "../../../data/generator/things";
import type {Gender, Subject} from "../../../types";
import {agreeWith} from "../../italian/agreement";
import {a, articleFor, the} from "../../italian/articles";
import {numberWords} from "../../italian/numbers";
import {between, pick, pickTwo} from "../../random";
import {enA, line, template} from "../line";
import {
  anySubject,
  enBe,
  enVerb,
  itSubject,
  oneSubject,
  present,
  somebody,
} from "../subjects";

const be = (s: Subject) => present("essere", s.person);

/** "I'm" → "I'm", "Anna" → "she's", for the second half of a sentence. */
const enShortBe = (s: Subject) =>
  [
    "I'm",
    "you're",
    s.gender === "f" ? "she's" : "he's",
    "we're",
    "you're",
    "they're",
  ][s.person];

/** Genders to accept: the subject's, or both when English doesn't say. */
const gendersOf = (s: Subject): Gender[] =>
  s.gender ? [s.gender] : ["m", "f"];

/** "ventun anni" / "ventuno anni", "trent'anni" / "trenta anni". */
function ageWords(n: number) {
  const words = numberWords(n);
  const options = [`${words} anni`];
  if (words.endsWith("uno")) options.push(`${words.slice(0, -1)} anni`);
  // Round numbers usually drop the vowel: trent'anni
  if (n % 10 === 0) options.unshift(`${words.slice(0, -1)}'anni`);
  return `[${options.join("|")}]`;
}

export const lessons1to2 = [
  // Lezione 1
  template("nationality", 1, () => {
    const s = anySubject();
    const nat = pick(nationalities);
    return line(
      `${s.en} ${enBe(s)} ${nat.en}.`,
      `${itSubject(s)} ${be(s)} ${agreeWith(nat, s)}.`,
    );
  }),
  template("from-city", 1, () => {
    const s = anySubject();
    const city = pick(cities);
    return line(
      `${s.en} ${enBe(s)} from ${city.en}.`,
      `${itSubject(s)} ${be(s)} di ${city.it}.`,
    );
  }),
  template("not-but", 1, () => {
    const s = pick([anySubject(), somebody()]);
    const [no, yes] = pickTwo(nationalities);
    return line(
      `${s.en} ${enBe(s)} not ${no.en}, ${enShortBe(s)} ${yes.en}.`,
      `${itSubject(s)} non ${be(s)} ${agreeWith(no, s)}, ${be(s)} ${agreeWith(yes, s)}.`,
    );
  }),
  template("this-is-a", 1, () => {
    const noun = pick(basicNouns);
    return line(
      `This is ${enA(noun.en)}.`,
      `${noun.g === "f" ? "Questa" : "Questo"} è ${a(noun)}.`,
    );
  }),
  template("these-are-the", 1, () => {
    const noun = pick(basicNouns);
    return line(
      `These are the ${noun.enPl}.`,
      `${noun.g === "f" ? "Queste" : "Questi"} sono ${the(noun, true)}.`,
    );
  }),
  template("where-is-the", 1, () => {
    const noun = pick(places);
    const plural = Math.random() < 0.4;
    return plural
      ? line(`Where are the ${noun.enPl}?`, `Dove sono ${the(noun, true)}?`)
      : line(`Where is the ${noun.en}?`, `[Dov'è|Dove è] ${the(noun)}?`);
  }),

  // Lezione 2
  template("age", 2, () => {
    const s = anySubject();
    const n = between(15, 89);
    return line(
      `${s.en} ${enBe(s)} ${n} years old.`,
      `${itSubject(s)} ${present("avere", s.person)} ${ageWords(n)}.`,
    );
  }),
  template("job", 2, () => {
    // Jobs only in the singular: one person
    const s = oneSubject();
    const job = pick(jobs);
    const answers = gendersOf(s).flatMap((g) => {
      const form = job[g];
      const article = articleFor(form, g);
      const withArticle = article.endsWith("'")
        ? article + form
        : `${article} ${form}`;
      return [
        `${itSubject(s)} ${be(s)} ${form}.`,
        `${itSubject(s)} ${be(s)} ${a({it: form, g, en: ""})}.`,
        `${itSubject(s)} ${present("fare", s.person)} ${withArticle}.`,
        `${itSubject(s)} ${present("lavorare", s.person)} come ${form}.`,
      ];
    });
    return line(`${s.en} ${enBe(s)} ${job.en}.`, answers);
  }),
  template("lives-in", 2, () => {
    const s = anySubject();
    const city = pick(cities);
    const verb = `[${present("abitare", s.person)}|${present("vivere", s.person)}]`;
    return line(
      `${s.en} ${enVerb(s, {base: "live", third: "lives"})} in ${city.en}.`,
      `${itSubject(s)} ${verb} a ${city.it}.`,
    );
  }),
  template("works-in", 2, () => {
    const s = anySubject();
    const place = pick(
      places.filter((p) => !["piazza", "parco"].includes(p.it)),
    );
    return line(
      `${s.en} ${enVerb(s, {base: "work", third: "works"})} in ${enA(place.en)}.`,
      `${itSubject(s)} ${present("lavorare", s.person)} in [${a(place)}|${place.it}].`,
    );
  }),
  template("speaks", 2, () => {
    const s = anySubject();
    const [first, second] = pickTwo(languages);
    return line(
      `${s.en} ${enVerb(s, {base: "speak", third: "speaks"})} ${first.en} and ${second.en}.`,
      `${itSubject(s)} ${present("parlare", s.person)} ${first.it} e ${second.it}.`,
    );
  }),
  template("studies-in", 2, () => {
    const s = anySubject();
    const city = pick(cities);
    return line(
      `${s.en} ${enVerb(s, {base: "study", third: "studies"})} Italian in ${city.en}.`,
      `${itSubject(s)} ${present("studiare", s.person)} (l')italiano a ${city.it}.`,
    );
  }),
];
