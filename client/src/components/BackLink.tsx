import {ArrowLeft} from "lucide-react";
import type {ReactNode} from "react";
import {Link} from "react-router";

interface BackLinkProps {
  to: string;
  children: ReactNode;
}

/** A quiet link back to the page above, e.g. "All sets". */
export default function BackLink({to, children}: BackLinkProps) {
  return (
    <Link
      to={to}
      className="-ml-2 flex min-h-11 w-fit items-center gap-1.5 rounded-[10px] px-2 text-sm font-medium text-muted hover:bg-surface hover:text-ink"
    >
      <ArrowLeft aria-hidden size={18} />
      {children}
    </Link>
  );
}
