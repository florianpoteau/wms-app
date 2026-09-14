import { prisma } from "../../lib/prisma";

export const getAllStockRepository = async () => {
  return prisma.stock.findMany({
    select: {
      id: true,
      quantity: true,
      location: {
        select: {
          code: true,
        },
      },
      product: {
        select: {
          reference: true,
        },
      },
    },
  });
};
