import {ArrowRight} from "lucide-react";
import {Link} from "react-router";
import Eyebrow from "../../../components/Eyebrow";
import type {Topic} from "../../../types";

interface NeedsReviewCardProps {
  /** Topics whose mastery has dropped */
  topics: Topic[];
}

export default function NeedsReviewCard({topics}: NeedsReviewCardProps) {
  if (topics.length === 0) return null;

  return (
    <Link
      to="/results"
      className="flex flex-col gap-1 rounded-2xl bg-warn-soft p-4 text-warn-body md:gap-4 md:p-6"
    >
      <Eyebrow tone="warn" className="hidden md:block">
        Needs review
      </Eyebrow>
      <span className="text-[15px] font-semibold text-warn-ink md:text-[22px] md:text-ink">
        {topics.length} {topics.length === 1 ? "topic is" : "topics are"}{" "}
        slipping
      </span>
      <span className="text-sm md:text-[15px]">
        {topics.map((t) => t.title).join(" and ")} dropped below 60% in your
        last tests.
      </span>
      <span className="mt-1 inline-flex items-center gap-2 text-[15px] font-semibold text-warn-ink">
        See what to work on
        <ArrowRight aria-hidden size={18} />
      </span>
    </Link>
  );
}
