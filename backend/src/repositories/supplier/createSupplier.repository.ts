import { prisma } from "../../lib/prisma";
import type { SupplierInput } from "../../validators/suppliers/supplier.validator";

export const createSupplierRepository = async (data: SupplierInput) => {
  const { productSuppliers, ...supplierData } = data;

  return prisma.supplier.create({
    data: {
      ...supplierData,
      productSuppliers: {
        createMany: {
          data: productSuppliers.map((productId) => {
            return { productId };
          }),
        },
      },
    },
  });
};
