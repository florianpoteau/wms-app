import { prisma } from "../../lib/prisma";

export const deleteArticle = async (articleId: string) => {
  return prisma.product.update({
    where: {
      id: articleId,
    },
    data: {
      active: false,
      deletedAt: new Date(),
    },
  });
};
