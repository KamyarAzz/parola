import type {ReactNode} from "react";

interface TableHeadCellProps {
  children: ReactNode;
  align?: "left" | "right";
  /** Hides the label visually but keeps it for screen readers */
  srOnly?: boolean;
}

export default function TableHeadCell({
  children,
  align = "left",
  srOnly = false,
}: TableHeadCellProps) {
  return (
    <th
      scope="col"
      className={`border-b border-line px-3 py-2.5 font-medium first:pl-0 last:pr-0 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {srOnly ? <span className="sr-only">{children}</span> : children}
    </th>
  );
}
