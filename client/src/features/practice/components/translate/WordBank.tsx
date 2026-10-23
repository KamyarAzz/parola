import AnswerLines from "./AnswerLines";
import WordTile from "./WordTile";

interface WordBankProps {
  words: string[];
  /** Indexes into words, in the order the learner picked them */
  picked: number[];
  onPick: (wordIndex: number) => void;
  onRemove: (position: number) => void;
  locked: boolean;
}

/** Lined answer area above a bank of word tiles to tap. */
export default function WordBank({
  words,
  picked,
  onPick,
  onRemove,
  locked,
}: WordBankProps) {
  return (
    <>
      <AnswerLines>
        {picked.map((wordIndex, position) => (
          <WordTile
            key={`${wordIndex}-${position}`}
            word={words[wordIndex]}
            disabled={locked}
            onClick={() => onRemove(position)}
          />
        ))}
      </AnswerLines>

      <div
        aria-label="Word bank"
        className="flex flex-wrap justify-center gap-2 md:gap-2.5"
      >
        {words.map((word, i) => (
          <WordTile
            key={i}
            word={word}
            used={picked.includes(i)}
            disabled={locked}
            onClick={() => onPick(i)}
          />
        ))}
      </div>
    </>
  );
}
