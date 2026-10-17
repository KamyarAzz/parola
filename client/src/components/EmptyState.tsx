import type {ReactNode} from "react";

interface EmptyStateProps {
  children: ReactNode;
}

export default function EmptyState({children}: EmptyStateProps) {
  return (
    <p className="rounded-2xl border border-dashed border-line-strong p-8 text-center text-muted">
      {children}
    </p>
  );
}
