import z from "zod";

const getAllArticleQuerySchema = z.object({
  search: z
    .string()
    .max(50, "La recherche ne peux pas dépasser 50 caractères")
    .optional(),

  page: z.coerce.number().min(1, "La page doit être supérieur à 0"),
  limit: z.coerce
    .number()
    .int()
    .min(1, "La limite doit être supérieure a 0")
    .max(20, "La limite ne doit pas dépassser 20 caractères"),
  active: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional(),
});

export const getAllArticleSchema = z.object({
  query: getAllArticleQuerySchema,
});

export type AllProductInput = z.infer<typeof getAllArticleQuerySchema>;
