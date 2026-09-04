import { createArticle } from "../../repositories/articles/createArticle.repository";
import {
  findArticleByBarcode,
  findArticleByReference,
} from "../../repositories/articles/findArticle.repository";
import type { ProductInput } from "../../validators/articles/article.validator";

export async function createArticleService(data: ProductInput) {
  const existingReference = await findArticleByReference(data.reference);
  if (existingReference) {
    throw new Error("REFERENCE_ALREADY_EXISTS");
  }
  if (data.barcode) {
    const existingbarcode = await findArticleByBarcode(data.barcode);
    if (existingbarcode) {
      throw new Error("BARCODE_ALREADY_EXISTS");
    }
  }
  const article = await createArticle(data);
  return {
    article,
  };
}
