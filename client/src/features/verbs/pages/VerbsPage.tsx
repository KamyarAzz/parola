import {useSearchParams} from "react-router";
import ChipToggle from "../../../components/ChipToggle";
import PageHeader from "../../../components/PageHeader";
import MixBanner from "../../../components/study/MixBanner";
import StudySetGrid from "../../../components/study/StudySetGrid";
import {verbGroupings} from "../../../data/verbs";
import {allVerbsGroup, verbGroups} from "../../../lib/verbs";
import type {Verb, VerbGrouping} from "../../../types";

const previewOf = (verb: Verb) => verb.it;

export default function VerbsPage() {
  // Kept in the URL so going back from a set keeps the same view
  const [params, setParams] = useSearchParams();
  const grouping: VerbGrouping =
    params.get("by") === "type" ? "type" : "lesson";

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Practise verbs"
        description="Verbs from lessons 1–8 in the present tense, io to loro. Look over the forms, then test yourself."
        hideDescriptionOnMobile
      />

      <MixBanner set={allVerbsGroup} noun="verbs" />

      <section aria-labelledby="sets-heading" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="sets-heading" className="text-lg font-semibold md:text-xl">
            Verb sets
          </h2>
          <ChipToggle
            label="Group verbs"
            options={verbGroupings}
            value={grouping}
            onChange={(by) => setParams({by}, {replace: true})}
          />
        </div>
        <StudySetGrid
          sets={verbGroups(grouping)}
          basePath="/verbs"
          noun="verbs"
          previewOf={previewOf}
        />
      </section>
    </div>
  );
}
