import { prisma } from "../../lib/prisma";
import type { SupplierInput } from "../../validators/suppliers/supplier.validator";

export const createSupplierRepository = async (data: SupplierInput) => {
  return prisma.supplier.create({
    data,
  });
};
