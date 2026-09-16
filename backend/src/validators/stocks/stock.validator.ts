import z from "zod";

export const getAllStockQuerySchema = z.object({
  article: z
    .string()
    .max(50, "La recherche ne peux pas dépasser 50 caractères")
    .optional(),
  location: z
    .string()
    .max(50, "La recherche ne peux pas dépasser 50 caractères")
    .optional(),
  lowStock: z.coerce.boolean().optional(),
});

export const getAllStockSchema = z.object({
  query: getAllStockQuerySchema,
});

export type GetAllStockInput = z.infer<typeof getAllStockQuerySchema>;
