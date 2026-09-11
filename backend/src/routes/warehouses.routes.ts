import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import WarehouseController from "../controllers/warehouses/warehouses.controller";
import { idSchema } from "../validators/commons/id.validator";
import { warehouseSchema } from "../validators/warehouses/warehouse.validator";

const router = Router();

router.post(
  "/warehouses",
  permit(Roles.ADMIN),
  validate(warehouseSchema),
  WarehouseController.createWarehouseController,
);
router.get(
  "/warehouses",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(getAllPaginationSchema),
  WarehouseController.getAllWarehouseController,
);

router.get(
  "/warehouses/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(idSchema),
  WarehouseController.getWarehouseByIdController,
);

export default router;
