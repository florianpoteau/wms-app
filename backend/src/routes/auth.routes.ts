import { Router } from "express";
import AuthController from "../controllers/auth/auth.controller";

const router = Router();

router.get("/me", AuthController.meController);
router.post("/logout", AuthController.logoutController);

export default router;
