interface ConjugationRowProps {
  pronoun: string;
  form: string;
}

export default function ConjugationRow({pronoun, form}: ConjugationRowProps) {
  return (
    <div className="flex items-baseline gap-3 border-b border-line py-1.5 last:border-b-0">
      <dt className="w-20 shrink-0 text-sm text-muted">{pronoun}</dt>
      <dd className="text-[15px] font-semibold">{form}</dd>
    </div>
  );
}
