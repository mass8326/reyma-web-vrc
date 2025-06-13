CREATE TABLE "download_log" (
	"id" serial NOT NULL,
	"ip" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"asset" text NOT NULL,
	"filename" text NOT NULL
);
