# Parola

Learn Italian with Nuovo Espresso 1 (lessons 1–8): practise the words, verbs,
grammar and sentences of each lesson, and see exactly what to work on next.

> Status: the client is complete and works offline as an installable app.
> Progress is saved on each device; the server (accounts, sync) comes later.

## Features

- **Words**: 265 words from lessons 1–8, by lesson or topic, with audio
- **Verbs**: 43 verbs with all six present-tense forms, by lesson or type
- **Grammar**: short summaries with tables, examples and fill-the-gap tests
- **Sentences**: dialogues, short texts and drills, plus endless generated
  sentences; type the Italian or use drag-and-drop word tiles, with
  word-by-word feedback
- **Practice home**: pick up where you left off, suggested next steps and
  progress per lesson
- **Results**: scores, focus areas built from your mistakes and a test of just
  your weak spots
- Light and dark theme, works on desktop and mobile, installable (PWA)

### Planned

- [ ] Accounts, and progress synced between devices
- [ ] Daily streaks and reminders
- [ ] A2 level

## Tech stack

| Part   | Stack                                                              |
| ------ | ------------------------------------------------------------------ |
| Client | React 19, Vite, TypeScript, Tailwind CSS v4, React Router, Zustand |
| Server | Node.js, Express, PostgreSQL with Drizzle (skeleton only for now)  |
| Tools  | ESLint, Prettier, Husky, lint-staged                               |

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

The server is a skeleton for later (see [server/README.md](server/README.md));
the app doesn't need it.

### Run

```bash
npm run dev            # starts the client on http://localhost:5173
```

## Scripts (from the repo root)

| Command          | What it does                    |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start the client dev server     |
| `npm run build`  | Type-check and build the client |
| `npm run lint`   | Lint the client                 |
| `npm run format` | Format the client with Prettier |

## Git hooks

- **pre-commit**: lints and formats staged files (lint-staged)
- **pre-push**: type-checks and builds the client

## Contributing

Coding conventions (components, styling, folder structure) are in
[CLAUDE.md](CLAUDE.md).

## Deployment

The client deploys to Vercel from `main`: root directory `client`, framework
Vite (see [client/vercel.json](client/vercel.json)). Every push to `main`
redeploys, and the installed app updates itself on the next visit.

## License

[MIT](LICENSE) © 2026 Kamyar Azizi
