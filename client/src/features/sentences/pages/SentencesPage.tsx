import {useSearchParams} from "react-router";
import ChipToggle from "../../../components/ChipToggle";
import PageHeader from "../../../components/PageHeader";
import MixBanner from "../../../components/study/MixBanner";
import StudySetGrid from "../../../components/study/StudySetGrid";
import {sentenceGroupings} from "../../../data/sentences";
import {allScenariosGroup, scenarioGroups} from "../../../lib/sentences";
import type {Scenario, SentenceGrouping} from "../../../types";

const previewOf = (scenario: Scenario) => scenario.italian;

export default function SentencesPage() {
  // Kept in the URL so going back from a set keeps the same view
  const [params, setParams] = useSearchParams();
  const grouping: SentenceGrouping =
    params.get("by") === "format" ? "format" : "lesson";

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Build sentences"
        description="Say real things in Italian: dialogues, short texts and drills from lessons 1–8. Type each line, or use word tiles if you're stuck."
        hideDescriptionOnMobile
      />

      <MixBanner set={allScenariosGroup} noun="situations" />

      <section aria-labelledby="sets-heading" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="sets-heading" className="text-lg font-semibold md:text-xl">
            Situations
          </h2>
          <ChipToggle
            label="Group situations"
            options={sentenceGroupings}
            value={grouping}
            onChange={(by) => setParams({by}, {replace: true})}
          />
        </div>
        <StudySetGrid
          sets={scenarioGroups(grouping)}
          basePath="/sentences"
          noun="situations"
          previewOf={previewOf}
        />
      </section>
    </div>
  );
}
