import {Target} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import SectionCard from "../../../../components/SectionCard";
import {REVIEW_ID} from "../../../../lib/review";
import type {FocusArea} from "../../../../types";
import FocusAreaItem from "./FocusAreaItem";

interface FocusAreaListProps {
  areas: FocusArea[];
}

export default function FocusAreaList({areas}: FocusAreaListProps) {
  return (
    <SectionCard
      id="focus"
      title="What to work on"
      description={
        areas.length
          ? "The words, verbs, grammar and situations you've got wrong most in your recent answers."
          : "Nothing to fix right now: no item is below 80% in your recent answers."
      }
    >
      {areas.map((area) => (
        <FocusAreaItem key={area.id} area={area} />
      ))}
      {areas.length > 0 && (
        <Link
          to={`/practice/${REVIEW_ID}`}
          className={buttonClass("primary", "md", "mt-2 md:w-fit")}
        >
          <Target aria-hidden size={18} />
          Practise all of these
        </Link>
      )}
    </SectionCard>
  );
}
