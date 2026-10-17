import {create} from "zustand";
import {persist} from "zustand/middleware";
import {sampleResults} from "../data/results";
import type {TestResult} from "../types";

interface ResultsState {
  results: TestResult[];
  addResult: (result: TestResult) => void;
}

// Kept in localStorage until results are saved on the server.
export const useResultsStore = create<ResultsState>()(
  persist(
    (set) => ({
      results: sampleResults,
      addResult: (result) =>
        set((state) => ({results: [result, ...state.results]})),
    }),
    {name: "parola-results"},
  ),
);
