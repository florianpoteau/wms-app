import type { Request, Response } from "express";
import { getAllStockService } from "../../services/stocks/getAllStock.service";

export default class StockController {
  static getAllStockController = async (req: Request, res: Response) => {
    const data = res.locals.validated;

    const stocks = await getAllStockService(data.query);
    return res.status(200).json(stocks);
  };
}
