import { prisma } from "../../lib/prisma";
import type { PaginationInput } from "../../validators/commons/getAllPaginationQuery.validator";

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
