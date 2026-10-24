import {useMemo} from "react";
import PageHeader from "../../../components/PageHeader";
import {greeting} from "../../../lib/greeting";
import {lessonProgress} from "../../../lib/progress";
import {lastPractice, suggestions} from "../../../lib/suggestions";
import {useResultsStore} from "../../../stores/resultsStore";
import ContinueCard from "../components/continue/ContinueCard";
import WelcomeCard from "../components/continue/WelcomeCard";
import LessonProgressGrid from "../components/lesson-progress/LessonProgressGrid";
import SuggestionList from "../components/suggestions/SuggestionList";

/** Today: pick up where you left off, what to do next, and lesson progress. */
export default function HomePage() {
  const results = useResultsStore((s) => s.results);
  const progress = useMemo(() => lessonProgress(results), [results]);
  const last = lastPractice(results);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow={greeting()}
        eyebrowLang="it"
        title="What do you want to practise?"
        description="Your progress through Nuovo Espresso 1, from the tests you've taken on this device."
        hideDescriptionOnMobile
      />

      <section
        aria-label="Next steps"
        className="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
      >
        {last ? <ContinueCard last={last} /> : <WelcomeCard />}
        <SuggestionList suggestions={suggestions(results, progress)} />
      </section>

      <LessonProgressGrid lessons={progress} />
    </div>
  );
}
