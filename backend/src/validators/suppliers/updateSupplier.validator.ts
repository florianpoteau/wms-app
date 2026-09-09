import z from "zod";
import { updateSupplierSchema } from "./supplier.validator";

export const updateSupplierRequestSchema = z.object({
  params: z.object({
    id: z.uuid("le uuid n'est pas correct"),
  }),
  body: updateSupplierSchema,
});
