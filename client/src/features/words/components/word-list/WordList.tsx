import type {Word} from "../../../../types";
import WordRow from "./WordRow";

interface WordListProps {
  words: Word[];
}

export default function WordList({words}: WordListProps) {
  return (
    <ul
      aria-label="Words"
      className="grid rounded-2xl border border-line bg-surface px-4 md:grid-cols-2 md:gap-x-8 md:px-6"
    >
      {words.map((word) => (
        <WordRow key={`${word.lesson}-${word.it}`} word={word} />
      ))}
    </ul>
  );
}
