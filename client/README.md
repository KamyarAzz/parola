# Parola client

The Parola web app: words, verbs, grammar and sentence practice for Nuovo
Espresso 1, a practice home and results. Built with React 19, Vite, TypeScript,
Tailwind CSS v4, React Router and Zustand; installable as a PWA.

Design: [Parola canvas](https://claude.ai/artifact/6X519kZCHzDS4whNGfQHw9)
(desktop and mobile screens)

## Getting started

```bash
npm install
npm run dev     # http://localhost:5173
```

## Scripts

| Command                | What it does                       |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Start the dev server               |
| `npm run build`        | Type-check and build to `dist/`    |
| `npm run preview`      | Serve the production build locally |
| `npm run lint`         | Run ESLint                         |
| `npm run format`       | Format `src/` with Prettier        |
| `npm run format:check` | Check formatting without changing  |

## Folder structure

```
src/
├── app/            Router and app layout
├── components/     Shared UI (buttons, cards, table cells, …)
├── data/           Course content (lessons 1–8) and static config
├── features/
│   ├── home/       Practice home: continue, suggestions, lesson progress
│   ├── words/      verbs/  grammar/  sentences/   Study sets per section
│   ├── practice/   The test screen: pages/, components/, hooks/
│   └── results/    Results, focus areas and test review
├── lib/            Helper functions
├── stores/         Zustand stores
├── styles/         Tailwind theme (colours, font)
└── types/          Types per feature, exported from types/index.ts
```

## Routes

| Path                                         | Page                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| `/`                                          | Practice home                                                |
| `/words`, `/verbs`, `/grammar`, `/sentences` | Sets for each section, and `/<section>/:groupId` for one set |
| `/practice/:topicId`                         | Practice test (full screen)                                  |
| `/results`                                   | Results and focus areas                                      |
| `/results/:resultId`                         | Test complete / test review                                  |

## Data

Lesson content (words, verbs, grammar, sentence situations and the templates
for generated sentences) lives in `src/data/` and `src/lib/generator/`. There is
no sample progress data: results come only from tests you take, saved in the
browser (localStorage) until the server is ready.

## Environment variables

None: the client doesn't call an API yet.

## Theme

Colours and the font are Tailwind theme tokens in `src/styles/index.css`
(`bg-brand`, `text-muted`, …). Use the tokens instead of hex values.
