import z from "zod";

const getAllSupplierQuerySchema = z.object({
  page: z.coerce.number().min(1, "La page doit être supérieur à 0"),
  limit: z.coerce
    .number()
    .int()
    .min(1, "La limite doit être supérieure a 0")
    .max(20, "La limite ne doit pas dépassser 20 caractères"),
});

export const getAllSupplierSchema = z.object({
  query: getAllSupplierQuerySchema,
});

export type AllSupplierInput = z.infer<typeof getAllSupplierQuerySchema>;
