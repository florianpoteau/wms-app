import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { validate } from "../middlewares/validate.middleware";
import { userloginSchema } from "../validators/auth/login.validator";

const router = Router();

router.post("/auth/login", validate(userloginSchema), loginController);

export default router;
