import { z } from 'zod'

export const loginSchema = z.object({
    email: z
        .email('Adresse email invalide')
        .trim(),

    password: z
        .string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .trim()
        .regex(/[A-Z]/, {
            error: "Le mot de passe doit contenir au moins une majuscule",
        })
        .regex(/[0-9]/, {
            error: "Le mot de passe doit contenir au moins un chiffre",
        })
        .regex(/[^A-Za-z0-9]/, {
            error: "Le mot de passe doit contenir au moins un caractère spécial",
        }),
})

export type loginFormData = z.infer<typeof loginSchema>