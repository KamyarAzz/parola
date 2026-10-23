import {isCue, modelAnswer} from "../../../../lib/sentences";
import type {ScenarioStep} from "../../../../types";

interface ScriptLineProps {
  step: ScenarioStep;
}

/** One line of the model text: someone else's, or yours in green. */
export default function ScriptLine({step}: ScriptLineProps) {
  const cue = isCue(step);

  return (
    <li
      className={`flex flex-col border-l-3 pl-3 ${
        cue ? "border-line" : "border-brand"
      }`}
    >
      <span className="text-xs font-semibold text-muted">
        {cue ? step.speaker : "You"}
      </span>
      <span
        lang="it"
        className={`text-[15px] ${cue ? "" : "font-semibold text-brand-dark"}`}
      >
        {cue ? step.it : modelAnswer(step)}
      </span>
      <span className="text-sm text-muted">{step.en}</span>
    </li>
  );
}
