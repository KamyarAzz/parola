import type {ReactNode, Ref} from "react";

interface AnswerLinesProps {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
  /** A tile is being dragged over the lines */
  highlight?: boolean;
}

/** Lined area where picked words are placed, like writing on paper. */
export default function AnswerLines({
  children,
  ref,
  highlight = false,
}: AnswerLinesProps) {
  return (
    <div
      ref={ref}
      aria-label="Your answer"
      className={`flex min-h-29 flex-wrap content-start gap-2 border-y border-line bg-[linear-gradient(transparent_57px,var(--color-line)_57px,var(--color-line)_58px,transparent_58px)] py-2 transition-colors md:min-h-32 md:gap-2.5 md:bg-[linear-gradient(transparent_63px,var(--color-line)_63px,var(--color-line)_64px,transparent_64px)] md:py-2.5 ${
        highlight ? "bg-brand-soft/60" : ""
      }`}
    >
      {children}
    </div>
  );
}
