import { getAllWarehouseRepository } from "../../repositories/warehouses/getWarehouse.repository";
import type { PaginationInput } from "../../validators/commons/getAllPaginationQuery.validator";

export async function getAllWarehouseService(data: PaginationInput) {
  const { warehouses, totalWarehouse } = await getAllWarehouseRepository(data);

  const totalPages = Math.ceil(totalWarehouse / data.page);

  return {
    warehouses,
    pagination: {
      page: data.page,
      limit: data.limit,
      totalPages: totalPages,
      totalWarehouses: totalWarehouse,
    },
  };
}
