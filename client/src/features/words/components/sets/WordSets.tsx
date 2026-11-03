import ChipToggle from "../../../../components/ChipToggle";
import StudySetGrid from "../../../../components/study/StudySetGrid";
import {wordGroupings} from "../../../../data/words";
import {wordGroups} from "../../../../lib/words";
import type {Word, WordGrouping} from "../../../../types";

interface WordSetsProps {
  grouping: WordGrouping;
  onGroupingChange: (grouping: WordGrouping) => void;
}

const previewOf = (word: Word) => word.it;

/** The word sets, by lesson or by topic. */
export default function WordSets({grouping, onGroupingChange}: WordSetsProps) {
  return (
    <section aria-labelledby="sets-heading" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="sets-heading" className="text-lg font-semibold md:text-xl">
          Word sets
        </h2>
        <ChipToggle
          label="Group words"
          options={wordGroupings}
          value={grouping}
          onChange={onGroupingChange}
        />
      </div>
      <StudySetGrid
        sets={wordGroups(grouping)}
        basePath="/words"
        noun="words"
        previewOf={previewOf}
      />
    </section>
  );
}
