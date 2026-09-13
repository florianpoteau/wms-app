import { prisma } from "../../lib/prisma";
import type { updateWarehouseInput } from "../../validators/warehouses/warehouse.validator";

export const updateWarehouseRepository = async (
  warehouseId: string,
  data: updateWarehouseInput,
) => {
  const { zones, ...zoneData } = data;

  return prisma.warehouse.update({
    where: {
      id: warehouseId,
    },
    data: {
      ...zoneData,
      zones: {
        connect: zones?.map((zoneId: string) => ({
          id: zoneId,
        })),
      },
    },
  });
};
