import Eyebrow from "../../../../components/Eyebrow";
import type {GrammarPoint} from "../../../../types";
import ExampleLine from "./ExampleLine";
import GrammarTable from "./GrammarTable";

interface GrammarPointCardProps {
  point: GrammarPoint;
}

/** The rule in a line, a small table if it helps, and an example. */
export default function GrammarPointCard({point}: GrammarPointCardProps) {
  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 md:p-5">
      <div className="flex flex-col gap-1">
        <Eyebrow>
          <span lang="it">{point.italian}</span> · Lezione {point.lesson}
        </Eyebrow>
        <h2 className="text-lg font-semibold tracking-tight">{point.title}</h2>
      </div>
      <p className="text-[15px] leading-snug">{point.summary}</p>
      {point.table && <GrammarTable rows={point.table} />}
      <ul aria-label="Examples" className="flex flex-col gap-1.5">
        {point.examples.map((example) => (
          <ExampleLine key={example.it} example={example} />
        ))}
      </ul>
    </li>
  );
}
