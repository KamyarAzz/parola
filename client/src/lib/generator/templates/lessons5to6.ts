import {modalActions, modals} from "../../../data/generator/actions";
import {cities} from "../../../data/generator/people";
import {months, places, roomThings} from "../../../data/generator/things";
import {a, prepThe, the} from "../../italian/articles";
import {numberWords} from "../../italian/numbers";
import {fromTo, onDate} from "../../italian/time";
import {between, pick, pickTwo} from "../../random";
import {enA, line, template} from "../line";
import {anySubject, enVerb, itSubject, present} from "../subjects";

/** Where one place is compared to another. */
/** With a feminine place, vicino / lontano may also agree: vicina, lontana. */
const relations = [
  {en: "next to", m: "accanto", f: "accanto", prep: "a"},
  {en: "opposite", m: "di fronte", f: "di fronte", prep: "a"},
  {en: "near", m: "vicino", f: "[vicino|vicina]", prep: "a"},
  {en: "far from", m: "lontano", f: "[lontano|lontana]", prep: "da"},
] as const;

/** Places a town can have many of. */
const manyOf = [
  "chiesa",
  "museo",
  "piazza",
  "parco",
  "teatro",
  "albergo",
  "banca",
];

const cityAdjectives = [
  {en: "small", it: "piccola", before: true},
  {en: "big", it: "grande", before: true},
  {en: "beautiful", it: "bella", before: true},
  {en: "old", it: "[antica|vecchia]", before: false},
  {en: "modern", it: "moderna", before: false},
  {en: "quiet", it: "tranquilla", before: false},
  {en: "lively", it: "vivace", before: false},
];

export const lessons5to6 = [
  // Lezione 5
  template("is-there-in-room", 5, () => {
    const thing = pick(roomThings);
    const where = "[in camera|nella camera]";
    if (thing.pl && Math.random() < 0.5) {
      const n = between(2, 4);
      return line(`There are ${n} ${thing.enPl} in the room.`, [
        `Ci sono ${numberWords(n)} ${thing.pl} ${where}.`,
        `${where} ci sono ${numberWords(n)} ${thing.pl}.`,
      ]);
    }
    return line(`Is there ${enA(thing.en)} in the room?`, [
      `C'è ${a(thing)} ${where}?`,
      `${where} c'è ${a(thing)}?`,
    ]);
  }),
  template("no-thing-in-room", 5, () => {
    const thing = pick(roomThings);
    const what = `[${the(thing)}|${a(thing)}]`;
    return line(`There's no ${thing.en} in the room.`, [
      `Non c'è ${what} [in camera|nella camera].`,
      `[In camera|Nella camera] non c'è ${what}.`,
    ]);
  }),
  template("modal", 5, () => {
    const s = anySubject();
    const modal = pick(modals);
    const action = pick(modalActions);
    return line(
      `${s.en} ${enVerb(s, modal.en)} ${action.en}.`,
      `${itSubject(s)} ${present(modal.verb, s.person)} ${action.it}.`,
    );
  }),
  template("arrives-on", 5, () => {
    const s = anySubject();
    const day = between(1, 28);
    const month = pick(months);
    return line(
      `${s.en} ${enVerb(s, {base: "arrive", third: "arrives"})} on ${day} ${month.en}.`,
      `${itSubject(s)} ${present("arrivare", s.person)} ${onDate(day, month.it)}.`,
    );
  }),
  template("free-from-to", 5, () => {
    const start = between(1, 20);
    const end = start + between(2, 7);
    const month = pick(months);
    return line(
      `The room is free from ${start} to ${end} ${month.en}.`,
      `La camera è libera ${fromTo(start, end)} ${month.it}.`,
    );
  }),
  template("book-nights", 5, () => {
    const size = pick([
      {en: "single", it: "singola"},
      {en: "double", it: "doppia"},
    ]);
    const nights = between(2, 9);
    return line(
      `I'd like to book a ${size.en} room for ${nights} nights.`,
      `Vorrei prenotare una camera ${size.it} per ${numberWords(nights)} notti.`,
    );
  }),

  // Lezione 6
  template("where-is-place", 6, () => {
    const [place, other] = pickTwo(places);
    const rel = pick(relations);
    return line(
      `The ${place.en} is ${rel.en} the ${other.en}.`,
      `${the(place)} è ${rel[place.g]} ${prepThe(rel.prep, other)}.`,
    );
  }),
  template("between", 6, () => {
    const [place, left] = pickTwo(places);
    const right = pick(places.filter((p) => p !== place && p !== left));
    return line(
      `The ${place.en} is between the ${left.en} and the ${right.en}.`,
      `${the(place)} è [tra|fra] ${the(left)} e ${the(right)}.`,
    );
  }),
  template("is-there-near", 6, () => {
    const place = pick(places);
    return line(
      `Excuse me, is there ${enA(place.en)} near here?`,
      `Scusi, c'è ${a(place)} [qui|qua] vicino?`,
    );
  }),
  template("directions", 6, () => {
    const side = pick([
      {en: "left", it: "sinistra"},
      {en: "right", it: "destra"},
    ]);
    const at = pick([
      {en: "at the traffic lights", it: "al semaforo"},
      {en: "at the crossroads", it: "all'incrocio"},
    ]);
    return line(
      `You go straight on, then you turn ${side.en} ${at.en}.`,
      `[(Tu) vai dritto e poi giri|(Lei) va dritto e poi gira] a ${side.it} ${at.it}.`,
    );
  }),
  template("many-places", 6, () => {
    const city = pick(cities);
    const place = pick(places.filter((p) => manyOf.includes(p.it)));
    const many = place.g === "f" ? "[molte|tante]" : "[molti|tanti]";
    return line(`In ${city.en} there are many ${place.enPl}.`, [
      `A ${city.it} ci sono ${many} ${place.pl}.`,
      `Ci sono ${many} ${place.pl} a ${city.it}.`,
    ]);
  }),
  template("city-is", 6, () => {
    const city = pick(cities);
    const adj = pick(cityAdjectives);
    const after = `${city.it} è una città ${adj.it}.`;
    // piccola, grande, bella sound more natural before the noun
    const answers = adj.before
      ? [`${city.it} è una ${adj.it} città.`, after]
      : [after];
    return line(`${city.en} is ${enA(adj.en)} city.`, answers);
  }),
];
