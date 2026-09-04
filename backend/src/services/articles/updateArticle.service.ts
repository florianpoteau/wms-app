import type { ProductUpdateInput } from "../../../generated/prisma/models";
import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import {
  findArticleByBarcode,
  findArticleByReference,
} from "../../repositories/articles/findArticle.repository";
import { findArticleId } from "../../repositories/articles/findArticleId.repository";
import { updateArticle } from "../../repositories/articles/updateArticle.repository";
import type { UpdateProductInput } from "../../validators/articles/article.validator";

export async function updateArticleService(
  id: string,
  data: UpdateProductInput,
) {
  const articleId = await findArticleId(id);
  if (!articleId) {
    throw new AppError(ERROR.ARTICLE_NOT_FOUND);
  }

  if (data.reference !== undefined) {
    const existingReference = await findArticleByReference(data.reference);

    if (existingReference && existingReference.id !== id) {
      throw new AppError(ERROR.REFERENCE_ALREADY_EXISTS);
    }
  }

  if (data.barcode !== undefined && data.barcode !== null) {
    const existingbarcode = await findArticleByBarcode(data.barcode);

    if (existingbarcode && existingbarcode.id !== id) {
      throw new AppError(ERROR.BARCODE_ALREADY_EXISTS);
    }
  }

  return await updateArticle(id, data as ProductUpdateInput);
}
