import { z } from "zod";

/**
 * Validation schemas for common form fields
 * Using Zod for runtime type-safe validation
 */

export const emailSchema = z
  .string()
  .email("Invalid email address")
  .min(1, "Email is required");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain an uppercase letter")
  .regex(/[a-z]/, "Password must contain a lowercase letter")
  .regex(/[0-9]/, "Password must contain a number");

export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name must not exceed 100 characters")
  .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters");

export const urlSchema = z.string().url("Invalid URL");

export const donationSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  amount: z
    .number()
    .positive("Amount must be greater than 0")
    .min(0.01, "Minimum donation is €0.01"),
  message: z
    .string()
    .max(500, "Message must not exceed 500 characters")
    .optional(),
});

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

/**
 * Utility function to validate form data and return errors
 */
export const validateFormData = <T,>(
  schema: z.ZodSchema,
  data: unknown
): { valid: boolean; errors: Record<string, string> } => {
  try {
    schema.parse(data);
    return { valid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join(".");
        errors[path] = err.message;
      });
      return { valid: false, errors };
    }
    return { valid: false, errors: { form: "Validation failed" } };
  }
};
