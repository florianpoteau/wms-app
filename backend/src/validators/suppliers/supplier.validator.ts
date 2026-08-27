import { z } from "zod";

export const supplierSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.email("L'email n'est pas valide"),
  phone: z
    .string()
    .min(8, "Le numéro doit contenir au moins 8 caractères")
    .max(20, "Le numéro est trop long")
    .regex(/^\+?[0-9\s().-]+$/, "Le numéro de téléphone est invalide"),
  address: z
    .string()
    .min(1, "L'adresse est obligatoire")
    .max(255, "L'adresse ne peut pas dépasser 255 caractères"),
  city: z.string().min(1, "Le pays est obligatoire").max(50),
  postalCode: z
    .string()
    .min(1, "Le code postal est obligatoire")
    .max(10, "Le code postal ne peut pas dépasser 10 caractères"),
  country: z
    .string()
    .min(1, "La ville est obligatoire")
    .max(30, "La ville ne peut pas dépasser 30 caractères"),
});
export type SupplierInput = z.infer<typeof supplierSchema>;
