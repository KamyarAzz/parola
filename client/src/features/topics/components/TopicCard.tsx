import {Link} from "react-router";
import Eyebrow from "../../../components/Eyebrow";
import ProgressBar from "../../../components/ProgressBar";
import {topicStatus} from "../../../lib/topics";
import type {Topic} from "../../../types";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({topic}: TopicCardProps) {
  const status = topicStatus(topic);

  return (
    <Link
      to={`/practice/${topic.id}`}
      className="flex min-h-37.5 flex-col gap-3.5 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-brand md:min-h-43 md:p-5"
    >
      <div className="flex items-center justify-between">
        <Eyebrow>{topic.category}</Eyebrow>
        <span className="rounded-md bg-ground px-2 py-0.5 text-xs font-semibold">
          {topic.level}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold tracking-tight md:text-lg">
          {topic.title}
        </span>
        <span lang="it" className="text-sm text-muted">
          {topic.italian}
        </span>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <div className="flex justify-between text-[13px]">
          <span className={`font-semibold ${status.className}`}>
            {status.label}
          </span>
          <span className="text-muted tabular-nums">
            {topic.mastery === 0 ? "Not started" : `${topic.mastery}%`}
          </span>
        </div>
        <ProgressBar
          value={topic.mastery}
          tone={topic.needsReview ? "warn" : "brand"}
        />
      </div>
    </Link>
  );
}
