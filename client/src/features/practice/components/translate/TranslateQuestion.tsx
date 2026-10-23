import type {TranslateQuestion as Question} from "../../../../types";
import AnswerLines from "./AnswerLines";
import QuestionTitle from "../question/QuestionTitle";
import SpeakButton from "../../../../components/SpeakButton";
import WordTile from "./WordTile";

interface TranslateQuestionProps {
  question: Question;
  /** Indexes into question.words, in the order the learner picked them */
  picked: number[];
  onPick: (wordIndex: number) => void;
  onRemove: (position: number) => void;
  locked: boolean;
}

export default function TranslateQuestion({
  question,
  picked,
  onPick,
  onRemove,
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

      <AnswerLines>
        {picked.map((wordIndex, position) => (
          <WordTile
            key={`${wordIndex}-${position}`}
            word={question.words[wordIndex]}
            disabled={locked}
            onClick={() => onRemove(position)}
          />
        ))}
      </AnswerLines>

      <div
        aria-label="Word bank"
        className="flex flex-wrap justify-center gap-2 md:gap-2.5"
      >
        {question.words.map((word, i) => (
          <WordTile
            key={i}
            word={word}
            used={picked.includes(i)}
            disabled={locked}
            onClick={() => onPick(i)}
          />
        ))}
      </div>
    </>
  );
}
