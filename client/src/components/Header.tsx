import Logo from "./Logo";
import ThemeToggleButton from "./theme/ThemeToggleButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-line bg-surface py-2.5 pr-3 pl-5 md:hidden">
      <Logo />
      <ThemeToggleButton />
    </header>
  );
}
