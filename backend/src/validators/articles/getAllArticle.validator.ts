import z from "zod";

export const getAllArticleSchema = z.object({
  search: z
    .string()
    .max(50, "La recherche ne peux pas dépasser 50 caractères")
    .transform((value) => value.toUpperCase())
    .optional(),

  page: z.coerce.number().min(1, "La page doit être supérieur à 0"),
  limit: z.coerce
    .number()
    .int()
    .min(1, "La limite doit être supérieur a 0")
    .max(20, "La limite ne doit pas dépassser 20 caractères"),
  active: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional(),
});

export type AllProductInput = z.infer<typeof getAllArticleSchema>;
