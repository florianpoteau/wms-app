import type { Request, Response } from "express";
import { getAllWarehouseService } from "../../services/warehouses/getAllWarehouse.service";

export default class WarehouseController {
  static getAllWarehouseController = async (req: Request, res: Response) => {
    const data = res.locals.validated.query;
    const warehouses = await getAllWarehouseService(data);
    return res.status(200).json(warehouses);
  };
}
