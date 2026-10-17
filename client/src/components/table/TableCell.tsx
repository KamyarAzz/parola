import type {ReactNode} from "react";

interface TableCellProps {
  children: ReactNode;
  align?: "left" | "right";
  /** Less vertical padding, for cells that hold a button or link */
  compact?: boolean;
  /** Text styles, e.g. colour or weight */
  className?: string;
}

export default function TableCell({
  children,
  align = "left",
  compact = false,
  className = "",
}: TableCellProps) {
  return (
    <td
      className={`border-b border-track px-3 first:pl-0 last:pr-0 ${
        compact ? "py-1.5" : "py-3.5"
      } ${align === "right" ? "text-right" : ""} ${className}`}
    >
      {children}
    </td>
  );
}
