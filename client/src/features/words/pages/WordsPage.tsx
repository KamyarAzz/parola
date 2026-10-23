import {useSearchParams} from "react-router";
import PageHeader from "../../../components/PageHeader";
import {allWordsGroup, wordGroups} from "../../../lib/words";
import type {WordGrouping} from "../../../types";
import AllWordsCard from "../components/all-words/AllWordsCard";
import GroupingToggle from "../components/grouping/GroupingToggle";
import WordGroupGrid from "../components/group-grid/WordGroupGrid";

export default function WordsPage() {
  // Kept in the URL so going back from a group keeps the same view
  const [params, setParams] = useSearchParams();
  const grouping: WordGrouping =
    params.get("by") === "topic" ? "topic" : "lesson";

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Practise words"
        description="Vocabulary from lessons 1–8. Pick a lesson or a topic, look over the words, then test yourself."
        hideDescriptionOnMobile
      />

      <AllWordsCard group={allWordsGroup} />

      <section aria-labelledby="groups-heading" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="groups-heading" className="text-lg font-semibold md:text-xl">
            Word sets
          </h2>
          <GroupingToggle
            value={grouping}
            onChange={(by) => setParams({by}, {replace: true})}
          />
        </div>
        <WordGroupGrid groups={wordGroups(grouping)} />
      </section>
    </div>
  );
}
