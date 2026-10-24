import {create} from "zustand";
import {persist} from "zustand/middleware";
import type {TestResult} from "../types";

interface ResultsState {
  results: TestResult[];
  addResult: (result: TestResult) => void;
}

/** Tests from Words, Verbs, Grammar or Sentences; anything else was sample data. */
const REAL_PRACTICE = /^(words|verbs|grammar|sentences|review)(-|$)/;

// Kept in localStorage until results are saved on the server.
export const useResultsStore = create<ResultsState>()(
  persist(
    (set) => ({
      results: [],
      addResult: (result) =>
        set((state) => ({results: [result, ...state.results]})),
    }),
    {
      name: "parola-results",
      version: 1,
      // Version 1 dropped the sample tests and the sample topics they used
      migrate: (persisted, version) => {
        const state = persisted as ResultsState;
        if (version >= 1) return state;
        return {
          ...state,
          results: state.results.filter((r) => REAL_PRACTICE.test(r.topicId)),
        };
      },
    },
  ),
);
