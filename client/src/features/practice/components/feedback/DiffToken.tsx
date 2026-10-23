import type {DiffWord} from "../../../../lib/wordDiff";

interface DiffTokenProps {
  word: DiffWord;
  tone: "given" | "expected";
}

const wrongStyles = {
  given: "text-error line-through decoration-2",
  expected: "rounded bg-error/15 px-1 font-bold",
};

export default function DiffToken({word, tone}: DiffTokenProps) {
  return (
    <>
      <span className={word.ok ? "text-ink" : wrongStyles[tone]}>
        {word.text}
      </span>{" "}
    </>
  );
}
