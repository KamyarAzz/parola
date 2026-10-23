import {optionState} from "../../../../lib/grade";
import ChoiceOption from "./ChoiceOption";

interface ChoiceOptionsProps {
  /** Radio group name */
  name: string;
  options: string[];
  answer: string;
  selected: string | null;
  /** True once the answer has been checked */
  checked: boolean;
  onSelect: (option: string) => void;
  /** Language of the options */
  lang?: "it" | "en";
}

/** The grid of answers for a multiple-choice question. */
export default function ChoiceOptions({
  name,
  options,
  answer,
  selected,
  checked,
  onSelect,
  lang = "it",
}: ChoiceOptionsProps) {
  return (
    <fieldset className="grid gap-2.5 md:grid-cols-2 md:gap-3">
      <legend className="sr-only">Options</legend>
      {options.map((option, i) => (
        <ChoiceOption
          key={option}
          name={name}
          option={option}
          lang={lang}
          number={i + 1}
          state={optionState(option, answer, selected, checked)}
          disabled={checked}
          onSelect={onSelect}
        />
      ))}
    </fieldset>
  );
}
