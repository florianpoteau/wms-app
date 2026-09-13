import { getAllWarehouseRepository } from "../../repositories/warehouses/getWarehouse.repository";

export async function getAllWarehouseService() {
  const warehouses = await getAllWarehouseRepository();

  return {
    warehouses,
  };
}
