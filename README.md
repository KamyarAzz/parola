# Parola

Learn Italian with short, focused practice tests. Pick a topic, answer a few
questions, and see exactly what to work on next.

> Status: early development. The client runs on sample data; the server is not
> started yet.

<!-- TODO: add a screenshot or GIF of the app -->

## Features

- **Topics**: browse vocabulary and grammar topics by level (A1–B1) and search
  them
- **Practice tests**: translate sentences with a word bank or fill the gap,
  with instant feedback and Italian audio
- **Results**: scores for past tests, plus focus areas built from your mistakes
- Works on desktop and mobile

### Planned

- [ ] Accounts and sign-in
- [ ] Profile
- [ ] Daily streaks
- [ ] Save results on the server
<!-- TODO: add more as the project grows -->

## Tech stack

| Part   | Stack                                                                  |
| ------ | ---------------------------------------------------------------------- |
| Client | React 19, Vite, TypeScript, Tailwind CSS v4, React Router, Zustand     |
| Server | _TODO: Node.js + Express, database to be decided_                      |
| Tools  | ESLint, Prettier, Husky, lint-staged                                   |

## Project structure

```
parola/
├── client/      React app (see client/README.md)
├── server/      API (see server/README.md)
├── .husky/      Git hooks
└── CLAUDE.md    Coding conventions
```

## Getting started

### Requirements

- Node.js 22 (see `.nvmrc`)
- npm 10+

### Install

```bash
npm install            # root: git hooks
npm install --prefix client
```

<!-- TODO: add server install steps -->

### Run

```bash
npm run dev            # starts the client on http://localhost:5173
```

## Scripts (from the repo root)

| Command          | What it does                     |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start the client dev server      |
| `npm run build`  | Type-check and build the client  |
| `npm run lint`   | Lint the client                  |
| `npm run format` | Format the client with Prettier  |

## Git hooks

- **pre-commit**: lints and formats staged files (lint-staged)
- **pre-push**: type-checks and builds the client

## Contributing

Coding conventions (components, styling, folder structure) are in
[CLAUDE.md](CLAUDE.md).

<!-- TODO: branch naming and commit message conventions -->

## Deployment

<!-- TODO: where and how the client and server are deployed -->

## License

[MIT](LICENSE) © 2026 Kamyar Azizi
