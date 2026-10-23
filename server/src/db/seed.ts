import {db} from "./index.js";
import {topics} from "./schema.js";

await db
  .insert(topics)
  .values([
    {
      id: "greetings",
      title: "Greetings & Basics",
      italian: "Saluti",
      category: "Vocabulary",
      level: "A1",
    },
    {
      id: "food",
      title: "Food & Ordering",
      italian: "Al ristorante",
      category: "Vocabulary",
      level: "A1",
    },
  ])
  .onConflictDoNothing(); // safe to run more than once

console.log("Seeded topics");
process.exit(0);
