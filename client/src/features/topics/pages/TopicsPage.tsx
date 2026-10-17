import {useState} from "react";
import PageHeader from "../../../components/PageHeader";
import SearchField from "../../../components/SearchField";
import {continueLesson, topics} from "../../../data/topics";
import {filterTopics} from "../../../lib/topics";
import type {LevelOption} from "../../../types";
import ContinueCard from "../components/ContinueCard";
import LevelFilter from "../components/LevelFilter";
import NeedsReviewCard from "../components/NeedsReviewCard";
import TopicGrid from "../components/TopicGrid";

export default function TopicsPage() {
  const [level, setLevel] = useState<LevelOption>("All");
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Buongiorno"
        eyebrowLang="it"
        title="What do you want to practise?"
        description="Pick a topic and take a short test. Each one takes about 5 minutes."
        hideDescriptionOnMobile
      >
        <SearchField
          id="topic-search"
          label="Search topics"
          value={query}
          onChange={setQuery}
          placeholder="e.g. verbs, food"
          className="w-full md:w-72"
        />
      </PageHeader>

      <section
        aria-label="Suggestions"
        className="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
      >
        <ContinueCard lesson={continueLesson} />
        <NeedsReviewCard topics={topics.filter((t) => t.needsReview)} />
      </section>

      <section aria-labelledby="topics-heading" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="topics-heading" className="text-lg font-semibold md:text-xl">
            All topics
          </h2>
          <LevelFilter value={level} onChange={setLevel} />
        </div>
        <TopicGrid topics={filterTopics(topics, level, query)} query={query} />
      </section>
    </div>
  );
}
