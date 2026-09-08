import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { getAllSupplierRepository } from "../../repositories/supplier/getSupplier.repository";
import type { AllSupplierInput } from "../../validators/suppliers/getAllSuppliers.validator";

export async function getAllSupplierService(data: AllSupplierInput) {
  const { suppliers, totalSupplier } = await getAllSupplierRepository(data);

  const totalPages = Math.ceil(totalSupplier / data.limit);
  if (!suppliers) {
    throw new AppError(ERROR.SUPPLIER_NOT_FOUND);
  }
  return {
    suppliers,
    pagination: {
      page: data.page,
      limit: data.limit,
      totalPages,
      totalSupplier,
    },
  };
}
