import {Search} from "lucide-react";

interface SearchFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Width and placement, e.g. "w-full md:w-72" */
  className?: string;
}

export default function SearchField({
  id,
  label,
  value,
  onChange,
  placeholder,
  className = "",
}: SearchFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-medium text-muted">
        {label}
      </label>
      <div className="flex h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-surface px-3.5 focus-within:border-brand">
        <Search aria-hidden size={18} className="text-muted" />
        <input
          id={id}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[15px] outline-none"
        />
      </div>
    </div>
  );
}
