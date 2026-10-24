import {useMemo} from "react";
import PageHeader from "../../../components/PageHeader";
import {focusAreas} from "../../../lib/focus";
import {lessonProgress, sectionScores} from "../../../lib/progress";
import {useResultsStore} from "../../../stores/resultsStore";
import FocusAreaList from "../components/focus-areas/FocusAreaList";
import NoResults from "../components/not-found/NoResults";
import ResultsOverview from "../components/overview/ResultsOverview";
import PastTests from "../components/past-tests/PastTests";
import SectionScoreList from "../components/sections/SectionScoreList";

export default function ResultsPage() {
  const results = useResultsStore((s) => s.results);
  const progress = useMemo(() => lessonProgress(results), [results]);

  return (
    <div className="flex flex-col gap-6 md:gap-7">
      <PageHeader
        title="Your results"
        description="How your tests went, and where to focus next."
      />
      {results.length === 0 ? (
        <NoResults />
      ) : (
        <>
          <ResultsOverview results={results} progress={progress} />
          <FocusAreaList areas={focusAreas(results)} />
          <SectionScoreList scores={sectionScores(results)} />
          <PastTests results={results} />
        </>
      )}
    </div>
  );
}
