import {Check} from "lucide-react";
import {Link, useLocation, useParams} from "react-router";
import {buttonClass} from "../../components/button";
import {StatTile} from "../../components/StatTile";
import {getTopic} from "../../data/topics";
import {formatDate, formatDuration, scoreOf, scoreTone} from "../../lib/results";
import {useResultsStore} from "../../stores/resultsStore";

/** The "test complete" screen, also used to review any past test. */
export function ResultDetailPage() {
  const {resultId} = useParams();
  const justFinished = Boolean((useLocation().state as {justFinished?: boolean} | null)?.justFinished);
  const result = useResultsStore((s) => s.results.find((r) => r.id === resultId));

  if (!result) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-2xl font-bold">Test not found</h1>
        <Link to="/results" className={buttonClass("primary", "lg")}>
          Back to results
        </Link>
      </div>
    );
  }

  const topic = getTopic(result.topicId);
  const score = scoreOf(result);
  const mistakes = result.answers.filter((a) => !a.correct);
  const detailed = mistakes.filter((a) => a.prompt);

  return (
    <div className="min-h-screen px-5 pt-12 pb-8 md:px-8 md:pt-14 md:pb-16">
      <div className="mx-auto flex max-w-[720px] flex-col gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-brand text-white md:size-16">
            <Check aria-hidden size={28} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-semibold tracking-wider text-muted uppercase md:text-[13px]">
            {topic?.title}
            {topic && (
              <span className="hidden md:inline">
                {" · "}
                <span lang="it">{topic.italian}</span>
              </span>
            )}
          </span>
          <h1 className="text-[28px] font-bold tracking-tight md:text-[34px]">
            {justFinished ? "Test complete" : "Test review"}
          </h1>
          <p className="text-[15px] text-muted md:text-base">
            {!justFinished
              ? `Taken on ${formatDate(result.finishedAt)}`
              : score.percent >= 80
                ? "Nice work. Keep it up!"
                : "Your mistakes have been saved to your focus areas."}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <StatTile label="Score" className="text-[22px] md:text-[30px]">
            {score.correct}
            <span className="text-base text-muted md:text-lg">/{score.total}</span>
          </StatTile>
          <StatTile label="Accuracy" className={`text-[22px] md:text-[30px] ${scoreTone(score.percent)}`}>
            {score.percent}%
          </StatTile>
          <StatTile label="Time" className="text-[22px] md:text-[30px]">
            {formatDuration(result.durationSec)}
          </StatTile>
        </div>

        {mistakes.length > 0 && (
          <section aria-labelledby="mistakes-h" className="flex flex-col gap-2.5 rounded-2xl border border-line bg-surface p-[18px] md:gap-3 md:p-6">
            <h2 id="mistakes-h" className="text-[17px] font-semibold md:text-lg">
              {mistakes.length} {mistakes.length === 1 ? "mistake" : "mistakes"} to review
            </h2>
            {detailed.length === 0 && (
              <p className="border-t border-line pt-3.5 text-sm text-muted">Details aren’t available for this sample test.</p>
            )}
            {detailed.map((a) => (
              <div key={a.questionId} className="flex flex-col gap-1.5 border-t border-line pt-3.5 pb-1">
                <span className="text-xs font-semibold text-muted md:text-[13px]">
                  {a.kind === "translate" ? "Translate" : "Fill the gap"}
                </span>
                <span lang="it" className="text-base font-medium md:text-[17px]">
                  {a.prompt}
                </span>
                <div className="flex flex-col gap-1 text-sm md:flex-row md:flex-wrap md:gap-x-5 md:text-[15px]">
                  <span className="text-error-ink">
                    <span className="font-semibold">You:</span> <span className="line-through">{a.given || "(skipped)"}</span>
                  </span>
                  <span className="text-brand-dark">
                    <span className="font-semibold">Correct:</span> {a.expected}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

        <div className="flex flex-col gap-2.5 md:flex-row-reverse md:justify-center md:gap-3">
          <Link to="/results" className={buttonClass("primary", "lg")}>
            See all results
          </Link>
          <Link to={`/practice/${result.topicId}`} className={buttonClass("secondary", "lg")}>
            Practise again
          </Link>
          <Link to="/" className={buttonClass("secondary", "lg", "max-md:border-0 max-md:bg-transparent max-md:text-muted")}>
            Back to topics
          </Link>
        </div>
      </div>
    </div>
  );
}
