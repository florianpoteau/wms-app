import { getAllStockRepository } from "../../repositories/stocks/getStock.repository";

export async function getAllStockService() {
  return getAllStockRepository();
}
