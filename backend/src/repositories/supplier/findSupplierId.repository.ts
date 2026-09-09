import { prisma } from "../../lib/prisma";

export const findSupplierIdRepository = async (supplierId: string) => {
  return prisma.supplier.findUnique({
    where: {
      id: supplierId,
    },
  });
};
