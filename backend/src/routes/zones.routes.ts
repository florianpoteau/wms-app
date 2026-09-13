import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import { ZoneController } from "../controllers/zones/zone.controller";
import { idSchema } from "../validators/commons/id.validator";
import { zoneSchema } from "../validators/zones/zone.validator";
import { updateZoneRequestSchema } from "../validators/zones/updateZone.validator";

const router = Router();

router.get(
  "/zones",
  permit(Roles.ADMIN, Roles.MANAGER),
  ZoneController.getAllZoneController,
);

router.get(
  "/zones/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(idSchema),
  ZoneController.getZoneByIdController,
);

router.post(
  "/zones",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(zoneSchema),
  ZoneController.createZoneController,
);

router.patch(
  "/zones/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(updateZoneRequestSchema),
  ZoneController.updateZoneController,
);

export default router;
