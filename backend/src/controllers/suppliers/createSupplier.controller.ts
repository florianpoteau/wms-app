import type { Request, Response } from "express";
import { createSupplierService } from "../../services/supplier/createSupplier.service";

export const createSupplierController = async (req: Request, res: Response) => {
  await createSupplierService(req.body);
  return res.status(201).send();
};
