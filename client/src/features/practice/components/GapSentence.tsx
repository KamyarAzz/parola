interface GapSentenceProps {
  /** Italian sentence with "___" marking the gap */
  sentence: string;
  /** Word shown in the gap, if any */
  filled: string | null;
  state: "idle" | "correct" | "wrong";
}

const tones = {
  idle: "text-ink",
  correct: "text-brand",
  wrong: "text-error",
};

export default function GapSentence({
  sentence,
  filled,
  state,
}: GapSentenceProps) {
  const [before, after] = sentence.split("___");

  return (
    <p
      lang="it"
      className="rounded-2xl bg-ground px-4 py-5 text-center text-[21px] font-medium md:px-6 md:py-7 md:text-[26px]"
    >
      {before}
      <span
        className={`inline-block min-w-14 border-b-3 border-ink ${tones[state]}`}
      >
        {filled ?? " "}
      </span>
      {after}
    </p>
  );
}
