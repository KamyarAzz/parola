import {ArrowRight, Search} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router";
import {buttonClass} from "../../components/button";
import {ProgressBar} from "../../components/ProgressBar";
import {levels, topics} from "../../data/topics";
import type {Level} from "../../types";
import {TopicCard} from "./TopicCard";

type LevelFilter = Level | "All";

export function TopicsPage() {
  const [level, setLevel] = useState<LevelFilter>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = topics.filter(
    (t) =>
      (level === "All" || t.level === level) &&
      (!q || `${t.title} ${t.italian} ${t.category}`.toLowerCase().includes(q)),
  );
  const slipping = topics.filter((t) => t.needsReview);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-1.5">
          <span lang="it" className="text-sm font-semibold text-brand">
            Buongiorno
          </span>
          <h1 className="text-[26px] leading-tight font-bold tracking-tight md:text-[34px]">
            What do you want to practise?
          </h1>
          <p className="hidden text-base text-muted md:block">
            Pick a topic and take a short test. Each one takes about 5 minutes.
          </p>
        </div>
        <div className="flex w-full flex-col gap-1.5 md:w-72">
          <label htmlFor="topic-search" className="text-[13px] font-medium text-muted">
            Search topics
          </label>
          <div className="flex h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-surface px-3.5 focus-within:border-brand">
            <Search aria-hidden size={18} className="text-muted" />
            <input
              id="topic-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. verbs, food"
              className="min-w-0 flex-1 bg-transparent text-[15px] outline-none"
            />
          </div>
        </div>
      </header>

      <section aria-label="Suggestions" className="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        <div className="flex flex-col gap-4 rounded-2xl bg-ink p-5 text-white md:p-6">
          <span className="text-xs font-semibold tracking-wider text-ink-soft uppercase md:text-[13px]">Continue</span>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold md:text-[22px]">Past tense</span>
            <span lang="it" className="text-sm text-[#c9ced2] md:text-[15px]">
              Passato prossimo · set 3 of 6
            </span>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <ProgressBar value={48} tone="glow" className="bg-[#343a3f] md:flex-1" />
            <Link to="/practice/past" className={buttonClass("primary", "md", "md:px-5")}>
              Resume
              <ArrowRight aria-hidden size={18} />
            </Link>
          </div>
        </div>

        {slipping.length > 0 && (
          <Link
            to="/results"
            className="flex flex-col gap-1 rounded-2xl bg-warn-soft p-4 text-[#5c3b12] md:gap-4 md:p-6"
          >
            <span className="hidden text-[13px] font-semibold tracking-wider text-warn-ink uppercase md:block">
              Needs review
            </span>
            <span className="text-[15px] font-semibold text-warn-ink md:text-[22px] md:text-ink">
              {slipping.length} {slipping.length === 1 ? "topic is" : "topics are"} slipping
            </span>
            <span className="text-sm md:text-[15px]">
              {slipping.map((t) => t.title).join(" and ")} dropped below 60% in your last tests.
            </span>
            <span className="mt-1 inline-flex items-center gap-2 text-[15px] font-semibold text-warn-ink">
              See what to work on
              <ArrowRight aria-hidden size={18} />
            </span>
          </Link>
        )}
      </section>

      <section aria-labelledby="topics-h" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="topics-h" className="text-lg font-semibold md:text-xl">
            All topics
          </h2>
          <div role="group" aria-label="Filter by level" className="flex gap-2">
            {(["All", ...levels] as LevelFilter[]).map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={level === l}
                onClick={() => setLevel(l)}
                className={`h-10 rounded-full border px-4 text-sm font-semibold ${
                  level === l ? "border-ink bg-ink text-white" : "border-line-strong bg-surface hover:border-ink"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3 md:gap-4">
            {visible.map((t) => (
              <TopicCard key={t.id} topic={t} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-line-strong p-8 text-center text-muted">
            No topics match “{query}”.
          </p>
        )}
      </section>
    </div>
  );
}
