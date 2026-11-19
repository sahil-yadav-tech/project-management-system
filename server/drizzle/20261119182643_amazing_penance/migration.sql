CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"name" varchar(100) NOT NULL,
	"email" varchar(150) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
