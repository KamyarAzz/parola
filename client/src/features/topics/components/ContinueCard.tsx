import {ArrowRight} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../components/button";
import Eyebrow from "../../../components/Eyebrow";
import ProgressBar from "../../../components/ProgressBar";
import type {ContinueLesson} from "../../../types";

interface ContinueCardProps {
  lesson: ContinueLesson;
}

export default function ContinueCard({lesson}: ContinueCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-ink p-5 text-white md:p-6">
      <Eyebrow tone="onDark">Continue</Eyebrow>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold md:text-[22px]">
          {lesson.title}
        </span>
        <span lang="it" className="text-sm text-ink-pale md:text-[15px]">
          {lesson.detail}
        </span>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <ProgressBar
          value={lesson.progress}
          tone="onDark"
          className="md:flex-1"
        />
        <Link
          to={`/practice/${lesson.topicId}`}
          className={buttonClass("primary", "md", "md:px-5")}
        >
          Resume
          <ArrowRight aria-hidden size={18} />
        </Link>
      </div>
    </div>
  );
}
