import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000
});

export const db = drizzle(pool);


// schema/
// ├── index.js
// ├── users.schema.js
// ├── roles.schema.js
// ├── permissions.schema.js
// ├── organizations.schema.js
// └── subscriptions.schema.js