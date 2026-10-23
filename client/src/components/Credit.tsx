interface CreditProps {
  author: string;
  /** Layout only, e.g. "mt-auto" */
  className?: string;
}

/** Small "made by" line. */
export default function Credit({author, className = ""}: CreditProps) {
  return (
    <p className={`text-xs text-muted ${className}`}>
      Made by <span className="font-semibold text-ink">{author}</span>
    </p>
  );
}
