# Parola client

The Parola web app: topics, practice tests and results. Built with React 19,
Vite, TypeScript, Tailwind CSS v4, React Router and Zustand.

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
├── data/           Static config and sample data
├── features/
│   ├── practice/   pages/, components/, hooks/
│   ├── results/    pages/, components/
│   └── topics/     pages/, components/
├── lib/            Helper functions
├── stores/         Zustand stores
├── styles/         Tailwind theme (colours, font)
└── types/          Types per feature, exported from types/index.ts
```

## Routes

| Path                 | Page                        |
| -------------------- | --------------------------- |
| `/`                  | Topics                      |
| `/practice/:topicId` | Practice test (full screen) |
| `/results`           | Results and focus areas     |
| `/results/:resultId` | Test complete / test review |

## Data

Topics, questions and past results come from sample data in `src/data/`.
Results you create are saved in the browser (localStorage) until the server is
ready.

<!-- TODO: describe the API client once the server exists -->

## Environment variables

<!-- TODO: e.g. VITE_API_URL once the client talks to the server -->

_None yet._

## Theme

Colours and the font are Tailwind theme tokens in `src/styles/index.css`
(`bg-brand`, `text-muted`, …). Use the tokens instead of hex values.
