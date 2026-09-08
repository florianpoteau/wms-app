import { prisma } from "../../lib/prisma";
import type { UpdateProductInput } from "../../validators/articles/article.validator";

export const updateArticle = async (
  articleId: string,
  data: UpdateProductInput,
) => {
  const { productSupplier, ...productdata } = data;

  return prisma.product.update({
    where: {
      id: articleId,
    },
    data: {
      ...productdata,
      ...(productSupplier !== undefined && {
        productSuppliers: {
          createMany: {
            data: productSupplier.map((supplierId) => ({
              supplierId,
            })),
            skipDuplicates: true,
          },
        },
      }),
    },
  });
};
