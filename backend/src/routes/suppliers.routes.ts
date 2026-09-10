import { Router } from "express";
import { permit } from "../middlewares/permit.middleware";
import { validate } from "../middlewares/validate.middleware";
import { Roles } from "../../generated/prisma/enums";
import { supplierSchema } from "../validators/suppliers/supplier.validator";
import SupplierController from "../controllers/suppliers/suppliers.controller";
import { idSchema } from "../validators/commons/id.validator";
import { updateSupplierRequestSchema } from "../validators/suppliers/updateSupplier.validator";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";

const router = Router();
router.post(
  "/suppliers",
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(supplierSchema),
  SupplierController.createSupplierController,
);
router.get(
  "/suppliers",
  validate(getAllPaginationSchema),
  SupplierController.getAllSupplierController,
);
router.get(
  "/suppliers/:id",
  validate(idSchema),
  SupplierController.getSupplierByIdController,
);
router.patch(
  "/suppliers/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(updateSupplierRequestSchema),
  SupplierController.updateSupplierByIdController,
);
router.delete(
  "/suppliers/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(idSchema),
  SupplierController.deleteSupplierController,
);

export default router;
