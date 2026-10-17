import Chip from "../../../components/Chip";
import {levelOptions} from "../../../data/topics";
import type {LevelOption} from "../../../types";

interface LevelFilterProps {
  value: LevelOption;
  onChange: (level: LevelOption) => void;
}

export default function LevelFilter({value, onChange}: LevelFilterProps) {
  return (
    <div role="group" aria-label="Filter by level" className="flex gap-2">
      {levelOptions.map((level) => (
        <Chip
          key={level}
          label={level}
          active={level === value}
          onClick={() => onChange(level)}
        />
      ))}
    </div>
  );
}
