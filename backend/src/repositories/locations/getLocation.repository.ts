import { prisma } from "../../lib/prisma";

export const getAllLocationRepository = async () => {
  return prisma.location.findMany({
    select: {
      id: true,
      name: true,
      code: true,
      capacity: true,
      active: true,
      zone: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};
