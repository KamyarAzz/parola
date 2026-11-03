import {useSearchParams} from "react-router";
import PageHeader from "../../../components/PageHeader";
import SearchInput from "../../../components/search/SearchInput";
import MixBanner from "../../../components/study/MixBanner";
import {lessonRange} from "../../../data/lessons";
import {allGrammarGroup} from "../../../lib/grammar";
import {withParam} from "../../../lib/urlParams";
import type {GrammarGrouping} from "../../../types";
import GrammarSearchResults from "../components/search/GrammarSearchResults";
import GrammarSets from "../components/sets/GrammarSets";

export default function GrammarPage() {
  // Kept in the URL so going back from a set keeps the same view
  const [params, setParams] = useSearchParams();
  const grouping: GrammarGrouping =
    params.get("by") === "category" ? "category" : "lesson";
  const query = params.get("q") ?? "";
  const update = (key: string, value: string) =>
    setParams((prev) => withParam(prev, key, value), {replace: true});

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <PageHeader
        eyebrow="Nuovo Espresso 1"
        title="Practise grammar"
        description={`The grammar from lessons ${lessonRange} in short summaries. Read the rule, then test yourself.`}
        hideDescriptionOnMobile
      >
        <SearchInput
          label="Search grammar"
          placeholder="Search rules, e.g. passato, ne"
          value={query}
          onChange={(q) => update("q", q)}
        />
      </PageHeader>

      {query.trim() ? (
        <GrammarSearchResults query={query} />
      ) : (
        <>
          <MixBanner set={allGrammarGroup} noun="topics" />
          <GrammarSets
            grouping={grouping}
            onGroupingChange={(by) => update("by", by)}
          />
        </>
      )}
    </div>
  );
}
