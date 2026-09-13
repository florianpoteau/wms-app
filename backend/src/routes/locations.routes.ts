import { Router } from "express";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import LocationController from "../controllers/locations/Location.controller";

const router = Router();

router.get(
  "/locations",
  permit(Roles.ADMIN, Roles.MANAGER),
  LocationController.getAllLocationController,
);

export default router;
