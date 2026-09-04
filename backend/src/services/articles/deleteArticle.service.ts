import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { deleteArticle } from "../../repositories/articles/deleteArticle.repository";
import { findArticleId } from "../../repositories/articles/findArticleId.repository";

export async function deleteArticleService(articleId: string) {
  const article = await findArticleId(articleId);
  if (!article) {
    throw new AppError(ERROR.ARTICLE_NOT_FOUND);
  }
  await deleteArticle(articleId);
}
