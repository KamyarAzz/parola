import type {Request, Response} from "express";
import {getAllTopics} from "../services/topics.service.js";

export async function listTopics(_req: Request, res: Response) {
  const topics = await getAllTopics();
  res.json(topics);
}
