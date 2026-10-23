import SpeakButton from "../../../../components/SpeakButton";
import type {WordQuestion as Question} from "../../../../types";
import ChoiceOptions from "../choice/ChoiceOptions";
import QuestionTitle from "../question/QuestionTitle";

interface WordQuestionProps {
  question: Question;
  selected: string | null;
  onSelect: (option: string) => void;
  /** True once the answer has been checked */
  checked: boolean;
}

export default function WordQuestion({
  question,
  selected,
  onSelect,
  checked,
}: WordQuestionProps) {
  const fromItalian = question.lang === "it";

  return (
    <>
      <QuestionTitle>
        {fromItalian
          ? "What does this mean?"
          : "How do you say this in Italian?"}
      </QuestionTitle>

      <div className="flex items-center justify-center gap-3 rounded-2xl bg-ground px-4 py-6 md:gap-4 md:py-9">
        {fromItalian && <SpeakButton text={question.prompt} />}
        <p
          lang={question.lang}
          className="text-[24px] font-semibold tracking-tight md:text-[30px]"
        >
          {question.prompt}
        </p>
      </div>

      <ChoiceOptions
        name={question.id}
        options={question.options}
        answer={question.answer}
        selected={selected}
        checked={checked}
        onSelect={onSelect}
        lang={fromItalian ? "en" : "it"}
      />
    </>
  );
}
