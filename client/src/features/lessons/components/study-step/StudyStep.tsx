import type {ReactNode} from "react";

interface StudyStepProps {
  /** Anchor for the jump links, e.g. "words" */
  id: string;
  step: number;
  title: string;
  /** How to study this part */
  hint: string;
  children: ReactNode;
}

/** One numbered part of a lesson: words, verbs, grammar or the test. */
export default function StudyStep({
  id,
  step,
  title,
  hint,
  children,
}: StudyStepProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="flex scroll-mt-6 flex-col gap-4"
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand"
        >
          {step}
        </span>
        <div className="flex flex-col gap-0.5">
          <h2 id={`${id}-heading`} className="text-lg font-semibold md:text-xl">
            {title}
          </h2>
          <p className="text-sm text-muted md:text-[15px]">{hint}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
