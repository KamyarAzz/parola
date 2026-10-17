import type {FocusArea, Topic} from "../types";

// Sample data until the server is ready.
export const topics: Topic[] = [
  {id: "greetings", title: "Greetings & Basics", italian: "Saluti", category: "Vocabulary", level: "A1", mastery: 92},
  {id: "food", title: "Food & Ordering", italian: "Al ristorante", category: "Vocabulary", level: "A1", mastery: 74},
  {id: "numbers", title: "Numbers & Time", italian: "Numeri e orari", category: "Vocabulary", level: "A1", mastery: 64},
  {id: "articles", title: "Articles & Gender", italian: "Gli articoli", category: "Grammar", level: "A1", mastery: 81},
  {id: "family", title: "Family & People", italian: "La famiglia", category: "Vocabulary", level: "A1", mastery: 40},
  {id: "present", title: "Present Tense", italian: "Il presente", category: "Grammar", level: "A2", mastery: 67},
  {id: "travel", title: "Travel & Directions", italian: "In viaggio", category: "Vocabulary", level: "A2", mastery: 54, needsReview: true},
  {id: "shopping", title: "Shopping", italian: "Fare la spesa", category: "Vocabulary", level: "A2", mastery: 57, needsReview: true},
  {id: "past", title: "Past Tense", italian: "Passato prossimo", category: "Grammar", level: "A2", mastery: 48},
  {id: "work", title: "Work & Study", italian: "Lavoro e studio", category: "Vocabulary", level: "B1", mastery: 12},
  {id: "reflexive", title: "Reflexive Verbs", italian: "Verbi riflessivi", category: "Grammar", level: "B1", mastery: 0},
  {id: "imperfect", title: "Imperfect Tense", italian: "L'imperfetto", category: "Grammar", level: "B1", mastery: 0},
];

export const levels = ["A1", "A2", "B1"] as const;

export function getTopic(id: string | undefined) {
  return topics.find((t) => t.id === id);
}

export const focusAreas: FocusArea[] = [
  {
    id: "past-essere",
    title: "Passato prossimo with essere",
    detail: "Choosing essere vs avere, and agreeing the participle (sono andata).",
    topicId: "past",
    accuracy: 52,
    mistakes: 9,
  },
  {
    id: "plural-articles",
    title: "Plural articles: gli / le / i",
    detail: "Mixing up gli and le with feminine plural nouns.",
    topicId: "articles",
    accuracy: 61,
    mistakes: 6,
  },
  {
    id: "directions",
    title: "Directions vocabulary",
    detail: "a destra, a sinistra, dritto, all’incrocio.",
    topicId: "travel",
    accuracy: 54,
    mistakes: 5,
  },
  {
    id: "numbers-100",
    title: "Numbers above 100",
    detail: "Writing and hearing prices like centoventi, duecentocinquanta.",
    topicId: "numbers",
    accuracy: 64,
    mistakes: 4,
  },
];
