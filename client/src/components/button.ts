type Variant = "primary" | "secondary" | "soft" | "danger" | "dangerOutline";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-line-strong bg-surface text-ink hover:bg-ground",
  soft: "bg-brand-soft text-brand hover:bg-brand hover:text-white",
  danger: "bg-error text-white hover:bg-error-ink",
  dangerOutline: "border border-error-line text-error-ink hover:bg-white/50",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-4 text-[15px]",
  lg: "h-12 px-6 text-base",
};

/** Shared button styles, for both <button> and router <Link>. */
export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors",
    "disabled:cursor-default disabled:bg-line disabled:text-muted",
    variants[variant],
    sizes[size],
    extra,
  ].join(" ");
}
