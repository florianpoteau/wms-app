import type { Request, Response } from "express";
import { createSupplierService } from "../../services/suppliers/createSupplier.service";
import { getAllSupplierService } from "../../services/suppliers/getAllSupplier.service";
import { getSupplierByIdService } from "../../services/suppliers/getSupplier.service";
import { updateSupplierService } from "../../services/suppliers/updateSupplier.service";
import { deleteSupplierService } from "../../services/suppliers/deleteSupplier.service";

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

  static getSupplierByIdController = async (req: Request, res: Response) => {
    const data = res.locals.validated.params;
    const supplier = await getSupplierByIdService(data.id);
    return res.status(200).json(supplier);
  };

  static updateSupplierByIdController = async (req: Request, res: Response) => {
    const data = res.locals.validated;

    await updateSupplierService(data.params.id, data.body);
    return res.status(200).send();
  };

  static deleteSupplierController = async (req: Request, res: Response) => {
    const data = res.locals.validated.params;
    await deleteSupplierService(data.id);
    return res.status(200).send();
  };
}
