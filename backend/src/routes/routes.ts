import { Router } from "express";
import { createArticleController } from "../controllers/articles/createArticle.controller";
import { validate } from "../middlewares/validate.middleware";
import { productSchema } from "../validators/articles/article.validator";
import { authMiddleware } from "../middlewares/validateJwt.middleware";
import { getAllArticleController } from "../controllers/articles/getAllArticle.controller";
import { getArticleByIdController } from "../controllers/articles/getArticle.controller";
import { idSchema } from "../validators/commons/id.validator";

const router = Router();
router.post(
  "/articles",
  authMiddleware,
  validate(productSchema),
  createArticleController,
);
router.get("/articles", authMiddleware, getAllArticleController);
router.get(
  "/articles/:id",
  authMiddleware,
  validate(idSchema),
  getArticleByIdController,
);
export default router;
