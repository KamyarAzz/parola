import {Link} from "react-router";
import {buttonClass} from "../../../components/button";
import type {FocusArea} from "../../../types";
import AccuracyMeter from "./AccuracyMeter";

interface FocusAreaItemProps {
  area: FocusArea;
}

export default function FocusAreaItem({area}: FocusAreaItemProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line py-4">
      <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-1">
        <span className="text-[15px] font-semibold md:text-base">
          {area.title}
        </span>
        <span className="text-[13px] text-muted md:text-sm">{area.detail}</span>
      </div>
      <div className="flex flex-[1_1_220px] items-center gap-3 md:flex-[0_1_340px]">
        <AccuracyMeter accuracy={area.accuracy} mistakes={area.mistakes} />
        <Link
          to={`/practice/${area.topicId}`}
          className={buttonClass("soft", "md", "shrink-0")}
        >
          Practise
        </Link>
      </div>
    </div>
  );
}
