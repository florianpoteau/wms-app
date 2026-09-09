import { id } from "zod/v4/locales";
import { prisma } from "../../lib/prisma";
import type { AllSupplierInput } from "../../validators/suppliers/getAllSuppliers.validator";
import type { SupplierInput } from "../../validators/suppliers/supplier.validator";

export const getAllSupplierRepository = async (data: AllSupplierInput) => {
  const [suppliers, totalSupplier] = await prisma.$transaction([
    prisma.supplier.findMany({
      take: data.limit,
      skip: (data.page - 1) * data.limit,
      select: {
        id: true,
        name: true,
        city: true,
        country: true,
        postalCode: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.supplier.count(),
  ]);

  return { suppliers, totalSupplier };
};

export const getSupplierByIdRepository = async (supplierId: string) => {
  return await prisma.supplier.findUnique({
    where: {
      id: supplierId,
    },
  });
};
