import {wordDiff} from "../../../../lib/wordDiff";
import type {AnswerRecord} from "../../../../types";
import DiffLine from "./DiffLine";

interface SentenceFeedbackProps {
  record: AnswerRecord;
}

/** Your sentence next to the closest right answer, word by word. */
export default function SentenceFeedback({record}: SentenceFeedbackProps) {
  const diff = wordDiff(record.given, record.expected);

  return (
    <div className="flex min-w-0 flex-col gap-1.5 text-error-ink">
      <span className="text-[19px] font-bold md:text-xl">
        {record.given ? "Not quite" : "Skipped"}
      </span>
      {record.given && <DiffLine label="You" words={diff.given} tone="given" />}
      <DiffLine label="Answer" words={diff.expected} tone="expected" />
      {record.note && <p className="text-sm font-medium">{record.note}</p>}
    </div>
  );
}
