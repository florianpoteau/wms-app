import { Router } from "express";
import { permit } from "../middlewares/permit.middleware";
import { validate } from "../middlewares/validate.middleware";
import { Roles } from "../../generated/prisma/enums";
import { supplierSchema } from "../validators/suppliers/supplier.validator";
import { createSupplierController } from "../controllers/suppliers/createSupplier.controller";

const router = Router();
router.post(
  "/suppliers",
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(supplierSchema, "body"),
  createSupplierController,
);

export default router;
