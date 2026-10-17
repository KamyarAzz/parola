interface ProgressBarProps {
  /** 0–100 */
  value: number;
  tone?: "brand" | "warn" | "onDark";
  size?: "sm" | "lg";
  /** Layout only, e.g. "flex-1" */
  className?: string;
  /** When set, the bar is announced as a progressbar with this name */
  label?: string;
}

const tones = {
  brand: {track: "bg-track", bar: "bg-brand"},
  warn: {track: "bg-track", bar: "bg-warn"},
  onDark: {track: "bg-ink-raised", bar: "bg-brand-glow"},
};

export default function ProgressBar({
  value,
  tone = "brand",
  size = "sm",
  className = "",
  label,
}: ProgressBarProps) {
  return (
    <div
      role={label ? "progressbar" : undefined}
      aria-label={label}
      aria-valuemin={label ? 0 : undefined}
      aria-valuemax={label ? 100 : undefined}
      aria-valuenow={label ? value : undefined}
      className={`overflow-hidden rounded-full ${tones[tone].track} ${
        size === "lg" ? "h-2.5" : "h-1.5"
      } ${className}`}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-300 ${tones[tone].bar}`}
        style={{width: `${value}%`}}
      />
    </div>
  );
}
