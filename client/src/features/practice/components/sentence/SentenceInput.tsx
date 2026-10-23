import {useRef} from "react";
import AccentKeys from "./AccentKeys";

interface SentenceInputProps {
  value: string;
  onChange: (value: string) => void;
  /** Called on Enter (Shift+Enter adds a new line) */
  onSubmit: () => void;
  locked: boolean;
}

/** Text box for the Italian sentence, with buttons for accented letters. */
export default function SentenceInput({
  value,
  onChange,
  onSubmit,
  locked,
}: SentenceInputProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Puts the letter where the cursor is and keeps typing from there
  const insert = (letter: string) => {
    const box = ref.current;
    const start = box?.selectionStart ?? value.length;
    const end = box?.selectionEnd ?? value.length;
    onChange(value.slice(0, start) + letter + value.slice(end));
    requestAnimationFrame(() => {
      box?.focus();
      box?.setSelectionRange(start + 1, start + 1);
    });
  };

  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor="sentence-answer" className="sr-only">
        Your answer in Italian
      </label>
      <textarea
        ref={ref}
        id="sentence-answer"
        lang="it"
        rows={3}
        autoFocus
        spellCheck={false}
        autoCapitalize="sentences"
        autoComplete="off"
        value={value}
        readOnly={locked}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) onSubmit();
          }
        }}
        placeholder="Scrivi in italiano…"
        className="w-full resize-none rounded-2xl border border-line-strong bg-surface px-4 py-3.5 text-lg outline-none read-only:bg-ground focus:border-brand md:text-xl"
      />
      {!locked && <AccentKeys onInsert={insert} />}
    </div>
  );
}
