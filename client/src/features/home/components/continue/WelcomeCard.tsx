import {ArrowRight} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import Eyebrow from "../../../../components/Eyebrow";

/** Shown before the first test on this device. */
export default function WelcomeCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-panel p-5 text-on-panel md:p-6">
      <Eyebrow tone="onDark">
        <span lang="it">Benvenuto!</span>
      </Eyebrow>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold md:text-[22px]">
          Start with Lezione 1
        </span>
        <span className="text-sm text-on-panel-muted md:text-[15px]">
          Learn the words first, then the verbs and grammar, then put them
          together in sentences. Your progress shows up here as you go.
        </span>
      </div>
      <Link
        to="/words/words-lesson-1"
        className={buttonClass("primary", "md", "mt-auto md:w-fit md:px-5")}
      >
        Lezione 1 words
        <ArrowRight aria-hidden size={18} />
      </Link>
    </div>
  );
}
