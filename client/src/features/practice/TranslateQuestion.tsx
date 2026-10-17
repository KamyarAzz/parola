import type {TranslateQuestion as Question} from "../../types";
import {SpeakButton} from "./SpeakButton";

const tile =
  "min-h-11 rounded-xl border border-b-[3px] px-3.5 py-2 text-base font-medium transition-transform md:px-4 md:text-[17px]";

interface Props {
  question: Question;
  /** Indexes into question.words, in the order the learner picked them */
  picked: number[];
  onPick: (wordIndex: number) => void;
  onRemove: (position: number) => void;
  locked: boolean;
}

export function TranslateQuestion({question, picked, onPick, onRemove, locked}: Props) {
  return (
    <>
      <h1 className="text-[22px] font-bold tracking-tight md:text-[28px]">Translate this sentence</h1>

      <div className="flex items-start gap-3 md:items-center md:gap-4">
        <SpeakButton text={question.prompt} />
        <p lang="it" className="text-[19px] leading-snug font-medium md:text-2xl">
          {question.prompt}
        </p>
      </div>

      <div
        aria-label="Your answer"
        className="flex min-h-[116px] flex-wrap content-start gap-2 border-y border-line bg-[linear-gradient(transparent_57px,var(--color-line)_57px,var(--color-line)_58px,transparent_58px)] py-2 md:min-h-32 md:gap-2.5 md:bg-[linear-gradient(transparent_63px,var(--color-line)_63px,var(--color-line)_64px,transparent_64px)] md:py-2.5"
      >
        {picked.map((wordIndex, position) => (
          <button
            key={`${wordIndex}-${position}`}
            type="button"
            disabled={locked}
            onClick={() => onRemove(position)}
            className={`${tile} border-line-strong bg-surface hover:-translate-y-px disabled:hover:translate-y-0`}
          >
            {question.words[wordIndex]}
          </button>
        ))}
      </div>

      <div aria-label="Word bank" className="flex flex-wrap justify-center gap-2 md:gap-2.5">
        {question.words.map((word, i) => {
          const used = picked.includes(i);
          return (
            <button
              key={i}
              type="button"
              disabled={used || locked}
              aria-hidden={used || undefined}
              onClick={() => onPick(i)}
              className={`${tile} ${
                used
                  ? "border-track bg-track text-transparent"
                  : "border-line-strong bg-surface hover:-translate-y-px disabled:hover:translate-y-0"
              }`}
            >
              {word}
            </button>
          );
        })}
      </div>
    </>
  );
}
