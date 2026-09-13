import { prisma } from "../../lib/prisma";
import type { UpdateZoneInput } from "../../validators/zones/zone.validator";

export const updateZoneRepository = async (
  zoneId: string,
  data: UpdateZoneInput,
) => {
  return prisma.zone.update({
    where: {
      id: zoneId,
    },
    data: {
      name: data.name,
      code: data.code,
    },
  });
};
