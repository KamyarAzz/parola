import type {SectionInfo} from "../types";

/** The parts of the app you can practise, in the order they're shown. */
export const sections: SectionInfo[] = [
  {id: "words", title: "Words", path: "/words", unit: "words"},
  {id: "verbs", title: "Verbs", path: "/verbs", unit: "verbs"},
  {id: "grammar", title: "Grammar", path: "/grammar", unit: "topics"},
  {id: "sentences", title: "Sentences", path: "/sentences", unit: "situations"},
];
