import {NavLink} from "react-router";
import {navItems} from "../data/navItems";

export default function Footer() {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 grid auto-cols-fr grid-flow-col border-t border-line bg-surface px-3 pt-1.5 pb-[max(18px,env(safe-area-inset-bottom))] md:hidden"
    >
      {navItems.map(({to, label, icon: Icon}) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({isActive}) =>
            `flex min-h-13 flex-col items-center justify-center gap-1 text-xs ${
              isActive ? "font-semibold text-brand" : "font-medium text-muted"
            }`
          }
        >
          <Icon aria-hidden size={22} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
