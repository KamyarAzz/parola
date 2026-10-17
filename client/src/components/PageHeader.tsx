import type {ReactNode} from "react";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  /** Language of the eyebrow text, e.g. "it" */
  eyebrowLang?: string;
  description?: string;
  /** Hides the description on phones to save space */
  hideDescriptionOnMobile?: boolean;
  /** Extra content on the right, e.g. a search field */
  children?: ReactNode;
}

export default function PageHeader({
  title,
  eyebrow,
  eyebrowLang,
  description,
  hideDescriptionOnMobile = false,
  children,
}: PageHeaderProps) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-5">
      <div className="flex flex-col gap-1.5">
        {eyebrow && (
          <span lang={eyebrowLang} className="text-sm font-semibold text-brand">
            {eyebrow}
          </span>
        )}
        <h1 className="text-[26px] leading-tight font-bold tracking-tight md:text-[34px]">
          {title}
        </h1>
        {description && (
          <p
            className={`text-[15px] text-muted md:text-base ${
              hideDescriptionOnMobile ? "hidden md:block" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </header>
  );
}
