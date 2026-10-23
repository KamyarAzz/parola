import Chip from "../../../../components/Chip";
import {wordGroupings} from "../../../../data/words";
import type {WordGrouping} from "../../../../types";

interface GroupingToggleProps {
  value: WordGrouping;
  onChange: (grouping: WordGrouping) => void;
}

export default function GroupingToggle({value, onChange}: GroupingToggleProps) {
  return (
    <div role="group" aria-label="Group words" className="flex gap-2">
      {wordGroupings.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          active={option.value === value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}
