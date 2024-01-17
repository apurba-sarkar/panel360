const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be contain 3 character" })
    .max(20, { message: "Name must be contain 20 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(4, { message: "Email must be contain 6 character" })
    .max(20, { message: "Email must be contain 20 character" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(3, { message: "Phone must be contain 3 character" })
    .max(20, { message: "Phone must be contain 20 character" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be contain 3 character" })
    .max(20, { message: "Password must be contain 20 character" }),
});

module.exports = signupSchema