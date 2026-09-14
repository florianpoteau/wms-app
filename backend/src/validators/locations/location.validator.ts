import z from "zod";

export const locationSchemaBody = z.object({
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .trim(),
  code: z
    .string()
    .min(1, "Le code est obligatoire")
    .max(10, "Le code ne doit pas dépasser 10 caractères")
    .trim(),
  capacity: z
    .number()
    .int()
    .min(1, "La capacité est obligatoire")
    .max(1000, "La capacité ne peut pas dépasser 1000 caractères"),
  active: z.boolean().default(true),
  zoneId: z.uuid(),
});
