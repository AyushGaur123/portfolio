import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(60, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(120),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters")
    .max(150, "Subject is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .max(3000, "Message is too long"),
});