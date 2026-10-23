import {Navigate, useParams} from "react-router";
import CheckBar from "../components/check-bar/CheckBar";
import FeedbackBar from "../components/feedback/FeedbackBar";
import PracticeHeader from "../components/header/PracticeHeader";
import QuestionView from "../components/question/QuestionView";
import usePracticeSession from "../hooks/usePracticeSession";

export default function PracticePage() {
  const {topicId = ""} = useParams();
  const session = usePracticeSession(topicId);
  const {topic, question, checked} = session;

  if (!topic) return <Navigate to="/" replace />;
  if (!question) return null;

  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <PracticeHeader
        progress={session.progress}
        position={session.position}
        total={session.total}
      />

      <main className="flex-1 px-5 pt-3 pb-5 md:px-8 md:pt-6 md:pb-10">
        <QuestionView
          question={question}
          topicTitle={topic.title}
          picked={session.picked}
          selected={session.selected}
          checked={checked !== null}
          onPick={session.pick}
          onRemove={session.remove}
          onSelect={session.select}
        />
      </main>

      {checked ? (
        <FeedbackBar
          correct={checked.correct}
          expected={checked.expected}
          explanation={
            question.kind === "choice" ? question.explanation : undefined
          }
          onContinue={session.proceed}
        />
      ) : (
        <CheckBar
          canCheck={session.hasResponse}
          onCheck={session.check}
          onSkip={session.skip}
        />
      )}
    </div>
  );
}
