import { prisma } from "../../lib/prisma";

import type { GetAllStockInput } from "../../validators/stocks/stock.validator";

export const getAllStockRepository = async (data: GetAllStockInput) => {
  const { article, location, lowStock } = data;

  const where = {
    ...(article
      ? {
          product: {
            reference: {
              contains: article,
              mode: "insensitive" as const,
            },
          },
        }
      : {}),

    ...(location
      ? {
          location: {
            code: {
              startsWith: location,
              mode: "insensitive" as const,
            },
          },
        }
      : {}),

    ...(lowStock
      ? {
          quantity: {
            lte: 20,
          },
        }
      : {}),
  };

  const [stocks, totalStocks] = await prisma.$transaction([
    prisma.stock.findMany({
      where,
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
    }),

    prisma.stock.count({
      where,
    }),
  ]);

  return {
    stocks,
    totalStocks,
  };
};
