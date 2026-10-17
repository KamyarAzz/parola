import {useLocation, useParams} from "react-router";
import {useResultsStore} from "../../../stores/resultsStore";
import MistakeList from "../components/MistakeList";
import ResultActions from "../components/ResultActions";
import ResultNotFound from "../components/ResultNotFound";
import ResultStats from "../components/ResultStats";
import ResultSummary from "../components/ResultSummary";

/** The "test complete" screen, also used to review any past test. */
export default function ResultDetailPage() {
  const {resultId} = useParams();
  const state = useLocation().state as {justFinished?: boolean} | null;
  const result = useResultsStore((s) =>
    s.results.find((r) => r.id === resultId),
  );

  if (!result) return <ResultNotFound />;

  return (
    <div className="min-h-screen px-5 pt-12 pb-8 md:px-8 md:pt-14 md:pb-16">
      <div className="mx-auto flex max-w-180 flex-col gap-6 md:gap-8">
        <ResultSummary
          result={result}
          justFinished={Boolean(state?.justFinished)}
        />
        <ResultStats result={result} />
        <MistakeList answers={result.answers} />
        <ResultActions topicId={result.topicId} />
      </div>
    </div>
  );
}
