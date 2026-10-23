interface AccentKeyProps {
  letter: string;
  onInsert: (letter: string) => void;
}

export default function AccentKey({letter, onInsert}: AccentKeyProps) {
  return (
    <button
      type="button"
      aria-label={`Insert ${letter}`}
      // Keep focus (and the cursor) in the text box
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => onInsert(letter)}
      className="flex size-11 items-center justify-center rounded-[10px] border border-b-3 border-line-strong bg-surface text-lg font-medium hover:border-ink"
    >
      {letter}
    </button>
  );
}
