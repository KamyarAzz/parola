import {useSearchParams} from "react-router";
import PageHeader from "../../../components/PageHeader";
import SearchInput from "../../../components/search/SearchInput";
import MixBanner from "../../../components/study/MixBanner";
import {lessonRange} from "../../../data/lessons";
import {withParam} from "../../../lib/urlParams";
import {allWordsGroup} from "../../../lib/words";
import type {WordGrouping} from "../../../types";
import WordSearchResults from "../components/search/WordSearchResults";
import WordSets from "../components/sets/WordSets";

export default function WordsPage() {
  // Kept in the URL so going back from a set keeps the same view
  const [params, setParams] = useSearchParams();
  const grouping: WordGrouping =
    params.get("by") === "topic" ? "topic" : "lesson";
  const query = params.get("q") ?? "";
  const update = (key: string, value: string) =>
    setParams((prev) => withParam(prev, key, value), {replace: true});

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Practise words"
        description={`Vocabulary from lessons ${lessonRange}. Pick a lesson or a topic, look over the words, then test yourself.`}
        hideDescriptionOnMobile
      >
        <SearchInput
          label="Search words"
          placeholder="Search in Italian or English"
          value={query}
          onChange={(q) => update("q", q)}
        />
      </PageHeader>

      {query.trim() ? (
        <WordSearchResults query={query} />
      ) : (
        <>
          <MixBanner set={allWordsGroup} noun="words" />
          <WordSets
            grouping={grouping}
            onGroupingChange={(by) => update("by", by)}
          />
        </>
      )}
    </div>
  );
}
