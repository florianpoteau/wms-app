import { prisma } from "../../lib/prisma";

export const findArticleId = async (articleId: string) => {
  return prisma.product.findUnique({
    where: {
      id: articleId,
    },
    select: {
      id: true,
    },
  });
};
