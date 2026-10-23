import {pronouns} from "../../../../data/verbs";
import ConjugationRow from "./ConjugationRow";

interface ConjugationTableProps {
  /** Present tense forms, io → loro */
  forms: string[];
}

export default function ConjugationTable({forms}: ConjugationTableProps) {
  return (
    <dl lang="it" className="flex flex-col border-t border-line">
      {pronouns.map((pronoun, i) => (
        <ConjugationRow key={pronoun} pronoun={pronoun} form={forms[i]} />
      ))}
    </dl>
  );
}
