import { db } from "../../../database/index.js";
import { eq } from "drizzle-orm";
import { users } from "../../../database/schema/users.schema.js";

export const findUserByEmail = async (email) => {
    const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    return user || null;
};

export const createUser = async (userData) => {
    const [user] = await db
        .insert(users)
        .values(userData)
        .returning();

    return user;
};