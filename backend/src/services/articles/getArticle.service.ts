import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findArticleId } from "../../repositories/articles/findArticleId.repository";
import { getArticleByIdRepository } from "../../repositories/articles/getArticle.repository";

export async function getArticleByid(id: string) {
  const articleId = await findArticleId(id);
  if (!articleId) {
    throw new AppError(ERROR.ARTICLE_NOT_FOUND);
  }
  return await getArticleByIdRepository(id);
}
