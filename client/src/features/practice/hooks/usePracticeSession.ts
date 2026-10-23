import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {getPracticeSet} from "../../../lib/practiceSets";
import {gradeAnswer, skippedAnswer} from "../../../lib/grade";
import {usePracticeStore} from "../../../stores/practiceStore";
import {useResultsStore} from "../../../stores/resultsStore";
import type {AnswerRecord} from "../../../types";

/** State and actions for one practice test on a topic or word group. */
export default function usePracticeSession(topicId: string) {
  const practiceSet = getPracticeSet(topicId);
  const navigate = useNavigate();
  const {
    topicId: activeTopic,
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
  const [checked, setChecked] = useState<AnswerRecord | null>(null);

  const found = practiceSet !== undefined;
  useEffect(() => {
    if (found && activeTopic !== topicId) start(topicId);
  }, [found, topicId, activeTopic, start]);

  const question = activeTopic === topicId ? questions[index] : undefined;

  const record = (result: AnswerRecord) => {
    answer(result);
    setChecked(result);
  };

  const proceed = () => {
    const result = next();
    setPicked([]);
    setSelected(null);
    setChecked(null);
    if (result) {
      addResult(result);
      navigate(`/results/${result.id}`, {
        replace: true,
        state: {justFinished: true},
      });
    }
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
    checked,
    hasResponse:
      question?.kind === "translate" ? picked.length > 0 : selected !== null,
    pick: (wordIndex: number) => setPicked((p) => [...p, wordIndex]),
    remove: (position: number) =>
      setPicked((p) => p.filter((_, i) => i !== position)),
    select: setSelected,
    check: () => question && record(gradeAnswer(question, picked, selected)),
    skip: () => question && record(skippedAnswer(question)),
    proceed,
  };
}
