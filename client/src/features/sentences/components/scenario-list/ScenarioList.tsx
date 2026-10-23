import type {Scenario} from "../../../../types";
import ScenarioCard from "./ScenarioCard";

interface ScenarioListProps {
  scenarios: Scenario[];
}

export default function ScenarioList({scenarios}: ScenarioListProps) {
  return (
    <ul
      aria-label="Situations"
      className="grid items-start gap-3 md:grid-cols-2 md:gap-4"
    >
      {scenarios.map((scenario) => (
        <ScenarioCard key={scenario.id} scenario={scenario} />
      ))}
    </ul>
  );
}
