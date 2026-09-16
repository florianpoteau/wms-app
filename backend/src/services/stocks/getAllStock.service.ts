import { getAllStockRepository } from "../../repositories/stocks/getStock.repository";
import type { GetAllStockInput } from "../../validators/stocks/stock.validator";

export async function getAllStockService(data: GetAllStockInput) {
  return getAllStockRepository(data);
}
