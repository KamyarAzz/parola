import PageHeader from "../../../components/PageHeader";
import {focusAreas} from "../../../data/topics";
import {useResultsStore} from "../../../stores/resultsStore";
import FocusAreaList from "../components/FocusAreaList";
import PastTests from "../components/PastTests";
import ResultsOverview from "../components/ResultsOverview";

export default function ResultsPage() {
  const results = useResultsStore((s) => s.results);

  return (
    <div className="flex flex-col gap-6 md:gap-7">
      <PageHeader
        title="Your results"
        description="How your tests went, and where to focus next."
      />
      <ResultsOverview results={results} />
      <FocusAreaList areas={focusAreas} />
      <PastTests results={results} />
    </div>
  );
}
