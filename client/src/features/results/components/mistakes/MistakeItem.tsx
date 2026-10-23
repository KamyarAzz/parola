import {questionLabel} from "../../../../lib/grade";
import type {AnswerRecord} from "../../../../types";

interface MistakeItemProps {
  answer: AnswerRecord;
}

export default function MistakeItem({answer}: MistakeItemProps) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-line pt-3.5 pb-1">
      <span className="text-xs font-semibold text-muted md:text-[13px]">
        {questionLabel(answer.kind)}
      </span>
      <span
        lang={answer.kind === "sentence" ? "en" : "it"}
        className="text-base font-medium md:text-[17px]"
      >
        {answer.prompt}
      </span>
      <div className="flex flex-col gap-1 text-sm md:flex-row md:flex-wrap md:gap-x-5 md:text-[15px]">
        <span className="text-error-ink">
          <span className="font-semibold">You:</span>{" "}
          <span className="line-through">{answer.given || "(skipped)"}</span>
        </span>
        <span lang="it" className="text-brand-dark">
          <span className="font-semibold">Correct:</span> {answer.expected}
        </span>
      </div>
    </div>
  );
}
