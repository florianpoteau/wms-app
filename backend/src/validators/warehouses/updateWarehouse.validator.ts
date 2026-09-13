import z from "zod";
import { updateWarehouseSchema } from "./warehouse.validator";

export const updateWarehouseRequestSchema = z.object({
  params: z.object({
    id: z.uuid("Le uuid n'est pas correct"),
  }),
  body: updateWarehouseSchema,
});
