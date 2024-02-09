import { z } from "zod"

export const ContactSchema = z.object({
    from_name: z.string().min(1, { message: "Ingrese un nombre"}),
    from_email: z.string().min(1, { message: "Ingrese un email" }).email({ message: "Ingrese un email correcto" }),
})