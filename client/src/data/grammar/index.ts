import type {
  GrammarCategory,
  GrammarGrouping,
  GroupingOption,
} from "../../types";
import {grammarLessons1to4} from "./lessons1to4";
import {grammarLessons5to8} from "./lessons5to8";

// Grammar from Nuovo Espresso 1, lessons 1–8, kept to short summaries.
export const grammarPoints = [...grammarLessons1to4, ...grammarLessons5to8];

export const grammarCategories: GrammarCategory[] = [
  {id: "articles", title: "Articles", italian: "Gli articoli"},
  {id: "nouns", title: "Nouns & adjectives", italian: "Nomi e aggettivi"},
  {id: "verbs", title: "Verbs", italian: "I verbi"},
  {id: "prepositions", title: "Prepositions", italian: "Le preposizioni"},
  {id: "pronouns", title: "Pronouns", italian: "I pronomi"},
  {id: "phrases", title: "Useful structures", italian: "Espressioni"},
];

export const grammarGroupings: GroupingOption<GrammarGrouping>[] = [
  {value: "lesson", label: "By lesson"},
  {value: "category", label: "By area"},
];
