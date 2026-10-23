import {Navigate, useParams} from "react-router";
import CheckBar from "../components/check-bar/CheckBar";
import FeedbackBar from "../components/feedback/FeedbackBar";
import PracticeHeader from "../components/header/PracticeHeader";
import QuestionView from "../components/question/QuestionView";
import usePracticeSession from "../hooks/usePracticeSession";

export default function PracticePage() {
  const {topicId = ""} = useParams();
  const session = usePracticeSession(topicId);
  const {practiceSet, question, checked} = session;

  if (!practiceSet) return <Navigate to="/" replace />;
  if (!question) return null;

  return (
    <div className="flex min-h-dvh flex-col bg-surface">
      <PracticeHeader
        exitTo={practiceSet.home}
        progress={session.progress}
        position={session.position}
        total={session.total}
      />

      <main className="flex-1 px-5 pt-3 pb-5 md:px-8 md:pt-6 md:pb-10">
        <QuestionView
          question={question}
          title={practiceSet.title}
          session={session}
        />
      </main>

      {checked ? (
        <FeedbackBar
          record={checked}
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
