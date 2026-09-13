import { prisma } from "../../lib/prisma";
import type { PaginationInput } from "../../validators/commons/getAllPaginationQuery.validator";

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
