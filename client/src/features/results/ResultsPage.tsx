import {ChevronRight} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../components/button";
import {ProgressBar} from "../../components/ProgressBar";
import {StatTile} from "../../components/StatTile";
import {focusAreas, getTopic, topics} from "../../data/topics";
import {
  formatDate,
  formatDuration,
  scoreOf,
  scoreTone,
} from "../../lib/results";
import {useResultsStore} from "../../stores/resultsStore";

export function ResultsPage() {
  const results = useResultsStore((s) => s.results);

  const average = results.length
    ? Math.round(
        results.reduce((sum, r) => sum + scoreOf(r).percent, 0) /
          results.length,
      )
    : 0;
  const started = topics.filter((t) => t.mastery > 0);
  const strongest = started.reduce(
    (a, b) => (b.mastery > a.mastery ? b : a),
    started[0],
  );
  const weakest = started.reduce(
    (a, b) => (b.mastery < a.mastery ? b : a),
    started[0],
  );

  return (
    <div className="flex flex-col gap-6 md:gap-7">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-[26px] leading-tight font-bold tracking-tight md:text-[34px]">
          Your results
        </h1>
        <p className="text-[15px] text-muted md:text-base">
          How your tests went, and where to focus next.
        </p>
      </header>

      <section
        aria-label="Overview"
        className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3"
      >
        <StatTile label="Tests taken" className="text-2xl md:text-[30px]">
          {results.length}
        </StatTile>
        <StatTile label="Average score" className="text-2xl md:text-[30px]">
          {average}%
        </StatTile>
        <StatTile
          label="Strongest topic"
          className="text-[15px] font-semibold md:text-xl"
        >
          {strongest?.title} · {strongest?.mastery}%
        </StatTile>
        <StatTile
          label="Weakest topic"
          className="text-[15px] font-semibold text-warn-ink md:text-xl"
        >
          {weakest?.title} · {weakest?.mastery}%
        </StatTile>
      </section>

      <section
        aria-labelledby="focus-h"
        className="flex flex-col rounded-2xl border border-line bg-surface p-4.5 md:p-6"
      >
        <div className="flex flex-col gap-1 pb-3">
          <h2 id="focus-h" className="text-lg font-semibold md:text-xl">
            What to work on
          </h2>
          <p className="text-sm text-muted md:text-[15px]">
            Built from the mistakes in your last 10 tests.
          </p>
        </div>
        {focusAreas.map((f) => (
          <div
            key={f.id}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line py-4"
          >
            <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-1">
              <span className="text-[15px] font-semibold md:text-base">
                {f.title}
              </span>
              <span className="text-[13px] text-muted md:text-sm">
                {f.detail}
              </span>
            </div>
            <div className="flex flex-[1_1_220px] items-center gap-3 md:flex-[0_1_340px]">
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex justify-between text-xs md:text-[13px]">
                  <span className="text-muted">{f.mistakes} mistakes</span>
                  <span className="font-semibold text-warn-ink tabular-nums">
                    {f.accuracy}% accuracy
                  </span>
                </div>
                <ProgressBar value={f.accuracy} tone="warn" />
              </div>
              <Link
                to={`/practice/${f.topicId}`}
                className={buttonClass("soft", "md", "shrink-0")}
              >
                Practise
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section
        aria-labelledby="past-h"
        className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-4.5 md:gap-3 md:p-6"
      >
        <h2 id="past-h" className="text-lg font-semibold md:text-xl">
          Past tests
        </h2>

        {/* Mobile: list */}
        <ul className="md:hidden">
          {results.map((r) => {
            const s = scoreOf(r);
            return (
              <li key={r.id} className="border-t border-track">
                <Link
                  to={`/results/${r.id}`}
                  className="flex min-h-15 items-center gap-3 py-2"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-[15px] font-medium">
                      {getTopic(r.topicId)?.title ?? r.topicId}
                    </span>
                    <span className="text-[13px] text-muted">
                      {formatDate(r.finishedAt)} ·{" "}
                      {formatDuration(r.durationSec)}
                    </span>
                  </div>
                  <span
                    className={`text-[15px] font-semibold tabular-nums ${scoreTone(s.percent)}`}
                  >
                    {s.correct}/{s.total}
                  </span>
                  <ChevronRight aria-hidden size={18} className="text-muted" />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop: table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-160 border-collapse text-[15px]">
            <thead>
              <tr className="text-left text-[13px] text-muted">
                <th
                  scope="col"
                  className="border-b border-line py-2.5 pr-3 font-medium"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="border-b border-line px-3 py-2.5 font-medium"
                >
                  Topic
                </th>
                <th
                  scope="col"
                  className="border-b border-line px-3 py-2.5 text-right font-medium"
                >
                  Score
                </th>
                <th
                  scope="col"
                  className="border-b border-line px-3 py-2.5 text-right font-medium"
                >
                  Mistakes
                </th>
                <th
                  scope="col"
                  className="border-b border-line px-3 py-2.5 text-right font-medium"
                >
                  Time
                </th>
                <th scope="col" className="border-b border-line py-2.5 pl-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => {
                const s = scoreOf(r);
                return (
                  <tr key={r.id} className="hover:bg-[#fafbf9]">
                    <td className="border-b border-track py-3.5 pr-3 whitespace-nowrap text-muted">
                      {formatDate(r.finishedAt)}
                    </td>
                    <td className="border-b border-track px-3 py-3.5 font-medium">
                      {getTopic(r.topicId)?.title ?? r.topicId}
                    </td>
                    <td
                      className={`border-b border-track px-3 py-3.5 text-right font-semibold tabular-nums ${scoreTone(s.percent)}`}
                    >
                      {s.correct} / {s.total}
                    </td>
                    <td className="border-b border-track px-3 py-3.5 text-right tabular-nums">
                      {s.total - s.correct}
                    </td>
                    <td className="border-b border-track px-3 py-3.5 text-right text-muted tabular-nums">
                      {formatDuration(r.durationSec)}
                    </td>
                    <td className="border-b border-track py-1.5 pl-3 text-right">
                      <Link
                        to={`/results/${r.id}`}
                        className="inline-flex min-h-11 items-center text-sm font-semibold text-brand hover:text-brand-dark"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
