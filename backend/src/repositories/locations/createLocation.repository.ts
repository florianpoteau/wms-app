import { prisma } from "../../lib/prisma";
import type { LocationInput } from "../../validators/locations/location.validator";

export const createLocationRepository = async (data: LocationInput) => {
  return prisma.location.create({
    data: {
      name: data.name,
      code: data.code,
      capacity: data.capacity,
      zoneId: data.zoneId,
    },
  });
};
