import type {
  GroupingOption,
  ScenarioFormatInfo,
  SentenceGrouping,
} from "../../types";
import {scenariosLessons1to4} from "./lessons1to4";
import {scenariosLessons5to8} from "./lessons5to8";

// Sentence practice for Nuovo Espresso 1, lessons 1–8.
export const scenarios = [...scenariosLessons1to4, ...scenariosLessons5to8];

export const scenarioFormats: ScenarioFormatInfo[] = [
  {id: "dialogue", title: "Dialogues", italian: "Dialoghi"},
  {id: "text", title: "Short texts", italian: "Testi"},
  {id: "drill", title: "Sentence drills", italian: "Frasi"},
];

export const sentenceGroupings: GroupingOption<SentenceGrouping>[] = [
  {value: "lesson", label: "By lesson"},
  {value: "format", label: "By type"},
];
