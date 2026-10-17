# Parola

A web app for learning Italian: pick a topic, take a short practice test,
review results and what to work on next.

- `client/` – React 19 + Vite + TypeScript, Tailwind v4, React Router, Zustand,
  lucide-react icons
- `server/` – not started yet (auth, profile and streaks come later)

Design: https://claude.ai/artifact/6X519kZCHzDS4whNGfQHw9 (desktop and mobile
screens)

## Commands (run in `client/`)

- `npm run dev` – dev server on http://localhost:5173
- `npm run build` – type-check and build
- `npm run lint` – ESLint

Run `build` and `lint` before calling a change done.

## Components

- One component per file, one job per component. Split layout pieces into their
  own components, the way `Navbar`, `Header` and `Footer` are split out of
  `AppLayout`.
- Pages only put sections together. Each section (card, list, table, bar,
  form) is its own component in the feature's `components/` folder.
- Anything used by more than one feature goes in `src/components/`.
- Components use a default export, named after the file:
  `export default function Navbar() {}` in `Navbar.tsx`.
- Keep static config and lists out of components. Put them in `src/data/`
  (e.g. `navItems.ts`) and import them.
- Reusable components get their content through typed props, never hard-coded
  text or data.
- Define a component's props as an `interface` named `<Component>Props` above
  the component.

## Code style

- Double quotes, semicolons, no spaces inside braces:
  `import {NavLink} from "react-router";`
- Keep lines around 80 characters; break long objects, props and class strings
  over several lines.
- Use `import type` for type-only imports.
- Short comments only where the code isn't obvious.

## Styling

- Tailwind classes with the theme tokens from `src/styles/index.css`
  (`bg-brand`, `text-muted`, `border-line`, …). No hard-coded hex colours in
  components.
- Prefer Tailwind's scale (`px-4.5`, `max-w-270`) over arbitrary values
  (`px-[18px]`).
- Mobile first: base classes for phones, `md:` for desktop.
- Accessible by default: real `<button>` / `<a>` / `<label>`, `aria-label` on
  icon-only buttons, `aria-hidden` on decorative icons, touch targets at least
  44px (`min-h-11`).

## Structure (`client/src/`)

- `app/` – router and app layout
- `features/<feature>/` – one section of the app (`topics`, `practice`,
  `results`):
  - `pages/` – components a route renders (the destination in `AppRouter`),
    named `<Name>Page.tsx`
  - `components/` – components used only by this feature
  - Create a folder only when it has a file in it.
- `components/` – shared UI
- `data/` – static data, config and sample data (until the server exists)
- `stores/` – Zustand stores
- `lib/` – helper functions
- `types.ts` – shared types
