import {buttonClass} from "../../../../components/button";
import StatusIcon from "../../../../components/StatusIcon";
import FeedbackMessage from "./FeedbackMessage";

interface FeedbackBarProps {
  correct: boolean;
  expected: string;
  explanation?: string;
  onContinue: () => void;
}

/** Bottom bar after an answer is checked. */
export default function FeedbackBar({
  correct,
  expected,
  explanation,
  onContinue,
}: FeedbackBarProps) {
  return (
    <footer
      role="status"
      className={`px-5 pt-5 pb-7 md:px-8 md:py-6 ${
        correct ? "bg-brand-soft" : "bg-error-soft"
      }`}
    >
      <div className="mx-auto flex max-w-240 flex-col gap-3.5 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="flex items-start gap-3 md:items-center md:gap-3.5">
          <StatusIcon correct={correct} />
          <FeedbackMessage
            correct={correct}
            expected={expected}
            explanation={explanation}
          />
        </div>
        <button
          type="button"
          autoFocus
          onClick={onContinue}
          className={buttonClass(
            correct ? "primary" : "danger",
            "lg",
            "h-13 md:h-12 md:px-8",
          )}
        >
          Continue
        </button>
      </div>
    </footer>
  );
}
