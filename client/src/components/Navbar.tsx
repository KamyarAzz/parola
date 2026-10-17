import {NavLink} from "react-router";
import {navItems} from "../data/navItems";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-8 border-r border-line bg-surface px-4.5 py-7 md:flex">
      <div className="px-2">
        <Logo />
      </div>
      <nav aria-label="Main" className="flex flex-col gap-1">
        {navItems.map(({to, label, icon: Icon}) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({isActive}) =>
              `flex min-h-11 items-center gap-3 rounded-[10px] px-3 text-[15px] font-medium ${
                isActive
                  ? "bg-brand-soft text-brand"
                  : "text-muted hover:bg-ground hover:text-ink"
              }`
            }
          >
            <Icon aria-hidden size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
