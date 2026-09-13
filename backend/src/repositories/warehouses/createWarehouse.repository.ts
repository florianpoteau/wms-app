import { prisma } from "../../lib/prisma";
import type { warehouseInput } from "../../validators/warehouses/warehouse.validator";

export const createWarehouseRepository = async (data: warehouseInput) => {
  return prisma.warehouse.create({
    data: {
      name: data.name,
      address: data.address,
    },
  });
};
