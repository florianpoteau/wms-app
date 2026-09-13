import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findWarehouseIdRepository } from "../../repositories/warehouses/findWarehouse.repository";
import { updateWarehouseRepository } from "../../repositories/warehouses/updateWarehouse.repository";
import type { updateWarehouseInput } from "../../validators/warehouses/warehouse.validator";

export async function updateWarehouseService(
  id: string,
  data: updateWarehouseInput,
) {
  const warehouseId = await findWarehouseIdRepository(id);
  if (!warehouseId) {
    throw new AppError(ERROR.WAREHOUSE_NOT_FOUND);
  }

  return await updateWarehouseRepository(id, data);
}
