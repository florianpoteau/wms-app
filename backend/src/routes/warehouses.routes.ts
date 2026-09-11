import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import WarehouseController from "../controllers/warehouses/warehouses.controller";
import { idSchema } from "../validators/commons/id.validator";

const router = Router();

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
