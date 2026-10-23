interface FeedbackMessageProps {
  correct: boolean;
  expected: string;
  explanation?: string;
}

export default function FeedbackMessage({
  correct,
  expected,
  explanation,
}: FeedbackMessageProps) {
  if (correct) {
    return (
      <div className="flex flex-col text-brand-dark">
        <span lang="it" className="text-[19px] font-bold md:text-xl">
          Perfetto!
        </span>
        <span className="text-sm md:text-[15px]">That’s exactly right.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0.5 text-error-ink">
      <span className="text-[19px] font-bold md:text-xl">Correct answer:</span>
      <span className="text-sm leading-snug md:text-[15px]">
        <span className="font-semibold">{expected}</span>
        {explanation && <> — {explanation}</>}
      </span>
    </div>
  );
}
