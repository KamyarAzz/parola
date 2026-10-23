import {ChevronRight} from "lucide-react";
import {Link} from "react-router";
import {
  formatDate,
  formatDuration,
  scoreOf,
  scoreTone,
} from "../../../../lib/results";
import {topicTitle} from "../../../../lib/topics";
import type {TestResult} from "../../../../types";

interface PastTestListItemProps {
  result: TestResult;
}

export default function PastTestListItem({result}: PastTestListItemProps) {
  const score = scoreOf(result);

  return (
    <li className="border-t border-track">
      <Link
        to={`/results/${result.id}`}
        className="flex min-h-15 items-center gap-3 py-2"
      >
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-[15px] font-medium">
            {topicTitle(result.topicId)}
          </span>
          <span className="text-[13px] text-muted">
            {formatDate(result.finishedAt)} ·{" "}
            {formatDuration(result.durationSec)}
          </span>
        </div>
        <span
          className={`text-[15px] font-semibold tabular-nums ${scoreTone(score.percent)}`}
        >
          {score.correct}/{score.total}
        </span>
        <ChevronRight aria-hidden size={18} className="text-muted" />
      </Link>
    </li>
  );
}
