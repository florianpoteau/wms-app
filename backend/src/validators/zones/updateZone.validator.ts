import z from "zod";
import { updateZoneSchema } from "./zone.validator";

export const updateZoneRequestSchema = z.object({
  params: z.object({
    id: z.uuid("Le uuid n'est pas correct"),
  }),
  body: updateZoneSchema,
});
