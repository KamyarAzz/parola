import {buttonClass} from "../../../../components/button";

interface CheckBarProps {
  canCheck: boolean;
  onCheck: () => void;
  onSkip: () => void;
}

/** Bottom bar before an answer is checked. */
export default function CheckBar({canCheck, onCheck, onSkip}: CheckBarProps) {
  return (
    <footer className="border-t border-line px-5 pt-4 pb-7 md:px-8 md:py-6">
      <div className="mx-auto flex max-w-240 flex-col gap-2.5 md:flex-row-reverse md:items-center md:justify-between">
        <button
          type="button"
          disabled={!canCheck}
          onClick={onCheck}
          className={buttonClass("primary", "lg", "h-13 md:h-12 md:px-10")}
        >
          Check
        </button>
        <button
          type="button"
          onClick={onSkip}
          className={buttonClass(
            "secondary",
            "lg",
            "max-md:h-11 max-md:border-0 max-md:text-muted",
          )}
        >
          Skip
        </button>
      </div>
    </footer>
  );
}
