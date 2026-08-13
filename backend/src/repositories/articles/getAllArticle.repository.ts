import { prisma } from "../../lib/prisma";

export const getAllArticleRepository = async () => {
  return prisma.product.findMany();
};

export const getAllActiveArticleRepository = async () => {
  return prisma.product.findMany({
    where: {
      active: true,
    },
  });
};

export const getAllInactiveArticleRepository = async () => {
  return prisma.product.findMany({
    where: {
      active: false,
    },
  });
};
