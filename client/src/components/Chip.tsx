interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

/** A toggle button for filters. */
export default function Chip({label, active, onClick}: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-11 rounded-full border px-4 text-sm font-semibold ${
        active
          ? "border-ink bg-ink text-surface"
          : "border-line-strong bg-surface hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}
