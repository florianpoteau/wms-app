import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { createSupplierRepository } from "../../repositories/supplier/createSupplierRepository";
import {
  findSupplierByEmailRepository,
  findSupplierByPhoneRepository,
} from "../../repositories/supplier/findSupplierRepository";
import type { SupplierInput } from "../../validators/suppliers/supplier.validator";

export async function createSupplierService(data: SupplierInput) {
  const existingEmail = await findSupplierByEmailRepository(data.email);
  const existingPhone = await findSupplierByPhoneRepository(data.phone);

  if (existingEmail) {
    throw new AppError(ERROR.EMAIL_ALREADY_EXISTS);
  }
  if (existingPhone) {
    throw new AppError(ERROR.PHONE_ALREADY_EXISTS);
  }

  const supplier = await createSupplierRepository(data);
  return {
    supplier,
  };
}
