import {Lightbulb} from "lucide-react";

interface SentencePromptProps {
  /** English sentence to put into Italian */
  prompt: string;
  hint?: string;
}

export default function SentencePrompt({prompt, hint}: SentencePromptProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border-l-4 border-brand bg-brand-soft px-4 py-4 md:px-5">
      <span className="text-xs font-semibold tracking-wider text-brand uppercase">
        You say
      </span>
      <p className="text-[19px] leading-snug font-semibold md:text-[22px]">
        {prompt}
      </p>
      {hint && (
        <p className="flex items-center gap-1.5 text-sm text-brand-dark">
          <Lightbulb aria-hidden size={16} />
          {hint}
        </p>
      )}
    </div>
  );
}
