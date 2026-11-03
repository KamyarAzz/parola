import {Search, X} from "lucide-react";

interface SearchInputProps {
  /** Accessible name, e.g. "Search words" */
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

/** A search field with a clear button. */
export default function SearchInput({
  label,
  placeholder,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className="relative w-full md:w-80">
      <Search
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-3.5 size-4.5 -translate-y-1/2 text-muted"
      />
      <input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-full border border-line-strong bg-surface pr-11 pl-10 text-[15px] placeholder:text-muted focus:border-ink focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute top-0 right-0 flex size-11 items-center justify-center rounded-full text-muted hover:text-ink"
        >
          <X aria-hidden className="size-4.5" />
        </button>
      )}
    </div>
  );
}
