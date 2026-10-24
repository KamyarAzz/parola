import {Volume2} from "lucide-react";

interface SpeakButtonProps {
  /** Italian text to read aloud */
  text: string;
  /** "soft" is a lighter button for lists */
  variant?: "solid" | "soft";
}

const variants = {
  solid:
    "size-11 rounded-xl bg-brand text-on-brand hover:bg-brand-dark md:size-13 md:rounded-[14px]",
  soft: "size-11 rounded-[10px] bg-brand-soft text-brand hover:bg-brand hover:text-on-brand",
};

/** Reads Italian text aloud with the browser's built-in speech. */
export default function SpeakButton({
  text,
  variant = "solid",
}: SpeakButtonProps) {
  const speak = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      type="button"
      aria-label={`Play audio: ${text}`}
      onClick={speak}
      className={`flex shrink-0 items-center justify-center ${variants[variant]}`}
    >
      <Volume2 aria-hidden size={variant === "solid" ? 22 : 20} />
    </button>
  );
}
