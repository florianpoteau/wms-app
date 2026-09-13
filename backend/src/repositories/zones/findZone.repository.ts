import { prisma } from "../../lib/prisma";

export const findZoneIdRepository = async (zoneId: string) => {
  return prisma.zone.findUnique({
    where: {
      id: zoneId,
    },
  });
};
