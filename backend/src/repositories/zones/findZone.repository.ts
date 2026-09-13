import { prisma } from "../../lib/prisma";

export const findZoneIdRepository = async (zoneId: string) => {
  return prisma.zone.findUnique({
    where: {
      id: zoneId,
    },
  });
};

export const findZoneCodeRepository = async (code: string) => {
  return prisma.zone.findUnique({
    where: {
      code: code,
    },
  });
};
