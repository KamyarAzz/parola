import type {ReactNode} from "react";

interface SectionCardProps {
  /** Used to link the section to its heading */
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionCard({
  id,
  title,
  description,
  children,
}: SectionCardProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-4.5 md:gap-3 md:p-6"
    >
      <div className="flex flex-col gap-1 pb-1">
        <h2 id={headingId} className="text-lg font-semibold md:text-xl">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted md:text-[15px]">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
