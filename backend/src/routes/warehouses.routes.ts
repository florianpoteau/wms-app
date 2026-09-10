import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import WarehouseController from "../controllers/warehouses/warehouses.controller";

const router = Router();

router.get(
  "/warehouses",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(getAllPaginationSchema),
  WarehouseController.getAllWarehouseController,
);

export default router;
