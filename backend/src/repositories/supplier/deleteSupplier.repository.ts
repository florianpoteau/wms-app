import { prisma } from "../../lib/prisma";

export const deleteSupplierRepository = async (supplierId: string) => {
  await prisma.supplier.update({
    where: {
      id: supplierId,
    },
    data: {
      active: false,
    },
  });
};
