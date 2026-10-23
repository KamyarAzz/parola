import type {OptionState} from "../../../../lib/grade";

interface ChoiceOptionProps {
  /** Radio group name */
  name: string;
  option: string;
  /** Shown as a keyboard hint on desktop */
  number: number;
  state: OptionState;
  disabled: boolean;
  onSelect: (option: string) => void;
}

const styles: Record<OptionState, string> = {
  idle: "border border-b-3 border-line bg-surface text-ink hover:border-line-strong",
  selected: "border-2 border-ink bg-surface text-ink",
  correct: "border-2 border-brand bg-brand-soft text-brand-dark",
  wrong: "border-2 border-error bg-error-soft text-error-ink",
  dimmed: "border border-b-3 border-line bg-surface text-muted",
};

const notes: Partial<Record<OptionState, string>> = {
  correct: "Correct",
  wrong: "Your answer",
};

export default function ChoiceOption({
  name,
  option,
  number,
  state,
  disabled,
  onSelect,
}: ChoiceOptionProps) {
  return (
    <label
      className={`flex min-h-14 items-center gap-3 rounded-[14px] px-4 text-[17px] font-semibold has-focus-visible:outline-2 has-focus-visible:outline-brand md:min-h-16 md:gap-3.5 md:text-lg ${
        disabled ? "cursor-default" : "cursor-pointer"
      } ${styles[state]}`}
    >
      <input
        type="radio"
        name={name}
        value={option}
        checked={state === "selected" || state === "wrong"}
        disabled={disabled}
        onChange={() => onSelect(option)}
        className="sr-only"
      />
      <span className="hidden size-7 items-center justify-center rounded-lg border border-line-strong text-[13px] md:flex">
        {number}
      </span>
      <span lang="it">{option}</span>
      {notes[state] && (
        <span className="ml-auto text-[13px] font-semibold">
          {notes[state]}
        </span>
      )}
    </label>
  );
}
