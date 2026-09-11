import type { Request, Response } from "express";
import { getAllWarehouseService } from "../../services/warehouses/getAllWarehouse.service";
import { getWarehouseByIdService } from "../../services/warehouses/getWarehouseById.service";

export default class WarehouseController {
  static getAllWarehouseController = async (req: Request, res: Response) => {
    const data = res.locals.validated.query;
    const warehouses = await getAllWarehouseService(data);
    return res.status(200).json(warehouses);
  };

  static getWarehouseByIdController = async (req: Request, res: Response) => {
    const data = res.locals.validated.params;
    const warehouse = await getWarehouseByIdService(data.id);
    return res.status(200).json(warehouse);
  };
}
