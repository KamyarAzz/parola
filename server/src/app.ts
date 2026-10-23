import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import topicsRouter from "./routes/topics.routes.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL }));
app.use(express.json());

app.use("/api/topics", topicsRouter);

export default app;
