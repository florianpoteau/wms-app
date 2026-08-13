import { Router } from "express";
import { createArticleController } from "../controllers/articles/createArticle.controller";
import { validate } from "../middlewares/validate.middleware";
import { productSchema } from "../validators/articles/article.validator";
import { authMiddleware } from "../middlewares/validateJwt.middleware";
import { getAllArticleController } from "../controllers/articles/getAllArticle.controller";

const router = Router();
router.post(
  "/articles",
  authMiddleware,
  validate(productSchema),
  createArticleController,
);
router.get("/articles", authMiddleware, getAllArticleController);
export default router;
