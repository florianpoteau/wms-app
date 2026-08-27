import { Router } from "express";
import { createArticleController } from "../controllers/articles/createArticle.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  productSchema,
  updateProductSchema,
} from "../validators/articles/article.validator";
import { authMiddleware } from "../middlewares/validateJwt.middleware";
import { getAllArticleController } from "../controllers/articles/getAllArticle.controller";
import { getArticleByIdController } from "../controllers/articles/getArticle.controller";
import { idSchema } from "../validators/commons/id.validator";
import { deleteArticleController } from "../controllers/articles/deleteArticle.controller";
import { updateArticleController } from "../controllers/articles/updateArticle.controller";
import { permit } from "../middlewares/permit.middleware";
import { Roles } from "../../generated/prisma/enums";
import { supplierSchema } from "../validators/suppliers/supplier.validator";
import { createSupplierController } from "../controllers/suppliers/createSupplier.controller";

const router = Router();

// articles
router.post(
  "/articles",
  authMiddleware,
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(productSchema),
  createArticleController,
);
router.get("/articles", authMiddleware, getAllArticleController);
router.get(
  "/articles/:id",
  authMiddleware,
  validate(idSchema, "params"),
  getArticleByIdController,
);
router.patch(
  "/articles/:id",
  authMiddleware,
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(idSchema, "params"),
  validate(updateProductSchema),
  updateArticleController,
);
router.delete(
  "/articles/:id",
  authMiddleware,
  permit(Roles.MANAGER, Roles.ADMIN),
  deleteArticleController,
);

// Fournisseurs
router.post(
  "/suppliers",
  authMiddleware,
  permit(Roles.MANAGER, Roles.ADMIN),
  validate(supplierSchema, "body"),
  createSupplierController,
);
export default router;
