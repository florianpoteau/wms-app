import { Router } from "express";
import { permit } from "../middlewares/permit.middleware";
import { validate } from "../middlewares/validate.middleware";
import { Roles } from "../../generated/prisma/enums";
import { supplierSchema } from "../validators/suppliers/supplier.validator";
import SupplierController from "../controllers/suppliers/suppliers.controller";
import { getAllSupplierSchema } from "../validators/suppliers/getAllSuppliers.validator";

const router = Router();
router.post(
  "/suppliers",
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(supplierSchema),
  SupplierController.createSupplierController,
);
router.get(
  "/suppliers",
  validate(getAllSupplierSchema),
  SupplierController.getAllSupplierController,
);

export default router;
