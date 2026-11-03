import type {Lesson} from "../types";

// Nuovo Espresso 1, the lessons studied so far.
export const lessons: Lesson[] = [
  {
    number: 1,
    title: "Primi contatti",
    summary: "Greetings, names, nationalities, numbers 0–20",
  },
  {
    number: 2,
    title: "Io e gli altri",
    summary: "How are you, introductions, jobs, age, numbers to 100",
  },
  {
    number: 3,
    title: "Buon appetito!",
    summary: "Ordering at the bar and the restaurant",
  },
  {
    number: 4,
    title: "Tempo libero",
    summary: "Hobbies, days of the week, how often, telling the time",
  },
  {
    number: 5,
    title: "In albergo",
    summary: "Hotels, complaints, months and dates, numbers over 100",
  },
  {
    number: 6,
    title: "In giro per la città",
    summary: "Places in town, asking for and giving directions",
  },
  {
    number: 7,
    title: "Le vacanze",
    summary: "Talking about the past, holidays, weather and seasons",
  },
  {
    number: 8,
    title: "Fare la spesa",
    summary: "Groceries, quantities and shopping for food",
  },
  {
    number: 9,
    title: "Vita quotidiana",
    summary: "Your daily routine, how often you do things, wishes for holidays",
  },
  {
    number: 10,
    title: "La famiglia",
    summary: "Family members, what's whose, what you did last weekend",
  },
];

/** "1–10": the lessons the app covers, for labels. */
export const lessonRange = `${lessons[0].number}–${lessons[lessons.length - 1].number}`;
