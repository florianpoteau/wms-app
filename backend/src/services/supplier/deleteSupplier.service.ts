import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { deleteSupplierRepository } from "../../repositories/supplier/deleteSupplier.repository";
import { findSupplierIdRepository } from "../../repositories/supplier/findSupplierRepository";

export async function deleteSupplierService(supplierId: string) {
  const supplier = await findSupplierIdRepository(supplierId);

  if (!supplier) {
    throw new AppError(ERROR.SUPPLIER_NOT_FOUND);
  }

  await deleteSupplierRepository(supplierId);
}
