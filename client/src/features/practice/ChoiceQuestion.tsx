import type {ChoiceQuestion as Question} from "../../types";

interface Props {
  question: Question;
  selected: string | null;
  onSelect: (option: string) => void;
  /** Set once the answer has been checked */
  checked: boolean;
}

export function ChoiceQuestion({question, selected, onSelect, checked}: Props) {
  const [before, after] = question.sentence.split("___");
  const gapWrong = checked && selected !== question.answer;

  return (
    <>
      <h1 className="text-[22px] font-bold tracking-tight md:text-[28px]">Choose the right word</h1>

      <p lang="it" className="rounded-2xl bg-ground px-4 py-5 text-center text-[21px] font-medium md:px-6 md:py-7 md:text-[26px]">
        {before}
        <span
          className={`inline-block min-w-14 border-b-[3px] border-ink ${gapWrong ? "text-error" : checked ? "text-brand" : "text-ink"}`}
        >
          {selected ?? " "}
        </span>
        {after}
      </p>

      <fieldset className="grid gap-2.5 md:grid-cols-2 md:gap-3">
        <legend className="sr-only">Options</legend>
        {question.options.map((option, i) => {
          const isSelected = option === selected;
          const isAnswer = option === question.answer;
          let style = "border border-b-[3px] border-line bg-surface text-ink hover:border-line-strong";
          let note = "";
          if (checked && isAnswer) {
            style = "border-2 border-brand bg-brand-soft text-brand-dark";
            note = "Correct";
          } else if (checked && isSelected) {
            style = "border-2 border-error bg-error-soft text-error-ink";
            note = "Your answer";
          } else if (checked) {
            style = "border border-b-[3px] border-line bg-surface text-muted";
          } else if (isSelected) {
            style = "border-2 border-ink bg-surface text-ink";
          }

          return (
            <label
              key={option}
              className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-[14px] px-4 text-[17px] font-semibold has-focus-visible:outline-2 has-focus-visible:outline-brand md:min-h-16 md:gap-3.5 md:text-lg ${style} ${checked ? "cursor-default" : ""}`}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={isSelected}
                disabled={checked}
                onChange={() => onSelect(option)}
                className="sr-only"
              />
              <span className="hidden size-7 items-center justify-center rounded-lg border border-line-strong text-[13px] md:flex">
                {i + 1}
              </span>
              <span lang="it">{option}</span>
              {note && <span className="ml-auto text-[13px] font-semibold">{note}</span>}
            </label>
          );
        })}
      </fieldset>
    </>
  );
}
