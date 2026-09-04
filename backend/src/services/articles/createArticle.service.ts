import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { createArticle } from "../../repositories/articles/createArticle.repository";
import {
  findArticleByBarcode,
  findArticleByReference,
} from "../../repositories/articles/findArticle.repository";
import type { ProductInput } from "../../validators/articles/article.validator";

export async function createArticleService(data: ProductInput) {
  const existingReference = await findArticleByReference(data.reference);
  if (existingReference) {
    throw new AppError(ERROR.REFERENCE_ALREADY_EXISTS);
  }
  if (data.barcode) {
    const existingbarcode = await findArticleByBarcode(data.barcode);
    if (existingbarcode) {
      throw new AppError(ERROR.BARCODE_ALREADY_EXISTS);
    }
  }
  const article = await createArticle(data);
  return {
    article,
  };
}
