import {Shuffle} from "lucide-react";
import {Link} from "react-router";
import type {StudySet} from "../../types";
import {buttonClass} from "../button";
import Eyebrow from "../Eyebrow";

interface MixBannerProps<T> {
  /** The set with every item */
  set: StudySet<T>;
  /** Plural name of the items, e.g. "words" */
  noun: string;
}

/** Dark banner that starts a mixed test from every lesson. */
export default function MixBanner<T>({set, noun}: MixBannerProps<T>) {
  return (
    <section
      aria-labelledby="mix-heading"
      className="flex flex-col gap-4 rounded-2xl bg-ink p-5 text-white md:flex-row md:items-center md:justify-between md:p-6"
    >
      <div className="flex flex-col gap-1.5">
        <Eyebrow tone="onDark">{set.label}</Eyebrow>
        <h2
          id="mix-heading"
          className="text-xl font-semibold tracking-tight md:text-2xl"
        >
          Mix of {set.items.length} {noun}
        </h2>
        <p className="text-sm text-ink-pale md:text-[15px]">
          {set.description}
        </p>
      </div>
      <Link
        to={`/practice/${set.id}`}
        className={buttonClass("primary", "lg", "md:px-7")}
      >
        <Shuffle aria-hidden size={18} />
        Practise a mix
      </Link>
    </section>
  );
}
