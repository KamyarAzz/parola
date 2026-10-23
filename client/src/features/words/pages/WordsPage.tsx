import {useSearchParams} from "react-router";
import ChipToggle from "../../../components/ChipToggle";
import PageHeader from "../../../components/PageHeader";
import MixBanner from "../../../components/study/MixBanner";
import StudySetGrid from "../../../components/study/StudySetGrid";
import {wordGroupings} from "../../../data/words";
import {allWordsGroup, wordGroups} from "../../../lib/words";
import type {Word, WordGrouping} from "../../../types";

const previewOf = (word: Word) => word.it;

export default function WordsPage() {
  // Kept in the URL so going back from a set keeps the same view
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

      <MixBanner set={allWordsGroup} noun="words" />

      <section aria-labelledby="sets-heading" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="sets-heading" className="text-lg font-semibold md:text-xl">
            Word sets
          </h2>
          <ChipToggle
            label="Group words"
            options={wordGroupings}
            value={grouping}
            onChange={(by) => setParams({by}, {replace: true})}
          />
        </div>
        <StudySetGrid
          sets={wordGroups(grouping)}
          basePath="/words"
          noun="words"
          previewOf={previewOf}
        />
      </section>
    </div>
  );
}
