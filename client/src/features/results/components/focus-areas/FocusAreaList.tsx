import SectionCard from "../../../../components/SectionCard";
import type {FocusArea} from "../../../../types";
import FocusAreaItem from "./FocusAreaItem";

interface FocusAreaListProps {
  areas: FocusArea[];
}

export default function FocusAreaList({areas}: FocusAreaListProps) {
  return (
    <SectionCard
      id="focus"
      title="What to work on"
      description="Built from the mistakes in your last 10 tests."
    >
      {areas.map((area) => (
        <FocusAreaItem key={area.id} area={area} />
      ))}
    </SectionCard>
  );
}
