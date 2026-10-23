import {PenLine} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import Eyebrow from "../../../../components/Eyebrow";
import {
  isCue,
  scenarioFormatTag,
  scenarioPracticeId,
} from "../../../../lib/sentences";
import type {Scenario} from "../../../../types";
import ScenarioScript from "./ScenarioScript";

interface ScenarioCardProps {
  scenario: Scenario;
}

/** One dialogue, text or drill: what it's about and a button to practise it. */
export default function ScenarioCard({scenario}: ScenarioCardProps) {
  const lines = scenario.steps.filter((step) => !isCue(step)).length;

  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 md:p-5">
      <div className="flex items-center justify-between gap-2">
        <Eyebrow>
          <span lang="it">{scenarioFormatTag(scenario)}</span> · Lezione{" "}
          {scenario.lesson}
        </Eyebrow>
        <span className="rounded-md bg-ground px-2 py-0.5 text-xs font-semibold tabular-nums">
          {lines} lines
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">
          {scenario.title}
        </h2>
        <span lang="it" className="text-sm text-muted">
          {scenario.italian}
        </span>
      </div>
      <p className="text-[15px]">{scenario.intro}</p>
      <Link
        to={`/practice/${scenarioPracticeId(scenario)}`}
        className={buttonClass("soft", "md", "w-full")}
      >
        <PenLine aria-hidden size={18} />
        Practise this
      </Link>
      <ScenarioScript scenario={scenario} />
    </li>
  );
}
