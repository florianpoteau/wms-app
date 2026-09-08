import type { ProductInput } from "../../validators/articles/article.validator";
import { prisma } from "../../lib/prisma";

export const createArticle = async (data: ProductInput) => {
  const { productSupplier, ...productData } = data;
  return prisma.product.create({
    data: {
      ...productData,
      productSuppliers: {
        createMany: {
          data: productSupplier.map((supplierId) => {
            return {
              supplierId,
            };
          }),
        },
      },
    },
  });
};
