import {accentLetters} from "../../../../data/accents";
import AccentKey from "./AccentKey";

interface AccentKeysProps {
  onInsert: (letter: string) => void;
}

/** Accented letters that are hard to type on most keyboards. */
export default function AccentKeys({onInsert}: AccentKeysProps) {
  return (
    <div role="group" aria-label="Accented letters" className="flex gap-1.5">
      {accentLetters.map((letter) => (
        <AccentKey key={letter} letter={letter} onInsert={onInsert} />
      ))}
    </div>
  );
}
