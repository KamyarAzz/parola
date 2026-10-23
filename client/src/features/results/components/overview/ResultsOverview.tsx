import StatTile from "../../../../components/StatTile";
import {topics} from "../../../../data/topics";
import {averageScore} from "../../../../lib/results";
import {
  strongestTopic,
  topicSummary,
  weakestTopic,
} from "../../../../lib/topics";
import type {TestResult} from "../../../../types";

interface ResultsOverviewProps {
  results: TestResult[];
}

export default function ResultsOverview({results}: ResultsOverviewProps) {
  return (
    <section
      aria-label="Overview"
      className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3"
    >
      <StatTile label="Tests taken">{results.length}</StatTile>
      <StatTile label="Average score">{averageScore(results)}%</StatTile>
      <StatTile label="Strongest topic" size="sm">
        {topicSummary(strongestTopic(topics))}
      </StatTile>
      <StatTile label="Weakest topic" size="sm" className="text-warn-ink">
        {topicSummary(weakestTopic(topics))}
      </StatTile>
    </section>
  );
}
