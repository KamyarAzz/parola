import ChipToggle from "../../../../components/ChipToggle";
import StudySetGrid from "../../../../components/study/StudySetGrid";
import {grammarGroupings} from "../../../../data/grammar";
import {grammarGroups} from "../../../../lib/grammar";
import type {GrammarGrouping, GrammarPoint} from "../../../../types";

interface GrammarSetsProps {
  grouping: GrammarGrouping;
  onGroupingChange: (grouping: GrammarGrouping) => void;
}

const previewOf = (point: GrammarPoint) => point.italian;

/** The grammar sets, by lesson or by area. */
export default function GrammarSets({
  grouping,
  onGroupingChange,
}: GrammarSetsProps) {
  return (
    <section aria-labelledby="sets-heading" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="sets-heading" className="text-lg font-semibold md:text-xl">
          Grammar sets
        </h2>
        <ChipToggle
          label="Group grammar"
          options={grammarGroupings}
          value={grouping}
          onChange={onGroupingChange}
        />
      </div>
      <StudySetGrid
        sets={grammarGroups(grouping)}
        basePath="/grammar"
        noun="topics"
        previewOf={previewOf}
      />
    </section>
  );
}
