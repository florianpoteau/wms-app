import { prisma } from "../../lib/prisma";

export const deleteArticle = async (articleId: string) => {
  return prisma.product.delete({
    where: {
      id: articleId,
    },
  });
};
