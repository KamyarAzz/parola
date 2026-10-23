import {pgEnum, pgTable, text} from "drizzle-orm/pg-core";

export const levelEnum = pgEnum("level", ["A1", "A2", "B1"]);
export const categoryEnum = pgEnum("category", ["Vocabulary", "Grammar"]);

export const topics = pgTable("topics", {
  id: text().primaryKey(), // slug, e.g. "greetings"
  title: text().notNull(),
  italian: text().notNull(),
  category: categoryEnum().notNull(),
  level: levelEnum().notNull(),
});
