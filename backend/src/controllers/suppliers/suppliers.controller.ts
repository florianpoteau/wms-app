import type { Request, Response } from "express";
import { createSupplierService } from "../../services/supplier/createSupplier.service";
import { getAllSupplierService } from "../../services/supplier/getAllSupplier.service";

export default class SupplierController {
  static getAllSupplierController = async (req: Request, res: Response) => {
    const data = res.locals.validated.query;
    const suppliers = await getAllSupplierService(data);
    return res.status(200).json(suppliers);
  };

  static createSupplierController = async (req: Request, res: Response) => {
    const data = res.locals.validated.body;
    await createSupplierService(data);
    return res.status(201).send();
  };
}
