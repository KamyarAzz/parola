import type {ReactNode} from "react";

interface EyebrowProps {
  children: ReactNode;
  tone?: "muted" | "onDark" | "warn";
  /** Layout only, e.g. "hidden md:block" */
  className?: string;
}

const tones = {
  muted: "text-muted",
  onDark: "text-ink-soft",
  warn: "text-warn-ink",
};

/** Small uppercase label above a title. */
export default function Eyebrow({
  children,
  tone = "muted",
  className = "",
}: EyebrowProps) {
  return (
    <span
      className={`text-xs font-semibold tracking-wider uppercase md:text-[13px] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
