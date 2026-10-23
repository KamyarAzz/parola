import SpeakButton from "../../../../components/SpeakButton";
import type {CueStep} from "../../../../types";

interface SentenceCueProps {
  cue: CueStep;
}

/** What the other person just said, as a chat bubble. */
export default function SentenceCue({cue}: SentenceCueProps) {
  return (
    <div className="flex items-start gap-3">
      <SpeakButton text={cue.it} variant="soft" />
      <div className="flex min-w-0 flex-col gap-0.5 rounded-2xl rounded-tl-sm bg-ground px-4 py-3">
        <span className="text-xs font-semibold text-muted">{cue.speaker}</span>
        <span lang="it" className="text-[17px] font-medium md:text-lg">
          {cue.it}
        </span>
        <span className="text-sm text-muted">{cue.en}</span>
      </div>
    </div>
  );
}
