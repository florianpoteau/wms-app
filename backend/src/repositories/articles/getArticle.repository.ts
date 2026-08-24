import { prisma } from "../../lib/prisma";

export const getAllArticleRepository = async (
  actualPage: number,
  limite: number,
  active?: boolean,
) => {
  if (active === true || active === false) {
    return prisma.product.findMany({
      take: limite,
      skip: (actualPage - 1) * limite,
      where: {
        active: active,
      },
      orderBy: {
        name: "asc",
      },
    });
  } else {
    return prisma.product.findMany({
      take: limite,
      skip: (actualPage - 1) * limite,
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
