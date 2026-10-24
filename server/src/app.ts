import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL }));
app.use(express.json());

// Lets a host or uptime check see that the API is running.
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default app;
