import z from "zod";

export const zoneSchemaBody = z.object({
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(30, "Le nom ne peut pas dépasser 30 caractères")
    .trim(),
  code: z
    .string()
    .min(1, "Le code est obligatoire")
    .max(10, "Le code ne doit pas dépasser 10 caractères")
    .trim(),
  warehouseId: z.uuid("L'identifiant de l'entrepôt est invalide"),
});

export const zoneSchema = z.object({
  body: zoneSchemaBody,
});

export const updateZoneSchemaBody = z.object({
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(30, "Le nom ne peut pas dépasser 30 caractères")
    .trim(),
  code: z
    .string()
    .min(1, "Le code est obligatoire")
    .max(10, "Le code ne doit pas dépasser 10 caractères")
    .trim(),
});

export const updateZoneSchema = updateZoneSchemaBody.partial();

export type UpdateZoneInput = z.infer<typeof updateZoneSchema>;
export type ZoneInput = z.infer<typeof zoneSchemaBody>;
