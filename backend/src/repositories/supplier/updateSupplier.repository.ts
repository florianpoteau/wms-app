import { prisma } from "../../lib/prisma";
import type { UpdateSupplierInput } from "../../validators/suppliers/supplier.validator";

export const updateSupplierRepository = async (
  supplierId: string,
  data: UpdateSupplierInput,
) => {
  const { productSuppliers, ...supplierData } = data;

  return prisma.supplier.update({
    where: {
      id: supplierId,
    },
    data: {
      ...supplierData,
      ...(productSuppliers !== undefined && {
        productSuppliers: {
          createMany: {
            data: productSuppliers?.map((productId) => {
              return {
                productId,
              };
            }),
            skipDuplicates: true,
          },
        },
      }),
    },
  });
};
