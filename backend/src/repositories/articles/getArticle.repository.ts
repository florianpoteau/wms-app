import { prisma } from "../../lib/prisma";
import type { AllProductInput } from "../../validators/articles/getAllArticle.validator";

export const getAllArticleRepository = async (data: AllProductInput) => {
  if (data.active === true || data.active === false) {
    const [products, totalProducts] = await prisma.$transaction([
      prisma.product.findMany({
        take: data.limit,
        skip: (data.page - 1) * data.limit,
        where: {
          active: data.active,
          ...(data.search
            ? {
                OR: [
                  {
                    name: {
                      contains: data.search,
                    },
                  },
                  {
                    reference: {
                      contains: data.search,
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
          active: data.active,
        },
      }),
    ]);
    return { products, totalProducts };
  } else {
    console.log(typeof data.limit);
    const [products, totalProducts] = await prisma.$transaction([
      prisma.product.findMany({
        take: data.limit,
        skip: (data.page - 1) * data.limit,
        where: {
          ...(data.search
            ? {
                OR: [
                  {
                    name: {
                      contains: data.search,
                    },
                  },
                  {
                    reference: {
                      contains: data.search,
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
