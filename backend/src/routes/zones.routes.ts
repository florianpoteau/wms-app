import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import { ZoneController } from "../controllers/zones/zone.controller";
import { idSchema } from "../validators/commons/id.validator";

const router = Router();

router.get(
  "/zones",
  permit(Roles.ADMIN, Roles.MANAGER),
  ZoneController.getAllZoneController,
);

router.get(
  "/zones/:id",
  validate(idSchema),
  permit(Roles.ADMIN, Roles.MANAGER),
  ZoneController.getZoneByIdController,
);

export default router;
