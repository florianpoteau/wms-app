import type { ProductCreateInput } from "../../../generated/prisma/models/Product";
import { prisma } from "../../lib/prisma";

export const createArticle = async (data: ProductCreateInput) => {
  return prisma.product.create({
    data,
  });
};
