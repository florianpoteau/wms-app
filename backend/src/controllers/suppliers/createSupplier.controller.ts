import type { Request, Response } from "express";
import { createSupplierService } from "../../services/supplier/createSupplier.service";

export const createSupplierController = async (req: Request, res: Response) => {
  try {
    await createSupplierService(req.body);
    return res.status(201).json({
      message: "Le fournisseur a été créé avec succès",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};
