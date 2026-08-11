import { prisma } from "../../lib/prisma";
export const findUserInfo = async (userId: string) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email: true,
      name: true,
      firstname: true,
      role: true,
    },
  });
};
