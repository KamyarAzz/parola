import type {GrammarExample} from "../../../../types";

interface ExampleLineProps {
  example: GrammarExample;
}

export default function ExampleLine({example}: ExampleLineProps) {
  return (
    <li className="flex flex-col border-l-3 border-brand-soft pl-3">
      <span lang="it" className="text-[15px] font-medium">
        {example.it}
      </span>
      <span className="text-sm text-muted">{example.en}</span>
    </li>
  );
}
