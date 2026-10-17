import type {ReactNode} from "react";

interface StatTileProps {
  label: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  /** Text colour class for the value */
  className?: string;
}

const sizes = {
  sm: "text-[15px] font-semibold md:text-xl",
  md: "text-[22px] font-bold md:text-[30px]",
  lg: "text-2xl font-bold md:text-[30px]",
};

export default function StatTile({
  label,
  children,
  size = "lg",
  className = "",
}: StatTileProps) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-line bg-surface p-3.5 md:p-5">
      <span className="text-xs font-medium text-muted md:text-[13px]">
        {label}
      </span>
      <span className={`tabular-nums ${sizes[size]} ${className}`}>
        {children}
      </span>
    </div>
  );
}
