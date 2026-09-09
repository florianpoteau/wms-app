import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import {
  findSupplierByEmailRepository,
  findSupplierByPhoneRepository,
  findSupplierIdRepository,
} from "../../repositories/supplier/findSupplierRepository";
import { updateSupplierRepository } from "../../repositories/supplier/updateSupplierRepository";
import type {
  SupplierInput,
  UpdateSupplierInput,
} from "../../validators/suppliers/supplier.validator";

export async function updateSupplierService(
  supplierId: string,
  data: SupplierInput,
) {
  const existingSupplierId = await findSupplierIdRepository(supplierId);
  if (!existingSupplierId) {
    throw new AppError(ERROR.SUPPLIER_NOT_FOUND);
  }

  if (data.email !== undefined) {
    const existingSupplierEmail = await findSupplierByEmailRepository(
      data.email,
    );
    if (existingSupplierEmail && existingSupplierEmail.id !== supplierId) {
      throw new AppError(ERROR.EMAIL_ALREADY_EXISTS);
    }
  }
  if (data.phone !== undefined) {
    const existingSupplierPhone = await findSupplierByPhoneRepository(
      data.phone,
    );

    if (existingSupplierPhone && existingSupplierPhone.id !== supplierId) {
      throw new AppError(ERROR.PHONE_ALREADY_EXISTS);
    }
  }

  return await updateSupplierRepository(
    supplierId,
    data as UpdateSupplierInput,
  );
}
