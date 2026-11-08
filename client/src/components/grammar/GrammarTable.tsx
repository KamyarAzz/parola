import GrammarTableRow from "./GrammarTableRow";

interface GrammarTableProps {
  /** The first row is the header */
  rows: string[][];
}

export default function GrammarTable({rows}: GrammarTableProps) {
  const [header, ...body] = rows;

  return (
    <div className="overflow-x-auto rounded-xl bg-ground">
      <table lang="it" className="w-full text-left text-[13px] md:text-sm">
        <thead className="text-xs text-muted">
          <GrammarTableRow cells={header} header />
        </thead>
        <tbody>
          {body.map((cells) => (
            <GrammarTableRow key={cells.join("|")} cells={cells} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
