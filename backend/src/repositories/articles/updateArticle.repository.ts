import { prisma } from "../../lib/prisma";
import type { ProductUpdateInput } from "../../../generated/prisma/models/Product";

export const updateArticle = async (
  articleId: string,
  data: ProductUpdateInput,
) => {
  return prisma.product.update({
    where: {
      id: articleId,
    },
    data,
  });
};
