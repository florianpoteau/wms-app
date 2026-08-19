import { deleteArticle } from "../../repositories/articles/deleteArticle.repository";
import { getArticleByIdRepository } from "../../repositories/articles/getArticle.repository";

export async function deleteArticleService(articleId: string) {
  const article = await getArticleByIdRepository(articleId);
  if (!article) {
    throw new Error("ARTICLE_NOT_FOUND");
  }
  await deleteArticle(articleId);
}
