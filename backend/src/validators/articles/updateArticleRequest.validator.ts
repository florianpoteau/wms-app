import { z } from "zod";
import { updateProductSchema } from "./article.validator";

export const updateArticleRequestSchema = z.object({
  params: z.object({
    id: z.uuid("le uuid n'est pas correct"),
  }),
  body: updateProductSchema,
});
