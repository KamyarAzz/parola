import SearchResults from "../../../../components/search/SearchResults";
import {searchGrammar} from "../../../../lib/grammar";
import GrammarPointList from "../point-list/GrammarPointList";

interface GrammarSearchResultsProps {
  query: string;
}

export default function GrammarSearchResults({
  query,
}: GrammarSearchResultsProps) {
  const points = searchGrammar(query);
  return (
    <SearchResults
      query={query}
      count={points.length}
      noun={["topic", "topics"]}
    >
      <GrammarPointList points={points} />
    </SearchResults>
  );
}
