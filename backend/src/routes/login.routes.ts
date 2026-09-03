import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { userloginSchema } from "../validators/auth/login.validator";
import AuthController from "../controllers/auth/auth.controller";

const router = Router();

router.post(
  "/login",
  validate(userloginSchema),
  AuthController.loginController,
);

export default router;
