import bcrypt from "bcrypt";

import AppError from "../../../utils/AppError.js";

import {
    findUserByEmail,
    createUser
} from "../repositories/auth.repository.js";

export const registerService = async (payload) => {

    const existingUser = await findUserByEmail(payload.email);

    if (existingUser) {
        throw new AppError("Email already registered", 409);
    }

    const hashedPassword = await bcrypt.hash(
        payload.password,
        12
    );

    const user = await createUser({
        name: payload.name,
        email: payload.email,
        password: hashedPassword
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
};