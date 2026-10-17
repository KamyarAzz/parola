import {Logo} from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center border-b border-line bg-surface px-5 py-4 md:hidden">
      <Logo />
    </header>
  );
}
