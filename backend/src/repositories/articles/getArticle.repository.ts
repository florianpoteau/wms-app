import { prisma } from "../../lib/prisma";

export const getAllArticleRepository = async (
  actualPage: number,
  limite: number,
  active?: boolean,
  search?: string,
) => {
  if (active === true || active === false) {
    const [products, totalProducts] = await prisma.$transaction([
      prisma.product.findMany({
        take: limite,
        skip: (actualPage - 1) * limite,
        where: {
          active: active,
          ...(search
            ? {
                OR: [
                  {
                    name: {
                      contains: search,
                    },
                  },
                  {
                    reference: {
                      contains: search,
                    },
                  },
                ],
              }
            : {}),
        },
        orderBy: {
          name: "asc",
        },
      }),
      prisma.product.count({
        where: {
          active: active,
        },
      }),
    ]);
    return { products, totalProducts };
  } else {
    const [products, totalProducts] = await prisma.$transaction([
      prisma.product.findMany({
        take: limite,
        skip: (actualPage - 1) * limite,
        where: {
          ...(search
            ? {
                OR: [
                  {
                    name: {
                      contains: search,
                    },
                  },
                  {
                    reference: {
                      contains: search,
                    },
                  },
                ],
              }
            : {}),
        },
        orderBy: {
          name: "asc",
        },
      }),
      prisma.product.count(),
    ]);
    return { products, totalProducts };
  }
};

export const getArticleByIdRepository = async (articleId: string) => {
  return prisma.product.findUnique({
    where: {
      id: articleId,
    },
  });
};
