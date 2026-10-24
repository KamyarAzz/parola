import StatTile from "../../../../components/StatTile";
import {areaLabel, rankedAreas, testsThisWeek} from "../../../../lib/progress";
import {averageScore} from "../../../../lib/results";
import type {LessonProgress, TestResult} from "../../../../types";

interface ResultsOverviewProps {
  results: TestResult[];
  progress: LessonProgress[];
}

/** "Verbs · Lezione 3 · 82%", or a dash until there's enough to judge. */
const areaText = (area: ReturnType<typeof rankedAreas>[number] | undefined) =>
  area ? `${areaLabel(area)} · ${area.accuracy}%` : "–";

export default function ResultsOverview({
  results,
  progress,
}: ResultsOverviewProps) {
  const areas = rankedAreas(progress);
  // With a single area it's both, so only call it strongest
  const weakest = areas.length > 1 ? areas.at(-1) : undefined;

  return (
    <section
      aria-label="Overview"
      className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3"
    >
      <StatTile label="Tests taken">
        {results.length}
        <span className="block text-xs font-medium text-muted md:text-sm">
          {testsThisWeek(results)} this week
        </span>
      </StatTile>
      <StatTile label="Average score">{averageScore(results)}%</StatTile>
      <StatTile label="Strongest area" size="sm">
        {areaText(areas[0])}
      </StatTile>
      <StatTile label="Weakest area" size="sm" className="text-warn-ink">
        {areaText(weakest)}
      </StatTile>
    </section>
  );
}
