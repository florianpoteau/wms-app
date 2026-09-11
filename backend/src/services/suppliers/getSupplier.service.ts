import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findSupplierIdRepository } from "../../repositories/supplier/findSupplierRepository";

import { getSupplierByIdRepository } from "../../repositories/supplier/getSupplier.repository";

export async function getSupplierByIdService(id: string) {
  const supplierId = await findSupplierIdRepository(id);
  if (!supplierId) {
    throw new AppError(ERROR.SUPPLIER_NOT_FOUND);
  }
  return await getSupplierByIdRepository(id);
}
