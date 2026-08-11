import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { validate } from "../middlewares/validate.middleware";
import { userloginSchema } from "../validators/auth/login.validator";
import { meController } from "../controllers/auth/me.controller";
import { authMiddleware } from "../middlewares/validateJwt.middleware";

const router = Router();

router.post("/auth/login", validate(userloginSchema), loginController);
router.get("/auth/me", authMiddleware, meController);

export default router;
