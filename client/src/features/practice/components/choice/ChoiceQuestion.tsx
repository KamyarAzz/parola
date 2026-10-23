import type {ChoiceQuestion as Question} from "../../../../types";
import ChoiceOptions from "./ChoiceOptions";
import GapSentence from "./GapSentence";
import QuestionTitle from "../question/QuestionTitle";

interface ChoiceQuestionProps {
  question: Question;
  selected: string | null;
  onSelect: (option: string) => void;
  /** True once the answer has been checked */
  checked: boolean;
}

export default function ChoiceQuestion({
  question,
  selected,
  onSelect,
  checked,
}: ChoiceQuestionProps) {
  return (
    <>
      <QuestionTitle>Choose the right word</QuestionTitle>

      <GapSentence
        sentence={question.sentence}
        filled={selected}
        state={
          !checked ? "idle" : selected === question.answer ? "correct" : "wrong"
        }
      />

      <ChoiceOptions
        name={question.id}
        options={question.options}
        answer={question.answer}
        selected={selected}
        checked={checked}
        onSelect={onSelect}
      />
    </>
  );
}
