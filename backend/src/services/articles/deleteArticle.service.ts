import { deleteArticle } from "../../repositories/articles/deleteArticle.repository";
import { findArticleId } from "../../repositories/articles/findArticleId.repository";

export async function deleteArticleService(articleId: string) {
  const article = await findArticleId(articleId);
  if (!article) {
    throw new Error("ARTICLE_NOT_FOUND");
  }
  await deleteArticle(articleId);
}
