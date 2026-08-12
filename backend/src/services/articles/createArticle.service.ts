import { createArticle } from "../../repositories/articles/createArticle.repository";
import {
  findArticleByBarcode,
  findArticleByReference,
} from "../../repositories/articles/findArticle.repository";
import type { ProductInput } from "../../validators/articles/article.validator";

export async function createArticleService(data: ProductInput) {
  const existingReference = await findArticleByReference(data.reference);
  if (existingReference) {
    throw new Error("Il y a déja une référence sur cette article");
  }
  if (data.barcode) {
    const existingbarcode = await findArticleByBarcode(data.barcode);
    if (existingbarcode) {
      throw new Error("Il y a déja un barcode sur cette article");
    }
  }
  const article = await createArticle(data);
  return {
    article,
  };
}
