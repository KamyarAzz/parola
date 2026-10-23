import type {GroupingOption} from "../types";
import Chip from "./Chip";

interface ChipToggleProps<T extends string> {
  /** Accessible name for the group, e.g. "Group words" */
  label: string;
  options: GroupingOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

/** A row of chips where exactly one is active. */
export default function ChipToggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: ChipToggleProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex gap-2">
      {options.map((option) => (
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
