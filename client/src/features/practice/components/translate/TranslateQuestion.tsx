import SpeakButton from "../../../../components/SpeakButton";
import type {TranslateQuestion as Question} from "../../../../types";
import QuestionTitle from "../question/QuestionTitle";
import WordBank from "./WordBank";

interface TranslateQuestionProps {
  question: Question;
  /** Indexes into question.words, in the order the learner picked them */
  picked: number[];
  onPick: (wordIndex: number) => void;
  onRemove: (position: number) => void;
  onArrange: (picked: number[]) => void;
  locked: boolean;
}

export default function TranslateQuestion({
  question,
  picked,
  onPick,
  onRemove,
  onArrange,
  locked,
}: TranslateQuestionProps) {
  return (
    <>
      <QuestionTitle>Translate this sentence</QuestionTitle>

      <div className="flex items-start gap-3 md:items-center md:gap-4">
        <SpeakButton text={question.prompt} />
        <p
          lang="it"
          className="text-[19px] leading-snug font-medium md:text-2xl"
        >
          {question.prompt}
        </p>
      </div>

      <WordBank
        words={question.words}
        picked={picked}
        onPick={onPick}
        onRemove={onRemove}
        onArrange={onArrange}
        locked={locked}
      />
    </>
  );
}
