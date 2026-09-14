import { prisma } from "../../lib/prisma";

export const findLocationByCodeRepository = async (code: string) => {
  return prisma.location.findUnique({
    where: {
      code: code,
    },
  });
};
