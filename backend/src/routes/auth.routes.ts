import { Router } from "express";
import { meController } from "../controllers/auth/me.controller";

import { logoutController } from "../controllers/auth/logout.controller";
import AuthController from "../controllers/auth/auth.controller";

const router = Router();

router.get("/me", AuthController.meController);
router.post("/logout", AuthController.logoutController);

export default router;
