import { prisma } from "../../lib/prisma";

export const findLocationByCodeRepository = async (
  code: string | undefined,
) => {
  return prisma.location.findUnique({
    where: {
      code: code,
    },
  });
};

export const findLocationByIdRepository = async (id: string) => {
  return prisma.location.findUnique({
    where: {
      id: id,
    },
  });
};
