import Eyebrow from "../../../../components/Eyebrow";
import {questionLabel} from "../../../../lib/grade";
import type {Question} from "../../../../types";
import type {PracticeSession} from "../../hooks/usePracticeSession";
import ChoiceQuestion from "../choice/ChoiceQuestion";
import SentenceQuestion from "../sentence/SentenceQuestion";
import TranslateQuestion from "../translate/TranslateQuestion";
import WordQuestion from "../word/WordQuestion";

interface QuestionViewProps {
  question: Question;
  title: string;
  session: PracticeSession;
}

/** Shows the current question, whichever kind it is. */
export default function QuestionView({
  question,
  title,
  session,
}: QuestionViewProps) {
  const checked = session.checked !== null;

  return (
    <div className="mx-auto flex max-w-180 flex-col gap-5 md:gap-8">
      <Eyebrow className="-mb-3 md:-mb-6">
        {title} · {questionLabel(question.kind)}
      </Eyebrow>
      {question.kind === "translate" && (
        <TranslateQuestion
          key={question.id}
          question={question}
          picked={session.picked}
          locked={checked}
          onPick={session.pick}
          onRemove={session.remove}
          onArrange={session.arrange}
        />
      )}
      {question.kind === "choice" && (
        <ChoiceQuestion
          key={question.id}
          question={question}
          selected={session.selected}
          checked={checked}
          onSelect={session.select}
        />
      )}
      {question.kind === "word" && (
        <WordQuestion
          key={question.id}
          question={question}
          selected={session.selected}
          checked={checked}
          onSelect={session.select}
        />
      )}
      {question.kind === "sentence" && (
        <SentenceQuestion
          key={question.id}
          question={question}
          session={session}
        />
      )}
    </div>
  );
}
