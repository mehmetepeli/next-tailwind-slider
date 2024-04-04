import {z} from "zod";
import {checkoutFormSchema, signUpSchema} from "@/lib/validation";

export type signUpForm = z.infer<typeof signUpSchema>;
export type checkoutForm = z.infer<typeof checkoutFormSchema>;