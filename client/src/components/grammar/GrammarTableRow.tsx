interface GrammarTableRowProps {
  cells: string[];
  /** Header row: every cell is a column heading */
  header?: boolean;
}

/** The first cell labels the row (a pronoun, an ending…). */
export default function GrammarTableRow({
  cells,
  header = false,
}: GrammarTableRowProps) {
  const [label, ...values] = cells;
  const Cell = header ? "th" : "td";

  return (
    <tr className="border-b border-line last:border-b-0">
      <th
        scope={header ? "col" : "row"}
        className="px-1.5 py-1.5 font-medium whitespace-nowrap text-muted md:px-2"
      >
        {label}
      </th>
      {values.map((value, i) => (
        <Cell
          key={i}
          scope={header ? "col" : undefined}
          className={`px-1.5 py-1.5 md:px-2 ${header ? "font-medium" : "font-semibold"}`}
        >
          {value}
        </Cell>
      ))}
    </tr>
  );
}
