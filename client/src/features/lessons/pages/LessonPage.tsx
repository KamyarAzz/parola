import {Navigate, useParams} from "react-router";
import BackLink from "../../../components/BackLink";
import EmptyState from "../../../components/EmptyState";
import PageHeader from "../../../components/PageHeader";
import GrammarPointList from "../../../components/grammar/GrammarPointList";
import VerbList from "../../../components/verbs/VerbList";
import WordList from "../../../components/words/WordList";
import {studySteps} from "../../../data/studySteps";
import {lessonContent} from "../../../lib/lessons";
import LessonJumpNav from "../components/jump-nav/LessonJumpNav";
import LessonPager from "../components/pager/LessonPager";
import StudyStep from "../components/study-step/StudyStep";
import LessonTestList from "../components/tests/LessonTestList";

/** One lesson: words, verbs and grammar to study, then tests. */
export default function LessonPage() {
  const {lessonNumber} = useParams();
  const content = lessonContent(Number(lessonNumber));
  if (!content) return <Navigate to="/lessons" replace />;
  const {lesson, words, verbs, grammar} = content;

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col gap-4">
        <BackLink to="/lessons">All lessons</BackLink>
        <PageHeader
          eyebrow={`Lezione ${lesson.number}`}
          eyebrowLang="it"
          title={lesson.title}
          description={lesson.summary}
        />
        <LessonJumpNav content={content} />
      </div>

      <StudyStep {...studySteps.words}>
        <WordList words={words} />
      </StudyStep>

      <StudyStep {...studySteps.verbs}>
        {verbs.length ? (
          <VerbList verbs={verbs} />
        ) : (
          <EmptyState>No new verbs in this lesson.</EmptyState>
        )}
      </StudyStep>

      <StudyStep {...studySteps.grammar}>
        <GrammarPointList points={grammar} headingLevel="h3" />
      </StudyStep>

      <StudyStep {...studySteps.test}>
        <LessonTestList lesson={lesson.number} />
      </StudyStep>

      <LessonPager lesson={lesson.number} />
    </div>
  );
}
