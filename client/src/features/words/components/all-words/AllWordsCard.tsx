import {Shuffle} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import Eyebrow from "../../../../components/Eyebrow";
import type {WordGroup} from "../../../../types";

interface AllWordsCardProps {
  group: WordGroup;
}

/** Dark banner that starts a mixed test from every lesson. */
export default function AllWordsCard({group}: AllWordsCardProps) {
  return (
    <section
      aria-labelledby="all-words-heading"
      className="flex flex-col gap-4 rounded-2xl bg-ink p-5 text-white md:flex-row md:items-center md:justify-between md:p-6"
    >
      <div className="flex flex-col gap-1.5">
        <Eyebrow tone="onDark">{group.label}</Eyebrow>
        <h2
          id="all-words-heading"
          className="text-xl font-semibold tracking-tight md:text-2xl"
        >
          Mix of {group.words.length} words
        </h2>
        <p className="text-sm text-ink-pale md:text-[15px]">
          {group.description}
        </p>
      </div>
      <Link
        to={`/practice/${group.id}`}
        className={buttonClass("primary", "lg", "md:px-7")}
      >
        <Shuffle aria-hidden size={18} />
        Practise a mix
      </Link>
    </section>
  );
}
