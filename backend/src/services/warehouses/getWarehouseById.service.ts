import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findWarehouseIdRepository } from "../../repositories/warehouses/findWarehouse.repository";
import { getWarehouseByIdRepository } from "../../repositories/warehouses/getWarehouse.repository";

export async function getWarehouseByIdService(id: string) {
  const warehouseId = await findWarehouseIdRepository(id);

  if (!warehouseId) {
    throw new AppError(ERROR.WAREHOUSE_NOT_FOUND);
  }

  return await getWarehouseByIdRepository(id);
}
