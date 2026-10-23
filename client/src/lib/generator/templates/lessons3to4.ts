import {activities, frequencies} from "../../../data/generator/actions";
import {barItems, days, likeables} from "../../../data/generator/things";
import type {Noun} from "../../../types";
import {a, the} from "../../italian/articles";
import {numberWords} from "../../italian/numbers";
import {atTime, clockText, timeIs, type ClockTime} from "../../italian/time";
import {between, pick, pickTwo} from "../../random";
import {enA, eitherOrder, heShe, line, template} from "../line";
import {anySubject, enVerb, itSubject, present} from "../subjects";

/** "a coffee" / "un caffè", or "two coffees" / "due caffè". */
function amountOf(item: Noun) {
  const n = pick([1, 1, 2, 3]);
  if (n === 1) return {en: enA(item.en), it: a(item)};
  return {
    en: `${n === 2 ? "two" : "three"} ${item.enPl}`,
    it: `${numberWords(n)} ${item.pl}`,
  };
}

const randomTime = (): ClockTime => ({
  hour: between(1, 12),
  minutes: pick([0, 0, 15, 30, 45] as const),
});

const startingThings = [
  {it: "Il film [comincia|inizia]", en: "The film starts"},
  {it: "La lezione [comincia|inizia]", en: "The lesson starts"},
  {it: "Il treno parte", en: "The train leaves"},
  {it: "Il negozio apre", en: "The shop opens"},
];

export const lessons3to4 = [
  // Lezione 3
  template("order", 3, () => {
    const [first, second] = pickTwo(barItems);
    const one = amountOf(first);
    const two = amountOf(second);
    return line(
      `I'd like ${one.en} and ${two.en}, please.`,
      `[Vorrei|Per me|Prendo] ${one.it} e ${two.it}, per favore.`,
    );
  }),
  template("for-me-for-them", 3, () => {
    const [mine, theirs] = pickTwo(barItems);
    const other = heShe(pick(["m", "f"] as const));
    const him = other.en === "she" ? "her" : "him";
    return line(
      `For me ${enA(mine.en)}, and for ${him} ${enA(theirs.en)}.`,
      `Per me ${a(mine)} e per ${other.it} ${a(theirs)}.`,
    );
  }),
  template("how-much-item", 3, () => {
    const item = pick(barItems);
    return line(`How much is the ${item.en}?`, `Quanto costa ${the(item)}?`);
  }),
  template("price", 3, () => {
    const n = between(2, 40);
    return line(
      `That's ${n} euros.`,
      `[Sono|Fa|Costa] ${numberWords(n)} euro.`,
    );
  }),
  template("table-for", 3, () => {
    const n = between(2, 8);
    return line(
      `A table for ${n}, please.`,
      `Un tavolo per ${numberWords(n)}, per favore.`,
    );
  }),

  // Lezione 4
  template("how-often", 4, () => {
    const s = anySubject();
    const act = pick(activities);
    const freq = pick(frequencies);
    const verb = present(act.verb, s.person);
    const it = freq.negative
      ? `${itSubject(s)} non ${verb} mai ${act.rest}`
      : `${itSubject(s)} ${verb} ${freq.it} ${act.rest}`;
    return line(`${s.en} ${freq.en} ${enVerb(s, act.en)}.`, `${it}.`);
  }),
  template("on-days", 4, () => {
    const s = anySubject();
    const act = pick(activities);
    const day = pick(days);
    const article = day.it === "domenica" ? "la" : "il";
    const when = `[${article}|di] ${day.it}`;
    const doing = `${present(act.verb, s.person)} ${act.rest}`;
    return line(`On ${day.en}s ${s.en} ${enVerb(s, act.en)}.`, [
      `${when} ${itSubject(s)} ${doing}.`,
      `${itSubject(s)} ${when} ${doing}.`,
      `${itSubject(s)} ${doing} ${when}.`,
    ]);
  }),
  template("what-time", 4, () => {
    const time = randomTime();
    return line(`It's ${clockText(time)}.`, `${timeIs(time)}.`);
  }),
  template("starts-at", 4, () => {
    const time = randomTime();
    const thing = pick(startingThings);
    return line(
      `${thing.en} at ${clockText(time)}.`,
      `${thing.it} ${atTime(time)}.`,
    );
  }),
  template("likes", 4, () => {
    const {noun, plural} = pick(likeables);
    const verb = plural ? "piacciono" : "piace";
    const thing = the(noun, plural);
    return pick([
      line(`I like ${noun.en}.`, `Mi ${verb} ${thing}.`),
      line(`I don't like ${noun.en}.`, `Non mi ${verb} ${thing}.`),
      line(`Do you like ${noun.en}?`, `Ti ${verb} ${thing}?`),
    ]);
  }),
  template("time-and-activity", 4, () => {
    const s = anySubject();
    const act = pick(activities);
    const time = randomTime();
    return line(
      `${s.en} ${enVerb(s, act.en)} at ${clockText(time)}.`,
      eitherOrder(
        `${itSubject(s)} ${present(act.verb, s.person)} ${act.rest}`,
        atTime(time),
      ) + ".",
    );
  }),
];
