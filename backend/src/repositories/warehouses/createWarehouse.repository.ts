import { prisma } from "../../lib/prisma";
import type { warehouseInput } from "../../validators/warehouses/warehouse.validator";

export const createWarehouseRepository = async (data: warehouseInput) => {
  const { zones, ...warehouseData } = data;

  return prisma.warehouse.create({
    data: {
      ...warehouseData,
      zones: {
        connect: zones.map((zoneId: string) => ({
          id: zoneId,
        })),
      },
    },
  });
};
