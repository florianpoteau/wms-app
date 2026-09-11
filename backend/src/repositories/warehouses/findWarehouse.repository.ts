import { prisma } from "../../lib/prisma";

export const findWarehouseIdRepository = async (warehouseId: string) => {
  return prisma.warehouse.findUnique({
    where: {
      id: warehouseId,
    },
  });
};
