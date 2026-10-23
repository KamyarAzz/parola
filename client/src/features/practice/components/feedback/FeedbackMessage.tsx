import type {AnswerRecord} from "../../../../types";
import SentenceFeedback from "./SentenceFeedback";

interface FeedbackMessageProps {
  record: AnswerRecord;
  explanation?: string;
}

export default function FeedbackMessage({
  record,
  explanation,
}: FeedbackMessageProps) {
  if (record.correct) {
    return (
      <div className="flex flex-col text-brand-dark">
        <span lang="it" className="text-[19px] font-bold md:text-xl">
          Perfetto!
        </span>
        <span className="text-sm md:text-[15px]">
          {record.note ?? "That’s exactly right."}
        </span>
      </div>
    );
  }

  if (record.kind === "sentence") return <SentenceFeedback record={record} />;

  return (
    <div className="flex flex-col gap-0.5 text-error-ink">
      <span className="text-[19px] font-bold md:text-xl">Correct answer:</span>
      <span className="text-sm leading-snug md:text-[15px]">
        <span className="font-semibold">{record.expected}</span>
        {explanation && <> — {explanation}</>}
      </span>
    </div>
  );
}
