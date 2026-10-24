import {RotateCcw} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import Eyebrow from "../../../../components/Eyebrow";
import ProgressBar from "../../../../components/ProgressBar";
import type {LastPractice} from "../../../../types";

interface ContinueCardProps {
  last: LastPractice;
}

/** The last test you took, to go again. */
export default function ContinueCard({last}: ContinueCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-ink p-5 text-white md:p-6">
      <Eyebrow tone="onDark">Pick up where you left off</Eyebrow>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold md:text-[22px]">
          {last.title}
        </span>
        <span className="text-sm text-ink-pale md:text-[15px]">
          {last.detail}
        </span>
      </div>
      <div className="mt-auto flex flex-col gap-4 md:flex-row md:items-center">
        <ProgressBar
          value={last.score}
          tone="onDark"
          label="Last score"
          className="md:flex-1"
        />
        <Link
          to={`/practice/${last.practiceId}`}
          className={buttonClass("primary", "md", "md:px-5")}
        >
          <RotateCcw aria-hidden size={18} />
          Practise again
        </Link>
      </div>
    </div>
  );
}
