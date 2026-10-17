import {Volume2} from "lucide-react";

interface SpeakButtonProps {
  /** Italian text to read aloud */
  text: string;
}

/** Reads Italian text aloud with the browser's built-in speech. */
export default function SpeakButton({text}: SpeakButtonProps) {
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
      aria-label="Play audio"
      onClick={speak}
      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white hover:bg-brand-dark md:size-13 md:rounded-[14px]"
    >
      <Volume2 aria-hidden size={22} />
    </button>
  );
}
