import StatTile from "../../../../components/StatTile";
import {formatDuration, scoreOf, scoreTone} from "../../../../lib/results";
import type {TestResult} from "../../../../types";

interface ResultStatsProps {
  result: TestResult;
}

export default function ResultStats({result}: ResultStatsProps) {
  const score = scoreOf(result);

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      <StatTile label="Score" size="md">
        {score.correct}
        <span className="text-base text-muted md:text-lg">/{score.total}</span>
      </StatTile>
      <StatTile label="Accuracy" size="md" className={scoreTone(score.percent)}>
        {score.percent}%
      </StatTile>
      <StatTile label="Time" size="md">
        {formatDuration(result.durationSec)}
      </StatTile>
    </div>
  );
}
