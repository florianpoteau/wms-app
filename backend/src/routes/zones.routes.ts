import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { getAllPaginationSchema } from "../validators/commons/getAllPaginationQuery.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import { ZoneController } from "../controllers/zones/zone.controller";

const router = Router();

router.get(
  "/zones",
  permit(Roles.ADMIN, Roles.MANAGER),
  ZoneController.getAllZoneController,
);

export default router;
