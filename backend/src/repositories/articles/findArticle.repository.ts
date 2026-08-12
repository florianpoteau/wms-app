import { prisma } from "../../lib/prisma";

export const findArticleByReference = async (reference: string) => {
  return prisma.product.findUnique({
    where: {
      reference,
    },
  });
};

export const findArticleByBarcode = async (barcode: string) => {
  return prisma.product.findUnique({
    where: {
      barcode,
    },
  });
};
