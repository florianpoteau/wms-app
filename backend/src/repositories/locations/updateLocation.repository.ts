import { prisma } from "../../lib/prisma";
import type { UpdateLocationInput } from "../../validators/locations/location.validator";

export const updateLocationRepository = async (
  locationId: string,
  data: UpdateLocationInput,
) => {
  return prisma.location.update({
    where: {
      id: locationId,
    },
    data: {
      name: data.name,
      code: data.code,
      capacity: data.capacity,
      zone: {
        connect: {
          id: data.zoneId,
        },
      },
    },
  });
};
