import SearchResults from "../../../../components/search/SearchResults";
import {searchWords} from "../../../../lib/words";
import WordList from "../word-list/WordList";

interface WordSearchResultsProps {
  query: string;
}

export default function WordSearchResults({query}: WordSearchResultsProps) {
  const words = searchWords(query);
  return (
    <SearchResults query={query} count={words.length} noun={["word", "words"]}>
      <WordList words={words} />
    </SearchResults>
  );
}
