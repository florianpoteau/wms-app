import type { Request, Response } from "express";
import { getAllStockService } from "../../services/stocks/getAllStock.service";

export default class StockController {
  static getAllStockController = async (req: Request, res: Response) => {
    const stocks = await getAllStockService();
    return res.status(200).json(stocks);
  };
}
