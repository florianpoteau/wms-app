import { prisma } from "../../lib/prisma";

export const getAllArticleRepository = async () => {
  return prisma.product.findMany();
};
