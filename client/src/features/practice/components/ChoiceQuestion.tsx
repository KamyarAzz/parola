import {optionState} from "../../../lib/grade";
import type {ChoiceQuestion as Question} from "../../../types";
import ChoiceOption from "./ChoiceOption";
import GapSentence from "./GapSentence";
import QuestionTitle from "./QuestionTitle";

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

      <fieldset className="grid gap-2.5 md:grid-cols-2 md:gap-3">
        <legend className="sr-only">Options</legend>
        {question.options.map((option, i) => (
          <ChoiceOption
            key={option}
            name={question.id}
            option={option}
            number={i + 1}
            state={optionState(option, question.answer, selected, checked)}
            disabled={checked}
            onSelect={onSelect}
          />
        ))}
      </fieldset>
    </>
  );
}
