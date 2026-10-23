import {drizzle} from "drizzle-orm/node-postgres";
import {env} from "../config/env.js";
import * as schema from "./schema.js";

// One shared connection pool for the whole app.
export const db = drizzle(env.DATABASE_URL, {schema});
