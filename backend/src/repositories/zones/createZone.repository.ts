import { prisma } from "../../lib/prisma";
import type { ZoneInput } from "../../validators/zones/zone.validator";

export const createZoneRepository = async (data: ZoneInput) => {
  return prisma.zone.create({
    data: {
      name: data.name,
      code: data.code,
      warehouse: {
        connect: {
          id: data.warehouseId,
        },
      },
    },
  });
};
