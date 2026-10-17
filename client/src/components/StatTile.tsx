import type {ReactNode} from "react";

interface StatTileProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function StatTile({label, children, className = ""}: StatTileProps) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-line bg-surface p-3.5 md:p-5">
      <span className="text-xs font-medium text-muted md:text-[13px]">{label}</span>
      <span className={`font-bold tabular-nums ${className}`}>{children}</span>
    </div>
  );
}
