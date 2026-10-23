import Eyebrow from "../../../../components/Eyebrow";
import {questionLabel} from "../../../../lib/grade";
import type {Question} from "../../../../types";
import ChoiceQuestion from "../choice/ChoiceQuestion";
import TranslateQuestion from "../translate/TranslateQuestion";
import WordQuestion from "../word/WordQuestion";

interface QuestionViewProps {
  question: Question;
  topicTitle: string;
  picked: number[];
  selected: string | null;
  /** True once the answer has been checked */
  checked: boolean;
  onPick: (wordIndex: number) => void;
  onRemove: (position: number) => void;
  onSelect: (option: string) => void;
}

/** Shows the current question, whichever kind it is. */
export default function QuestionView({
  question,
  topicTitle,
  picked,
  selected,
  checked,
  onPick,
  onRemove,
  onSelect,
}: QuestionViewProps) {
  return (
    <div className="mx-auto flex max-w-180 flex-col gap-5 md:gap-8">
      <Eyebrow className="-mb-3 md:-mb-6">
        {topicTitle} · {questionLabel(question.kind)}
      </Eyebrow>
      {question.kind === "translate" && (
        <TranslateQuestion
          key={question.id}
          question={question}
          picked={picked}
          locked={checked}
          onPick={onPick}
          onRemove={onRemove}
        />
      )}
      {question.kind === "choice" && (
        <ChoiceQuestion
          key={question.id}
          question={question}
          selected={selected}
          checked={checked}
          onSelect={onSelect}
        />
      )}
      {question.kind === "word" && (
        <WordQuestion
          key={question.id}
          question={question}
          selected={selected}
          checked={checked}
          onSelect={onSelect}
        />
      )}
    </div>
  );
}
