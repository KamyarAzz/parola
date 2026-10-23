import SpeakButton from "../../../../components/SpeakButton";
import {presentForms, verbTypeTag} from "../../../../lib/verbs";
import type {Verb} from "../../../../types";
import ConjugationTable from "./ConjugationTable";

interface VerbCardProps {
  verb: Verb;
}

/** A verb with its meaning and all six present tense forms. */
export default function VerbCard({verb}: VerbCardProps) {
  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 md:p-5">
      <div className="flex items-center gap-3">
        <SpeakButton text={verb.it} variant="soft" />
        <div className="flex min-w-0 flex-1 flex-col">
          <span lang="it" className="text-lg font-semibold tracking-tight">
            {verb.it}
          </span>
          <span className="text-sm text-muted">{verb.en}</span>
        </div>
        <span
          lang="it"
          className="rounded-md bg-ground px-2 py-0.5 text-xs font-semibold"
        >
          {verbTypeTag(verb.type)}
        </span>
      </div>
      <ConjugationTable forms={presentForms(verb)} />
    </li>
  );
}
