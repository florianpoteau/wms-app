import { prisma } from "../../lib/prisma";

export const getAllWarehouseRepository = async () => {
  return prisma.warehouse.findMany({
    select: {
      id: true,
      name: true,
      address: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};
export const getWarehouseByIdRepository = async (warehouseId: string) => {
  return prisma.warehouse.findUnique({
    where: {
      id: warehouseId,
    },
    include: {
      zones: {
        include: {
          locations: true,
        },
      },
    },
  });
};
