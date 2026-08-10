import { z } from "zod";

export const userloginSchema = z.object({
  email: z.email("l'email n'est pas valide"),
  password: z.string().min(1, "pas de mot de passe"),
});

export type UserloginInput = z.infer<typeof userloginSchema>;
