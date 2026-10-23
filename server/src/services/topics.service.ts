import {db} from "../db/index.js";
import {topics} from "../db/schema.js";

export function getAllTopics() {
  return db.select().from(topics);
}
