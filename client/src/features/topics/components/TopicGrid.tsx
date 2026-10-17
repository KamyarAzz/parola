import EmptyState from "../../../components/EmptyState";
import type {Topic} from "../../../types";
import TopicCard from "./TopicCard";

interface TopicGridProps {
  topics: Topic[];
  /** Current search text, shown when nothing matches */
  query: string;
}

export default function TopicGrid({topics, query}: TopicGridProps) {
  if (topics.length === 0) {
    return (
      <EmptyState>
        {query ? `No topics match “${query}”.` : "No topics at this level yet."}
      </EmptyState>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3 md:gap-4">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
