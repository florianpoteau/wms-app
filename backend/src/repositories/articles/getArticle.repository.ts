import { prisma } from "../../lib/prisma";

export const getAllArticleRepository = async (
  actualPage: number,
  active?: boolean,
) => {
  if (active === true || active === false) {
    return prisma.product.findMany({
      take: 5,
      skip: (actualPage - 1) * 5,
      where: {
        active: active,
      },
      orderBy: {
        name: "asc",
      },
    });
  } else {
    return prisma.product.findMany({
      take: 5,
      skip: (actualPage - 1) * 5,
      orderBy: {
        name: "asc",
      },
    });
  }
};

export const getArticleByIdRepository = async (articleId: string) => {
  return prisma.product.findUnique({
    where: {
      id: articleId,
    },
  });
};
