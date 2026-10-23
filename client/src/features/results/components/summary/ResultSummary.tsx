import Eyebrow from "../../../../components/Eyebrow";
import StatusIcon from "../../../../components/StatusIcon";
import {getPracticeSet} from "../../../../lib/practiceSets";
import {resultMessage} from "../../../../lib/results";
import type {TestResult} from "../../../../types";

interface ResultSummaryProps {
  result: TestResult;
  /** True right after finishing a test, false when reviewing an old one */
  justFinished: boolean;
}

export default function ResultSummary({
  result,
  justFinished,
}: ResultSummaryProps) {
  const set = getPracticeSet(result.topicId);

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <StatusIcon correct size="lg" />
      {set && (
        <Eyebrow>
          {set.title}
          {set.italian && (
            <span className="hidden md:inline">
              {" · "}
              <span lang="it">{set.italian}</span>
            </span>
          )}
        </Eyebrow>
      )}
      <h1 className="text-[28px] font-bold tracking-tight md:text-[34px]">
        {justFinished ? "Test complete" : "Test review"}
      </h1>
      <p className="text-[15px] text-muted md:text-base">
        {resultMessage(result, justFinished)}
      </p>
    </div>
  );
}
