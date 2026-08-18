import { z } from 'zod'

export const loginSchema = z.object({
    email: z
        .email('Adresse email invalide')
        .trim(),

    password: z
        .string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .trim()
        .regex(/[0-9]/, {
            error: "Le mot de passe doit contenir au moins un chiffre",
        })
})

export type loginFormData = z.infer<typeof loginSchema>