import { prisma } from "../../lib/prisma";

export const findSupplierByPhoneRepository = async (phone: string) => {
  return prisma.supplier.findUnique({
    where: { phone },
  });
};

export const findSupplierByEmailRepository = async (email: string) => {
  return prisma.supplier.findUnique({
    where: { email },
  });
};

export const findSupplierIdRepository = async (supplierId: string) => {
  return prisma.supplier.findUnique({
    where: {
      id: supplierId,
    },
  });
};
