import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.url(),
  CLIENT_URL: z.url().default("http://localhost:5173"),
});

export const env = envSchema.parse(process.env);
