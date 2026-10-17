import {X} from "lucide-react";
import {useEffect, useState} from "react";
import {Link, Navigate, useNavigate, useParams} from "react-router";
import {buttonClass} from "../../../components/button";
import {ProgressBar} from "../../../components/ProgressBar";
import {getTopic} from "../../../data/topics";
import {usePracticeStore} from "../../../stores/practiceStore";
import {useResultsStore} from "../../../stores/resultsStore";
import type {AnswerRecord, Question} from "../../../types";
import {ChoiceQuestion} from "../components/ChoiceQuestion";
import {FeedbackBar} from "../components/FeedbackBar";
import {TranslateQuestion} from "../components/TranslateQuestion";

function grade(question: Question, picked: number[], selected: string | null): AnswerRecord {
  if (question.kind === "translate") {
    const given = picked.map((i) => question.words[i]).join(" ");
    const expected = question.answer.join(" ");
    return {questionId: question.id, kind: question.kind, prompt: question.prompt, given, expected, correct: given === expected};
  }
  return {
    questionId: question.id,
    kind: question.kind,
    prompt: question.sentence,
    given: selected ?? "",
    expected: question.answer,
    correct: selected === question.answer,
  };
}

export function PracticePage() {
  const {topicId = ""} = useParams();
  const topic = getTopic(topicId);
  const navigate = useNavigate();
  const {topicId: activeTopic, questions, index, start, answer, next} = usePracticeStore();
  const addResult = useResultsStore((s) => s.addResult);

  // Learner's response to the current question
  const [picked, setPicked] = useState<number[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState<AnswerRecord | null>(null);

  useEffect(() => {
    if (topic && activeTopic !== topicId) start(topicId);
  }, [topic, topicId, activeTopic, start]);

  if (!topic) return <Navigate to="/" replace />;

  const question = activeTopic === topicId ? questions[index] : undefined;
  if (!question) return null;

  const hasResponse = question.kind === "translate" ? picked.length > 0 : selected !== null;
  const progress = ((index + (checked ? 1 : 0)) / questions.length) * 100;

  const check = () => {
    const record = grade(question, picked, selected);
    answer(record);
    setChecked(record);
  };

  const skip = () => {
    const record = {...grade(question, [], null), given: "", correct: false};
    answer(record);
    setChecked(record);
  };

  const proceed = () => {
    const result = next();
    setPicked([]);
    setSelected(null);
    setChecked(null);
    if (result) {
      addResult(result);
      navigate(`/results/${result.id}`, {replace: true, state: {justFinished: true}});
    }
  };

  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <header className="px-4 py-3.5 md:px-8 md:py-5">
        <div className="mx-auto flex max-w-[960px] items-center gap-3 md:gap-5">
          <Link
            to="/"
            aria-label="Quit practice"
            className="flex size-11 shrink-0 items-center justify-center rounded-[10px] text-muted hover:bg-ground"
          >
            <X aria-hidden size={22} />
          </Link>
          <ProgressBar value={progress} size="lg" label="Test progress" className="flex-1" />
          <span className="shrink-0 text-sm font-semibold text-muted tabular-nums md:text-[15px]">
            {index + 1} / {questions.length}
          </span>
        </div>
      </header>

      <main className="flex-1 px-5 pt-3 pb-5 md:px-8 md:pt-6 md:pb-10">
        <div className="mx-auto flex max-w-[720px] flex-col gap-5 md:gap-8">
          <span className="-mb-3 text-xs font-semibold tracking-wider text-muted uppercase md:-mb-6 md:text-[13px]">
            {topic.title} · {question.kind === "translate" ? "Translate" : "Fill the gap"}
          </span>

          {question.kind === "translate" ? (
            <TranslateQuestion
              key={question.id}
              question={question}
              picked={picked}
              locked={checked !== null}
              onPick={(i) => setPicked((p) => [...p, i])}
              onRemove={(pos) => setPicked((p) => p.filter((_, j) => j !== pos))}
            />
          ) : (
            <ChoiceQuestion
              key={question.id}
              question={question}
              selected={selected}
              onSelect={setSelected}
              checked={checked !== null}
            />
          )}
        </div>
      </main>

      {checked ? (
        <FeedbackBar
          correct={checked.correct}
          expected={checked.expected}
          explanation={question.kind === "choice" ? question.explanation : undefined}
          onContinue={proceed}
        />
      ) : (
        <footer className="border-t border-line px-5 pt-4 pb-7 md:px-8 md:py-6">
          <div className="mx-auto flex max-w-[960px] flex-col gap-2.5 md:flex-row-reverse md:items-center md:justify-between">
            <button
              type="button"
              disabled={!hasResponse}
              onClick={check}
              className={buttonClass("primary", "lg", "h-[52px] md:h-12 md:px-10")}
            >
              Check
            </button>
            <button
              type="button"
              onClick={skip}
              className={buttonClass("secondary", "lg", "max-md:h-11 max-md:border-0 max-md:text-muted")}
            >
              Skip
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
