import {withPreposition} from "./articles";
import {numberWords} from "./numbers";

export interface ClockTime {
  hour: number;
  minutes: 0 | 15 | 30 | 45;
}

/** "3:15" for the English prompt. */
export const clockText = ({hour, minutes}: ClockTime) =>
  `${hour}:${String(minutes).padStart(2, "0")}`;

const minuteWords: Record<ClockTime["minutes"], string> = {
  0: "",
  15: " e [un quarto|quindici]",
  30: " e [mezza|mezzo|trenta]",
  45: " e [tre quarti|quarantacinque]",
};

/** Ways to say the hour: "is" (è l'una / sono le tre) and "at" (all'una / alle tre). */
function hourForms(hour: number) {
  if (hour === 1) return {is: ["è l'una"], at: ["all'una"]};
  const words = numberWords(hour);
  if (hour === 12) {
    return {
      is: ["è mezzogiorno", "sono le dodici"],
      at: ["a mezzogiorno", "alle dodici"],
    };
  }
  return {is: [`sono le ${words}`], at: [`alle ${words}`]};
}

function timePattern(time: ClockTime, kind: "is" | "at") {
  const exact = hourForms(time.hour)[kind].map(
    (h) => h + minuteWords[time.minutes],
  );
  // 3:45 can also be "le quattro meno un quarto"
  const next = (time.hour % 12) + 1;
  const before =
    time.minutes === 45
      ? hourForms(next)[kind].map((h) => `${h} meno un quarto`)
      : [];
  return `[${[...exact, ...before].join("|")}]`;
}

/** "È l'una e mezza", "Sono le tre e un quarto", as a pattern. */
export const timeIs = (time: ClockTime) => timePattern(time, "is");

/** "all'una", "alle tre e un quarto", as a pattern. */
export const atTime = (time: ClockTime) => timePattern(time, "at");

/** The day of the month in words: 1 → primo, 8 → otto. */
export const dayWords = (day: number) =>
  day === 1 ? "primo" : numberWords(day);

/** "il tre maggio", "l'otto maggio", "il primo maggio". */
export const onDate = (day: number, month: string) => {
  const word = dayWords(day);
  const article = /^[aeiou]/.test(word) ? "l'" : "il ";
  return `${article}${word} ${month}`;
};

/** "dal tre al cinque", "dall'otto all'undici". */
export const fromTo = (start: number, end: number) =>
  `${withPreposition("da", dayWords(start), "m")} ${withPreposition(
    "a",
    dayWords(end),
    "m",
  )}`;
