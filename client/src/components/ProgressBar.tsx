interface ProgressBarProps {
  /** 0–100 */
  value: number;
  tone?: "brand" | "warn" | "glow";
  size?: "sm" | "lg";
  className?: string;
  label?: string;
}

const tones = {
  brand: "bg-brand",
  warn: "bg-warn",
  glow: "bg-brand-glow",
};

export function ProgressBar({value, tone = "brand", size = "sm", className = "", label}: ProgressBarProps) {
  return (
    <div
      role={label ? "progressbar" : undefined}
      aria-label={label}
      aria-valuemin={label ? 0 : undefined}
      aria-valuemax={label ? 100 : undefined}
      aria-valuenow={label ? value : undefined}
      className={`overflow-hidden rounded-full bg-track ${size === "lg" ? "h-2.5" : "h-1.5"} ${className}`}
    >
      <div className={`h-full rounded-full transition-[width] duration-300 ${tones[tone]}`} style={{width: `${value}%`}} />
    </div>
  );
}
