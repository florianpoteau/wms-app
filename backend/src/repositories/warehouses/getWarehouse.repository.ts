import { prisma } from "../../lib/prisma";
import type { PaginationInput } from "../../validators/commons/getAllPaginationQuery.validator";
import type { warehouseInput } from "../../validators/warehouses/warehouse.validator";

export const getAllWarehouseRepository = async (data: PaginationInput) => {
  const [warehouses, totalWarehouse] = await prisma.$transaction([
    prisma.warehouse.findMany({
      take: data.limit,
      skip: (data.page - 1) * data.limit,
      select: {
        id: true,
        name: true,
        address: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.warehouse.count(),
  ]);
  return {
    warehouses,
    totalWarehouse,
  };
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
