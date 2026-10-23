import type {SentenceQuestion as Question} from "../../../../types";
import type {PracticeSession} from "../../hooks/usePracticeSession";
import QuestionTitle from "../question/QuestionTitle";
import WordBank from "../translate/WordBank";
import InputModeToggle from "./InputModeToggle";
import SentenceCue from "./SentenceCue";
import SentenceInput from "./SentenceInput";
import SentencePrompt from "./SentencePrompt";

interface SentenceQuestionProps {
  question: Question;
  session: PracticeSession;
}

/** Say an English line in Italian, typed or built from tiles. */
export default function SentenceQuestion({
  question,
  session,
}: SentenceQuestionProps) {
  const locked = session.checked !== null;

  return (
    <>
      <QuestionTitle>How do you say this in Italian?</QuestionTitle>
      {question.cue && <SentenceCue cue={question.cue} />}
      <SentencePrompt prompt={question.prompt} hint={question.hint} />

      {session.tileMode ? (
        <WordBank
          words={question.tiles}
          picked={session.picked}
          onPick={session.pick}
          onRemove={session.remove}
          onArrange={session.arrange}
          locked={locked}
        />
      ) : (
        <SentenceInput
          value={session.typed}
          onChange={session.type}
          onSubmit={session.check}
          locked={locked}
        />
      )}

      {!locked && (
        <InputModeToggle
          tileMode={session.tileMode}
          onToggle={session.toggleTiles}
        />
      )}
    </>
  );
}
