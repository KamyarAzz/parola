import {useSearchParams} from "react-router";
import ChipToggle from "../../../components/ChipToggle";
import PageHeader from "../../../components/PageHeader";
import MixBanner from "../../../components/study/MixBanner";
import StudySetGrid from "../../../components/study/StudySetGrid";
import {grammarGroupings} from "../../../data/grammar";
import {allGrammarGroup, grammarGroups} from "../../../lib/grammar";
import type {GrammarGrouping, GrammarPoint} from "../../../types";

const previewOf = (point: GrammarPoint) => point.italian;

export default function GrammarPage() {
  // Kept in the URL so going back from a set keeps the same view
  const [params, setParams] = useSearchParams();
  const grouping: GrammarGrouping =
    params.get("by") === "category" ? "category" : "lesson";

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Practise grammar"
        description="The grammar from lessons 1–8 in short summaries. Read the rule, then test yourself."
        hideDescriptionOnMobile
      />

      <MixBanner set={allGrammarGroup} noun="topics" />

      <section aria-labelledby="sets-heading" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="sets-heading" className="text-lg font-semibold md:text-xl">
            Grammar sets
          </h2>
          <ChipToggle
            label="Group grammar"
            options={grammarGroupings}
            value={grouping}
            onChange={(by) => setParams({by}, {replace: true})}
          />
        </div>
        <StudySetGrid
          sets={grammarGroups(grouping)}
          basePath="/grammar"
          noun="topics"
          previewOf={previewOf}
        />
      </section>
    </div>
  );
}
