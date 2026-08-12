import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { validate } from "../middlewares/validate.middleware";
import { userloginSchema } from "../validators/auth/login.validator";
import { meController } from "../controllers/auth/me.controller";
import { authMiddleware } from "../middlewares/validateJwt.middleware";
import { logoutController } from "../controllers/auth/logout.controller";

const router = Router();

router.post("/login", validate(userloginSchema), loginController);
router.get("/me", authMiddleware, meController);
router.post("/logout", authMiddleware, logoutController);

export default router;
