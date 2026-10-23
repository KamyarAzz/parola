import {Sparkles} from "lucide-react";
import {Link} from "react-router";
import {buttonClass} from "../../../../components/button";
import Eyebrow from "../../../../components/Eyebrow";
import {freshPracticeId} from "../../../../lib/generator";
import FreshLessonLink from "./FreshLessonLink";

interface FreshSentencesProps {
  /** Lessons to offer; with more than one there's also an "all" button */
  lessons: number[];
}

/** Endless practice: new sentences built from templates each time. */
export default function FreshSentences({lessons}: FreshSentencesProps) {
  const single = lessons.length === 1;

  return (
    <section
      aria-labelledby="fresh-heading"
      className="flex flex-col gap-4 rounded-2xl border border-brand/30 bg-brand-soft p-5 md:p-6"
    >
      <div className="flex flex-col gap-1.5">
        <Eyebrow>Endless practice</Eyebrow>
        <h2
          id="fresh-heading"
          className="text-xl font-semibold tracking-tight md:text-2xl"
        >
          Fresh sentences
        </h2>
        <p className="text-sm text-muted md:text-[15px]">
          New sentences every time, built from the words and grammar you've
          learned: names, numbers, times, places and the past tense change with
          every test.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Link
          to={`/practice/${freshPracticeId(single ? lessons[0] : undefined)}`}
          className={buttonClass("primary", "md", "md:px-6")}
        >
          <Sparkles aria-hidden size={18} />
          {single ? "Practise fresh sentences" : "All lessons"}
        </Link>
        {!single &&
          lessons.map((lesson) => (
            <FreshLessonLink key={lesson} lesson={lesson} />
          ))}
      </div>
    </section>
  );
}
