import {pastEvents, pastMarkers} from "../../../data/generator/actions";
import {groceries} from "../../../data/generator/things";
import type {Subject} from "../../../types";
import {agreeWith, regular} from "../../italian/agreement";
import {the, withPreposition} from "../../italian/articles";
import {numberWords} from "../../italian/numbers";
import {between, pick} from "../../random";
import {eitherOrder, line, template} from "../line";
import {anySubject, enVerb, itSubject, present} from "../subjects";

/** "ieri" / "yesterday", or "tre giorni fa" / "3 days ago". */
function randomMarker() {
  if (Math.random() < 0.25) {
    const n = between(2, 10);
    return {it: `${numberWords(n)} giorni fa`, en: `${n} days ago`};
  }
  return pick(pastMarkers);
}

/** "ho mangiato", "sono andata": helper verb plus agreeing participle. */
function pastVerb(s: Subject, event: (typeof pastEvents)[number]) {
  const aux = present(event.aux, s.person);
  const participle =
    event.aux === "essere"
      ? agreeWith(regular(event.participle), s)
      : event.participle;
  return `${aux} ${participle}`;
}

const weather = [
  {en: "it rained", it: "[è|ha] piovuto"},
  {en: "it snowed", it: "[è|ha] nevicato"},
  {en: "it was hot", it: "ha fatto caldo"},
  {en: "it was cold", it: "ha fatto freddo"},
  {en: "the weather was nice", it: "ha fatto bel tempo"},
];

/** "una bottiglia [di olio|d'olio]", "[due etti|duecento grammi] di prosciutto". */
function amountOf(item: (typeof groceries)[number]) {
  if (item.counted) return `${item.unit} ${item.noun.it}`;
  // di + a vowel can shorten: d'olio, d'acqua
  const of = /^[aeiou]/.test(item.noun.it)
    ? `[di ${item.noun.it}|d'${item.noun.it}]`
    : `di ${item.noun.it}`;
  // "200 grams" is usually "due etti", but "duecento grammi" is right too
  const grams = /^(\d+) grams$/.exec(item.enUnit);
  const unit = grams
    ? `[${item.unit}|${numberWords(Number(grams[1]))} grammi]`
    : item.unit;
  return `${unit} ${of}`;
}

const you: Subject = {en: "you", name: null, person: 1, gender: null};

/** "dell'olio", "delle uova": some of something. */
const some = (item: (typeof groceries)[number]) =>
  withPreposition("di", item.noun.it, item.noun.g, item.plural);

const objectPronoun = (item: (typeof groceries)[number]) =>
  item.plural
    ? item.noun.g === "f"
      ? "Le"
      : "Li"
    : item.noun.g === "f"
      ? "La"
      : "Lo";

export const lessons7to8 = [
  // Lezione 7
  template("did-what", 7, () => {
    const s = anySubject();
    const event = pick(pastEvents);
    const when = randomMarker();
    return line(
      `${s.en} ${event.en} ${when.en}.`,
      eitherOrder(
        `${itSubject(s)} ${pastVerb(s, event)} ${event.rest}`,
        when.it,
      ) + ".",
    );
  }),
  template("weather-past", 7, () => {
    const what = pick(weather);
    const when = randomMarker();
    return line(`${what.en} ${when.en}.`, eitherOrder(what.it, when.it) + ".");
  }),
  template("what-did-you-do", 7, () => {
    const when = randomMarker();
    return pick([
      line(
        `What did you do ${when.en}?`,
        `[Cosa|Che cosa|Che] hai fatto ${when.it}?`,
      ),
      line(
        `Where did you go ${when.en}?`,
        `Dove sei [andato|andata] ${when.it}?`,
      ),
    ]);
  }),

  template("did-you", 7, () => {
    const event = pick(pastEvents);
    const when = randomMarker();
    return line(
      `Did you ${event.enBase} ${when.en}?`,
      eitherOrder(`(tu) ${pastVerb(you, event)} ${event.rest}`, when.it) + "?",
    );
  }),
  template("did-not", 7, () => {
    const s = anySubject();
    const event = pick(pastEvents);
    const when = randomMarker();
    return line(
      `${s.en} didn't ${event.enBase} ${when.en}.`,
      eitherOrder(
        `${itSubject(s)} non ${pastVerb(s, event)} ${event.rest}`,
        when.it,
      ) + ".",
    );
  }),

  // Lezione 8
  template("buy-amount", 8, () => {
    const item = pick(groceries);
    const en = item.counted
      ? `${item.enUnit} ${item.noun.en}`
      : `${item.enUnit} of ${item.noun.en}`;
    return line(
      `I'd like ${en}, please.`,
      `Vorrei ${amountOf(item)}, per favore.`,
    );
  }),
  template("buy-some", 8, () => {
    const s = anySubject();
    const item = pick(groceries);
    return line(
      `${s.en} ${enVerb(s, {base: "buy", third: "buys"})} some ${item.noun.en}.`,
      `${itSubject(s)} ${present("comprare", s.person)} [${some(item)}|${item.noun.it}].`,
    );
  }),
  template("buy-it", 8, () => {
    const item = pick(groceries);
    const it = item.plural ? "them" : "it";
    return line(
      `The ${item.noun.en}? I'll buy ${it}.`,
      `${the(item.noun, item.plural)}? ${objectPronoun(item)} compro (io).`,
    );
  }),
  template("none-left", 8, () => {
    const {noun, plural} = pick(groceries);
    return plural
      ? line(`There aren't any ${noun.en} left.`, `Non ci sono più ${noun.it}.`)
      : line(`There isn't any ${noun.en} left.`, `Non c'è più ${noun.it}.`);
  }),
  template("amount-costs", 8, () => {
    const item = pick(groceries.filter((g) => !g.counted));
    const n = between(2, 9);
    return line(
      `${item.enUnit} of ${item.noun.en} costs ${n} euros.`,
      `${amountOf(item)} costa ${numberWords(n)} euro.`,
    );
  }),
  template("how-much-food", 8, () => {
    const item = pick(groceries);
    return item.plural
      ? line(
          `How much are the ${item.noun.en}?`,
          `Quanto costano ${the(item.noun, true)}?`,
        )
      : line(
          `How much is the ${item.noun.en}?`,
          `Quanto costa ${the(item.noun)}?`,
        );
  }),
];
