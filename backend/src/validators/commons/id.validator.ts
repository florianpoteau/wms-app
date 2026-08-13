import z from "zod";

export const idSchema = z.object({
  id: z.uuid("le uuid n'est pas correct"),
});

export type idSchema = z.infer<typeof idSchema>;
