import { prisma } from "../../lib/prisma";
import type { PaginationInput } from "../../validators/commons/getAllPaginationQuery.validator";

export const getAllSupplierRepository = async (data: PaginationInput) => {
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
    include: {
      productSuppliers: {
        omit: {
          productId: true,
          supplierId: true,
        },
        include: {
          product: true,
        },
      },
    },
  });
};
