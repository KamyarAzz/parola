import SpeakButton from "../../../../components/SpeakButton";
import type {Word} from "../../../../types";

interface WordRowProps {
  word: Word;
}

export default function WordRow({word}: WordRowProps) {
  return (
    <li className="flex items-center gap-3 border-t border-line py-2.5 first:border-t-0 md:nth-2:border-t-0">
      <SpeakButton text={word.it} variant="soft" />
      <div className="flex min-w-0 flex-col">
        <span lang="it" className="text-base font-semibold md:text-[17px]">
          {word.it}
        </span>
        <span className="text-sm text-muted">{word.en}</span>
      </div>
    </li>
  );
}
