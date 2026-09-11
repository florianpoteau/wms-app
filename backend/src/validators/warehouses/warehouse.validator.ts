import z, { uuid } from "zod";

export const warehouseSchemaBody = z.object({
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(30, "Le nom ne peut pas dépasser 30 caractères")
    .trim(),
  address: z
    .string()
    .min(1, "L'adresse est obligatoire")
    .max(100, "L'adresse ne peut pas dépasser 100 caractères")
    .trim(),
  zones: z.array(z.uuid()).default([]),
});

export const warehouseSchema = z.object({
  body: warehouseSchemaBody,
});

export type warehouseInput = z.infer<typeof warehouseSchemaBody>;
