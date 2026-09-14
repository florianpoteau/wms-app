import { Router } from "express";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import { validate } from "../middlewares/validate.middleware";
import { idSchema } from "../validators/commons/id.validator";
import LocationController from "../controllers/locations/location.controller";
import { locationSchema } from "../validators/locations/location.validator";
import { updateLocationRequestSchema } from "../validators/locations/updateLocation.validator";

const router = Router();

router.get(
  "/locations",
  permit(Roles.ADMIN, Roles.MANAGER),
  LocationController.getAllLocationController,
);

router.get(
  "/locations/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(idSchema),
  LocationController.getLocationByIdController,
);

router.post(
  "/locations",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(locationSchema),
  LocationController.createLocationController,
);

router.patch(
  "/locations/:id",
  permit(Roles.ADMIN, Roles.MANAGER),
  validate(updateLocationRequestSchema),
  LocationController.updateLocationController,
);

export default router;
