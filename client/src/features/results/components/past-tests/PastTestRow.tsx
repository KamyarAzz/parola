import {Link} from "react-router";
import TableCell from "../../../../components/table/TableCell";
import {
  formatDate,
  formatDuration,
  scoreOf,
  scoreTone,
} from "../../../../lib/results";
import {topicTitle} from "../../../../lib/topics";
import type {TestResult} from "../../../../types";

interface PastTestRowProps {
  result: TestResult;
}

export default function PastTestRow({result}: PastTestRowProps) {
  const score = scoreOf(result);

  return (
    <tr className="hover:bg-ground-soft">
      <TableCell className="whitespace-nowrap text-muted">
        {formatDate(result.finishedAt)}
      </TableCell>
      <TableCell className="font-medium">
        {topicTitle(result.topicId)}
      </TableCell>
      <TableCell
        align="right"
        className={`font-semibold tabular-nums ${scoreTone(score.percent)}`}
      >
        {score.correct} / {score.total}
      </TableCell>
      <TableCell align="right" className="tabular-nums">
        {score.total - score.correct}
      </TableCell>
      <TableCell align="right" className="text-muted tabular-nums">
        {formatDuration(result.durationSec)}
      </TableCell>
      <TableCell align="right" compact>
        <Link
          to={`/results/${result.id}`}
          className="inline-flex min-h-11 items-center text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Review
        </Link>
      </TableCell>
    </tr>
  );
}
