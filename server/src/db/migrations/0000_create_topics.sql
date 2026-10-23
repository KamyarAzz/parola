CREATE TYPE "public"."category" AS ENUM('Vocabulary', 'Grammar');--> statement-breakpoint
CREATE TYPE "public"."level" AS ENUM('A1', 'A2', 'B1');--> statement-breakpoint
CREATE TABLE "topics" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"italian" text NOT NULL,
	"category" "category" NOT NULL,
	"level" "level" NOT NULL
);
