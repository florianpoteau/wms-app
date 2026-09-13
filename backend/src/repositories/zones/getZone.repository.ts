import { prisma } from "../../lib/prisma";

export const getAllZoneRepository = async () => {
  return await prisma.zone.findMany({
    select: {
      id: true,
      name: true,
      code: true,
      warehouseId: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};

export const getZoneByIdRepository = async (zoneId: string) => {
  return await prisma.zone.findUnique({
    where: {
      id: zoneId,
    },
    include: {
      locations: true,
    },
  });
};
