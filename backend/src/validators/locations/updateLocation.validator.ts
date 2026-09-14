import z from "zod";
import { updateLocationSchema } from "./location.validator";

export const updateLocationRequestSchema = z.object({
  params: z.object({
    id: z.uuid("le uuid n'est pas correct"),
  }),
  body: updateLocationSchema,
});
