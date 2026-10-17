import {create} from "zustand";
import {getQuestions} from "../data/questions";
import type {AnswerRecord, Question, TestResult} from "../types";

interface PracticeState {
  topicId: string | null;
  questions: Question[];
  index: number;
  answers: AnswerRecord[];
  startedAt: number;
  start: (topicId: string) => void;
  /** Records the answer for the current question. */
  answer: (record: AnswerRecord) => void;
  /** Moves to the next question. Returns the finished result after the last one. */
  next: () => TestResult | null;
}

export const usePracticeStore = create<PracticeState>()((set, get) => ({
  topicId: null,
  questions: [],
  index: 0,
  answers: [],
  startedAt: 0,
  start: (topicId) =>
    set({
      topicId,
      questions: getQuestions(topicId),
      index: 0,
      answers: [],
      startedAt: Date.now(),
    }),
  answer: (record) => set((state) => ({answers: [...state.answers, record]})),
  next: () => {
    const {index, questions, answers, topicId, startedAt} = get();
    if (index + 1 < questions.length) {
      set({index: index + 1});
      return null;
    }
    const result: TestResult = {
      id: crypto.randomUUID(),
      topicId: topicId ?? "",
      finishedAt: new Date().toISOString(),
      durationSec: Math.round((Date.now() - startedAt) / 1000),
      answers,
    };
    set({topicId: null, questions: [], index: 0, answers: []});
    return result;
  },
}));
