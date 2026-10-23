import type {DiffWord} from "../../../../lib/wordDiff";
import DiffToken from "./DiffToken";

interface DiffLineProps {
  label: string;
  words: DiffWord[];
  /** given: your wrong words are struck out; expected: missed words stand out */
  tone: "given" | "expected";
}

export default function DiffLine({label, words, tone}: DiffLineProps) {
  return (
    <p className="text-[15px] leading-relaxed md:text-base">
      <span className="mr-1.5 text-sm font-semibold">{label}:</span>
      <span lang="it">
        {words.map((word, i) => (
          <DiffToken key={i} word={word} tone={tone} />
        ))}
      </span>
    </p>
  );
}
