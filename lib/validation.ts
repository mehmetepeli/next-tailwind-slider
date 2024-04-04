import {z} from "zod";

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(10, "Password must 10 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

export const checkoutFormSchema = z.object({
    name: z.string().min(3, "Too short!").max(20, "Too long!").optional(),
    email: z.string().email("Invalid E-Mail").optional(),
    phone: z.string().min(10, "Invalid Phone number!").optional(),
    address: z.string().min(10, "Too short!").max(100, "Too long!").optional(),
    paymentMethod: z.enum(["cash","card"])
});