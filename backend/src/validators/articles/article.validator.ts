import { z } from "zod";

const productSchemaBody = z.object({
  reference: z
    .string()
    .min(1, "La référence est obligatoire")
    .max(100, "La référence ne peut pas dépasser 100 caractères"),
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(255, "Le nom ne peut pas dépasser 255 caractères"),
  description: z.string().min(1, "La description est obligatoire"),
  barcode: z
    .string()
    .max(100, "Le code barre ne peut pas dépasser 100 caractères")
    .nullable(),
  unit: z
    .string()
    .min(1, "L'unité est obligatoire")
    .max(50, "L'unité ne peut pas dépasser 50 caractères"),
  minimumStock: z.number().min(0, "Le stock minimum ne peut pas être négatif"),
  active: z.boolean().default(true),
  productSupplier: z.array(z.uuid()).default([]),
});

export const productSchema = z.object({
  body: productSchemaBody,
});

export const updateProductSchema = productSchemaBody.partial();

export type ProductInput = z.infer<typeof productSchemaBody>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
