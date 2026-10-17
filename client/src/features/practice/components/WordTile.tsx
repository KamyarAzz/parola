interface WordTileProps {
  word: string;
  onClick: () => void;
  disabled?: boolean;
  /** Already moved to the answer: shows an empty slot in the word bank */
  used?: boolean;
}

export default function WordTile({
  word,
  onClick,
  disabled = false,
  used = false,
}: WordTileProps) {
  return (
    <button
      type="button"
      disabled={disabled || used}
      aria-hidden={used || undefined}
      onClick={onClick}
      className={`min-h-11 rounded-xl border border-b-3 px-3.5 py-2 text-base font-medium transition-transform md:px-4 md:text-[17px] ${
        used
          ? "border-track bg-track text-transparent"
          : "border-line-strong bg-surface hover:-translate-y-px disabled:hover:translate-y-0"
      }`}
    >
      {word}
    </button>
  );
}
