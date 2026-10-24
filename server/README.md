# Parola server

The Parola API, for later: accounts and saving test results so progress syncs
between devices.

> Status: skeleton only. The app runs fully in the browser today; nothing calls
> this server yet.

## Tech stack

- Node.js + Express 5 (TypeScript, run with `tsx` in development)
- PostgreSQL with Drizzle ORM and drizzle-kit migrations
- Zod for validating environment variables
- Helmet (security headers) and CORS

## Getting started

```bash
npm install
cp .env.example .env   # then fill in DATABASE_URL
npm run dev            # http://localhost:3000
```

## Environment variables

| Variable       | Description                                       |
| -------------- | ------------------------------------------------- |
| `PORT`         | Port to listen on (default `3000`)                |
| `DATABASE_URL` | PostgreSQL connection string                      |
| `CLIENT_URL`   | Origin allowed by CORS (default the Vite dev URL) |

## API

| Method | Path          | Description                     |
| ------ | ------------- | ------------------------------- |
| GET    | `/api/health` | `{"status": "ok"}` when it's up |

## Folder structure

```
src/
├── app.ts          Express app: middleware and routes
├── server.ts       Starts the app
├── config/env.ts   Validated environment variables
└── db/
    ├── index.ts    Shared database connection
    └── schema.ts   Tables (none yet)
```

## Database

| Command               | What it does                               |
| --------------------- | ------------------------------------------ |
| `npm run db:generate` | Create a migration from `src/db/schema.ts` |
| `npm run db:migrate`  | Apply migrations                           |
| `npm run db:studio`   | Browse the database                        |
