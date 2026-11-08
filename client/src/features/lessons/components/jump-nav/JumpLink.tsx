interface JumpLinkProps {
  /** Section id to jump to */
  target: string;
  label: string;
  count?: number;
}

export default function JumpLink({target, label, count}: JumpLinkProps) {
  return (
    <a
      href={`#${target}`}
      className="flex h-11 items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 text-sm font-semibold hover:border-ink"
    >
      {label}
      {count !== undefined && <span className="text-muted">{count}</span>}
    </a>
  );
}
