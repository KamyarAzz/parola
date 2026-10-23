import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {gradeAnswer, skippedAnswer} from "../../../lib/grade";
import {getPracticeSet} from "../../../lib/practiceSets";
import {usePracticeStore} from "../../../stores/practiceStore";
import {useResultsStore} from "../../../stores/resultsStore";
import type {AnswerRecord, Question} from "../../../types";

/** The sentence a sentence question will be graded on. */
function sentenceText(
  question: Question | undefined,
  tileMode: boolean,
  picked: number[],
  typed: string,
) {
  if (question?.kind !== "sentence" || !tileMode) return typed;
  return picked.map((i) => question.tiles[i]).join(" ");
}

/** State and actions for one practice test. */
export default function usePracticeSession(practiceId: string) {
  const practiceSet = getPracticeSet(practiceId);
  const navigate = useNavigate();
  const {
    topicId: activeId,
    questions,
    index,
    start,
    answer,
    next,
  } = usePracticeStore();
  const addResult = useResultsStore((s) => s.addResult);

  // Learner's response to the current question
  const [picked, setPicked] = useState<number[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [tileMode, setTileMode] = useState(false);
  const [checked, setChecked] = useState<AnswerRecord | null>(null);

  const found = practiceSet !== undefined;
  useEffect(() => {
    if (found && activeId !== practiceId) start(practiceId);
  }, [found, practiceId, activeId, start]);

  const question = activeId === practiceId ? questions[index] : undefined;
  const text = sentenceText(question, tileMode, picked, typed);
  const usesBank =
    question?.kind === "translate" ||
    (question?.kind === "sentence" && tileMode);

  const record = (result: AnswerRecord) => {
    answer(result);
    setChecked(result);
  };

  const proceed = () => {
    const result = next();
    setPicked([]);
    setSelected(null);
    setTyped("");
    setChecked(null);
    if (result) {
      addResult(result);
      navigate(`/results/${result.id}`, {
        replace: true,
        state: {justFinished: true},
      });
    }
  };

  const check = () => {
    if (!question || checked) return;
    record(gradeAnswer(question, {picked, selected, text}));
  };

  return {
    practiceSet,
    question,
    position: index + 1,
    total: questions.length,
    progress: questions.length
      ? ((index + (checked ? 1 : 0)) / questions.length) * 100
      : 0,
    picked,
    selected,
    typed,
    tileMode,
    checked,
    hasResponse: usesBank
      ? picked.length > 0
      : question?.kind === "sentence"
        ? typed.trim() !== ""
        : selected !== null,
    pick: (wordIndex: number) => setPicked((p) => [...p, wordIndex]),
    remove: (position: number) =>
      setPicked((p) => p.filter((_, i) => i !== position)),
    select: setSelected,
    type: setTyped,
    toggleTiles: () => {
      setTileMode((on) => !on);
      setPicked([]);
    },
    check,
    skip: () => question && record(skippedAnswer(question)),
    proceed,
  };
}

export type PracticeSession = ReturnType<typeof usePracticeSession>;
