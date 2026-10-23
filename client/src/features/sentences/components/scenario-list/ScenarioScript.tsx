import {ChevronDown} from "lucide-react";
import type {Scenario} from "../../../../types";
import ScriptLine from "./ScriptLine";

interface ScenarioScriptProps {
  scenario: Scenario;
}

/** The whole dialogue or text in Italian, hidden until opened. */
export default function ScenarioScript({scenario}: ScenarioScriptProps) {
  return (
    <details className="group border-t border-line pt-2">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-[10px] text-sm font-semibold text-muted hover:text-ink [&::-webkit-details-marker]:hidden">
        Read the model answer
        <ChevronDown
          aria-hidden
          size={18}
          className="transition-transform group-open:rotate-180"
        />
      </summary>
      <ol className="flex flex-col gap-2 pt-1">
        {scenario.steps.map((step, i) => (
          <ScriptLine key={i} step={step} />
        ))}
      </ol>
    </details>
  );
}
