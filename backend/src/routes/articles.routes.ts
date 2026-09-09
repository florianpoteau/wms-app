import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { productSchema } from "../validators/articles/article.validator";
import { getAllArticleSchema } from "../validators/articles/getAllArticle.validator";
import { idSchema } from "../validators/commons/id.validator";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import ArticleController from "../controllers/articles/articles.controller";
import { updateArticleRequestSchema } from "../validators/articles/updateArticleRequest.validator";

const router = Router();

router.post(
  "/articles",
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(productSchema),
  ArticleController.createArticleController,
);
router.get(
  "/articles",
  validate(getAllArticleSchema),
  ArticleController.getAllArticleController,
);
router.get(
  "/articles/:id",
  validate(idSchema),
  ArticleController.getArticleByIdController,
);
router.patch(
  "/articles/:id",
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(updateArticleRequestSchema),
  ArticleController.updateArticleController,
);
router.delete(
  "/articles/:id",
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(idSchema),
  ArticleController.deleteArticleController,
);
export default router;
