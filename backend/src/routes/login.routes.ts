import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { userloginSchema } from "../validators/auth/login.validator";
import { loginController } from "../controllers/auth/login.controller";

const router = Router();

router.post("/login", validate(userloginSchema), loginController);

export default router;
