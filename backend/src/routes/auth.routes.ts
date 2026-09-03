import { Router } from "express";
import { meController } from "../controllers/auth/me.controller";

import { logoutController } from "../controllers/auth/logout.controller";

const router = Router();

router.get("/me", meController);
router.post("/logout", logoutController);

export default router;
