import {Check, X} from "lucide-react";
import {buttonClass} from "../../components/button";

interface Props {
  correct: boolean;
  expected: string;
  explanation?: string;
  onContinue: () => void;
}

export function FeedbackBar({correct, expected, explanation, onContinue}: Props) {
  return (
    <footer role="status" className={`px-5 pt-5 pb-7 md:px-8 md:py-6 ${correct ? "bg-brand-soft" : "bg-error-soft"}`}>
      <div className="mx-auto flex max-w-[960px] flex-col gap-3.5 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="flex items-start gap-3 md:items-center md:gap-3.5">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white md:size-11 ${correct ? "bg-brand" : "bg-error"}`}
          >
            {correct ? <Check aria-hidden size={22} strokeWidth={2.5} /> : <X aria-hidden size={22} strokeWidth={2.5} />}
          </div>
          {correct ? (
            <div className="flex flex-col text-brand-dark">
              <span lang="it" className="text-[19px] font-bold md:text-xl">
                Perfetto!
              </span>
              <span className="text-sm md:text-[15px]">That’s exactly right.</span>
            </div>
          ) : (
            <div className="flex flex-col gap-0.5 text-error-ink">
              <span className="text-[19px] font-bold md:text-xl">Correct answer:</span>
              <span className="text-sm leading-snug md:text-[15px]">
                <span className="font-semibold">{expected}</span>
                {explanation && <> — {explanation}</>}
              </span>
            </div>
          )}
        </div>
        <button
          type="button"
          autoFocus
          onClick={onContinue}
          className={buttonClass(correct ? "primary" : "danger", "lg", "h-[52px] md:h-12 md:px-8")}
        >
          Continue
        </button>
      </div>
    </footer>
  );
}
