import { createWarehouseRepository } from "../../repositories/warehouses/createWarehouse.repository";
import type { warehouseInput } from "../../validators/warehouses/warehouse.validator";

export async function createWarehouseService(data: warehouseInput) {
  const warehouse = await createWarehouseRepository(data);
  return {
    warehouse,
  };
}
