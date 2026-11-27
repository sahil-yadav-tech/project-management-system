import {email, z} from "zod"
export const registerSchema = z.object({
    name:z.string().min(3,  "Name must contain at least 3 characters").max(50, "Name cannot exceed 50 characters"),
    email:z.string().email("Please provide a valid email address"),
    password: z
        .string()
        .min(8, "Password must contain at least 8 characters")
        .max(50, "Password cannot exceed 50 characters")

})