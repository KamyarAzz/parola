import {pastMarkers} from "../../../data/generator/actions";
import {
  familySuperlatives,
  owners,
  relatives,
  restfulThings,
  routineFrequencies,
  routines,
} from "../../../data/generator/family";
import {cities} from "../../../data/generator/people";
import {days} from "../../../data/generator/things";
import type {Adjective, Noun, Subject} from "../../../types";
import {agree, agreeWith, regular} from "../../italian/agreement";
import {articleFor} from "../../italian/articles";
import {atTime, clockText, type ClockTime} from "../../italian/time";
import {between, pick} from "../../random";
import {reflexivePronouns} from "../../verbs";
import {eitherOrder, line, template} from "../line";
import {anySubject, enVerb, itSubject, present, somebody} from "../subjects";

/** Words joined with spaces, skipping empty ones. */
const words = (...parts: string[]) => parts.filter(Boolean).join(" ");

const morningTime = (): ClockTime => ({
  hour: between(6, 9),
  minutes: pick([0, 0, 15, 30, 45] as const),
});

/** After a modal the pronoun joins the infinitive or goes first. */
function afterModal(modal: string, verb: string, person: Subject["person"]) {
  const pronoun = reflexivePronouns[person];
  const stem = verb.slice(0, -3); // riposarsi → riposa
  return `[${modal} ${stem}r${pronoun}|${pronoun} ${modal} ${stem}re]`;
}

/** "mia sorella", but "i miei fratelli" and "la loro figlia". */
function possessed(owner: Adjective, relative: Noun, plural: boolean) {
  const form = agree(owner, relative.g, plural);
  const noun = plural ? (relative.pl ?? relative.it) : relative.it;
  const article = plural || owner.en === "their";
  return article
    ? `${articleFor(form, relative.g, plural)} ${form} ${noun}`
    : `${form} ${noun}`;
}

/** The possessive that goes with a subject: I → my, Anna → her. */
function ownerOf(subject: Subject) {
  const en =
    subject.person === 2
      ? subject.gender === "f"
        ? "her"
        : "his"
      : ["my", "your", "", "our", "your", "their"][subject.person];
  return owners.find((o) => o.en === en) ?? owners[0];
}

const weekend = days.slice(5);

const spouses = ["marito", "moglie"];

/** A family member for an owner, but not "his husband" or "her wife". */
const relativeOf = (owner: Adjective) =>
  pick(
    relatives.filter(
      (r) =>
        !spouses.includes(r.it) || owner.en !== (r.g === "m" ? "his" : "her"),
    ),
  );

export const lessons9to10 = [
  // Lezione 9
  template("routine-time", 9, () => {
    const s = anySubject();
    const routine = pick(routines);
    const time = morningTime();
    return line(
      `${s.en} ${enVerb(s, routine.en)} at ${clockText(time)}.`,
      `${words(itSubject(s), present(routine.verb, s.person), routine.rest)} ${atTime(time)}.`,
    );
  }),
  template("routine-often", 9, () => {
    const s = anySubject();
    const routine = pick(routines);
    const often = pick(routineFrequencies);
    const verb = enVerb(s, routine.en);
    const it = words(
      itSubject(s),
      present(routine.verb, s.person),
      routine.rest,
    );
    return often.first
      ? line(`${s.en} ${often.en} ${verb}.`, `${eitherOrder(often.it, it)}.`)
      : line(`${s.en} ${verb} ${often.en}.`, `${eitherOrder(it, often.it)}.`);
  }),
  template("want-to-rest", 9, () => {
    const s = anySubject();
    const thing = pick(restfulThings);
    const day = pick(weekend);
    const modal = present("volere", s.person);
    return line(
      `${s.en} ${enVerb(s, {base: "want", third: "wants"})} to ${thing.en} on ${day.en}.`,
      `${eitherOrder(
        words(
          itSubject(s),
          afterModal(modal, thing.verb, s.person),
          thing.rest,
        ),
        day.it,
      )}.`,
    );
  }),

  // Lezione 10
  template("routine-past", 10, () => {
    const s = anySubject();
    const routine = pick(routines);
    const time = morningTime();
    // Only single days, so a clock time makes sense
    const when = pick(
      pastMarkers.filter((m) => !/sera|settimana|anno/.test(m.it)),
    );
    const past = words(
      itSubject(s),
      reflexivePronouns[s.person],
      present("essere", s.person),
      agreeWith(regular(routine.participle), s),
      routine.rest,
      atTime(time),
    );
    return line(
      `${s.en} ${routine.enPast} at ${clockText(time)} ${when.en}.`,
      `${eitherOrder(past, when.it)}.`,
    );
  }),
  template("family-lives", 10, () => {
    const owner = pick(owners);
    const relative = relativeOf(owner);
    const plural = Boolean(relative.pl) && Math.random() < 0.4;
    const city = pick(cities);
    const who = plural ? relative.enPl : relative.en;
    return line(
      `${owner.en} ${who} ${plural ? "live" : "lives"} in ${city.en}.`,
      `${possessed(owner, relative, plural)} ${plural ? "[vivono|abitano]" : "[vive|abita]"} a ${city.it}.`,
    );
  }),
  template("visit-family", 10, () => {
    const s = anySubject();
    const relative = relativeOf(ownerOf(s));
    const day = pick(days);
    return line(
      `${s.en} ${enVerb(s, {base: "visit", third: "visits"})} ${ownerOf(s).en} ${relative.en} on ${day.en}.`,
      `${eitherOrder(
        words(
          itSubject(s),
          present("andare", s.person),
          "a trovare",
          possessed(ownerOf(s), relative, false),
        ),
        day.it,
      )}.`,
      "A person: andare a trovare",
    );
  }),
  template("family-superlative", 10, () => {
    const person = somebody();
    const adjective = pick(familySuperlatives);
    const article = person.gender === "f" ? "la" : "il";
    return line(
      `${person.name} is the ${adjective.en} in the family.`,
      `${person.name} è ${article} più ${agree(adjective, person.gender ?? "m")} della famiglia.`,
    );
  }),
];
